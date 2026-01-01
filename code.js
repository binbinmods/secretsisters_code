import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const express = require('express');
const http = require('http');
const https = require('https');
const sio = require('socket.io');
const { createLogger, format, transports } = require('winston');
var bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();

// Determine if running locally (without Cloudflare) or in production
let IS_LOCAL = process.env.NODE_ENV === 'local' || process.env.USE_HTTP === 'true' || !process.env.KEY_CLOUDFLARE;

var medsSQL_connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_SITE_USERNAME,
    password: process.env.MYSQL_SITE_PASSWORD,
    database: process.env.MYSQL_SITE_DATABASE
});

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON read/write
function JSONread(path) {
    try {
        return JSON.parse(fs.readFileSync(__dirname + '/' + path, { encoding: 'utf8', flag: 'r' }));
    } catch (err) {
        logger_code.error("ERROR: " + err);
        return false;
    };
};

function JSONwrite(path, towrite) {
    try {
        fs.writeFileSync(path, JSON.stringify(towrite));
    } catch (err) {
        logger_code.error("ERROR: " + err);
        return false;
    };
};

// setup logger
const loggerTransports = [
    new transports.Console({})
];

// Add file transports only if log paths are configured
if (process.env.LOG_CODE_ERROR) {
    // Ensure log directory exists
    const logDir = path.dirname(process.env.LOG_CODE_ERROR);
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    loggerTransports.push(new transports.File({ filename: process.env.LOG_CODE_ERROR, level: 'error' }));
}

if (process.env.LOG_CODE_ALL) {
    // Ensure log directory exists
    const logDir = path.dirname(process.env.LOG_CODE_ALL);
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    loggerTransports.push(new transports.File({ filename: process.env.LOG_CODE_ALL }));
}

const logger_code = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple(),
        format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    defaultMeta: { service: 'code' },
    transports: loggerTransports
});

// request handling
const port_code = process.env.SITE_CODE_PORT || 3000;
const site_code = express();

site_code.use(express.static(__dirname + '/public'));
site_code.use(bodyParser.urlencoded({ extended: false }));

site_code.get('/AtO', (req, res) => {
    res.sendFile(__dirname + '/public/AtO.html')
});

site_code.get('/AtO_How_To', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_How_To.html')
});
site_code.get('/AtO_HowTo', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_How_To.html')
});

site_code.get('/AtO_Rambling', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Rambling.html')
});

site_code.get('/AtO_Custom', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom.html')
});
site_code.get('/AtOCustom', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom.html')
});

site_code.get('/AtOCustomNode', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom_Node.html')
});
site_code.get('/AtO_Custom_Node', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom_Node.html')
});

site_code.get('/AtO_Seeds', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds.html')
});

site_code.get('/AtOSeeds', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds.html')
});

site_code.get('/AtO_Seeds_beta', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds_beta.html')
});

site_code.get('/AtO_Profile', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Profile.html')
});

site_code.get('/AtOProfile', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Profile.html')
});


site_code.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

site_code.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// SSL options only needed for HTTPS/production
let ssgServerOptions = null;
if (!IS_LOCAL) {
    try {
        ssgServerOptions = {
            key: fs.readFileSync(process.env.KEY_CLOUDFLARE),
            cert: fs.readFileSync(process.env.CERT_SSG),
            requestCert: false,
            rejectUnauthorized: false
        };
    } catch (err) {
        logger_code.error('Failed to load SSL certificates, falling back to HTTP mode');
        IS_LOCAL = true;
    }
}

// Check if running on Vercel (serverless) or locally
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;

// Create HTTP or HTTPS server based on environment (only if not on Vercel)
let server_code;
let io_code = null;

if (!isVercel) {
    if (IS_LOCAL) {
        server_code = http.createServer(site_code);
        logger_code.info('Running in LOCAL mode (HTTP)');
    } else {
        server_code = https.createServer(ssgServerOptions, site_code);
        logger_code.info('Running in PRODUCTION mode (HTTPS)');
    }
    // Socket.io only works with persistent connections (not on Vercel)
    io_code = new sio.Server(server_code, {});
} else {
    logger_code.info('Running on Vercel - Socket.io disabled (WebSockets not supported)');
}

// Attempt database connection (non-blocking for local development)
if (process.env.MYSQL_PORT && process.env.MYSQL_SITE_USERNAME) {
    try {
        medsSQL_connection.connect(function (err) {
            if (err) {
                logger_code.warn('Database connection error (server will continue without database):', err.message);
            } else {
                logger_code.info('Database connected successfully');
                // update_yarrlist();
            }
        });
    } catch (err) {
        logger_code.warn('Database connection setup error (server will continue without database):', err.message);
    }
} else {
    logger_code.info('Database credentials not configured - running without database');
}

// Helper function to get client IP address
function getClientIP(socket) {
    // Try Cloudflare header first (production)
    if (socket.request.headers['cf-connecting-ip']) {
        return socket.request.headers['cf-connecting-ip'];
    }
    // Try x-forwarded-for header (common proxy header)
    if (socket.request.headers['x-forwarded-for']) {
        return socket.request.headers['x-forwarded-for'].split(',')[0].trim();
    }
    // Fall back to socket IP address
    return socket.request.connection?.remoteAddress || socket.handshake?.address || 'unknown';
}

// Socket.io connection handler (only if not on Vercel)
if (io_code) {
    io_code.on('connection', (socket) => {
        const clientIP = getClientIP(socket);
        logger_code.info(clientIP + ' has loaded meds!code!');
        /*socket.on('server status', async (game) => {
            game = game.toLowerCase();
            if (data_code_serverz.hasOwnProperty(game)) {
                var servstat = await serverStatus(game);
                if (servstat) {
                    logger_code.info(getClientIP(socket) + ' checked ' + game + ' server: ONLINE');
                    socket.emit('server status', game, data_code_serverz[game].playerCount);
                } else {
                    logger_code.info(getClientIP(socket) + ' checked ' + game + ' server: OFFLINE');
                    socket.emit('server status', game, 7777);
                };
            };
        });
        socket.on('request catalogue', async () => {
            if (yarrlist_lastupdate < ((new Date().getTime()) - 30000)) { await update_yarrlist() };
            socket.emit('request catalogue', yarrlist);
        }); */
    });
}


// Export Express app for Vercel (always export, Vercel will use it if needed)
// Note: Socket.io won't work on Vercel as it requires WebSocket support
export default site_code;

// Only start the server if running locally (not on Vercel)
if (!isVercel && server_code) {
    server_code.listen(port_code, () => {
        const protocol = IS_LOCAL ? 'http' : 'https';
        logger_code.info(`meds!code running on ${protocol}://localhost:${port_code}`);
    });
} else if (isVercel) {
    logger_code.info('Running on Vercel (serverless mode) - server not started');
}
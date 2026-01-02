/*
 *    88        88  88888888888  88           88           ,ad8888ba,    
 *    88        88  88           88           88          d8"'    `"8b   
 *    88        88  88           88           88         d8'        `8b  
 *    88aaaaaaaa88  88aaaaa      88           88         88          88  
 *    88""""""""88  88"""""      88           88         88          88  
 *    88        88  88           88           88         Y8,        ,8P  
 *    88        88  88           88           88          Y8a.    .a8P   
 *    88        88  88888888888  88888888888  88888888888  `"Y8888Y"'    
 *    
 *    Feel free to use any code you find here. 
 *    I am a terrible commenter (sorry), so please feel free to ping @stiffmeds in the AtO Discord if you have questions.
 *    PLEASE DON'T JUDGE MY HORRIFIC ASYNC/AWAITS
 */

// var socket = io(); // this will be used when I inevitably get tired of using the data in multiple different places and change to a sql database :D
const delay = ms => new Promise(res => setTimeout(res, ms));
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const bsSideCardShow = new bootstrap.Collapse("#svg_card_side", { toggle: false });
const bsSideCardList = new bootstrap.Collapse("#menu_card_list", { toggle: false });
const defaultCard = {
    "Aura": "",
    "Aura2": "",
    "Aura3": "",
    "AuraCharges": 0,
    "AuraCharges2": 0,
    "AuraCharges3": 0,
    "AuraSelf": "",
    "AuraSelf2": "",
    "AuraSelf3": "",
    "AutoplayDraw": false,
    "CardUpgraded": "No",
    "BaseCard": "",
    "UpgradedFrom": "",
    "UpgradesTo1": "",
    "UpgradesTo2": "",
    "UpgradesToRare": "",
    "CardClass": "Warrior",
    "CardName": "",
    "CardRarity": "Common",
    "CardType": "None",
    "CardTypeAux": [],
    "Curse": "",
    "Curse2": "",
    "Curse3": "",
    "CurseCharges": 0,
    "CurseCharges2": 0,
    "CurseCharges3": 0,
    "CurseSelf": "",
    "CurseSelf2": "",
    "CurseSelf3": "",
    "Damage": 0,
    "DamageSelf": 0,
    "DamageSides": 0,
    "DamageType": "None",
    "Damage2": 0,
    "DamageSelf2": 0,
    "DamageSides2": 0,
    "DamageType2": "None",
    "DamageEnergyBonus": 0,
    "DiscardCard": 0,
    "DiscardCardAutomatic": false,
    "DiscardCardPlace": "Discard",
    "DiscardCardType": "None",
    "DiscardCardTypeAux": [],
    "DispelAuras": 0,
    "DrawCard": 0,
    "EffectCastCenter": false,
    "EffectCaster": "",
    "EffectCasterRepeat": false,
    "EffectPreAction": "",
    "EffectTarget": "",
    "EffectTrail": "",
    "EffectTrailAngle": "Horizontal",
    "AcEnergyBonus": "",
    "AcEnergyBonusQuantity": 0,
    "AcEnergyBonus2": "",
    "AcEnergyBonus2Quantity": 0,
    "EffectRepeat": 1,
    "EffectRepeatTarget": "NeverRepeat",
    "EffectRepeatMaxBonus": 0,
    "EffectRepeatModificator": 0,
    "EffectTrailRepeat": false,
    "EnergyCost": 0,
    "EnergyRecharge": 0,
    "Heal": 0,
    "HealAuraCurseName": "",
    "HealAuraCurseName2": "",
    "HealAuraCurseName3": "",
    "HealAuraCurseName4": "",
    "HealAuraCurseSelf": "",
    "HealCurses": 0,
    "HealEnergyBonus": 0,
    "HealSelf": 0,
    "HealSides": 0,
    "ID": "",
    "IgnoreBlock": false,
    "IgnoreBlock2": false,
    "IncreaseAuras": 0,
    "IncreaseCurses": 0,
    "ReduceAuras": 0,
    "ReduceCurses": 0,
    "Innate": false,
    "LookCards": 0,
    "LookCardsDiscardUpTo": 0,
    "LookCardsVanishUpTo": 0,
    "SelfHealthLoss": 0,
    "Sound": "",
    "SoundPreAction": "",
    "SoundPreActionFemale": "",
    "Sprite": "",
    "StealAuras": 0,
    "TransferCurses": 0,
    "TargetPosition": "Anywhere",
    "TargetSide": "Anyone",
    "TargetType": "Single",
    "Vanish": true,
    "GoldGainQuantity": 0,
    "ShardsGainQuantity": 0,
    "HealSelfPerDamageDonePercent": 0,
    "EffectRequired": "",
    "AddCard": 0,
    "AddCardChoose": 0,
    "AddCardCostTurn": false,
    "AddCardFrom": "Deck",
    "AddCardId": "",
    "AddCardList": [],
    "AddCardPlace": "Discard",
    "AddCardReducedCost": 0,
    "AddCardType": "None",
    "AddCardTypeAux": [],
    "AddCardVanish": false,
    "RelatedCard": "",
    "RelatedCard2": "",
    "RelatedCard3": "",
    "AuraChargesSpecialValue1": false,
    "AuraChargesSpecialValue2": false,
    "AuraChargesSpecialValueGlobal": false,
    "AuraCharges2SpecialValue1": false,
    "AuraCharges2SpecialValue2": false,
    "AuraCharges2SpecialValueGlobal": false,
    "AuraCharges3SpecialValue1": false,
    "AuraCharges3SpecialValue2": false,
    "AuraCharges3SpecialValueGlobal": false,
    "CurseChargesSpecialValue1": false,
    "CurseChargesSpecialValue2": false,
    "CurseChargesSpecialValueGlobal": false,
    "CurseCharges2SpecialValue1": false,
    "CurseCharges2SpecialValue2": false,
    "CurseCharges2SpecialValueGlobal": false,
    "CurseCharges3SpecialValue1": false,
    "CurseCharges3SpecialValue2": false,
    "CurseCharges3SpecialValueGlobal": false,
    "DamageSpecialValue1": false,
    "DamageSpecialValue2": false,
    "DamageSpecialValueGlobal": false,
    "Damage2SpecialValue1": false,
    "Damage2SpecialValue2": false,
    "Damage2SpecialValueGlobal": false,
    "HealSelfSpecialValue1": false,
    "HealSelfSpecialValue2": false,
    "HealSelfSpecialValueGlobal": false,
    "HealSpecialValue1": false,
    "HealSpecialValue2": false,
    "HealSpecialValueGlobal": false,
    "SelfHealthLossSpecialGlobal": false,
    "SelfHealthLossSpecialValue1": false,
    "SelfHealthLossSpecialValue2": false,
    "DrawCardSpecialValueGlobal": false,
    "EnergyRechargeSpecialValueGlobal": false,
    "SpecialAuraCurseName1": "",
    "SpecialAuraCurseName2": "",
    "SpecialAuraCurseNameGlobal": "",
    "SpecialValue1": "None",
    "SpecialValue2": "None",
    "SpecialValueGlobal": "None",
    "SpecialValueModifier1": 0,
    "SpecialValueModifier2": 0,
    "SpecialValueModifierGlobal": 0,
    "SummonAura": "",
    "SummonAura2": "",
    "SummonAura3": "",
    "SummonAuraCharges": 0,
    "SummonAuraCharges2": 0,
    "SummonAuraCharges3": 0,
    "SummonUnit": "",
    "SummonUnitNum": 0,
    "EffectPostCastDelay": 0.4,
    "EffectPostTargetDelay": 0.2,
    "EffectRepeatDelay": 0,
    "EffectTrailSpeed": 1,
    "IsPetAttack": false,
    "IsPetCast": false,
    "Item": "",
    "ItemEnchantment": "",
    "Lazy": false,
    "ModifiedByTrait": false,
    "MoveToCenter": false,
    "PetFront": true,
    "PetInvert": true,
    "PetModel": "",
    "PetOffset": "(0.00, 0.00)",
    "PetSize": "(1.00, 1.00)",
    "Playable": true,
    "PullTarget": 0,
    "PushTarget": 0,
    "SelfKillHiddenSeconds": 0,
    "ShowInTome": true,
    "Starter": false,
    "Visible": false,
    "AutoplayEndTurn": false,
    "CardNumber": 0,
    "CardTypeList": [],
    "Corrupted": false,
    "Description": "",
    "DescriptionID": "",
    "EffectRepeatEnergyBonus": 0,
    "EndTurn": false,
    "EnergyCostForShow": 0,
    "EnergyReductionPermanent": 0,
    "EnergyReductionTemporal": 0,
    "EnergyReductionToZeroPermanent": false,
    "EnergyReductionToZeroTemporal": false,
    "ExhaustCounter": 0,
    "FlipSprite": false,
    "Fluff": "",
    "FluffPercent": 0,
    "KillPet": false,
    "MaxInDeck": 0,
    "OnlyInWeekly": false,
    "Sku": ""
};
const defaultItem = {
    "ACG1MultiplyByEnergyUsed": false,
    "ACG2MultiplyByEnergyUsed": false,
    "ACG3MultiplyByEnergyUsed": false,
    "Activation": "Damaged",
    "ActivationOnlyOnHeroes": false,
    "AuraCurseBonus1": "",
    "AuraCurseBonus2": "",
    "AuraCurseBonusValue1": 0,
    "AuraCurseBonusValue2": 0,
    "AuraCurseCustomAC": "",
    "AuraCurseCustomModValue1": 0,
    "AuraCurseCustomModValue2": 0,
    "AuraCurseCustomString": "",
    "AuraCurseGain1": "",
    "AuraCurseGain2": "",
    "AuraCurseGain3": "",
    "AuraCurseGainSelf1": "",
    "AuraCurseGainSelf2": "",
    "AuraCurseGainSelfValue1": 0,
    "AuraCurseGainSelfValue2": 0,
    "AuraCurseGainValue1": 0,
    "AuraCurseGainValue2": 0,
    "AuraCurseGainValue3": 0,
    "AuraCurseImmune1": "",
    "AuraCurseImmune2": "",
    "AuraCurseNumForOneEvent": 0,
    "AuraCurseSetted": "",
    "CardNum": 0,
    "CardPlace": "Hand",
    "CardToGain": "",
    "CardToGainList": [],
    "CardToGainType": "None",
    "CardToReduceType": "None",
    "CardsReduced": 0,
    "CastEnchantmentOnFinishSelfCast": false,
    "CastedCardType": "None",
    "ChanceToDispel": 0,
    "ChanceToDispelNum": 0,
    "CharacterStatModified": "None",
    "CharacterStatModified2": "None",
    "CharacterStatModified3": "None",
    "CharacterStatModifiedValue": 0,
    "CharacterStatModifiedValue2": 0,
    "CharacterStatModifiedValue3": 0,
    "CostReduceEnergyRequirement": 0,
    "CostReducePermanent": false,
    "CostReduceReduction": 0,
    "CostReduction": 0,
    "CostZero": false,
    "CursedItem": false,
    "DTTMultiplyByEnergyUsed": false,
    "DamageFlatBonus": "None",
    "DamageFlatBonus2": "None",
    "DamageFlatBonus3": "None",
    "DamageFlatBonusValue": 0,
    "DamageFlatBonusValue2": 0,
    "DamageFlatBonusValue3": 0,
    "DamagePercentBonus": "None",
    "DamagePercentBonus2": "None",
    "DamagePercentBonus3": "None",
    "DamagePercentBonusValue": 0,
    "DamagePercentBonusValue2": 0,
    "DamagePercentBonusValue3": 0,
    "DamageToTarget": 0,
    "DamageToTargetType": "None",
    "DestroyAfterUse": false,
    "DestroyAfterUses": 0,
    "DestroyEndOfTurn": false,
    "DestroyStartOfTurn": false,
    "DrawCards": 0,
    "DrawMultiplyByEnergyUsed": false,
    "DropOnly": false,
    "DuplicateActive": false,
    "EffectCaster": "",
    "EffectCasterDelay": 0,
    "EffectItemOwner": "",
    "EffectTarget": "",
    "EffectTargetDelay": 0,
    "EmptyHand": false,
    "EnergyQuantity": 0,
    "ExactRound": 0,
    "HealFlatBonus": 0,
    "HealPercentBonus": 0,
    "HealPercentQuantity": 0,
    "HealPercentQuantitySelf": 0,
    "HealQuantity": 0,
    "HealReceivedFlatBonus": 0,
    "HealReceivedPercentBonus": 0,
    "ID": "",
    "IsEnchantment": false,
    "ItemSound": "",
    "ItemTarget": "CurrentTarget",
    "LowerOrEqualPercentHP": 100,
    "MaxHealth": 0,
    "ModifiedDamageType": "None",
    "NotShowCharacterBonus": false,
    "OnlyAddItemToNPCs": false,
    "PassSingleAndCharacterRolls": false,
    "PercentDiscountShop": 0,
    "PercentRetentionEndGame": 0,
    "Permanent": false,
    "QuestItem": false,
    "ReduceHighestCost": false,
    "ResistModified1": "None",
    "ResistModified2": "None",
    "ResistModified3": "None",
    "ResistModifiedValue1": 0,
    "ResistModifiedValue2": 0,
    "ResistModifiedValue3": 0,
    "RoundCycle": 0,
    "SpriteBossDrop": "",
    "TimesPerCombat": 0,
    "TimesPerTurn": 0,
    "UseTheNextInsteadWhenYouPlay": false,
    "UsedEnergy": false,
    "Vanish": false
};

// I think if I do my enums like this I can do language selection later? .: key is actual JSON-read value, value is lang-based?
const Enums = Object.freeze({
    Aura: {
        buffer: "Buffer",
        bless: "Bless",
        block: "Block",
        buffer: "Buffer",
        courage: "Courage",
        energize: "Energize",
        evasion: "Evasion",
        fast: "Fast",
        fortify: "Fortify",
        furnace: "Furnace",
        fury: "Fury",
        haste: "Haste",
        inspire: "Inspire",
        insulate: "Insulate",
        invulnerable: "Invulnerable",
        mitigate: "Mitigate",
        powerful: "Powerful",
        regeneration: "Regeneration",
        reinforce: "Reinforce",
        sharp: "Sharp",
        shield: "Shield",
        stanzai: "Stanza I",
        stanzaii: "Stanza II",
        stanzaiii: "Stanza III",
        stealth: "Stealth",
        taunt: "Taunt",
        thorns: "Thorns",
        vitality: "Vitality",
        zeal: "Zeal"
    },
    Curse: {
        bleed: "Bleed",
        burn: "Burn",
        chill: "Chill",
        crack: "Crack",
        dark: "Dark",
        daze: "Daze",
        decay: "Decay",
        disarm: "Disarm",
        doom: "Doom",
        fatigue: "Fatigue",
        freeze: "Freeze",
        insane: "Insane",
        mark: "Mark",
        poison: "Poison",
        sanctify: "Sanctify",
        scourge: "Scourge",
        shackle: "Shackle",
        sight: "Sight",
        silence: "Silence",
        slow: "Slow",
        spark: "Spark",
        stress: "Stress",
        vulnerable: "Vulnerable",
        weak: "Weak",
        wet: "Wet"
    },
    CardClass: {
        Warrior: "Warrior",
        Mage: "Mage",
        Healer: "Healer",
        Scout: "Scout",
        Boon: "Boon",
        Injury: "Injury",
        Special: "Special",
        //Enchantment: "Enchantment",
        Weapon: "Weapon",
        Armor: "Armor",
        Jewelry: "Jewelry",
        Accesory: "Accessory",
        Pet: "Pet",
        Monster: "Monster"/*
        /*Item: "Item",
        MagicKnight: "MagicKnight",
        None: "None"*/
    },
    CardRarity: {
        Common: "Common",
        Uncommon: "Uncommon",
        Rare: "Rare",
        Epic: "Epic",
        Mythic: "Mythic"
    },
    CardType: {
        // None: "None",
        Melee_Attack: "Melee Attack",
        Ranged_Attack: "Ranged Attack",
        // Magic_Attack: "Magic Attack",
        Defense: "Defense",
        Fire_Spell: "Fire Spell",
        Cold_Spell: "Cold Spell",
        Lightning_Spell: "Lightning Spell",
        Mind_Spell: "Mind Spell",
        Shadow_Spell: "Shadow Spell",
        Holy_Spell: "Holy Spell",
        Curse_Spell: "Curse Spell",
        Healing_Spell: "Healing Spell",
        Book: "Book",
        Small_Weapon: "Small Weapon",
        Song: "Song",
        Skill: "Skill",
        // Power: "Power",
        // Attack: "Attack",
        // Spell: "Spell",
        Boon: "Boon",
        Injury: "Injury",
        // Weapon: "Weapon",
        // Armor: "Armor",
        // Jewelry: "Jewelry",
        // Accesory: "Accessory",
        // Pet: "Pet",
        // Corruption: "Corruption",
        Enchantment: "Enchantment",
        Food: "Food"
    },
    CardTypeFull: {
        Melee_Attack: "Melee Attack",
        Ranged_Attack: "Ranged Attack",
        // Magic_Attack: "Magic Attack",
        Defense: "Defense",
        Fire_Spell: "Fire Spell",
        Cold_Spell: "Cold Spell",
        Lightning_Spell: "Lightning Spell",
        Mind_Spell: "Mind Spell",
        Shadow_Spell: "Shadow Spell",
        Holy_Spell: "Holy Spell",
        Curse_Spell: "Curse Spell",
        Healing_Spell: "Healing Spell",
        Book: "Book",
        Small_Weapon: "Small Weapon",
        Song: "Song",
        Skill: "Skill",
        // Power: "Power",
        Attack: "Attack",
        Spell: "Spell",
        Boon: "Boon",
        Injury: "Injury",
        // Weapon: "Weapon",
        // Armor: "Armor",
        // Jewelry: "Jewelry",
        // Accesory: "Accessory",
        // Pet: "Pet",
        // Corruption: "Corruption",
        Enchantment: "Enchantment",
        Food: "Food"
    },
    CardUpgraded: {
        No: "No",
        A: "A (blue)",
        B: "B (yellow)",
        Rare: "Corrupted"
    },
    CardTargetType: {
        Single: "Single",
        SingleSided: "Single Side",
        Global: "Global"
    },
    CardTargetSide: {
        Enemy: "Enemy",
        Friend: "Friend",
        Anyone: "Anyone",
        Self: "Self",
        FriendNotSelf: "Friend (not self)"
    },
    CardTargetPosition: {
        Anywhere: "Anywhere",
        Front: "Front",
        Random: "Random",
        Back: "Back",
        Middle: "Middle",
        Slowest: "Slowest",
        Fastest: "Fastest",
        LeastHP: "Least HP",
        MostHP: "Most HP"
    },
    CardPlace: {
        Discard: "Discard",
        TopDeck: "Top Deck",
        BottomDeck: "Bottom Deck",
        RandomDeck: "Random Deck",
        Vanish: "Vanish",
        Hand: "Hand",
        Cast: "Cast"
    },
    CardFrom: {
        Deck: "Deck",
        Discard: "Discard",
        Game: "Game",
        Hand: "Hand",
        Vanish: "Vanish"
    },
    CardSpecialValue: {
        None: "None",
        AuraCurseYours: "Aura Curse Yours",
        AuraCurseTarget: "Aura Curse Target",
        CardsHand: "Cards Hand",
        CardsDeck: "Cards Deck",
        CardsDiscard: "Cards Discard",
        HealthYours: "Health Yours",
        HealthTarget: "Health Target",
        CardsVanish: "Cards Vanish",
        CardsDeckTarget: "Cards Deck Target",
        CardsDiscardTarget: "Cards Discard Target",
        CardsVanishTarget: "Cards Vanish Target",
        SpeedYours: "Your Speed",
        SpeedTarget: "Target’s Speed",
        SpeedDifference: "Speed Difference",
        MissingHealthYours: "Your Missing Health",
        MissingHealthTarget: "Target’s Missing Health",
        DiscardedCards: "Cards Discarded By This",
        VanishedCards: "Cards Vanished By This"
    },
    DamageType: {
        None: "None",
        Slashing: "Slashing",
        Blunt: "Blunt",
        Piercing: "Piercing",
        Fire: "Fire",
        Cold: "Cold",
        Lightning: "Lightning",
        Mind: "Mind",
        Holy: "Holy",
        Shadow: "Shadow",
        All: "All"
    },
    DamageTypeLazy: {
        None: "None",
        Slashing: "Slashing",
        Blunt: "Blunt",
        Piercing: "Piercing",
        Fire: "Fire",
        Cold: "Cold",
        Lightning: "Lightning",
        Mind: "Mind",
        Holy: "Holy",
        Shadow: "Shadow"
    },
    EffectRepeatTarget: {
        Same: "Same", // same target & default
        Random: "Random", // different target
        Chain: "Chain", // 50% reduction
        NoRepeat: "No Repeat", // jump??
        NeverRepeat: "Never Repeat"
    },
    EffectTrailAngle: {
        Horizontal: "Horizontal",
        Parabolic: "Parabolic",
        Diagonal: "Diagonal",
        Vertical: "Vertical"
    },
    Sound: {
        airswosh: "airswosh (Mental Shake)",
        airswosh2: "airswosh2 (Snipe)",
        angel: "angel (Guardian Angel)",
        arrow1: "arrow1 (Quick Shot)",
        arrow2: "arrow2 (Aimed Shot)",
        ArrowFly2: "ArrowFly2 (Shrapnel Shot)",
        battle: "battle (Battle Shout)",
        battle2: "battle2 (Intimidate)",
        bleed: "bleed (Bleed)",
        bless: "bless (Sacred Ceremony)",
        block: "block (Overcoat)",
        blow: "blow (Pummel)",
        blunt: "blunt (Frozen Bash)",
        blunt2: "blunt2 (Shield Slam)",
        Blunt3: "Blunt3 (Skullsplitter)",
        Blunt4: "Blunt4 (Bludgeon)",
        bluntgore: "bluntgore (Heavy Strike)",
        Bravery: "Bravery (Ivory Tower)",
        bubble: "bubble (Antimagic Field)",
        buff: "buff (Greater Heal)",
        burn: "burn (Inner Fire)",
        caltrops: "caltrops (Palisade)",
        "Cut Flesh 1": "Cut Flesh 1 (Acrobatic Strike)",
        cyclone: "cyclone (Typhoon)",
        dagger: "dagger (Feather Barrage)",
        dagger2: "dagger2 (Feather Barrage)",
        dark: "dark (Demonic Tutor)",
        Dark2: "Dark2 (Unholy Storm)",
        Dark3: "Dark3 (Black Hole)",
        Dark4: "Dark4 (Grand Cross)",
        darkswosh: "darkswosh (Dark Outbreak)",
        dog_whistle: "dog_whistle (Dinner is Ready!)",
        double: "double (Gut Ripper)",
        double2: "double2 (Dual Strike)",
        DragonAttack: "DragonAttack (Frost Breath)",
        drainlife: "drainlife (Vampiric Touch)",
        drink: "drink (Dilute)",
        DrumRoll: "DrumRoll (Heavy Metal)",
        Earth: "Earth (Landslide)",
        Earthquake: "Earthquake (Earthwave)",
        energy: "energy (Innervate)",
        explode: "explode (Cannon Shot)",
        Fear1: "Fear1 (Death's Reach)",
        fireball: "fireball (Fireball)",
        fireball2: "fireball2 (Consecration)",
        FireballTorch: "FireballTorch (Firestorm)",
        fireburn: "fireburn (Emberstorm)",
        fireswosh3: "fireswosh3 (Missile Barrage)",
        firewosh: "firewosh (Combustion)",
        firewosh2: "firewosh2 (Impaling Root)",
        flyup: "flyup (Fly High)",
        giatroar: "giatroar (Moon Beam)",
        glitter: "glitter (Mana Shield)",
        gore: "gore (Blood Infection)",
        guitarriff1: "guitarriff1 (Powerslave)",
        gunshot: "gunshot (Bullet Shot)",
        harpbless: "harpbless (Healing Serenade)",
        heal: "heal (Barrier)",
        heal2: "heal2 (Binding Heal)",
        heal3: "heal3 (Circle of Healing)",
        "Heal 6": "Heal 6 (Curative Therapy)",
        "Heal 9": "Heal 9 (Anthem of Hope)",
        heart: "heart (Life Tap)",
        holy: "holy (Crescent Light)",
        holy2: "holy2 (Celestial Brilliance)",
        holy3: "holy3 (Crescent Light)",
        holy4: "holy4 (Holy Storm)",
        holy5: "holy5 (Penance)",
        holy6: "holy6 (Holy Nova)",
        holylow: "holylow (Holy Aegis)",
        holylow2: "holylow2 (Holy Blast)",
        ice1: "ice1 (Blizzard)",
        ice2: "ice2 (Cyclone Slash)",
        Ice3: "Ice3 (Flash Freeze)",
        Ice4: "Ice4 (Blizzard)",
        icespell: "icespell (Ice Lance)",
        icicle: "icicle (Ice Barrier)",
        invulnerable_sound: "invulnerable_sound (Invulnerable)",
        kiss: "kiss (Bewilder)",
        knifecut: "knifecut (Bloodsucker)",
        Laser: "Laser (Reactive Laser)",
        laugh: "laugh (Sarcastic Sonnet)",
        lava1: "lava1 (Ignite)",
        lava2: "lava2 (Inner Combustion)",
        lighningstrong: "lighningstrong (Electrocute)",
        light: "light (Dawnlight)",
        lightningcast: "lightningcast (Electroshock)",
        magicbad: "magicbad (Curse of Exhaustion)",
        Magicbell1: "Magicbell1 (Magic Devour)",
        Magicbell2: "Magicbell2 (Pandemonium)",
        Magicbell3: "Magicbell3 (Mesmeric Mirage)",
        Magicbellholy: "Magicbellholy (Celestial Toll)",
        magicbubbles: "magicbubbles (Protect from Evil)",
        magicdebuff: "magicdebuff (Broken Bone)",
        magicdispell: "magicdispell (Mass Dispel)",
        Magicshh2: "Magicshh2 (Pernicious Claw)",
        magicsweep: "magicsweep (Detoxify)",
        magicthin: "magicthin (Snatching Claw)",
        magicwater: "magicwater (Healing Rain)",
        metal: "metal (Palisade)",
        meteorite2: "meteorite2 (Meteorite)",
        mind1: "mind1 (Enervate)",
        mind2: "mind2 (Mind Twist)",
        owl_hoot_02: "owl_hoot_02 (Owl Screech)",
        parry: "parry (Deflect)",
        Pistol: "Pistol (Scattershot)",
        poison: "poison (Poison)",
        poison2: "poison2 (Virulent Reaction)",
        punch: "punch (Popcorn Burst)",
        punch2: "punch2 (Blazing Strike)",
        pyro: "pyro (Pyroblast)",
        pyro1: "pyro1 (Divine Ire)",
        pyro2: "pyro2 (Ice Comet)",
        rabid: "rabid (Furious Ylmer)",
        repair: "repair (Dwarf Fortress)",
        roar: "roar (Dragon Roar)",
        roar2: "roar2 (Overbearing Roar)",
        rocks: "rocks (Boulder Throw)",
        scream1: "scream1 (Psychic Scream)",
        scream2: "scream2 (Panic Scream)",
        seawave: "seawave (Geyser)",
        sharpen: "sharpen (Sharpening Cuts)",
        sheep_angry: "sheep_angry (Awful Tantrum)",
        sheep_bite: "sheep_bite (Killer Bite)",
        shieldgood: "shieldgood (Bulwark)",
        shock: "shock (Chain Lightning)",
        sight: "sight (Clairvoyance)",
        slashpoison: "slashpoison (Paralyzing Venom)",
        songbad: "songbad (Eternal Lullaby)",
        songfanfare: "songfanfare (Energizing Serenade)",
        songflute: "songflute (Ballad of Evasion)",
        songgood: "songgood (Ballad of Conquest)",
        songguitar: "songguitar (Song of Quickness)",
        songharp: "songharp (Vitalizing Serenade)",
        sparkle2: "sparkle2 (Fade)",
        sparkle3: "sparkle3 (Spark of Life)",
        Splash: "Splash (Water Jet)",
        sword1: "sword1 (Backstab)",
        sword2: "sword2 (Double Slash)",
        swordfast: "swordfast (Sharpening Cuts)",
        swosh: "swosh (Snipe)",
        swosh3: "swosh3 (Shield Throw)",
        thorns: "thorns (Rain of Thorns)",
        thorns2: "thorns2 (Flower Stream)",
        thorns3: "thorns3 (Thorneater)",
        thunder: "thunder (Crash Lightning)",
        thunder2: "thunder2 (Endless Storm)",
        tranquility: "tranquility (Tranquility)",
        ui_swoosh: "ui_swoosh (Barrage)",
        violin: "violin (Sonar)",
        violin2: "violin2 (Vexing Crescendo)",
        wardrum: "wardrum (Last Stand)",
        waterice: "waterice (Winter Is Coming)",
        waterspell: "waterspell (Water Jet)",
        wbite3: "wbite3 (Vicious Bite)",
        whistle: "whistle (Hurry Up)",
        wind: "wind (Camouflage)",
        Wind2: "Wind2 (Energize)",
        windmind: "windmind (Spectral Missiles)",
        wolf4: "wolf4 (Terrorizing Howl)",
        wroar1: "wroar1 (Wild Roar)",
        yawn: "yawn (Tedious Poem)",
        zap: "zap (Zap)"
    },
    SoundPreAction: {
        "airswosh": "airswosh (Mental Shake)",
        "airswosh2": "airswosh2 (Snipe)",
        "angel": "angel (Heavenly Blessing)",
        "arrow2": "arrow2 (Frost Volley)",
        "battle": "battle (Battle Shout)",
        "battle2": "battle2 (Intimidate)",
        "bless": "bless (Sacred Ceremony)",
        "blunt": "blunt (Steamroller)",
        "blunt2": "blunt2 (Shatter)",
        "bluntgore": "bluntgore (Invigorating Blow)",
        "buff": "buff (Expected Prophecy)",
        "burn": "burn (Cauterize)",
        "caltrops": "caltrops (Palisade)",
        "cyclone": "cyclone (Typhoon)",
        "dagger2": "dagger2 (Feather Barrage)",
        "dark": "dark (Demonic Tutor)",
        "Dark2": "Dark2 (Unholy Storm)",
        "Dark3": "Dark3 (Dreadful Wave)",
        "Dark4": "Dark4 (Grand Cross)",
        "darkswosh": "darkswosh (Dark Outbreak)",
        "double": "double (Gut Ripper)",
        "DragonAttack": "DragonAttack (Frost Breath)",
        "drink": "drink (Baptism)",
        "DrumRoll": "DrumRoll (Heavy Metal)",
        "Earth": "Earth (Landslide)",
        "explode": "explode (Fishplosion)",
        "fireball": "fireball (Fireball)",
        "FireballTorch": "FireballTorch (Firestorm)",
        "fireburn": "fireburn (Disintegrate)",
        "firewosh": "firewosh (Combustion)",
        "firewosh2": "firewosh2 (Impaling Root)",
        "flyup": "flyup (Fly High)",
        "giatroar": "giatroar (Moon Beam)",
        "glitter": "glitter (Mana Shield)",
        "gore": "gore (Knight's Pride)",
        "harpbless": "harpbless (Bewilder)",
        "heal": "heal (Barrier)",
        "heal2": "heal2 (Binding Heal)",
        "heal3": "heal3 (Chain Heal)",
        "Heal 6": "Heal 6 (Curative Therapy)",
        "Heal 9": "Heal 9 (Purging Ray)",
        "heart": "heart (Life Tap)",
        "holy": "holy (Holy Fire)",
        "holy2": "holy2 (Divine Insight)",
        "holy3": "holy3 (Crescent Light)",
        "holy5": "holy5 (Luminous Beam)",
        "holy6": "holy6 (Divine Ire)",
        "holylow": "holylow (Holy Aegis)",
        "holylow2": "holylow2 (Holy Blast)",
        "ice1": "ice1 (Blizzard)",
        "ice2": "ice2 (Cyclone Slash)",
        "Ice4": "Ice4 (Shatter)",
        "icespell": "icespell (Cold Snap)",
        "icicle": "icicle (Ice Barrier)",
        "knifecut": "knifecut (Bloodsucker)",
        "Laser": "Laser (Reactive Laser)",
        "lava1": "lava1 (Blood Infection)",
        "lava2": "lava2 (Living Flame)",
        "lighningstrong": "lighningstrong (Electrocute)",
        "light": "light (Celestial Brilliance)",
        "lightningcast": "lightningcast (Child of the Storm)",
        "magicbad": "magicbad (Dark Pact)",
        "Magicbell1": "Magicbell1 (Magic Devour)",
        "Magicbell2": "Magicbell2 (Pandemonium)",
        "Magicbell3": "Magicbell3 (Mesmeric Mirage)",
        "magicbubbles": "magicbubbles (Protect from Evil)",
        "magicdebuff": "magicdebuff (hanscorr)",
        "magicdispell": "magicdispell (Amplifying Field)",
        "Magicshh2": "Magicshh2 (Pernicious Claw)",
        "magicsweep": "magicsweep (Panacea)",
        "magicthin": "magicthin (Snatching Claw)",
        "magicwater": "magicwater (Healing Rain)",
        "metal": "metal (Protect)",
        "mind1": "mind1 (Weakening Gaze)",
        "mind2": "mind2 (Clairvoyance)",
        "owl_hoot_02": "owl_hoot_02 (Owl Screech)",
        "parry": "parry (Deflect)",
        "poison": "poison (Corrupt Harpoons)",
        "punch2": "punch2 (Blazing Strike)",
        "pyro2": "pyro2 (Ice Comet)",
        "repair": "repair (Dwarf Fortress)",
        "roar": "roar (Cold Breath)",
        "rocks": "rocks (Earth Guard)",
        "scream1": "scream1 (Psychic Scream)",
        "sharpen": "sharpen (Sharpening Cuts)",
        "shock": "shock (Chain Lightning)",
        "sight": "sight (Bad Augury)",
        "slashpoison": "slashpoison (Paralyzing Venom)",
        "songbad": "songbad (Cursenomicon)",
        "songflute": "songflute (Adventure Awaits)",
        "songguitar": "songguitar (Song of Quickness)",
        "songharp": "songharp (Vitalizing Serenade)",
        "sparkle2": "sparkle2 (Enervate)",
        "sparkle3": "sparkle3 (Spark of Life)",
        "Splash": "Splash (Water Jet)",
        "sword1": "sword1 (Cull the Weak)",
        "swordfast": "swordfast (Freezing Slash)",
        "swosh": "swosh (Boulder Throw)",
        "swosh3": "swosh3 (Frozen Tomahawk)",
        "thorns": "thorns (Barkskin)",
        "thorns2": "thorns2 (Flower Stream)",
        "thorns3": "thorns3 (Thorneater)",
        "thunder": "thunder (Crash Lightning)",
        "thunder2": "thunder2 (Endless Storm)",
        "ui_swoosh": "ui_swoosh (Stinger Launcher)",
        "violin": "violin (Sonar)",
        "violin2": "violin2 (Vexing Crescendo)",
        "wardrum": "wardrum (Last Stand)",
        "waterice": "waterice (Squall)",
        "wbite3": "wbite3 (Vicious Bite)",
        "whistle": "whistle (Crab Bait)",
        "wind": "wind (Camouflage)",
        "Wind2": "Wind2 (Burrow)",
        "windmind": "windmind (Mind Visions)",
        "wolf4": "wolf4 (Terrorizing Howl)"
    },
    SoundPreActionFemale: {
        "bree_battleshout": "bree_battleshout (Battle Shout)",
        "bree_intimidate2": "bree_intimidate2 (Intimidate)"
    },
    EffectTrail: {
        "arrow1": "arrow1 (Aimed Shot)",
        "arrow2": "arrow2 (Multishot)",
        "arrow3": "arrow3 (Corrupt Harpoons)",
        "arrow4": "arrow4 (Burning Shot)",
        "arrow5": "arrow5 (Frost Volley)",
        "arrow6": "arrow6 (Snipe)",
        "axe": "axe (Tomahawk)",
        "axe2": "axe2 (Frozen Tomahawk)",
        "bullet": "bullet (Bullet Shot)",
        "bullet2": "bullet2 (Cannon Shot)",
        "coldsparktrail": "coldsparktrail (Cold Spark)",
        "coldtrail1": "coldtrail1 (Ice Lance)",
        "coldtrail2": "coldtrail2 (Frostbolt)",
        "cornietrail": "cornietrail (Popcorn Burst)",
        "cornietrailfire": "cornietrailfire (Popcorn Burst)",
        "dart": "dart (Poison Dart)",
        "elementalbolt": "elementalbolt (Elemental Bolt)",
        "firetrail1": "firetrail1 (Fire Blast)",
        "firetrail2": "firetrail2 (Ignite)",
        "firetrail3": "firetrail3 (Fireball)",
        "firetrail4": "firetrail4 (Pyroblast)",
        "firetrailpet": "firetrailpet (Bouncy Embers)",
        "flask1": "flask1 (Poison Catalyst)",
        "flower": "flower (Flower Shuriken)",
        "holyshadowtrail1": "holyshadowtrail1 (Yin Yang Bolt)",
        "holytrail1": "holytrail1 (Holy Blast)",
        "holytrailt": "holytrailt (Holy Splash)",
        "icytornado": "icytornado (Icy Tornado)",
        "lightningball": "lightningball (Stun Grenade)",
        "lightningtrail1": "lightningtrail1 (Zap)",
        "mindtrail1": "mindtrail1 (Mind Blast)",
        "poisontrail": "poisontrail (Poison Splash)",
        "poisontrail2": "poisontrail2 (Poison Splash)",
        "roottrail": "roottrail (Fungus Root)",
        "sawblade": "sawblade (Saw Blade)",
        "shadowtrail1": "shadowtrail1 (Dark Pact)",
        "shadowtrail2": "shadowtrail2 (Dark Outbreak)",
        "shadowtrail3": "shadowtrail3 (Terrorize)",
        "shadowtrail4": "shadowtrail4 (Ruin Bolt)",
        "shadowtraildrain": "shadowtraildrain (Drain Life)",
        "sheeptrail": "sheeptrail (Awful Tantrum)",
        "shieldtrail": "shieldtrail (Bouncing Shield)",
        "shiv1": "shiv1 (Shiv)",
        "shiv2": "shiv2 (Throw Knife)",
        "shivmind": "shivmind (Shiv)",
        "songtrail1": "songtrail1 (Sonar)",
        "songtrail2": "songtrail2 (Bewilder)",
        "songtrail3": "songtrail3 (Abyssal Sonata)",
        "stonetrail": "stonetrail (Give Fish)",
        "termitestrail": "termitestrail (Blood Infection)",
        "watertrail1": "watertrail1 (Water Jet)"
    },
    Effect: {
        "0": "0 (Ethereal Weapons)",
        "amplify": "amplify (Amplifying Field)",
        "arcane": "arcane (Arcane Conduit)",
        "artillery": "artillery (Heavy Artillery)",
        "barbedwire": "barbedwire (Barbed Wire)",
        "barbercuts": "barbercuts (Barber Cuts)",
        "barkskin": "barkskin (Barkskin)",
        "barkskinboss": "barkskinboss (Barkskin)",
        "bite": "bite (Bite)",
        "blackpyre": "blackpyre (Black Pyre)",
        "bleed": "bleed (Bloodguard)",
        "bless": "bless (Golden Bell)",
        "bless2": "bless2 (Celestial Wrath)",
        "blobimpact": "blobimpact (Bleed)",
        "blossom": "blossom (Blossom)",
        "blowup": "blowup (Unstable Core)",
        "blueburnsmall": "blueburnsmall (Blue Flame)",
        "bluntdown": "bluntdown (Mole Buster)",
        "bluntdowncrack": "bluntdowncrack (Stampede)",
        "bluntdowncrackvul": "bluntdowncrackvul (Ground Slam)",
        "bluntdowninvig": "bluntdowninvig (Invigorating Blow)",
        "bluntdownover": "bluntdownover (Overwhelm)",
        "bluntfront": "bluntfront (Bludgeon)",
        "bluntfrontcrack": "bluntfrontcrack (Siege Breaker)",
        "bluntfrontdaze": "bluntfrontdaze (Maim)",
        "blunthead": "blunthead (Headbutt)",
        "bluntlatcrack": "bluntlatcrack (Pommel)",
        "bluntlatvul": "bluntlatvul (Subjugation)",
        "bluntpunch": "bluntpunch (Whack)",
        "bluntshield": "bluntshield (Shield Bash)",
        "bluntshieldrat": "bluntshieldrat (Royal Ram)",
        "boarshield": "boarshield (Bristly Fur)",
        "bossdark": "bossdark (Anathema)",
        "bossholy": "bossholy (Apotheosis)",
        "bossmind": "bossmind (Abstraction)",
        "buffer": "buffer (Avoidance Collar)",
        "bulletconc": "bulletconc (Concussive Shot)",
        "bulletimpact": "bulletimpact (Bullet Shot)",
        "bulletimpact2": "bulletimpact2 (Cannon Shot)",
        "bulletscat": "bulletscat (Scattershot)",
        "burn": "burn (Itchy Burn)",
        "burnsmall": "burnsmall (Burning Weapons)",
        "caltrops": "caltrops (Caltrops)",
        "chargedclaw": "chargedclaw (Charged Claws)",
        "chilling": "chilling (Chilling Gaze)",
        "circuit": "circuit (Circuit Overload)",
        "coat": "coat (Menacing Roar)",
        "coat2": "coat2 (Coat of Arms)",
        "cocoon": "cocoon (Cocoon)",
        "coldcast3": "coldcast3 (Cold Snap)",
        "coldcast4": "coldcast4 (Ice Fall)",
        "coldcastnovaburst": "coldcastnovaburst (Fishplosion)",
        "coldimpact1": "coldimpact1 (Icicle)",
        "coldimpact2": "coldimpact2 (Cold Rune)",
        "coldimpact2b": "coldimpact2b (Chilling Gaze)",
        "coldimpact3": "coldimpact3 (Flash Freeze)",
        "coldimpactblizz": "coldimpactblizz (Blizzard)",
        "coldimpactcomet": "coldimpactcomet (Ice Comet)",
        "coldimpactsquall": "coldimpactsquall (Squall)",
        "coldimpactwind": "coldimpactwind (Winter Is Coming)",
        "coldmpac2": "coldmpac2 (Icy Splash)",
        "coldslashbleed": "coldslashbleed (Acrobatic Strike)",
        "coldsparkimpact": "coldsparkimpact (Cold Spark)",
        "consecrationimp": "consecrationimp (Consecration)",
        "cornieimpa": "cornieimpa (Popcorn Burst)",
        "cornieimpafire": "cornieimpafire (Popcorn Burst)",
        "courage": "courage (Anthem of Hope)",
        "courageinspire": "courageinspire (Anthem of Hope)",
        "cremation": "cremation (Dark Cremation)",
        "dampen": "dampen (Dampen Magic)",
        "darkembrace": "darkembrace (Dark Embrace)",
        "darklightningimpact": "darklightningimpact (Dark Lightning)",
        "deadlystrikes": "deadlystrikes (Deadly Strikes)",
        "defend": "defend (Helmet)",
        "deflect": "deflect (Deflect)",
        "desecrationimp": "desecrationimp (Dreadful Wave)",
        "disengage": "disengage (Maneuver)",
        "dispel": "dispel (Clarity)",
        "dispelinspire": "dispelinspire (Clarity)",
        "divinepower": "divinepower (Divine Power)",
        "doomsday": "doomsday (Apocalypse)",
        "dragonbite": "dragonbite (Dragon Bite)",
        "dryadcast1": "dryadcast1 (Lunar Grace)",
        "dtheinerbeam": "dtheinerbeam (Reactive Laser)",
        "dtlasers": "dtlasers (Reactive Laser)",
        "dualwield": "dualwield (Double Shot)",
        "eardestroyer": "eardestroyer (Ear Destroyer)",
        "earthwaveimpact": "earthwaveimpact (Shield Slam)",
        "electricweapon": "electricweapon (Electric Weapons)",
        "elementalboltimp": "elementalboltimp (Elemental Bolt)",
        "elementalnovaimp": "elementalnovaimp (Elemental Wave)",
        "energy": "energy (Catharsis)",
        "energyblue": "energyblue (Innervate)",
        "energydelay": "energydelay (Delay Response)",
        "energyinspire": "energyinspire (Meditate)",
        "energyshadow": "energyshadow (Fanaticism)",
        "etherealweapon": "etherealweapon (Ethereal Weapons)",
        "evasion": "evasion (Avoidance Collar)",
        "fatedfuture": "fatedfuture (Fated Future)",
        "feint": "feint (Feint)",
        "fieryshield": "fieryshield (Ardent Guard)",
        "fieryweapon": "fieryweapon (Fiery Weapons)",
        "fireash": "fireash (Ash Storm)",
        "firebrand": "firebrand (Belphyor's Brand)",
        "firebrand2": "firebrand2 (Belphyor's Brand)",
        "fireburst": "fireburst (Lava Bursts)",
        "firecast3": "firecast3 (Solar Flare)",
        "firecast5": "firecast5 (Grimoire of Flames)",
        "fireclaw2": "fireclaw2 (Fire Claw)",
        "firefan": "firefan (Fan the Flames)",
        "fireheal": "fireheal (Cauterize)",
        "fireimpact1": "fireimpact1 (Fire Blast)",
        "fireimpact2": "fireimpact2 (Flare)",
        "fireimpact3": "fireimpact3 (Fireball)",
        "fireimpact4": "fireimpact4 (Pyroblast)",
        "fireimpact6": "fireimpact6 (Combustion)",
        "fireimpactblunt": "fireimpactblunt (Blazing Strike)",
        "fireimpactdisint": "fireimpactdisint (Disintegrate)",
        "fireimpactmeteor": "fireimpactmeteor (Meteorite)",
        "fireimpactnova": "fireimpactnova (Searing Nova)",
        "fireimpactslash": "fireimpactslash (Fire Slash)",
        "fireimpactstorm": "fireimpactstorm (Emberstorm)",
        "fireimpactstrike": "fireimpactstrike (Flamestrike)",
        "firepower": "firepower (Unstable Core)",
        "fireproof": "fireproof (Fireproof)",
        "fireroot": "fireroot (Magma Prison)",
        "firesummon": "firesummon (Summon Imp)",
        "flowerimpact": "flowerimpact (Flower Shuriken)",
        "followup": "followup (Follow-up)",
        "followup2": "followup2 (Perfect Parry)",
        "followupy": "followupy (Feed The Rich)",
        "frostweapon": "frostweapon (Cold Weapons)",
        "furiousylmer": "furiousylmer (Furious Ylmer)",
        "fury": "fury (Berserk Potion)",
        "geyserimpact": "geyserimpact (Geyser)",
        "grandcrossholy": "grandcrossholy (Heresy)",
        "grandcrossholybig": "grandcrossholybig (Crucifixion)",
        "grandcrossholysmall": "grandcrossholysmall (Luminous Barrier)",
        "grandcrossshadow": "grandcrossshadow (Blasphemy)",
        "grandcrossshadowbig": "grandcrossshadowbig (Grand Cross)",
        "grandcrossshadowsmall2": "grandcrossshadowsmall2 (Obscure Barrier)",
        "gravity": "gravity (Crushing Darkness)",
        "green": "green (Sausage Factory)",
        "green2": "green2 (Unwavering)",
        "guard": "guard (Crusader Helmet)",
        "guard2": "guard2 (Protect)",
        "guardianangel": "guardianangel (Guardian Angel)",
        "guardsmall": "guardsmall (Defensive Strategy)",
        "healcast1": "healcast1 (Flash Heal)",
        "healerself": "healerself (Expected Prophecy)",
        "healerself2": "healerself2 (Prescription)",
        "healerself2y": "healerself2y (Give To The Poor)",
        "healimpact1": "healimpact1 (Flash Heal)",
        "healimpact2": "healimpact2 (Bulk Heal)",
        "healimpactbless": "healimpactbless (Benediction)",
        "healimpactchain": "healimpactchain (Binding Heal)",
        "healimpactcourage": "healimpactcourage (Ray of Hope)",
        "healimpactfast": "healimpactfast (Desperate Prayer)",
        "healimpactinspire": "healimpactinspire (Greater Heal)",
        "healimpactsmall": "healimpactsmall (Ankh of Life)",
        "healimpactvitality": "healimpactvitality (Vitalize)",
        "healrain": "healrain (Healing Rain)",
        "healsecondwind": "healsecondwind (Second Wind)",
        "healtotem": "healtotem (Life Totem)",
        "healvac": "healvac (Vaccine)",
        "heart": "heart (Love Enhancer)",
        "heartbattle": "heartbattle (Warcry)",
        "heartcourage": "heartcourage (Unwavering Faith)",
        "heartstock": "heartstock (Stockade)",
        "heavenly": "heavenly (Heavenly Blessing)",
        "heavy": "heavy (Heavy Metal)",
        "heinerbeam2": "heinerbeam2 (Fusion Laser)",
        "heinerbeam2m": "heinerbeam2m (Reactive Laser)",
        "heinerbeamimp": "heinerbeamimp (Heat Laser)",
        "hellfire": "hellfire (Hellfire)",
        "hellflame": "hellflame (Hellflame)",
        "hellflame2": "hellflame2 (Hellflame)",
        "hellmark": "hellmark (Hell Mark)",
        "holybapt": "holybapt (Baptism)",
        "holybeam": "holybeam (Dawn Punishment)",
        "holybeamimp": "holybeamimp (Radiant Burst)",
        "holybeamimp2": "holybeamimp2 (Dawn Punishment)",
        "holycast1": "holycast1 (Dawnlight)",
        "holycast2": "holycast2 (Holy Crusader)",
        "holycast2b": "holycast2b (Divine Retribution)",
        "holycross": "holycross (Divine Retribution)",
        "holycrosssmall": "holycrosssmall (Law of Light)",
        "holydawn": "holydawn (Dawnlight)",
        "holyfireimpact1": "holyfireimpact1 (Holy Fire)",
        "holyimpact": "holyimpact (Holy Splash)",
        "holyimpact1": "holyimpact1 (Flash)",
        "holyimpact2": "holyimpact2 (Dawnlight)",
        "holyimpact3": "holyimpact3 (Holy Blast)",
        "holyimpact4": "holyimpact4 (Celestial Brilliance)",
        "holyimpact5": "holyimpact5 (Crescent Light)",
        "holyimpactstorm": "holyimpactstorm (Holy Storm)",
        "holyinsight": "holyinsight (Divine Insight)",
        "holyoppresion": "holyoppresion (Holy Lance)",
        "holyshadowimpact1": "holyshadowimpact1 (Yin Yang Bolt)",
        "holyshot": "holyshot (Holy Barrage)",
        "holyslash2": "holyslash2 (Sacred Rancor)",
        "holyslashbleed": "holyslashbleed (Holy Slash)",
        "holysymbol": "holysymbol (Holy Symbol)",
        "holysymbol2": "holysymbol2 (Divine Intervention)",
        "iceclawperni": "iceclawperni (Pernicious Claw)",
        "iceclaws": "iceclaws (Frenzied Carnage)",
        "iceclawsbleed": "iceclawsbleed (Flanking Strike)",
        "iceclawsnatch": "iceclawsnatch (Snatching Claw)",
        "icytornado": "icytornado (Cyclone Slash)",
        "ignienchant": "ignienchant (Blue Flame)",
        "inspire": "inspire (Fountain Pen)",
        "insulate": "insulate (Prismatic Field)",
        "intercept": "intercept (Intercept)",
        "invis": "invis (Fade)",
        "invulnerable": "invulnerable (Holy Symbol)",
        "jammer": "jammer (Shield Jammer)",
        "lasers": "lasers (Fusion Laser)",
        "lasersh": "lasersh (Dawn Punishment)",
        "lasersm": "lasersm (Reactive Laser)",
        "laserss": "laserss (Dusk Punishment)",
        "lastguardian": "lastguardian (Last Guardian)",
        "leafclaw": "leafclaw (Thorneater)",
        "leafclawfire": "leafclawfire (Leaf Claw)",
        "lifebloom": "lifebloom (Lifebloom)",
        "lightningcast2": "lightningcast2 (Electricity Manual)",
        "lightningcastbattery": "lightningcastbattery (Child of the Storm)",
        "lightningimpact": "lightningimpact (Electric Splash)",
        "lightningimpact1": "lightningimpact1 (Lightning Rune)",
        "lightningimpact1b": "lightningimpact1b (Electric Weapons)",
        "lightningimpact2": "lightningimpact2 (Charge Battery)",
        "lightningimpact3": "lightningimpact3 (Ball Lightning)",
        "lightningimpact4": "lightningimpact4 (Chain Lightning)",
        "lightningimpact4b": "lightningimpact4b (Thunder Rune)",
        "lightnlightningimpact3ingimpact": "lightnlightningimpact3ingimpact (Electrocute)",
        "mageself": "mageself (Shifting Scroll)",
        "mageself2": "mageself2 (Meditate)",
        "manashield": "manashield (Scroll of Defense)",
        "mark": "mark (Heavy Artillery)",
        "marksight": "marksight (Sneak Peek)",
        "marksightvul": "marksightvul (Intimidate)",
        "mindcast1": "mindcast1 (Silencing Aura)",
        "mindimpact1": "mindimpact1 (Clairvoyance)",
        "mindimpact2": "mindimpact2 (Mind Twist)",
        "mindimpact3": "mindimpact3 (Mind Blast)",
        "mindimpact4": "mindimpact4 (Pandemonium)",
        "mindimpact5": "mindimpact5 (Mesmeric Mirage)",
        "mindimpactener": "mindimpactener (Enervate)",
        "missileimpact": "missileimpact (Missile Barrage)",
        "moonbeamimpact": "moonbeamimpact (Moon Beam)",
        "mooncatalyst": "mooncatalyst (Moon Catalyst)",
        "moonfire": "moonfire (Moonfire)",
        "moonguardcast2": "moonguardcast2 (Moon Guard)",
        "moonguardhero": "moonguardhero (Wolfskin Cloak)",
        "mysticalice": "mysticalice (Mystical Ice)",
        "nightterror": "nightterror (Night Terror)",
        "nukeimpact": "nukeimpact (Tactical Nuke)",
        "onslaught": "onslaught (Grudge)",
        "orange": "orange (Berserker Armor)",
        "orange2": "orange2 (Dark Rancor)",
        "overgrow": "overgrow (Overgrowth)",
        "panacea": "panacea (Panacea)",
        "parry": "parry (Parry)",
        "phoenix": "phoenix (Phoenix)",
        "phoenix2": "phoenix2 (Phoenix)",
        "piegreen1": "piegreen1 (Sharpening Knife)",
        "piegreenback": "piegreenback (Backstab)",
        "piegreenexpose": "piegreenexpose (Expose Armor)",
        "piegreenpoison": "piegreenpoison (Noxious Injection)",
        "pieimpale": "pieimpale (Puncture)",
        "pieimpale2": "pieimpale2 (Impale)",
        "pieimpale3": "pieimpale3 (Impale)",
        "pierupture": "pierupture (Rupture)",
        "poison": "poison (Venom Flask)",
        "poisonblood": "poisonblood (Blood Infection)",
        "poisonburst": "poisonburst (Vile Gas)",
        "poisoncast": "poisoncast (Acid Rain)",
        "poisoncatalyst": "poisoncatalyst (Hatch)",
        "poisonimpact": "poisonimpact (hanscorr)",
        "poisonneuro": "poisonneuro (Neurotoxin)",
        "poisonvirulent": "poisonvirulent (Broodmother)",
        "powerful": "powerful (Archmage Book)",
        "powerfulrat": "powerfulrat (Rings of Power)",
        "powerfultat": "powerfultat (Rings of Power)",
        "praisebeam": "praisebeam (Praise the Sun)",
        "praisethesun": "praisethesun (Praise the Sun)",
        "prismaward": "prismaward (Elemental Ward)",
        "prolifench": "prolifench (Elemental Proliferation)",
        "purple": "purple (Obscure Barrier)",
        "rabid": "rabid (Rabid)",
        "rain": "rain (Rain)",
        "rainthornsimpact": "rainthornsimpact (Rain of Thorns)",
        "rangedimpact1": "rangedimpact1 (Rapid Fire)",
        "rangedimpact2": "rangedimpact2 (Aimed Shot)",
        "rangedimpact3": "rangedimpact3 (Feather Barrage)",
        "rangedimpact4": "rangedimpact4 (Ricochet)",
        "rangedimpact5": "rangedimpact5 (Snipe)",
        "rangedimpact6": "rangedimpact6 (Sniper Shot)",
        "rangedimpact7": "rangedimpact7 (Barrage)",
        "rangedimpactpoison1": "rangedimpactpoison1 (Corrupt Harpoons)",
        "rangedimpactpoison2": "rangedimpactpoison2 (Poison Dart)",
        "rangerself": "rangerself (Ammunition)",
        "rangerself2": "rangerself2 (Ambidextrous)",
        "rapidreaction": "rapidreaction (Hidden Hand)",
        "ratbite": "ratbite (Slave Rats)",
        "redstorm": "redstorm (Dual Wield)",
        "regen": "regen (Encore)",
        "regeneration": "regeneration (Hydra Blood)",
        "reinforcepowerful": "reinforcepowerful (Herding)",
        "repair": "repair (Ironclad)",
        "rootcastylmer": "rootcastylmer (Wild Roots)",
        "rootimpact": "rootimpact (Wild Roots)",
        "rootimpactsmall": "rootimpactsmall (Regrowth)",
        "rootimpale": "rootimpale (Fungus Root)",
        "sacredlightningimpact": "sacredlightningimpact (Sacred Lightning)",
        "safeguard": "safeguard (Entrench)",
        "safeguardinsp": "safeguardinsp (Trustworthy)",
        "sanctuary": "sanctuary (Holy Aegis)",
        "serratedweapons": "serratedweapons (Riposte)",
        "shadowbeam": "shadowbeam (Dusk Punishment)",
        "shadowbeamimp": "shadowbeamimp (Gloomy Burst)",
        "shadowbeamimp2": "shadowbeamimp2 (Dusk Punishment)",
        "shadowcast3b": "shadowcast3b (Infestation)",
        "shadowcondem": "shadowcondem (Condemnation)",
        "shadowench1": "shadowench1 (Yin Ritual)",
        "shadowench2": "shadowench2 (Black Talons)",
        "shadowench3": "shadowench3 (Abyssal Revenge)",
        "shadowench4": "shadowench4 (Cursemancy)",
        "shadowheal": "shadowheal (Shadow Mend)",
        "shadowimpact1": "shadowimpact1 (Dark Pact)",
        "shadowimpact2": "shadowimpact2 (Black Karma)",
        "shadowimpact3": "shadowimpact3 (Dark Outbreak)",
        "shadowimpact4": "shadowimpact4 (Black Hole)",
        "shadowimpact6": "shadowimpact6 (Profane)",
        "shadowimpact7": "shadowimpact7 (Vile Lance)",
        "shadowimpact8": "shadowimpact8 (Ruin Bolt)",
        "shadowimpactdecay": "shadowimpactdecay (Curse of Decay)",
        "shadowimpactdrain": "shadowimpactdrain (Vampiric Touch)",
        "shadowimpactelements": "shadowimpactelements (Curse of Elements)",
        "shadowimpacteye": "shadowimpacteye (Bad Augury)",
        "shadowimpactfragil": "shadowimpactfragil (Curse of Fragility)",
        "shadowimpactslow": "shadowimpactslow (Curse of Exhaustion)",
        "shadowimpactsmall": "shadowimpactsmall (Blackguard)",
        "shadowimpactsmall2": "shadowimpactsmall2 (Cursed Water)",
        "shadowimpactstorm": "shadowimpactstorm (Unholy Storm)",
        "shadowimpactvul": "shadowimpactvul (Candy)",
        "shadowimpactweak": "shadowimpactweak (Curse of Weakness)",
        "shadowmindimpact1": "shadowmindimpact1 (Hallucination)",
        "shadownovaimpact": "shadownovaimpact (Dark Outburst)",
        "shadowoppresion": "shadowoppresion (Caustic Beam)",
        "shadowputre": "shadowputre (Putrefaction)",
        "shadowreach": "shadowreach (Death's Reach)",
        "shadowself": "shadowself (Dark Miasma)",
        "shadowself2": "shadowself2 (Demonic Tutor)",
        "shadowshot": "shadowshot (Dark Shot)",
        "shadowslashh2": "shadowslashh2 (Dark Rancor)",
        "shadowslashpoison": "shadowslashpoison (Shadow Slash)",
        "sharp": "sharp (Sharpen)",
        "Shatter": "Shatter (Cold Snap)",
        "shear": "shear (Shear)",
        "sheepbite": "sheepbite (Killer Bite)",
        "sheepimpact": "sheepimpact (Awful Tantrum)",
        "sheepshield": "sheepshield (Woolly Shell)",
        "shield1": "shield1 (Barrier)",
        "shield2": "shield2 (Save It For Later)",
        "shieldbuffer": "shieldbuffer (Protect from Evil)",
        "shieldcourage": "shieldcourage (Infuse Courage)",
        "shieldheal": "shieldheal (Pain Suppression)",
        "shieldheart": "shieldheart (Holy Aegis)",
        "shieldimpact": "shieldimpact (Bouncing Shield)",
        "shieldwall": "shieldwall (Shield Wall)",
        "shivmindimpact": "shivmindimpact (Ethereal Knives)",
        "sight": "sight (Clairvoyant Scroll)",
        "silentbacklash": "silentbacklash (Silencing Aura)",
        "skillful": "skillful (Skillful)",
        "slashcarnage": "slashcarnage (Gut Ripper)",
        "slashdevast": "slashdevast (Devastate)",
        "slashevisc": "slashevisc (Blade Flurry)",
        "slashfurious": "slashfurious (Unleashed)",
        "slashgreen1": "slashgreen1 (Double Slash)",
        "slashgreenblade1": "slashgreenblade1 (Blade Dance)",
        "slashgreenbleed": "slashgreenbleed (Sickle Slash)",
        "slashgreencorrupt": "slashgreencorrupt (Vile Gash)",
        "slashgreendebil": "slashgreendebil (Debilitate)",
        "slashgreendual": "slashgreendual (Dual Strike)",
        "slashgreenpoison": "slashgreenpoison (Toxic Retaliation)",
        "slashgreenviper": "slashgreenviper (Poisonous Assault)",
        "slashimpact": "slashimpact (Axe Sweep)",
        "slashimpactbleed": "slashimpactbleed (Bloody Cleave)",
        "slashmortal": "slashmortal (Mortal Strike)",
        "slashred1": "slashred1 (Bloodguard)",
        "slashred1parry": "slashred1parry (Perfect Parry)",
        "slashredbleed1": "slashredbleed1 (Wristcutter)",
        "slashredbleed2": "slashredbleed2 (Flay)",
        "slashredbleed3": "slashredbleed3 (Bloodsucker)",
        "slashslow": "slashslow (Hamstring)",
        "slashsweep": "slashsweep (Sweeping Strike)",
        "slashwhirlimpact": "slashwhirlimpact (Whirlwind)",
        "slicemark": "slicemark (Riposte)",
        "slow": "slow (Howl)",
        "slowvul": "slowvul (Terrorizing Howl)",
        "songballad1": "songballad1 (Ballad of Evasion)",
        "songballad2": "songballad2 (Ballad of Conquest)",
        "songcast1": "songcast1 (Panic Scream)",
        "songcast3": "songcast3 (Sonar)",
        "songcast3small": "songcast3small (Heavy Metal)",
        "songimpact1": "songimpact1 (Psychic Scream)",
        "songimpact2": "songimpact2 (Bewilder)",
        "songimpact3": "songimpact3 (Dragon Roar)",
        "songimpact4": "songimpact4 (Payback)",
        "songimpact5": "songimpact5 (Abyssal Sonata)",
        "songimpact5small": "songimpact5small (Sonar)",
        "songimpact5small2": "songimpact5small2 (Heavy Metal)",
        "songimpact6": "songimpact6 (Tedious Poem)",
        "songself": "songself (Tune Up)",
        "songself1a": "songself1a (Melodic Rhythm)",
        "songself2": "songself2 (Music Sheet)",
        "songself3a": "songself3a (Encore)",
        "songsere1": "songsere1 (Vitalizing Serenade)",
        "songsere2": "songsere2 (Healing Serenade)",
        "songsere3": "songsere3 (Energizing Serenade)",
        "sparklat": "sparklat (Storm Ward)",
        "speed1": "speed1 (Cloak of Speed)",
        "speed2": "speed2 (Scroll of Speed)",
        "spellecho": "spellecho (Spell Echo)",
        "spikeshield": "spikeshield (Spiked Shield)",
        "sprout": "sprout (Crescent Moon)",
        "sprout2": "sprout2 (Living Forest)",
        "starfall": "starfall (Starfall)",
        "starfall2": "starfall2 (Starry Night)",
        "stars": "stars (Beer Mug)",
        "stealth": "stealth (Dark Hood)",
        "stealthdispel": "stealthdispel (Vanish)",
        "stealthevasion": "stealthevasion (Blur)",
        "stealthhaste": "stealthhaste (Stalking)",
        "stealthsharp": "stealthsharp (Burrow)",
        "stealthstep": "stealthstep (Shadowstep)",
        "steelforge": "steelforge (Steel Forge)",
        "steelforgem": "steelforgem (Bulwark)",
        "steelskin": "steelskin (Steelskin)",
        "stockades": "stockades (Palisade)",
        "stoneskin": "stoneskin (Stoneskin)",
        "storm": "storm (Endless Storm)",
        "subterfuge": "subterfuge (Hide and Seek)",
        "taim": "taim (Taking Aim)",
        "taim2": "taim2 (Taking Aim)",
        "talons": "talons (Black Talons)",
        "termitesimpact": "termitesimpact (Frenzied Termites)",
        "thechosenone": "thechosenone (Paranoia)",
        "thorns": "thorns (Garden of Thorns)",
        "thornshield": "thornshield (Thousand Needles)",
        "thunderclap": "thunderclap (Thunderclap)",
        "tormentimpact": "tormentimpact (Quill Rain)",
        "toxicrain": "toxicrain (Toxic Rain)",
        "tranquility": "tranquility (Tranquility)",
        "tuskbarrageimp": "tuskbarrageimp (Tusk Barrage)",
        "tuskbarrageimp2": "tuskbarrageimp2 (Stinger Launcher)",
        "tuskcharge": "tuskcharge (Tusk Charge)",
        "unwave": "unwave (Unwavering Faith)",
        "valiant": "valiant (Valiant Defender)",
        "viciousbite": "viciousbite (Vicious Bite)",
        "viciousbite2": "viciousbite2 (Wild Bite)",
        "viciousbite3": "viciousbite3 (Hydra Bite)",
        "vitalitydrain": "vitalitydrain (Vitality Drain)",
        "vulnerable": "vulnerable (Demonic Tutor)",
        "warriorself": "warriorself (Shake it off!)",
        "warriorself2": "warriorself2 (Arsenal)",
        "warriorself2pillage": "warriorself2pillage (Pillage)",
        "warriorself3": "warriorself3 (Last Stand)",
        "waterimpact1": "waterimpact1 (Dilute)",
        "waterimpactsmall": "waterimpactsmall (Bucket)",
        "watering": "watering (Watering)",
        "weak": "weak (Demonic Tutor)",
        "weakvul": "weakvul (Death's Door)",
        "web": "web (Fishing Net)",
        "whiteburn": "whiteburn (White Flames)",
        "whiteburnsmall": "whiteburnsmall (White Flame)",
        "wildhunt": "wildhunt (Wild Hunt)",
        "wildhuntm": "wildhuntm (Wild Hunt)",
        "wolfguard": "wolfguard (Wolf Guard)",
        "yangritual": "yangritual (Lunar Grace)",
        "yangritual2": "yangritual2 (Hydra Blood)",
        "yellow": "yellow (Luminous Barrier)",
        "yoggermeati": "yoggermeati (Cull the Weak)"
    },
    ItemTarget: {
        "Self": "Self",
        "RandomHero": "Random Hero",
        "RandomEnemy": "Random Enemy",
        "AllHero": "All Heroes",
        "AllEnemy": "All Enemies",
        "CurrentTarget": "Current Target",
        "SelfEnemy": "SelfEnemy (??? e.g. Hexproof)",
        "HighestFlatHpHero": "Highest HP Hero",
        "LowestFlatHpHero": "Lowest HP Hero",
        "HighestFlatHpEnemy": "Highest HP Enemy",
        "LowestFlatHpEnemy": "Lowest HP Enemy",
        "Random": "Random"
    },
    CharacterStat: {
        "None": "None",
        "Hp": "Hp",
        "Speed": "Speed",
        "Energy": "Energy",
        "EnergyTurn": "Energy per Turn"
    },
    EventActivation: {
        "None": "None",
        "BeginCombat": "Start of Combat",
        "BeginCombatEnd": "End of Combat",
        "BeginRound": "Start of Round",
        "EndRound": "End of Round",
        "BeginTurn": "Start of Turn",
        "EndTurn": "End of Turn",
        // "DrawCard": "Draw Card", // can't actually see code referencing this value?
        // "CastCard": "Cast Card", // no vanilla examples
        "FinishCast": "After Casting Card",  // e.g. thorn proliferation
        "medsEmptyHand": "When Hand Emptied",
        "Hit": "Hits Enemy",
        "Hitted": "Hit By Enemy",
        "Block": "Block Enemy Attack",
        "Blocked": "Attack Blocked by Enemy",
        "Evade": "Evades Enemy Attack",
        "Evaded": "Attack Evaded by Enemy",
        "Heal": "Heals Ally",
        "Healed": "Healed by Ally",
        "AuraCurseSet": "Applies Aura/Curse...",
        // "CharacterAssign": "CharacterAssign (??)",
        "Damage": "Damages Enemy",
        "Damaged": "Damaged by Enemy",
        "Killed": "On Death" //, // e.g. scroll of resurrection!
        // "CorruptionCombatStart": "Corruption: Start of Combat", // e.g. ironclad
        // "CorruptionBeginRound": "Corruption: Start of Round", // e.g. armageddon, hexproof
        // "PreBeginCombat": "PreBeginCombat (??)", // ?? all of these look like they could be None
        // "BeginTurnCardsDealt": "BeginTurnCardsDealt (??)", // after cards are dealt, e.g. for energy reduction
        // "BeginTurnAboutToDealCards": "BeginTurnAboutToDealCards (??)", // used to add cards to hand? e.g. dart pouch, large pouch, meat bag, searing dagger, stormcaller feather
        // "DestroyItem": "DestroyItem (??)",
        // "DamagedSecondary": "DamagedSecondary (??)",
        // "FinishFinishCast": "FinishFinishCast (??)", // infestation, world in flames?
        // "PreFinishCast": "PreFinishCast (??)", // used to duplicate the card being cast, e.g. double bubble, spell echo, mirror
        // "Resurrect": "Resurrect (??)", // on resurrection?
        // "ItemActivation": "ItemActivation (??)",
        // "TraitActivation": "TraitActivation (??)",
        // "CharacterKilled": "CharacterKilled (??)"
    }
});
const vanillaCardList = {
    "No": {
        "absorption": "Absorption",
        "abstraction": "Abstraction",
        "abyssalrevenge": "Abyssal Revenge",
        "abyssalsonata": "Abyssal Sonata",
        "abyssalsonataspecial": "Abyssal Sonata",
        "abyssalwrath": "Abyssal Wrath",
        "acidbreath": "Acid Breath",
        "acidrain": "Acid Rain",
        "acidspit": "Acid Spit",
        "acolytetunic": "Acolyte Tunic",
        "acrobaticstrikem": "Acrobatic Strike",
        "acrobaticstrike": "Acrobatic Strike",
        "adrenaline": "Adrenaline",
        "advancedhandbook": "Advanced Handbook",
        "adventureawaits": "Adventure Awaits",
        "aftershock": "Aftershock",
        "agateamulet": "Agate Amulet",
        "aimedshotm": "Aimed Shot",
        "aimedshotmeasy": "Aimed Shot",
        "aimedshot": "Aimed Shot",
        "alarmbell": "Alarm Bell",
        "albatrosspendant": "Albatross Pendant",
        "allin": "All In",
        "allseeingamulet": "All-seeing Amulet",
        "amberamulet": "Amber Amulet",
        "ambidextrous": "Ambidextrous",
        "ambush": "Ambush",
        "amethystring": "Amethyst Ring",
        "ammunitions": "Ammunition",
        "amnesia": "Amnesia",
        "amplifyingfield": "Amplifying Field",
        "amuletofprotection": "Amulet of Protection",
        "amuletofspeed": "Amulet of Speed",
        "amuletofthorns": "Amulet of Thorns",
        "anathema": "Anathema",
        "ancientorb": "Ancient Orb",
        "ankhoflife": "Ankh of Life",
        "anklebite": "Ankle Bite",
        "anklebiteitem": "Ankle Bite",
        "annoyingwhistle": "Annoying Whistle",
        "anthemofhope": "Anthem of Hope",
        "antimagicfield": "Antimagic Field",
        "antimagicfieldspecial": "Antimagic Field",
        "antiquefigurine": "Antique Figurine",
        "apocalypse": "Apocalypse",
        "apotheosis": "Apotheosis",
        "aquamarinebracelet": "Aquamarine Bracelet",
        "arcaneconduit": "Arcane Conduit",
        "architectsring": "Architect's Ring",
        "architectssoul": "Architect's Soul",
        "archmagebook": "Archmage Book",
        "ardentchampion": "Ardent Champion",
        "ardentguard": "Ardent Guard",
        "arenachampion": "Arena Champion",
        "armageddon": "Armageddon",
        "armoredsteel": "Armored Steel",
        "arsenal": "Arsenal",
        "ash": "Ash",
        "ashstorm": "Ash Storm",
        "ashstormcorruption": "Ash Storm",
        "ashstormplus": "Ash Storm",
        "ashysky": "Ashy Sky",
        "asmody": "Asmody",
        "assassintools": "Assassin Tools",
        "astralhowl": "Astral Howl",
        "astralhowlback": "Astral Howl",
        "astralhowlo": "Astral Howl",
        "astralhowlpet": "Astral Howl",
        "astralwolf": "Astral Wolf",
        "astralwolfo": "Astral Wolf",
        "atonement": "Atonement",
        "atonementstart": "Atonement",
        "avoidancecollar": "Avoidance Collar",
        "awfultantrum": "Awful Tantrum",
        "awfultantrumplus": "Awful Tantrum",
        "awfultantrumitem": "Awful Tantrum",
        "axesweep": "Axe Sweep",
        "backbone": "Backbone",
        "backbonem": "Backbone",
        "backlash": "Backlash",
        "backstabm": "Backstab",
        "backstab": "Backstab",
        "badaugury": "Bad Augury",
        "bake": "Bake",
        "bakem": "Bake",
        "balllightning": "Ball Lightning",
        "ballofwool": "Ball of Wool",
        "balladofconquest": "Ballad of Conquest",
        "balladofevasion": "Ballad of Evasion",
        "bandages": "Bandages",
        "bandaid": "Band-Aid",
        "bandaidm": "Band-Aid",
        "bane": "Bane",
        "banish": "Banish",
        "banishstart": "Banish",
        "baptism": "Baptism",
        "baptismm": "Baptism",
        "barbedwirem": "Barbed Wire",
        "barbedwire": "Barbed Wire",
        "barbercuts": "Barber Cuts",
        "barkskin": "Barkskin",
        "barkskinplus": "Barkskin",
        "barrage": "Barrage",
        "barricadem": "Barricade",
        "barricade": "Barricade",
        "barrier": "Barrier",
        "barrierm": "Barrier",
        "bass": "Bass",
        "basthetsgrace": "Basthet's Grace",
        "bastion": "Bastion",
        "battleaxe": "Battle Axe",
        "battleplan": "Battle Plan",
        "battleshout": "Battle Shout",
        "beartrap": "Bear Trap",
        "beermug": "Beer Mug",
        "bell": "Bell",
        "belphyorsbrand": "Belphyor's Brand",
        "belphyorpipe": "Belphyor's Pipe",
        "benediction": "Benediction",
        "berserkpotion": "Berserk Potion",
        "berserkerarmor": "Berserker Armor",
        "berserkerclaw": "Berserker Claw",
        "betty": "Betty",
        "bewilder": "Bewilder",
        "bewilderspecial": "Bewilder",
        "bigboom": "Big Boom",
        "bigsnowball": "Big Snowball",
        "bindingheal": "Binding Heal",
        "birdofprey": "Bird of Prey",
        "bite": "Bite",
        "blackdeath": "Black Death",
        "blackdeathstart": "Black Death",
        "blackdeck": "Black Deck",
        "blackhole": "Black Hole",
        "blackkarma": "Black Karma",
        "blackpyramid": "Black Pyramid",
        "blackpyre": "Black Pyre",
        "blacktalons": "Black Talons",
        "blackguard": "Blackguard",
        "bladedance": "Blade Dance",
        "bladeflurry": "Blade Flurry",
        "bladerush": "Blade Rush",
        "bladestorm": "Blade Storm",
        "blasphemy": "Blasphemy",
        "blasphemyeasy": "Blasphemy",
        "blazingnova": "Blazing Nova",
        "blazingslash": "Blazing Slash",
        "blazingstrike": "Blazing Strike",
        "blazingstrikeplus": "Blazing Strike",
        "bleedout": "Bleed Out",
        "blessedsteel": "Blessed Steel",
        "blizzard": "Blizzard",
        "blizzardm": "Blizzard",
        "blizzardmm": "Blizzard",
        "bloodblobpet": "Blood Blob",
        "bloodblob": "Blood Blob",
        "bloodfeeding": "Blood Feeding",
        "bloodforbloodm": "Blood For Blood",
        "bloodforblood": "Blood For Blood",
        "bloodgoblet": "Blood Goblet",
        "bloodinfection": "Blood Infection",
        "bloodpuddle": "Blood Puddle",
        "bloodrainm": "Blood Rain",
        "bloodrain": "Blood Rain",
        "bloodsausage": "Blood Sausage",
        "bloodsplash": "Blood Splash",
        "bloodsplashpet": "Blood Splash",
        "bloodbath": "Bloodbath",
        "blooddguard": "Bloodguard",
        "bloodrage": "Bloodrage",
        "bloodseeker": "Bloodseeker",
        "bloodstone": "Bloodstone",
        "bloodsucker": "Bloodsucker",
        "bloodsuckeritem": "Bloodsucker",
        "bloodsuckeritemb": "Bloodsucker",
        "bloodycleave": "Bloody Cleave",
        "bloodyretaliation": "Bloody Retaliation",
        "blossom": "Blossom",
        "blowup": "Blow Up!",
        "bludgeonm": "Bludgeon",
        "bludgeon": "Bludgeon",
        "blueflame": "Blue Flame",
        "bluff": "Bluff",
        "blur": "Blur",
        "bomb": "Bomb",
        "bombm": "Bomb",
        "bomblottery": "Bomb Lottery",
        "bombard": "Bombard",
        "boneclaws": "Bone Claws",
        "boneguard": "Bone Guard",
        "bonering": "Bone Ring",
        "bonk": "Bonk",
        "bonkhammer": "Bonk Hammer",
        "bookofnightmares": "Book of Nightmares",
        "bookofthedead": "Book of the Dead",
        "bookworm": "Bookworm",
        "bootsofswiftness": "Boots of Swiftness",
        "boulderthrow": "Boulder Throw",
        "bouncingshield": "Bouncing Shield",
        "bouncyembers": "Bouncy Embers",
        "bouncyembersplus": "Bouncy Embers",
        "bouncyembersitem": "Bouncy Embers",
        "bowling": "Bowling",
        "brainfreeze": "Brain Freeze",
        "brand": "Brand",
        "brandplus": "Brand",
        "brassamulet": "Brass Amulet",
        "brasslantern": "Brass Lantern",
        "breastplate": "Breastplate",
        "brigandarmor": "Brigand Armor",
        "bristlyfur": "Bristly Fur",
        "broccoli": "Broccoli",
        "brokenbone": "Broken Bone",
        "brokenitem": "Broken Item",
        "bronzegear": "Bronze Gear",
        "broodmother": "Broodmother",
        "broodmotherplus": "Broodmother",
        "bucket": "Bucket",
        "bulkheal": "Bulk Heal",
        "bulletshot": "Bullet Shot",
        "bulletshotm": "Bullet Shot",
        "bulwark": "Bulwark",
        "bunny": "Bunny",
        "bunnyhopping": "Bunny Hopping",
        "bunnyhoppingm": "Bunny Hopping",
        "burialmask": "Burial Mask",
        "burneditem": "Burned Item",
        "burningblood": "Burning Blood",
        "burningcore": "Burning Core",
        "burningcorem": "Burning Core",
        "burningjavelin": "Burning Javelin",
        "burningjaveline": "Burning Javelin",
        "burningorb": "Burning Orb",
        "burningshot": "Burning Shot",
        "burningweapons": "Burning Weapons",
        "burntcarp": "Burnt Carp",
        "burrow": "Burrow",
        "butcherblock": "Butcher Block",
        "butchering": "Butchering",
        "butchersknife": "Butcher's Knife",
        "caltrops": "Caltrops",
        "camouflagem": "Camouflage",
        "camouflage": "Camouflage",
        "candy": "Candy",
        "cannonshot": "Cannon Shot",
        "captainshowl": "Captain's Howl",
        "captainshowlstart": "Captain's Howl",
        "captivatingvoice": "Captivating Voice",
        "carnage": "Carnage",
        "carp": "Carp",
        "carrioneater": "Carrioneater",
        "carrot": "Carrot",
        "castling": "Castling",
        "catapult": "Catapult",
        "catharsis": "Catharsis",
        "causticbeam": "Caustic Beam",
        "cauterize": "Cauterize",
        "celestialbrillance": "Celestial Brilliance",
        "celestialbrillancem": "Celestial Brilliance",
        "celestialtoll": "Celestial Toll",
        "celestialwrath": "Celestial Wrath",
        "chainheal": "Chain Heal",
        "chainhealm": "Chain Heal",
        "chainlightning": "Chain Lightning",
        "chainlightningeasy": "Chain Lightning",
        "chainlightningm": "Chain Lightning",
        "chainlightningmg": "Chain Lightning",
        "chainsaw": "Chainsaw",
        "chaliceofkings": "Chalice of Kings",
        "chaliceofqueens": "Chalice of Queens",
        "challengingshout": "Challenging Shout",
        "champy": "Champy",
        "changeweapon": "Change Weapon",
        "chantofaccuracy": "Chant of Accuracy",
        "chantofinitiative": "Chant of Initiative",
        "chaosblobpet": "Chaos Blob",
        "chaosblob": "Chaos Blob",
        "chaospuddle": "Chaos Puddle",
        "chaossplash": "Chaos Splash",
        "chaossplashpet": "Chaos Splash",
        "chaoticwind": "Chaotic Wind",
        "charge": "Charge",
        "chargebattery": "Charge Battery",
        "chargedclaws": "Charged Claws",
        "chargedtrident": "Charged Trident",
        "cheese": "Cheese",
        "childofthestorm": "Child of the Storm",
        "chillinggaze": "Chilling Gaze",
        "chompy": "Chompy",
        "chop": "Chop",
        "chumpy": "Chumpy",
        "circleofhealing": "Circle of Healing",
        "circuitoverload": "Circuit Overload",
        "citadel": "Citadel",
        "clairvoyance": "Clairvoyance",
        "clairvoyanceitem": "Clairvoyance",
        "clairvoyanceitemb": "Clairvoyance",
        "clairvoyantscroll": "Clairvoyant Scroll",
        "clarity": "Clarity",
        "clearinstructions": "Clear Instructions",
        "cleave": "Cleave",
        "clergyamulet": "Clergy Amulet",
        "cloackofevasion": "Cloak of Evasion",
        "cloackofspeed": "Cloak of Speed",
        "clobber": "Clobber",
        "cloudsong": "Cloudsong",
        "club": "Club",
        "coatofarms": "Coat of Arms",
        "cocoon": "Cocoon",
        "coldbonegoblet": "Cold Bone Goblet",
        "coldbook": "Cold Book",
        "coldbreath": "Cold Breath",
        "coldburst": "Cold Burst",
        "coldfeet": "Cold Feet",
        "coldfront": "Cold Front",
        "coldhands": "Cold Hands",
        "coldlaser": "Cold Laser",
        "coldnova": "Cold Nova",
        "coldnovaally": "Cold Nova",
        "coldrune": "Cold Rune",
        "coldsnap": "Cold Snap",
        "coldspark": "Cold Spark",
        "coldsparkstart": "Cold Spark",
        "coldweapons": "Cold Weapons",
        "collectwaste": "Collect Waste",
        "colorfulpuddle": "Colorful Puddle",
        "colossalblow": "Colossal Blow",
        "combatbandages": "Combat Bandages",
        "combustion": "Combustion",
        "commandandconquer": "Command and Conquer",
        "concussiveshot": "Concussive Shot",
        "concussiveshotm": "Concussive Shot",
        "condemnation": "Condemnation",
        "condemnationm": "Condemnation",
        "consecrated": "Consecrated",
        "consecration": "Consecration",
        "consecrationesp": "Consecration",
        "consume": "Consume",
        "continuumblade": "Continuum Blade",
        "coolingservos": "Cooling Servos",
        "corrosivetouch": "Corrosive Touch",
        "corrosivetoucheasy": "Corrosive Touch",
        "corruptharpoon": "Corrupt Harpoons",
        "corruptedblade": "Corrupted Blade",
        "corruptedknife": "Corrupted Knife",
        "corruptedplate": "Corrupted Plate",
        "corruption": "Corruption",
        "counterspell": "Counterspell",
        "crabbait": "Crab Bait",
        "crabbaitplus": "Crab Bait",
        "craftgem": "Craft: Gem",
        "craftpanacea": "Craft: Panacea",
        "craftpoison": "Craft: Poison",
        "crankcrossbow": "Crank Crossbow",
        "crashlightningh": "Crash Lightning",
        "crashlightning": "Crash Lightning",
        "crashlightningm": "Crash Lightning",
        "crazylook": "Crazy Look",
        "crescentlight": "Crescent Light",
        "crescentmoon": "Crescent Moon",
        "crimsonraiment": "Crimson Raiment",
        "crossbow": "Crossbow",
        "crosshair": "Crosshair",
        "crosshairm": "Crosshair",
        "crucifixion": "Crucifixion",
        "crumble": "Crumble",
        "crusaderhelmet": "Crusader Helmet",
        "crushingdarkness": "Crushing Darkness",
        "crystalball": "Crystal Ball",
        "crystallization": "Crystallization",
        "crystallize": "Crystallize",
        "cuby": "Cuby",
        "cubyd": "Cuby",
        "culltheweak": "Cull the Weak",
        "culltheweakspecial": "Cull the Weak",
        "cupofdeath": "Cup of Death",
        "curativetherapy": "Curative Therapy",
        "curseofagony": "Curse of Agony",
        "curseofdecay": "Curse of Decay",
        "curseofelements": "Curse of Elements",
        "curseofelementsm": "Curse of Elements",
        "curseofexhaustion": "Curse of Exhaustion",
        "curseoffragility": "Curse of Fragility",
        "curseoffragilitym": "Curse of Fragility",
        "curseofmadness": "Curse of Madness",
        "curseofshadows": "Curse of Shadows",
        "curseofshadowsm": "Curse of Shadows",
        "curseoftorment": "Curse of Torment",
        "curseofvulnerability": "Curse of Vulnerability",
        "curseofweakness": "Curse of Weakness",
        "cursedbandages": "Cursed Bandages",
        "cursedcard": "Cursed Card",
        "curseddagger": "Cursed Dagger",
        "cursedjewelersring": "Cursed Jeweler's Ring",
        "cursedwater": "Cursed Water",
        "cursemancy": "Cursemancy",
        "cursenomicon": "Cursenomicon",
        "custodian": "Custodian",
        "cycloneslash": "Cyclone Slash",
        "cycloneslashspecial": "Cyclone Slash",
        "dagger": "Dagger",
        "daley": "Daley",
        "dampenmagic": "Dampen Magic",
        "dampingfield": "Damping Field",
        "darkblight": "Dark Blight",
        "darkblobpet": "Dark Blob",
        "darkblob": "Dark Blob",
        "darkblow": "Dark Blow",
        "darkconcoction": "Dark Concoction",
        "darkconstraint": "Dark Constraint",
        "darkcremation": "Dark Cremation",
        "darkembrace": "Dark Embrace",
        "darkflashitem": "Dark Flash",
        "darkfury": "Dark Fury",
        "darkfuture": "Dark Future",
        "darkgag": "Dark Gag",
        "darkguard": "Dark Guard",
        "darkhood": "Dark Hood",
        "darklightning": "Dark Lightning",
        "darklightningeasy": "Dark Lightning",
        "darkmiasma": "Dark Miasma",
        "darkomen": "Dark Omen",
        "darkoutbreak": "Dark Outbreak",
        "darkoutbreakm": "Dark Outbreak",
        "darkoutburst": "Dark Outburst",
        "darkpact": "Dark Pact",
        "darkpuddle": "Dark Puddle",
        "darkrancor": "Dark Rancor",
        "darkritual": "Dark Ritual",
        "darkshot": "Dark Shot",
        "darksplash": "Dark Splash",
        "darksplashpet": "Dark Splash",
        "darktorment": "Dark Torment",
        "darkflamering": "Darkflame Ring",
        "darknessfalls": "Darkness Falls",
        "darknessfallsm": "Darkness Falls",
        "dartpouch": "Dart Pouch",
        "dash": "Dash",
        "dauntless": "Dauntless",
        "dawnpunishment": "Dawn Punishment",
        "dawnlight": "Dawnlight",
        "deadlychime": "Deadly Chime",
        "deadlystrikes": "Deadly Strikes",
        "deathcoil": "Death Coil",
        "deathgrip": "Death Grip",
        "deathsdoor": "Death's Door",
        "deathsembrace": "Death's Embrace",
        "deathsreach": "Death's Reach",
        "deathstoll": "Death's Toll",
        "deathstolleasy": "Death's Toll",
        "deathstollm": "Death's Toll",
        "debilitate": "Debilitate",
        "deepdarkness": "Deep Darkness",
        "deepdarknessm": "Deep Darkness",
        "deeppuff": "Deep Puff",
        "deeproots": "Deep Roots",
        "defectivesummon": "Defective Summon",
        "defend": "Defend",
        "defensivestrategy": "Defensive Strategy",
        "defiledlegacy": "Defiled Legacy",
        "deflect": "Deflect",
        "defrostarcher": "Defrost Archer",
        "defrostarcherm": "Defrost Archer",
        "defrostswordman": "Defrost Swordman",
        "defrostswordmanm": "Defrost Swordman",
        "dejavu": "Deja Vu",
        "delayresponse": "Delay Response",
        "deliciousscent": "Delicious Scent",
        "demandobedience": "Demand Obedience",
        "dementia": "Dementia",
        "dementiam": "Dementia",
        "demolishingblow": "Demolishing Blow",
        "demonicflame": "Demonic Flame",
        "demonictutor": "Demonic Tutor",
        "demoralizingshout": "Demoralizing Shout",
        "desecration": "Desecration",
        "desertjam": "Desert Jam",
        "desertwhirlwind": "Desert Whirlwind",
        "despair": "Despair",
        "desperateplayer": "Desperate Prayer",
        "destiny": "Destiny",
        "destroyergauntlets": "Destroyer Gauntlets",
        "detection": "Detection",
        "detoxpotion": "Detox Potion",
        "detoxify": "Detoxify",
        "devastatem": "Devastate",
        "devastatemm": "Devastate",
        "devastate": "Devastate",
        "deviantzealotry": "Deviant Zealotry",
        "diamondring": "Diamond Ring",
        "dilute": "Dilute",
        "dinnerisready": "Dinner is Ready!",
        "dinnerisreadyplus": "Dinner is Ready!",
        "dirtybandages": "Dirty Bandages",
        "discharge": "Discharge",
        "dischargem": "Discharge",
        "disengage": "Disengage",
        "disintegrate": "Disintegrate",
        "disintegratem": "Disintegrate",
        "dislocatedjaw": "Dislocated Jaw",
        "dispelmagic": "Dispel Magic",
        "divinationorb": "Divination Orb",
        "divinechime": "Divine Chime",
        "divinegrace": "Divine Grace",
        "divinegracestart": "Divine Grace",
        "divineguidance": "Divine Guidance",
        "divineinsight": "Divine Insight",
        "divineintervention": "Divine Intervention",
        "divineire": "Divine Ire",
        "divinejustice": "Divine Justice",
        "divineordeal": "Divine Ordeal",
        "divinepardon": "Divine Pardon",
        "divinepower": "Divine Power",
        "divineprotection": "Divine Protection",
        "divinepunishment": "Divine Punishment",
        "divineretributionm": "Divine Retribution",
        "divineretribution": "Divine Retribution",
        "divineshield": "Divine Shield",
        "divinesmite": "Divine Smite",
        "divinestrike": "Divine Strike",
        "doityourself": "Do it yourself!",
        "doomsday": "Doomsday",
        "doublebubble": "Double Bubble",
        "doublechop": "Double Chop",
        "doubleshot": "Double Shot",
        "doubleslash": "Double Slash",
        "doubleslashm": "Double Slash",
        "doublestrike": "Double Strike",
        "doubletrouble": "Double Trouble",
        "doubletroubleplus": "Double Trouble",
        "downpour": "Downpour",
        "downpouritem": "Downpour",
        "dracomancerstaff": "Dracomancer Staff",
        "dragonbite": "Dragon Bite",
        "dragonroar": "Dragon Roar",
        "dragonscales": "Dragon Scales",
        "drainlife": "Drain Life",
        "dreadslash": "Dread Slash",
        "dreadfulwave": "Dreadful Wave",
        "dreamsphere": "Dream Sphere",
        "dreamcatcher": "Dreamcatcher",
        "drill": "Drill",
        "druidicamulet": "Druidic Amulet",
        "dryadmask": "Dryad Mask",
        "dualstrikem": "Dual Strike",
        "dualstrike": "Dual Strike",
        "dualwield": "Dual Wield",
        "dungtoss": "Dung Toss",
        "durandal": "Durandal",
        "duskpunishment": "Dusk Punishment",
        "dustdevil": "Dust Devil",
        "dwarffortress": "Dwarf Fortress",
        "eardestroyer": "Ear Destroyer",
        "earthguard": "Earth Guard",
        "earthquake": "Earthquake",
        "earthquakeeasy": "Earthquake",
        "earthwave": "Earthwave",
        "earthwaveplus": "Earthwave",
        "edgeoffury": "Edge of Fury",
        "eeriering": "Eerie Ring",
        "electricblobpet": "Electric Blob",
        "electricblob": "Electric Blob",
        "electricdischarge": "Electric Discharge",
        "electricpuddle": "Electric Puddle",
        "electricpulse": "Electric Pulse",
        "electricsaw": "Electric Saw",
        "electricsplash": "Electric Splash",
        "electricsplashpet": "Electric Splash",
        "electricweapons": "Electric Weapons",
        "electricitymanual": "Electricity Manual",
        "electrocute": "Electrocute",
        "electrocution": "Electrocution",
        "electroshock": "Electroshock",
        "elementalbolt": "Elemental Bolt",
        "elementalproliferation": "Elemental Proliferation",
        "elementalward": "Elemental Ward",
        "elementalnova": "Elemental Wave",
        "elementalnovaspecial": "Elemental Wave",
        "elementalnovaspecialb": "Elemental Wave",
        "elvenagility": "Elven Agility",
        "elvencuirass": "Elven Cuirass",
        "elvenquiver": "Elven Quiver",
        "embersofdefense": "Embers of Defense",
        "embersofpower": "Embers of Power",
        "embersofspeed": "Embers of Speed",
        "emberstorm": "Emberstorm",
        "emberstormspecial": "Emberstorm",
        "emeraldnecklace": "Emerald Necklace",
        "emeraldstaff": "Emerald Staff",
        "empower": "Empower",
        "enchantweapons": "Enchant Weapons",
        "enchantment": "Enchantment",
        "enchantment2": "Enchantment2",
        "encore": "Encore",
        "endlessabyss": "Endless Abyss",
        "endlessbag": "Endless Bag",
        "endlessstorm": "Endless Storm",
        "endurepain": "Endure Pain",
        "energizingserenade": "Energizing Serenade",
        "energyshield": "Energy Shield",
        "enervate": "Enervate",
        "enfeeble": "Enfeeble",
        "enlightened": "Enlightened",
        "enrage": "Enrage",
        "entanglingroots": "Entangling Roots",
        "entanglingrootseasy": "Entangling Roots",
        "entomb": "Entomb",
        "entrenchm": "Entrench",
        "entrench": "Entrench",
        "equivalentexchange": "Equivalent Exchange",
        "eternalcandle": "Eternal Candle",
        "eternallullaby": "Eternal Lullaby",
        "eternalrecall": "Eternal Recall",
        "ethereal": "Ethereal",
        "etherealknives": "Ethereal Knives",
        "etherealweapons": "Ethereal Weapons",
        "evanescence": "Evanescence",
        "evasivemaneuver": "Evasive Maneuver",
        "eviscerate": "Eviscerate",
        "evocation": "Evocation",
        "excaliburn": "Excaliburn",
        "expectedprophecy": "Expected Prophecy",
        "experttracker": "Expert Tracker",
        "experttrackerstart": "Expert Tracker",
        "exploitopenings": "Exploit Openings",
        "explosivegift": "Explosive Gift",
        "explosiveshot": "Explosive Shot",
        "exposearmor": "Expose Armor",
        "fade": "Fade",
        "faeborgscale": "Faeborg Scale",
        "faithring": "Faith Ring",
        "falconshot": "Falcon Shot",
        "falconshotstart": "Falcon Shot",
        "fallenpromise": "Fallen Promise",
        "familyjewels": "Family Jewels",
        "fanoficicles": "Fan of Icicles",
        "fanofknives": "Fan of Knives",
        "fantheflames": "Fan the Flames",
        "fantheflamesm": "Fan the Flames",
        "fanaticism": "Fanaticism",
        "farshot": "Far Shot",
        "faststrike": "Fast Strike",
        "fatedfuture": "Fated Future",
        "fearlessness": "Fearlessness",
        "fearlessnessally": "Fearlessness",
        "featherbarrage": "Feather Barrage",
        "feedtherich": "Feed The Rich",
        "feint": "Feint",
        "fenny": "Fenny",
        "fervency": "Fervency",
        "fervencyally": "Fervency",
        "ferventprotection": "Fervent Protection",
        "ferventring": "Fervent Ring",
        "fieryblow": "Fiery Blow",
        "fierycoat": "Fiery Coat",
        "fieryfist": "Fiery Fist",
        "fieryjabs": "Fiery Jabs",
        "fieryjabsplus": "Fiery Jabs",
        "fierynova": "Fiery Nova",
        "fierynovam": "Fiery Nova",
        "fieryshieldm": "Fiery Shield",
        "fieryshield": "Fiery Shield",
        "fieryshieldstart": "Fiery Shield",
        "fierywand": "Fiery Wand",
        "fieryweaponsm": "Fiery Weapons",
        "fieryweapons": "Fiery Weapons",
        "findweakness": "Find Weakness",
        "fireblast": "Fire Blast",
        "firebolt": "Fire Bolt",
        "firebook": "Fire Book",
        "firebrand": "Fire Brand",
        "fireclaw": "Fire Claw",
        "fireember": "Fire Ember",
        "fireemberm": "Fire Ember",
        "fireemberplus": "Fire Ember",
        "fireemberitem": "Fire Ember",
        "fireinthehole": "Fire in the Hole!",
        "firelaser": "Fire Laser",
        "firerune": "Fire Rune",
        "fireslash": "Fire Slash",
        "fireball": "Fireball",
        "fireballm": "Fireball",
        "fireballmeasy": "Fireball",
        "flameball": "Fireball",
        "flameballbelphplus": "Fireball",
        "fireproof": "Fireproof",
        "firestorm": "Firestorm",
        "firstaid": "First Aid",
        "fishingnet": "Fishing Net",
        "fishingrod": "Fishing Rod",
        "fishplosion": "Fishplosion",
        "fistofthedamned": "Fists of the Damned",
        "flail": "Flail",
        "flamedancer": "Flame Dancer",
        "flamehoarding": "Flame Hoarding",
        "flamestorm": "Flame Storm",
        "flamestrike": "Flamestrike",
        "flamingaura": "Flaming Aura",
        "flamingsword": "Flaming Sword",
        "flamy": "Flamy",
        "flankingstrikem": "Flanking Strike",
        "flankingstrike": "Flanking Strike",
        "flare": "Flare",
        "flash": "Flash",
        "flashitem": "Flash",
        "flashfreeze": "Flash Freeze",
        "flashfreezem": "Flash Freeze",
        "flashfreezemm": "Flash Freeze",
        "flashheal": "Flash Heal",
        "flay": "Flay",
        "flowershuriken": "Flower Shuriken",
        "flowerstream": "Flower Stream",
        "fluffy": "Fluffy",
        "flute": "Flute",
        "escapecrystal": "Fly Away",
        "escapegold": "Fly Away",
        "escapejade": "Fly Away",
        "escapescourge": "Fly Away",
        "flyhigh": "Fly High",
        "flyhighplus": "Fly High",
        "flynest": "Fly Nest",
        "flynestplus": "Fly Nest",
        "focusheal": "Focus Heal",
        "followup": "Follow-up",
        "forbiddenpower": "Forbidden Power",
        "foresight": "Foresight",
        "forestallies": "Forest Allies",
        "forestallya": "Forest Ally",
        "forestallyb": "Forest Ally",
        "forestallyc": "Forest Ally",
        "forestbanner": "Forest Banner",
        "forestcrown": "Forest Crown",
        "fortunetelling": "Fortune Telling",
        "fouleruption": "Foul Eruption",
        "foulremedy": "Foul Remedy",
        "fountainpen": "Fountain Pen",
        "fourleafclover": "Four Leaf Clover",
        "freelover": "Free Lover",
        "freezecorruption": "Freeze",
        "freezingink": "Freezing Ink",
        "freezingslash": "Freezing Slash",
        "frenziedcarnage": "Frenzied Carnage",
        "frenziedtermites": "Frenzied Termites",
        "frenziedtermitespet": "Frenzied Termites",
        "frenziedtermitesplus": "Frenzied Termites",
        "freshmeat": "Fresh Meat!",
        "freshmeatstart": "Fresh Meat!",
        "freshmeatyogger": "Fresh Meat!",
        "friendlytadpole": "Friendly Tadpole",
        "frightened": "Frightened",
        "frostaxe": "Frost Axe",
        "frostaxes": "Frost Axes",
        "frostbreath": "Frost Breath",
        "frostbreathm": "Frost Breath",
        "frostharpoon": "Frost Harpoon",
        "frostnova": "Frost Nova",
        "frostnovam": "Frost Nova",
        "frostrune": "Frost Rune",
        "frostrunem": "Frost Rune",
        "frostvolley": "Frost Volley",
        "frostweapons": "Frost Weapons",
        "frostbolt": "Frostbolt",
        "frostboltm": "Frostbolt",
        "frostfirering": "Frostfire Ring",
        "frostguard": "Frostguard",
        "frozenarrows": "Frozen Arrows",
        "frozenbash": "Frozen Bash",
        "frozencarp": "Frozen Carp",
        "frozenheirloom": "Frozen Heirloom",
        "frozenorb": "Frozen Orb",
        "frozenpufferfish": "Frozen Pufferfish",
        "frozentear": "Frozen Tear",
        "frozentomahawk": "Frozen Tomahawk",
        "fungaloutbreak": "Fungal Outbreak",
        "fungusroot": "Fungus Root",
        "fungussurge": "Fungus Surge",
        "furiouscarp": "Furious Carp",
        "furiousslashm": "Furious Slash",
        "furiousslash": "Furious Slash",
        "furiousylmer": "Furious Ylmer",
        "fusionlaser": "Fusion Laser",
        "gardenofthorns": "Garden of Thorns",
        "garnetearrings": "Garnet Earrings",
        "gauntlets": "Gauntlets",
        "getout": "Get Out!",
        "geyser": "Geyser",
        "geyserm": "Geyser",
        "gihlrunestone": "Gihl Runestone",
        "gildedplate": "Gilded Plate",
        "givefish": "Give Fish",
        "givetothepoor": "Give To The Poor",
        "glacialhammer": "Glacial Hammer",
        "gladiatorhelmet": "Gladiator Helmet",
        "gloom": "Gloom",
        "gloomyburst": "Gloomy Burst",
        "gloves": "Gloves",
        "glovesofagility": "Gloves of Agility",
        "goblinamulet": "Goblin Amulet",
        "godlystrength": "Godly Strength",
        "goggles": "Goggles",
        "goldcard": "Gold",
        "goldyshardscard": "Gold and Shards",
        "goldyshardscardb": "Gold and Shards",
        "goldchain": "Gold Chain",
        "goldring": "Gold Ring",
        "goldenbell": "Golden Bell",
        "goldenchalice": "Golden Chalice",
        "goldencloak": "Golden Cloak",
        "goldencross": "Golden Cross",
        "goldenharp": "Golden Harp",
        "goldenlaurel": "Golden Laurel",
        "gorge": "Gorge",
        "gourmetmeat": "Gourmet Meat",
        "grandcross": "Grand Cross",
        "grandcrossm": "Grand Cross",
        "graspheart": "Grasp Heart",
        "gravitywell": "Gravity Well",
        "gravitywelleasy": "Gravity Well",
        "greaterheal": "Greater Heal",
        "greaterhealthpotion": "Greater Health Potion",
        "greatermanapotion": "Greater Mana Potion",
        "grimoireofflames": "Grimoire of Flames",
        "grindingwheel": "Grinding Wheel",
        "groundslamm": "Ground Slam",
        "groundslam": "Ground Slam",
        "grouptherapy": "Group Therapy",
        "grudge": "Grudge",
        "guard": "Guard",
        "guardianangel": "Guardian Angel",
        "gunshot": "Gunshot",
        "gutripper": "Gut Ripper",
        "hailstorm": "Hailstorm",
        "hallucination": "Hallucination",
        "hammerofjustice": "Hammer of Justice",
        "hamstring": "Hamstring",
        "handbook": "Handbook",
        "hardshell": "Hard Shell",
        "hardening": "Hardening",
        "harley": "Harley",
        "harshcauterization": "Harsh Cauterization",
        "harvest": "Harvest",
        "hatch": "Hatch",
        "hatchcorrupt": "Hatch",
        "hatchplus": "Hatch",
        "hawkeye": "Hawkeye",
        "headbuttm": "Headbutt",
        "headbuttmm": "Headbutt",
        "headbutt": "Headbutt",
        "heal": "Heal",
        "healingbook": "Healing Book",
        "healingrain": "Healing Rain",
        "healingrainm": "Healing Rain",
        "healingserenadem": "Healing Serenade",
        "healingserenade": "Healing Serenade",
        "healingtotemh": "Healing Totem",
        "healingtotem": "Healing Totem",
        "healingtotemm": "Healing Totem",
        "healthpotion": "Health Potion",
        "clone": "Healthy Clone",
        "heartamulet": "Heart Amulet",
        "heartofthorns": "Heart of Thorns",
        "heatassimilation": "Heat Assimilation",
        "heatassimilationitem": "Heat Assimilation",
        "heatlaserm": "Heat Laser",
        "heatlaser": "Heat Laser",
        "heatlaserstart": "Heat Laser",
        "heatsurge": "Heat Surge",
        "heattransfer": "Heat Transfer",
        "heattransferm": "Heat Transfer",
        "heatwave": "Heat Wave",
        "heatwavem": "Heat Wave",
        "kiteshield": "Heater Shield",
        "heatshield": "Heater Shield",
        "heavenlyarmaments": "Heavenly Armaments",
        "heavenlyblessing": "Heavenly Blessing",
        "heavenlyblessingm": "Heavenly Blessing",
        "heavenlyjustice": "Heavenly Justice",
        "heavenlyprotection": "Heavenly Protection",
        "heavyartillery": "Heavy Artillery",
        "heavybelt": "Heavy Belt",
        "heavymetal": "Heavy Metal",
        "heavypackage": "Heavy Package",
        "heavystrike": "Heavy Strike",
        "heavyweaponry": "Heavy Weaponry",
        "hellmark": "Hell Mark",
        "hellmarkitem": "Hell Mark",
        "hellblade": "Hellblade",
        "hellfire": "Hellfire",
        "hellflame": "Hellflame",
        "helmet": "Helmet",
        "helpme": "Help Me!",
        "helpmeeasy": "Help Me!",
        "helpinghand": "Helping Hand",
        "heraldofdawn": "Herald of Dawn",
        "heraldofdusk": "Herald of Dusk",
        "herding": "Herding",
        "heresy": "Heresy",
        "heronscourage": "Herons's Courage",
        "hexproof": "Hexproof",
        "hiddenhand": "Hidden Hand",
        "hiddenweapon": "Hidden Weapon",
        "hideandseek": "Hide and Seek",
        "hightchancellorstaff": "High Chancellor Staff",
        "hightide": "High Tide",
        "hitandrunm": "Hit and Run",
        "hitandrun": "Hit and Run",
        "holyaegis": "Holy Aegis",
        "holybarrage": "Holy Barrage",
        "holyblast": "Holy Blast",
        "holyblobpet": "Holy Blob",
        "holyblob": "Holy Blob",
        "holybook": "Holy Book",
        "holycleave": "Holy Cleave",
        "holycrusader": "Holy Crusader",
        "holyfire": "Holy Fire",
        "holygrail": "Holy Grail",
        "holyhammer": "Holy Hammer",
        "holylance": "Holy Lance",
        "holylanceeasy": "Holy Lance",
        "holynova": "Holy Nova",
        "holynovam": "Holy Nova",
        "holynovamally": "Holy Nova",
        "holypuddle": "Holy Puddle",
        "holyripple": "Holy Ripple",
        "holyrune": "Holy Rune",
        "holyrush": "Holy Rush",
        "holyslash": "Holy Slash",
        "holyslashw": "Holy Slash",
        "holysmite": "Holy Smite",
        "holysmitem": "Holy Smite",
        "holysmitemc": "Holy Smite",
        "holysmiteitem": "Holy Smite",
        "holysplash": "Holy Splash",
        "holysplashpet": "Holy Splash",
        "holystorm": "Holy Storm",
        "holystormm": "Holy Storm",
        "divinireprotection": "Holy Symbol",
        "holysymbol": "Holy Symbol",
        "honorable": "Honorable",
        "hornethelmet": "Horned Helmet",
        "hound": "Hound",
        "hourglassofdeath": "Hourglass of Death",
        "howlhound": "Howl",
        "howlwolf": "Howl",
        "howl": "Howl",
        "howlpet": "Howl",
        "huntersmark": "Hunter's Mark",
        "huntingring": "Hunting Ring",
        "hurryup": "Hurry Up",
        "hurryupitem": "Hurry Up",
        "hydrabite": "Hydra Bite",
        "hydrablood": "Hydra Blood",
        "hydraegg": "Hydra Egg",
        "hypnoshell": "Hypno Shell",
        "hypnotism": "Hypnotism",
        "hypnotismeasy": "Hypnotism",
        "hypotermia": "Hypothermia",
        "icebarrier": "Ice Barrier",
        "icebarrierm": "Ice Barrier",
        "iceclaws": "Ice Claws",
        "icecomet": "Ice Comet",
        "icecometm": "Ice Comet",
        "icefall": "Ice Fall",
        "icefallh": "Ice Fall",
        "icelance": "Ice Lance",
        "icelancem": "Ice Lance",
        "iceorb": "Ice Orb",
        "iceprison": "Ice Prison",
        "iceshotm": "Ice Shot",
        "iceshot": "Ice Shot",
        "icebreaker": "Icebreaker",
        "icicle": "Icicle",
        "iciclebarrage": "Icicle Barrage",
        "iciclelauncher": "Icicle Launcher",
        "iciclelaunchereasy": "Icicle Launcher",
        "iciclelauncheritem": "Icicle Launcher",
        "icyblobpet": "Icy Blob",
        "icyblob": "Icy Blob",
        "icyblow": "Icy Blow",
        "icyheadbutt": "Icy Headbutt",
        "icypuddle": "Icy Puddle",
        "icysplash": "Icy Splash",
        "icysplashpet": "Icy Splash",
        "icytornado": "Icy Tornado",
        "icytornadoeasy": "Icy Tornado",
        "icyveins": "Icy Veins",
        "icywand": "Icy Wand",
        "ignidohscore": "Ignidoh's Core",
        "igniscloack": "Ignis Cloak",
        "ignite": "Ignite",
        "immolate": "Immolate",
        "immortal": "Immortal",
        "impstatuette": "Imp Statuette",
        "impalem": "Impale",
        "impale": "Impale",
        "impalingroot": "Impaling Root",
        "impalingrootm": "Impaling Root",
        "impiousburst": "Impious Burst",
        "improvedfireball": "Improved Fireball",
        "improvedlaser": "Improved Laser",
        "improvedrapidfire": "Improved Rapid Fire",
        "indomitable": "Indomitable",
        "inferno": "Inferno",
        "infernom": "Inferno",
        "infestation": "Infestation",
        "infuriatem": "Infuriate",
        "infuriate": "Infuriate",
        "infusecourage": "Infuse Courage",
        "innercombustion": "Inner Combustion",
        "innerfire": "Inner Fire",
        "innervate": "Innervate",
        "intercept": "Intercept",
        "intimidatem": "Intimidate",
        "intimidate": "Intimidate",
        "invigoratingblow": "Invigorating Blow",
        "invisibility": "Invisibility",
        "ironfortress": "Iron Fortress",
        "ironkanabo": "Iron Kanabo",
        "ironwand": "Iron Wand",
        "ironclad": "Ironclad",
        "irritatingbark": "Irritating Bark",
        "itchyburn": "Itchy Burn",
        "ivorytower": "Ivory Tower",
        "jadering": "Jade Ring",
        "jewelersring": "Jeweler's Ring",
        "jinglebell": "Jingle Bell",
        "justicarring": "Justicar Ring",
        "killpet": "Kill Pet",
        "killerbite": "Killer Bite",
        "killerinstinc": "Killer Instinct",
        "killerinstincstart": "Killer Instinct",
        "kindle": "Kindle",
        "kindlem": "Kindle",
        "kingmaker": "Kingmaker",
        "largeshield": "Kite Shield",
        "knifebarrage": "Knife Barrage",
        "knightspride": "Knight's Pride",
        "landslide": "Landslide",
        "landslideeasy": "Landslide",
        "lapisnecklace": "Lapis Necklace",
        "largepouch": "Large Pouch",
        "lastdawn": "Last Dawn",
        "lastguardian": "Last Guardian",
        "lasthope": "Last Hope",
        "lastrequiem": "Last Requiem",
        "lastreward": "Last Reward",
        "laststand": "Last Stand",
        "lavablobpet": "Lava Blob",
        "lavablob": "Lava Blob",
        "lavabomb": "Lava Bomb",
        "lavabombm": "Lava Bomb",
        "lavabursts": "Lava Bursts",
        "lavacrystal": "Lava Crystal",
        "lavaeruption": "Lava Eruption",
        "lavaorb": "Lava Orb",
        "lavapotion": "Lava Potion",
        "lavapuddle": "Lava Puddle",
        "lavasplash": "Lava Splash",
        "lavasplashpet": "Lava Splash",
        "lavaspray": "Lava Spray",
        "lawofdarkness": "Law of Darkness",
        "lawoflight": "Law of Light",
        "layonhands": "Lay on Hands",
        "layonpaws": "Lay on Paws",
        "layonpawsstart": "Lay on Paws",
        "leafclaw": "Leaf Claw",
        "leafclawplus": "Leaf Claw",
        "leapslam": "Leap Slam",
        "leatherarmor": "Leather Armor",
        "leatherboots": "Leather Boots",
        "leathergloves": "Leather Gloves",
        "letthefeastbegin": "Let the Feast Begin!",
        "lethalshot": "Lethal Shot",
        "lethargy": "Lethargy",
        "liante": "Lianty",
        "librarian": "Librarian",
        "lichstouch": "Lich's Touch",
        "lifeessence": "Life Essence",
        "lifetap": "Life Tap",
        "lifetotem": "Life Totem",
        "lifebloom": "Lifebloom",
        "lifebloomplus": "Lifebloom",
        "lightfeet": "Light Feet",
        "lightbringer": "Lightbringer",
        "lightningboltcorrption": "Lightning Bolt",
        "lightningboltm": "Lightning Bolt",
        "lightningboltboon": "Lightning Bolt",
        "lightningboltchallen": "Lightning Bolt",
        "lightningboltitem": "Lightning Bolt",
        "lightningbook": "Lightning Book",
        "lightningbreath": "Lightning Breath",
        "lightningrod": "Lightning Rod",
        "lightningrune": "Lightning Rune",
        "lightningspear": "Lightning Spear",
        "livingbomb": "Living Bomb",
        "livingbombplus": "Living Bomb",
        "livingflame": "Living Flame",
        "livingforest": "Living Forest",
        "lockpicks": "Lockpicks",
        "lonelyblob": "Lonely Blob",
        "longbow": "Long Bow",
        "lostmail": "Lost Mail",
        "loveenhancer": "Love Enhancer",
        "lowselfesteem": "Low Self-Esteem",
        "luckypaw": "Lucky Paw",
        "luminousbarrier": "Luminous Barrier",
        "luminousbeam": "Luminous Beam",
        "lunaring": "Luna Ring",
        "lunargrace": "Lunar Grace",
        "madnessring": "Madness Ring",
        "magicdevour": "Magic Devour",
        "magicmushroom": "Magic Mushroom",
        "magictome": "Magic Tome",
        "magmablob": "Magma Blob",
        "magmaprison": "Magma Prison",
        "magmaprisonm": "Magma Prison",
        "magmasplash": "Magma Splash",
        "magmasurge": "Magma Surge",
        "magmasurgeplus": "Magma Surge",
        "magusstaff": "Magus Staff",
        "maim": "Maim",
        "malediction": "Malediction",
        "maledictionstart": "Malediction",
        "maliciouseye": "Malicious Eye",
        "maliciousfarewell": "Malicious Farewell",
        "managem": "Mana Gem",
        "manaloop": "Mana Loop",
        "manapotion": "Mana Potion",
        "manashield": "Mana Shield",
        "manasurge": "Mana Surge",
        "maneuverh": "Maneuver",
        "maneuver": "Maneuver",
        "marktarget": "Mark Target",
        "marktheprey": "Mark the Prey",
        "martyrdom": "Martyrdom",
        "masscounterspell": "Mass Counterspell",
        "massdilute": "Mass Dilute",
        "massdispel": "Mass Dispel",
        "masshysteria": "Mass Hysteria",
        "masshysteria 1": "Mass Hysteria",
        "massinvisibility": "Mass Invisibility",
        "matriarchsclaw": "Matriarch's Claw",
        "meato": "Meat",
        "meat": "Meat",
        "meatbag": "Meat Bag",
        "meatfeast": "Meat Feast",
        "meditate": "Meditate",
        "megabonk": "Mega Bonk",
        "megaphone": "Megaphone",
        "melancholy": "Melancholy",
        "melodicrhythm": "Melodic Rhythm",
        "meltedplating": "Melted Plating",
        "meltingflame": "Melting Flame",
        "menacingroar": "Menacing Roar",
        "mentalshake": "Mental Shake",
        "mentalshell": "Mental Shell",
        "merchantbadge": "Merchant Badge",
        "merciful": "Merciful",
        "merciless": "Merciless",
        "mesmericmirage": "Mesmeric Mirage",
        "metalblobpet": "Metal Blob",
        "metalblob": "Metal Blob",
        "metalpuddle": "Metal Puddle",
        "metalsplash": "Metal Splash",
        "metalsplashpet": "Metal Splash",
        "meteorshower": "Meteor Shower",
        "meteorshowerm": "Meteor Shower",
        "meteorite": "Meteorite",
        "meteoritecorruption": "Meteorite",
        "meteoritem": "Meteorite",
        "mindblast": "Mind Blast",
        "mindbolt": "Mind Bolt",
        "mindbook": "Mind Book",
        "mindtrick": "Mind Trick",
        "mindtwist": "Mind Twist",
        "mindvisions": "Mind Visions",
        "minotaurhorn": "Minotaur Horn",
        "mirrorimages": "Mirror Images",
        "mirrorofkalandra": "Mirror of Kassandra",
        "misery": "Misery",
        "missilebarrage": "Missile Barrage",
        "mixedsalad": "Mixed Salad",
        "mnemrunestone": "Mnem Runestone",
        "molebuster": "Mole Buster",
        "moonbeam": "Moon Beam",
        "mooncatalyst": "Moon Catalyst",
        "moonguard": "Moon Guard",
        "moonguardplus": "Moon Guard",
        "moonfire": "Moonfire",
        "moonfirepet": "Moonfire",
        "moonfireplus": "Moonfire",
        "moonfireitem": "Moonfire",
        "morningstar": "Morning Star",
        "mortalstrike": "Mortal Strike",
        "mountainking": "Mountain King",
        "mozzy": "Mozzy",
        "multishotm": "Multishot",
        "multishot": "Multishot",
        "musicsheet": "Music Sheet",
        "mysticstaff": "Mystic Staff",
        "mysticalice": "Mystical Ice",
        "naturescall": "Nature's Call",
        "naturescallplus": "Nature's Call",
        "necromancerrobe": "Necromancer Robe",
        "necropotence": "Necropotence",
        "necroticburst": "Necrotic Burst",
        "nephridiumacid": "Nephridium Acid",
        "netherblade": "Netherblade",
        "neurotoxin": "Neurotoxin",
        "neverendingstory": "Neverending Story",
        "neverfrost": "Neverfrost",
        "nightterror": "Night Terror",
        "nightmare": "Nightmare",
        "nightveil": "Nightveil",
        "ninjascroll": "Ninja Scroll",
        "nobleshield": "Noble Shield",
        "noxiouseruption": "Noxious Eruption",
        "noxiousinjection": "Noxious Injection",
        "noxiousinjectionplus": "Noxious Injection",
        "noxiousparasites": "Noxious Parasites",
        "nullifier": "Nullifier",
        "numbingstrike": "Numbing Strike",
        "obfuscate": "Obfuscate",
        "obscurebarrier": "Obscure Barrier",
        "obscurestrike": "Obscure Strike",
        "obsidiandagger": "Obsidian Dagger",
        "obsidianring": "Obsidian Ring",
        "obsidianrod": "Obsidian Staff",
        "obsidiantower": "Obsidian Tower",
        "oceanicbarrier": "Oceanic Barrier",
        "oculy": "Oculy",
        "odeofwar": "Ode of War",
        "oldhorseshoe": "Old Horseshoe",
        "omenofperil": "Omen of Peril",
        "omnipotence": "Omnipotence",
        "omniscience": "Omniscience",
        "onslaught": "Onslaught",
        "onyxamulet": "Onyx Amulet",
        "opalring": "Opal Ring",
        "openwound": "Open Wound",
        "oppression": "Oppression",
        "oppressioneasy": "Oppression",
        "oppressionm": "Oppression",
        "orbofstorms": "Orb of Storms",
        "orby": "Orby",
        "osmiumfeet": "Osmium Feet",
        "overbearingroar": "Overbearing Roar",
        "overcharge": "Overcharge",
        "overcoat": "Overcoat",
        "overgrowth": "Overgrowth",
        "overgrowthplus": "Overgrowth",
        "overheat": "Overheat",
        "overheatitem": "Overheat",
        "overpower": "Overpower",
        "overwhelm": "Overwhelm",
        "owlblessing": "Owl Blessing",
        "owlblessingm": "Owl Blessing",
        "owlscreech": "Owl Screech",
        "pacifism": "Pacifism",
        "packleader": "Pack Leader",
        "painsupresion": "Pain Suppression",
        "paladingauntlets": "Paladin Gauntlets",
        "palisade": "Palisade",
        "palisadeitem": "Palisade",
        "panacea": "Panacea",
        "pandemonium": "Pandemonium",
        "pandorasbox": "Pandora's Box",
        "panicscream": "Panic Scream",
        "paralizingvenom": "Paralyzing Venom",
        "paralizingvenomeasy": "Paralyzing Venom",
        "paralizingvenomitem": "Paralyzing Venom",
        "paranoia": "Paranoia",
        "parrym": "Parry",
        "parry": "Parry",
        "patience": "Patience",
        "statustransfer": "Payback",
        "pebblethrow": "Pebble Throw",
        "penance": "Penance",
        "penitencering": "Penitence Ring",
        "invisibilitym": "Perfect Invisibility",
        "perfectparry": "Perfect Parry",
        "perniciousclaw": "Pernicious Claw",
        "perseverance": "Perseverance",
        "pestilence": "Pestilence",
        "petcall": "Pet Call",
        "petcallplus": "Pet Call",
        "petcallrondo": "Pet Call",
        "petcallrondoplus": "Pet Call",
        "petrify": "Petrify",
        "phantomechoes": "Phantom Echoes",
        "phantomechoesm": "Phantom Echoes",
        "phoenix": "Phoenix",
        "piercinghowl": "Piercing Howl",
        "piercingstrike": "Piercing Strike",
        "piercingstrikeeasy": "Piercing Strike",
        "piercingstrikef": "Piercing Strike",
        "piercingstrikem": "Piercing Strike",
        "piggybank": "Piggy Bank",
        "pillage": "Pillage",
        "piousring": "Pious Ring",
        "plaguerat": "Plague Rat",
        "plagueshotm": "Plague Shot",
        "plagueshot": "Plague Shot",
        "platemail": "Platemail",
        "platinumring": "Platinum Ring",
        "plumbing": "Plumbing",
        "pointblankblast": "Point Blank Blast",
        "pointyhat": "Pointy Hat",
        "poisoncatalyst": "Poison Catalyst",
        "poisondart": "Poison Dart",
        "poisonfields": "Poison Fields",
        "poisonflask": "Poison Flask",
        "poisonsplash": "Poison Splash",
        "poisonsplashitem": "Poison Splash",
        "poisonsplashitemb": "Poison Splash",
        "poisonspray": "Poison Spray",
        "poisoned": "Poisoned",
        "poisoneddagger": "Poisoned Dagger",
        "poisoneddaggers": "Poisoned Daggers",
        "poisonousassault": "Poisonous Assault",
        "poisonousbite": "Poisonous Bite",
        "poisonousbiteitem": "Poisonous Bite",
        "poisonousblood": "Poisonous Blood",
        "poisonousbreath": "Poisonous Breath",
        "poisonousshotm": "Poisonous Shot",
        "poisonousshot": "Poisonous Shot",
        "pommelm": "Pommel",
        "pommel": "Pommel",
        "popcornburst": "Popcorn Burst",
        "popcornburstm": "Popcorn Burst",
        "pound": "Pound",
        "powercoil": "Power Coil",
        "powerglove": "Power Glove",
        "powerslave": "Powerslave",
        "powerslavestart": "Powerslave",
        "praisethesun": "Praise the Sun",
        "prayerofhealing": "Prayer of Healing",
        "prayerofprotection": "Prayer of Protection",
        "precisestrike": "Precise Strike",
        "predator": "Predator",
        "premiummeato": "Premium Meat",
        "premiummeat": "Premium Meat",
        "prescription": "Prescription",
        "primalnecklace": "Primal Necklace",
        "prismaticfield": "Prismatic Field",
        "prismaticfieldm": "Prismatic Field",
        "prismaticfieldmally": "Prismatic Field",
        "profane": "Profane",
        "profanem": "Profane",
        "prophetstaff": "Prophet's Staff",
        "protect": "Protect",
        "protectspecial": "Protect",
        "protectfromevil": "Protect from Evil",
        "provoke": "Provoke",
        "psychicscream": "Psychic Scream",
        "psychicscreamm": "Psychic Scream",
        "psychicscreams": "Psychic Scream",
        "pufferfish": "Pufferfish",
        "pulsingheal": "Pulsing Heal",
        "pulsingvigor": "Pulsing Vigor",
        "pulsingvigorm": "Pulsing Vigor",
        "pulverize": "Pulverize",
        "pummel": "Pummel",
        "punch": "Punch",
        "puncturem": "Puncture",
        "puncture": "Puncture",
        "purgetheweak": "Purge the Weak",
        "purgethewicked": "Purge the Wicked",
        "purgingflame": "Purging Flame",
        "purgingray": "Purging Ray",
        "purgingwinds": "Purging Winds",
        "purify": "Purify",
        "purrification": "Purrification",
        "pushforward": "Push Forward",
        "putrefaction": "Putrefaction",
        "pyroblast": "Pyroblast",
        "pyroblastm": "Pyroblast",
        "pyroblastmeasy": "Pyroblast",
        "pyroblastmeasyy": "Pyroblast",
        "pyromancerrobe": "Pyromancer Robe",
        "quickshotm": "Quick Shot",
        "quickshot": "Quick Shot",
        "quill": "Quill",
        "quillrain": "Quill Rain",
        "rabid": "Rabid",
        "rabidplus": "Rabid",
        "rabidbite": "Rabid Bite",
        "radiance": "Radiance",
        "radiantassault": "Radiant Assault",
        "radiantburst": "Radiant Burst",
        "raggeddoll": "Ragged Doll",
        "ragingblow": "Raging Blow",
        "raiderslicer": "Raider Slicer",
        "rain": "Rain",
        "rainofarrows": "Rain of Arrows",
        "rainofthorns": "Rain of Thorns",
        "raincoat": "Raincoat",
        "raisefighter": "Raise Fighter",
        "raisefighterm": "Raise Fighter",
        "raisefighters": "Raise Fighters",
        "raisefightersm": "Raise Fighters",
        "raisemage": "Raise Mage",
        "raisemages": "Raise Mages",
        "raisepriest": "Raise Priest",
        "raisepriests": "Raise Priests",
        "raisewarlock": "Raise Warlock",
        "raisewarlocks": "Raise Warlocks",
        "rampage": "Rampage",
        "rangerarmor": "Ranger Armor",
        "rapidfirem": "Rapid Fire",
        "rapidfire": "Rapid Fire",
        "rapidmultiplication": "Rapid Multiplication",
        "rapidmultiplicationm": "Rapid Multiplication",
        "rapidshoots": "Rapid Shoots",
        "rapture": "Rapture",
        "ravenstaff": "Raven Staff",
        "rayoffrost": "Ray of Frost",
        "rayoffrostm": "Ray of Frost",
        "rayofhope": "Ray of Hope",
        "razor": "Razor",
        "reactivelaserdt": "Reactive Laser",
        "reactivelaserdto": "Reactive Laser",
        "reactivelaserm": "Reactive Laser",
        "reactivelaser": "Reactive Laser",
        "reaping": "Reaping",
        "reassemble": "Reassemble",
        "reassemblem": "Reassemble",
        "recklesscharge": "Reckless Charge",
        "recurringnightmare": "Recurring Nightmare",
        "redcape": "Red Cape",
        "redstorm": "Red Storm",
        "redemption": "Redemption",
        "redsteelcloack": "Redsteel Cloak",
        "reforgedcore": "Reforged Core",
        "regrowhead": "Regrow Head",
        "regrowth": "Regrowth",
        "reinforcedarmor": "Reinforced Armor",
        "reinforcedsteel": "Reinforced Steel",
        "rejuvenationpotion": "Rejuvenation Potion",
        "relentlessfury": "Relentless Fury",
        "rend": "Rend",
        "renew": "Renew",
        "repairarmorm": "Repair Armor",
        "repairarmor": "Repair Armor",
        "repentance": "Repentance",
        "repetitiontraining": "Repetition Training",
        "replenishment": "Replenishment",
        "reprisal": "Reprisal",
        "resurrection": "Resurrection",
        "retaliator": "Retaliator",
        "revealingflask": "Revealing Flask",
        "revealingstrike": "Revealing Strike",
        "revenge": "Revenge",
        "reverberantverse": "Reverberant Verse",
        "ricochet": "Ricochet",
        "righteousfire": "Righteous Fire",
        "rigidstance": "Rigid Stance",
        "ringoffire": "Ring of Fire",
        "ringofhope": "Ring of Hope",
        "ringofprotection": "Ring of Protection",
        "ringsofpower": "Rings of Power",
        "riposte": "Riposte",
        "rob": "Rob",
        "rosegarden": "Rose Garden",
        "rottenmeat": "Rotten Meat",
        "roundshield": "Round Shield",
        "royalcoin": "Royal Coin",
        "royalram": "Royal Ram",
        "rubyamulet": "Ruby Amulet",
        "rubycuirass": "Ruby Cuirass",
        "ruggedwrapping": "Rugged Wrapping",
        "ruinbolt": "Ruin Bolt",
        "ruminantbite": "Ruminant Bite",
        "runicdice": "Runic Dice",
        "rupturem": "Rupture",
        "rupture": "Rupture",
        "rustyarmor": "Rusty Armor",
        "sacredaxe": "Sacred Axe",
        "sacredbeam": "Sacred Beam",
        "sacredblow": "Sacred Blow",
        "sacredbolt": "Sacred Bolt",
        "sacredboltm": "Sacred Bolt",
        "sacredceremony": "Sacred Ceremony",
        "sacredceremonym": "Sacred Ceremony",
        "sacredground": "Sacred Ground",
        "sacredguard": "Sacred Guard",
        "sacredlightning": "Sacred Lightning",
        "sacredlightningm": "Sacred Lightning",
        "sacredrancor": "Sacred Rancor",
        "sacredshot": "Sacred Shot",
        "sacredtablet": "Sacred Tablet",
        "sad": "Sad",
        "sadtantrum": "Sad Tantrum",
        "safeguard": "Safeguard",
        "samuraiarmor": "Samurai Armor",
        "sanctification": "Sanctification",
        "sanctificationm": "Sanctification",
        "sanctuary": "Sanctuary",
        "sanctuarym": "Sanctuary",
        "sandstorm": "Sand Storm",
        "sandtornado": "Sand Tornado",
        "sapphireamulet": "Sapphire Amulet",
        "sapphirering": "Sapphire Ring",
        "sarcasticsonnet": "Sarcastic Sonnet",
        "sausagefactory": "Sausage Factory",
        "savantrobe": "Savant Robe",
        "saveitforlater": "Save It For Later",
        "sawblade": "Saw Blade",
        "sawtoothknife": "Sawtooth Knife",
        "scarabshield": "Scarab Shield",
        "scaraby": "Scaraby",
        "scattershot": "Scattershot",
        "scattershotm": "Scattershot",
        "scavenge": "Scavenge",
        "scholarrobe": "Scholar Robe",
        "scorchingflame": "Scorching Flame",
        "scorchingheat": "Scorching Heat",
        "scorchingray": "Scorching Ray",
        "scourgebarrier": "Scourge Barrier",
        "scourgeblast": "Scourge Blast",
        "scrollofdefense": "Scroll of Defense",
        "scrollofintellect": "Scroll of Intellect",
        "scrollofresurrection": "Scroll of Resurrection",
        "scrollofspeed": "Scroll of Speed",
        "scry": "Scry",
        "scryerstaff": "Scryer Staff",
        "seacurse": "Sea Curse",
        "searingblast": "Searing Blast",
        "searingdagger": "Searing Dagger",
        "searingnova": "Searing Nova",
        "searingtouch": "Searing Touch",
        "seashellamulet": "Seashell Amulet",
        "seashellring": "Seashell Ring",
        "secondwind": "Second Wind",
        "sentryalarm": "Sentry Alarm",
        "serenityring": "Serenity Ring",
        "serratedweapons": "Serrated Weapons",
        "settarget": "Set Target",
        "setup": "Setup",
        "severarterym": "Sever Artery",
        "severartery": "Sever Artery",
        "severeburn": "Severe Burn",
        "shacklesofwar": "Shackles Of War",
        "shadowawakening": "Shadow Awakening",
        "shadowawakeningm": "Shadow Awakening",
        "shadowbarrage": "Shadow Barrage",
        "shadowbinding": "Shadow Binding",
        "shadowbindingm": "Shadow Binding",
        "shadowbolt": "Shadow Bolt",
        "shadowboltm": "Shadow Bolt",
        "shadowbook": "Shadow Book",
        "shadowcleave": "Shadow Cleave",
        "shadowcloack": "Shadow Cloak",
        "shadowimbuement": "Shadow Imbuement",
        "shadowlance": "Shadow Lance",
        "shadowmend": "Shadow Mend",
        "shadowmendm": "Shadow Mend",
        "shadownova": "Shadow Nova",
        "shadownovaally": "Shadow Nova",
        "shadoworb": "Shadow Orb",
        "shadowrune": "Shadow Rune",
        "shadowslash": "Shadow Slash",
        "shadowwolf": "Shadow Wolf",
        "shadowstepm": "Shadowstep",
        "shadowstep": "Shadowstep",
        "shakeitoff": "Shake it off",
        "shakeitoffm": "Shake it off!",
        "shamanism": "Shamanism",
        "shardscard": "Shards",
        "sharingiscaring": "Sharing Is Caring",
        "sharpscimitar": "Sharp Scimitar",
        "sharpenm": "Sharpen",
        "sharpenmw": "Sharpen",
        "sharpenspecial": "Sharpen",
        "sharpen": "Sharpen",
        "sharpeningcuts": "Sharpening Cuts",
        "sharpeningknife": "Sharpening Knife",
        "sharpy": "Sharpy",
        "shatter": "Shatter",
        "shatterm": "Shatter",
        "shatteringfists": "Shattering Fists",
        "shear": "Shear",
        "shieldbashm": "Shield Bash",
        "shieldbash": "Shield Bash",
        "shieldbreakerm": "Shield Breaker",
        "shieldbreaker": "Shield Breaker",
        "shieldchargem": "Shield Charge",
        "shieldcharge": "Shield Charge",
        "shieldgenerator": "Shield Generator",
        "shieldgeneratoritem": "Shield Generator",
        "shieldjammer": "Shield Jammer",
        "shieldofthorns": "Shield of Thorns",
        "shieldofwarding": "Shield of Warding",
        "shieldslamm": "Shield Slam",
        "shieldslammm": "Shield Slam",
        "shieldslam": "Shield Slam",
        "shieldsmelter": "Shield Smelter",
        "shieldstance": "Shield Stance",
        "shieldthrow": "Shield Throw",
        "shieldwallm": "Shield Wall",
        "shieldwall": "Shield Wall",
        "shiftingscroll": "Shifting Scroll",
        "shiningforce": "Shining Force",
        "shiv": "Shiv",
        "shocknova": "Shock Nova",
        "shocknovam": "Shock Nova",
        "shortsword": "Short Sword",
        "shoulderplate": "Shoulder Plate",
        "shrapnelshot": "Shrapnel Shot",
        "sickleslash": "Sickle Slash",
        "sidestep": "Sidestep",
        "siegebreakerm": "Siege Breaker",
        "siegebreaker": "Siege Breaker",
        "silencingaura": "Silencing Aura",
        "silentbacklash": "Silent Backlash",
        "silverchalice": "Silver Chalice",
        "silverring": "Silver Ring",
        "simplehat": "Simple Hat",
        "singingsword": "Singing Sword",
        "siphonlife": "Siphon Life",
        "skewering": "Skewering",
        "skillful": "Skillful",
        "skullsplitter": "Skullsplitter",
        "slaverats": "Slave Rats",
        "slicem": "Slice",
        "slice": "Slice",
        "sliceanddice": "Slice and Dice!",
        "slimy": "Slimy",
        "slingshot": "Slingshot",
        "slippers": "Slippers",
        "smallpouch": "Small Pouch",
        "smellblood": "Smell Blood",
        "smellbloodplus": "Smell Blood",
        "smokebombm": "Smoke Bomb",
        "smokebombmm": "Smoke Bomb",
        "smokebomb": "Smoke Bomb",
        "snatchingclaw": "Snatching Claw",
        "sneakpeek": "Sneak Peek",
        "sneakystrike": "Sneaky Strike",
        "snipe": "Snipe",
        "snipeeasy": "Snipe",
        "snipershot": "Sniper Shot",
        "snowfall": "Snowfall",
        "soap": "Soap",
        "solring": "Sol Ring",
        "solarflare": "Solar Flare",
        "sonar": "Sonar",
        "sonarh": "Sonar",
        "songofcelerity": "Song of Celerity",
        "songofquicknessm": "Song of Quickness",
        "songofquickness": "Song of Quickness",
        "soothingwaters": "Soothing Waters",
        "soulharvest": "Soul Harvest",
        "soullantern": "Soul Lantern",
        "sparkoflife": "Spark of Life",
        "spectralmissiles": "Spectral Missiles",
        "spectralscales": "Spectral Scales",
        "spellecho": "Spell Echo",
        "spiderqueeneye": "Spider Queen Eye",
        "spikedballm": "Spiked Ball",
        "spikedball": "Spiked Ball",
        "spikedbracers": "Spiked Bracers",
        "spikedshieldm": "Spiked Shield",
        "spikedshield": "Spiked Shield",
        "spikedshoulderpads": "Spiked Shoulderpads",
        "spoiledmeato": "Spoiled Meat",
        "spoiledmeat": "Spoiled Meat",
        "spookynight": "Spooky Night",
        "spreadcorruption": "Spread Corruption",
        "sprint": "Sprint",
        "sprout": "Sprout",
        "spyglass": "Spyglass",
        "squall": "Squall",
        "squidtoken": "Squid Token",
        "stainlesscuirass": "Stainless Cuirass",
        "stalking": "Stalking",
        "stampede": "Stampede",
        "standardbearerm": "Standard Bearer",
        "standardbearer": "Standard Bearer",
        "standardbearerstart": "Standard Bearer",
        "starfall": "Starfall",
        "starfallpet": "Starfall",
        "starfallplus": "Starfall",
        "starfallitem": "Starfall",
        "starfallottis": "Starfall",
        "staringcontest": "Staring Contest",
        "starrynight": "Starry Night",
        "staticcharge": "Static Charge",
        "steadfastboots": "Steadfast Boots",
        "steadfastshield": "Steadfast Shield",
        "steal": "Steal",
        "steamroller": "Steamroller",
        "steelforge": "Steel Forge",
        "steelrod": "Steel Rod",
        "steelskin": "Steelskin",
        "stimulantpills": "Stimulant Pills",
        "stimulatingsting": "Stimulating Sting",
        "stingerlauncher": "Stinger Launcher",
        "stockadem": "Stockade",
        "stockademeasy": "Stockade",
        "stockade": "Stockade",
        "stomp": "Stomp",
        "stoneamulet": "Stone Amulet",
        "stonefist": "Stone Fist",
        "stonefisteasy": "Stone Fist",
        "stonemaul": "Stone Maul",
        "stonewall": "Stone Wall",
        "stonewalleasy": "Stone Wall",
        "stoned": "Stoned",
        "stoneskin": "Stoneskin",
        "storm": "Storm",
        "stormcorruption": "Storm",
        "stormitem": "Storm",
        "stormjavelin": "Storm Javelin",
        "stormtiara": "Storm Tiara",
        "stormtrident": "Storm Trident",
        "stormward": "Storm Ward",
        "stormwardspecial": "Storm Ward",
        "stormwardspecialb": "Storm Ward",
        "stormcallerfeather": "Stormcaller Feather",
        "stormy": "Stormy",
        "strawhat": "Straw Hat",
        "stressfulfumes": "Stressful Fumes",
        "strongmojo": "Strong Mojo",
        "stronghold": "Stronghold",
        "stungrenade": "Stun Grenade",
        "subzero": "Sub Zero",
        "subjugation": "Subjugation",
        "submerge": "Submerge",
        "subterfuge": "Subterfuge",
        "success": "Success",
        "sugarrush": "Sugar Rush",
        "summonimp": "Summon Imp",
        "summonimpeasy": "Summon Imp",
        "summonimpplus": "Summon Imp",
        "summonwick": "Summon Wick",
        "sunbeam": "Sunbeam",
        "sunderarmorm": "Sunder Armor",
        "sunderarmor": "Sunder Armor",
        "superconductor": "Superconductor",
        "suppressionhelmet": "Suppresion Helmet",
        "surprisebox": "Surprise Box",
        "surprisegiftbox": "Surprise Gift Box",
        "swap": "Swap",
        "sweepingstrikem": "Sweeping Strike",
        "sweepingstrike": "Sweeping Strike",
        "sweetmelodym": "Sweet Melody",
        "sweetmelody": "Sweet Melody",
        "swing": "Swing",
        "tabularasa": "Tabula Rasa",
        "tabularasabas": "Tabula Rasa",
        "tabularasacorruption": "Tabula Rasa",
        "tabularasam": "Tabula Rasa",
        "tacticalnuke": "Tactical Nuke",
        "tacticalthinking": "Tactical Thinking",
        "taintedrod": "Tainted Rod",
        "takecover": "Take Cover",
        "takingaim": "Taking Aim",
        "takingaimm": "Taking Aim",
        "tantrum": "Tantrum",
        "tantrumitem": "Tantrum",
        "targetshooting": "Target Shooting",
        "tauntingroar": "Taunting Roar",
        "tediouspoem": "Tedious Poem",
        "tempest": "Tempest",
        "templeamulet": "Temple Amulet",
        "temporalchains": "Temporal Chains",
        "terrorring": "Terror Ring",
        "terrorize": "Terrorize",
        "terrorizinghowl": "Terrorizing Howl",
        "terrorizinghowlplus": "Terrorizing Howl",
        "teslacoil": "Tesla Coil",
        "tesseract": "Tesseract",
        "theanvil": "The Anvil",
        "thechosenone": "The Chosen One",
        "thedarkone": "The Dark One",
        "thedefiler": "The Defiler",
        "theencyclopedia": "The Encyclopedia",
        "thehunt": "The Hunt",
        "thehunteasy": "The Hunt",
        "thejuggernaut": "The Juggernaut",
        "theone": "The One",
        "thepolluter": "The Polluter",
        "theporcupine": "The Porcupine",
        "theproficient": "The Proficient",
        "thewall": "The Wall",
        "thewolfslayer": "The Wolfslayer",
        "thermalamulet": "Thermal Amulet",
        "thermalring": "Thermal Ring",
        "thorimsrod": "Thorim's Rod",
        "thornproliferation": "Thorn Proliferation",
        "thorneater": "Thorneater",
        "thorneaterhydra": "Thorneater",
        "thornyring": "Thorny Ring",
        "thousandneedles": "Thousand Needles",
        "threaten": "Threaten",
        "throwbolas": "Throw Bolas",
        "throwknife": "Throw Knife",
        "throwspear": "Throw Spear",
        "thunderrune": "Thunder Rune",
        "thunderrunem": "Thunder Rune",
        "thunderclap": "Thunderclap",
        "thunderfury": "Thunderfury",
        "thunderfurym": "Thunderfury",
        "thunderfuryspecial": "Thunderfury",
        "thunderstorm": "Thunderstorm",
        "tikimask": "Tiki Mask",
        "timon": "Timon",
        "titanfall": "Titan Fall",
        "titangauntlets": "Titan Gauntlets",
        "tomahawk": "Tomahawk",
        "tomato": "Tomato",
        "tombstone": "Tombstone",
        "tomeofintellect": "Tome of Intellect",
        "topazring": "Topaz Ring",
        "torch": "Torch",
        "torching": "Torching",
        "torment": "Torment",
        "tormentofthorns": "Torment of Thorns",
        "totaleclipse": "Total Eclipse",
        "touristmap": "Tourist Map",
        "toxicblobpet": "Toxic Blob",
        "toxicblob": "Toxic Blob",
        "toxicpuddle": "Toxic Puddle",
        "toxicrain": "Toxic Rain",
        "toxicrainspecial": "Toxic Rain",
        "toxicretaliation": "Toxic Retaliation",
        "toxicsplash": "Toxic Splash",
        "toxicsplashpet": "Toxic Splash",
        "toxicstrike": "Toxic Strike",
        "toxicvolley": "Toxic Volley",
        "trace": "Trace",
        "tranquility": "Tranquility",
        "tranquilityplus": "Tranquility",
        "transcendence": "Transcendence",
        "transcribe": "Transcribe",
        "transfusion": "Transfusion",
        "transmision": "Transmission",
        "treat": "Treat",
        "trebuchet": "Trebuchet",
        "tremor": "Tremor",
        "tremors": "Tremors",
        "trick": "Trick",
        "trickortreat": "Trick or Treat",
        "trustwhorty": "Trustworthy",
        "tuneup": "Tune Up",
        "turban": "Turban",
        "tuskbarrage": "Tusk Barrage",
        "tuskbarrageplus": "Tusk Barrage",
        "tuskcharge": "Tusk Charge",
        "tuskchargeplus": "Tusk Charge",
        "twilightslaughter": "Twilight Slaughter",
        "twilightswamp": "Twilight Swamp",
        "twinblades": "Twin Blades",
        "twinscrolls": "Twin Scrolls",
        "twinscrollsstart": "Twin Scrolls",
        "typhoon": "Typhoon",
        "typhoonm": "Typhoon",
        "tyrantnecklace": "Tyrant Necklace",
        "ultraregeneration": "Ultra Regeneration",
        "undeathichor": "Undeath Ichor",
        "undyingwill": "Undying Will",
        "unforgivingnaturem": "Unforgiving Nature",
        "unforgivingnature": "Unforgiving Nature",
        "ungodlystrength": "Ungodly Strength",
        "unholyhammer": "Unholy Hammer",
        "unholysmiteitem": "Unholy Smite",
        "unholystorm": "Unholy Storm",
        "unholystormm": "Unholy Storm",
        "unleashed": "Unleashed",
        "unleashedm": "Unleashed",
        "unstablecore": "Unstable Core",
        "unstablepower": "Unstable Power",
        "untrustwhorty": "Untrustworthy",
        "unwavering": "Unwavering",
        "unwaveringfaith": "Unwavering Faith",
        "uproot": "Uproot",
        "upwind": "Upwind",
        "uselessletter": "Useless Letter",
        "vaccine": "Vaccine",
        "valiantdefender": "Valiant Defender",
        "vampirictouch": "Vampiric Touch",
        "vampirictutor": "Vampiric Tutor",
        "vanish": "Vanish",
        "vengeance": "Vengeance",
        "vengeancestart": "Vengeance",
        "venomamulet": "Venom Amulet",
        "venomfang": "Venom Fang",
        "venomflask": "Venom Flask",
        "veteranarmor": "Veteran Armor",
        "vexingcrescendo": "Vexing Crescendo",
        "viciousbite": "Vicious Bite",
        "vigilance": "Vigilance",
        "vigorous": "Vigorous",
        "vigorousfury": "Vigorous Fury",
        "vigorousfurystart": "Vigorous Fury",
        "vilegas": "Vile Gas",
        "vilegash": "Vile Gash",
        "vilegashplus": "Vile Gash",
        "vilelance": "Vile Lance",
        "vilering": "Vile Ring",
        "violentburst": "Violent Burst",
        "viperring": "Viper Ring",
        "viperstrike": "Viper Strike",
        "virulentreaction": "Virulent Reaction",
        "virulentring": "Virulent Ring",
        "viscousshield": "Viscous Shield",
        "visionring": "Vision Ring",
        "vitalitydrain": "Vitality Drain",
        "vitalitydraineasy": "Vitality Drain",
        "vitalize": "Vitalize",
        "vitalizem": "Vitalize",
        "vitalizingserenadem": "Vitalizing Serenade",
        "vitalizingserenade": "Vitalizing Serenade",
        "voidcrush": "Void Crush",
        "voidmemory": "Void Memory",
        "volatilecore": "Volatile Core",
        "volatileunsummoning": "Volatile Unsummoning",
        "volcanicaxe": "Volcanic Axe",
        "volley": "Volley",
        "voodoodoll": "Voodoo Doll",
        "warbanner": "War Banner",
        "wardrum": "War Drum",
        "warhammer": "War Hammer",
        "warcry": "Warcry",
        "warcrycroc": "Warcry",
        "warpaint": "Warpaint",
        "warriorcode": "Warrior Code",
        "warriormemory": "Warrior Memory",
        "waterblobpet": "Water Blob",
        "waterblob": "Water Blob",
        "watergun": "Water Gun",
        "waterjet": "Water Jet",
        "waterpuddle": "Water Puddle",
        "watersplash": "Water Splash",
        "watersplashpet": "Water Splash",
        "watersrpay": "Water Spray",
        "watervase": "Water Vase",
        "watering": "Watering",
        "weakeninggaze": "Weakening Gaze",
        "weaponcache": "Weapon Cache",
        "weaponpouch": "Weapon Pouch",
        "web": "Web",
        "webweaver": "Webweaver",
        "wellfed": "Well Fed",
        "whack": "Whack",
        "whirlwindm": "Whirlwind",
        "whirlwind": "Whirlwind",
        "whisperinglies": "Whispering Lies",
        "whiteflame": "White Flame",
        "whiteflames": "White Flames",
        "wickedcraftsman": "Wicked Craftsman",
        "wildbite": "Wild Bite",
        "wildcharge": "Wild Charge",
        "wildhuntm": "Wild Hunt",
        "wildhunt": "Wild Hunt",
        "wildroar": "Wild Roar",
        "wildroarm": "Wild Roar",
        "wildroots": "Wild Roots",
        "windblessing": "Wind Blessing",
        "windblessingitem": "Wind Blessing",
        "windblessingitemb": "Wind Blessing",
        "windsofamnesia": "Winds of Amnesia",
        "wingedwand": "Winged Wand",
        "winteriscoming": "Winter Is Coming",
        "winteriscomingm": "Winter Is Coming",
        "winterorb": "Winter Orb",
        "winterorbm": "Winter Orb",
        "wintersnighttale": "Winter's Night Tale",
        "wither": "Wither",
        "wolfguard": "Wolf Guard",
        "wolfskincloack": "Wolfskin Cloak",
        "wolfy": "Wolfy",
        "woodencrosier": "Wooden Crosier",
        "woollyhat": "Woolly Hat",
        "woollyshell": "Woolly Shell",
        "woollyshellplus": "Woolly Shell",
        "worldinflames": "World in Flames",
        "wreckingball": "Wrecking Ball",
        "wristcutter": "Wristcutter",
        "xulrunestone": "Xul Runestone",
        "yangmantra": "Yang Mantra",
        "yangritual": "Yang Ritual",
        "yggdrasilroot": "Yggdrasil Root",
        "yinmantra": "Yin Mantra",
        "yinritual": "Yin Ritual",
        "yinyangbadge": "Yin Yang Badge",
        "yinyangbolt": "Yin Yang Bolt",
        "ylmerbranch": "Ylmer's Branch",
        "yoggercleaver": "Yogger's Cleaver",
        "zapm": "Zap (M?)",
        "zap": "Zap",
        "zealbarrier": "Zeal Barrier",
        "zealousprayer": "Zealous Prayer"
    },
    "A": {
        "absorptiona": "Absorption",
        "abstractiona": "Abstraction",
        "abyssalrevengea": "Abyssal Revenge",
        "abyssalsonataa": "Abyssal Sonata",
        "abyssalwratha": "Abyssal Wrath",
        "acidbreatha": "Acid Breath",
        "acidraina": "Acid Rain",
        "acidspita": "Acid Spit",
        "acrobaticstrikema": "Acrobatic Strike",
        "acrobaticstrikea": "Acrobatic Strike",
        "adrenalinea": "Adrenaline",
        "aftershocka": "Aftershock",
        "aimedshotma": "Aimed Shot",
        "aimedshota": "Aimed Shot",
        "allina": "All In",
        "ambidextrousa": "Ambidextrous",
        "ambusha": "Ambush",
        "ammunitionsa": "Ammunition",
        "amnesiaa": "Amnesia",
        "amplifyingfielda": "Amplifying Field",
        "anathemaa": "Anathema",
        "ancientorba": "Ancient Orb",
        "anklebitea": "Ankle Bite",
        "annoyingwhistlea": "Annoying Whistle",
        "anthemofhopea": "Anthem of Hope",
        "antimagicfielda": "Antimagic Field",
        "apotheosisa": "Apotheosis",
        "arcaneconduita": "Arcane Conduit",
        "architectssoula": "Architect's Soul",
        "ardentchampiona": "Ardent Champion",
        "ardentguarda": "Ardent Guard",
        "arenachampiona": "Arena Champion",
        "armageddona": "Armageddon",
        "armoredsteela": "Armored Steel",
        "arsenala": "Arsenal",
        "asha": "Ash",
        "ashstorma": "Ash Storm",
        "ashstormcorruptiona": "Ash Storm",
        "ashstormplusa": "Ash Storm",
        "ashyskya": "Ashy Sky",
        "astralhowloa": "Astral Howl",
        "astralwolfa": "Astral Wolf",
        "astralwolfoa": "Astral Wolf",
        "atonementstarta": "Atonement",
        "awfultantruma": "Awful Tantrum",
        "awfultantrumplusa": "Awful Tantrum",
        "axesweepa": "Axe Sweep",
        "backbonea": "Backbone",
        "backbonema": "Backbone",
        "backlasha": "Backlash",
        "backstabma": "Backstab",
        "backstaba": "Backstab",
        "badaugurya": "Bad Augury",
        "bakea": "Bake",
        "balllightninga": "Ball Lightning",
        "balladofconquesta": "Ballad of Conquest",
        "balladofevasiona": "Ballad of Evasion",
        "bandaida": "Band-Aid",
        "bandaidma": "Band-Aid",
        "banea": "Bane",
        "banishstarta": "Banish",
        "baptisma": "Baptism",
        "baptismma": "Baptism",
        "barbedwirea": "Barbed Wire",
        "barbercutsa": "Barber Cuts",
        "barkskina": "Barkskin",
        "barkskinplusa": "Barkskin",
        "barragea": "Barrage",
        "barricadema": "Barricade",
        "barricadea": "Barricade",
        "barriera": "Barrier",
        "barrierma": "Barrier",
        "basthetsgracea": "Basthet's Grace",
        "battleplana": "Battle Plan",
        "battleshouta": "Battle Shout",
        "beartrapa": "Bear Trap",
        "belphyorsbranda": "Belphyor's Brand",
        "benedictiona": "Benediction",
        "berserkerarmora": "Berserker Armor",
        "bewildera": "Bewilder",
        "bigsnowballa": "Big Snowball",
        "bindingheala": "Binding Heal",
        "birdofpreya": "Bird of Prey",
        "bitea": "Bite",
        "blackdeathstarta": "Black Death",
        "blackholea": "Black Hole",
        "blackkarmaa": "Black Karma",
        "blackpyrea": "Black Pyre",
        "blacktalonsa": "Black Talons",
        "bladedancea": "Blade Dance",
        "bladeflurrya": "Blade Flurry",
        "bladerusha": "Blade Rush",
        "bladestorma": "Blade Storm",
        "blasphemya": "Blasphemy",
        "blasphemyeasya": "Blasphemy",
        "blazingnovaa": "Blazing Nova",
        "blazingslasha": "Blazing Slash",
        "blazingstrikea": "Blazing Strike",
        "bleedouta": "Bleed Out",
        "blessedsteela": "Blessed Steel",
        "blessedsteelb": "Blessed Steel",
        "blizzarda": "Blizzard",
        "blizzardma": "Blizzard",
        "blizzardmma": "Blizzard",
        "bloodfeedinga": "Blood Feeding",
        "bloodforbloodma": "Blood For Blood",
        "bloodforblooda": "Blood For Blood",
        "bloodinfectiona": "Blood Infection",
        "bloodpuddlea": "Blood Puddle",
        "bloodrainma": "Blood Rain",
        "bloodraina": "Blood Rain",
        "bloodsausagea": "Blood Sausage",
        "bloodbatha": "Bloodbath",
        "bloodragea": "Bloodrage",
        "bloodsuckera": "Bloodsucker",
        "bloodycleavea": "Bloody Cleave",
        "bloodyretaliationa": "Bloody Retaliation",
        "blossoma": "Blossom",
        "blowupa": "Blow Up!",
        "bludgeonma": "Bludgeon",
        "bludgeona": "Bludgeon",
        "blueflamea": "Blue Flame",
        "bluffa": "Bluff",
        "blura": "Blur",
        "bomba": "Bomb",
        "bombma": "Bomb",
        "bomblotterya": "Bomb Lottery",
        "bombarda": "Bombard",
        "boneclawsa": "Bone Claws",
        "boneguarda": "Bone Guard",
        "bookofnightmaresa": "Book of Nightmares",
        "bookworma": "Bookworm",
        "boulderthrowa": "Boulder Throw",
        "bouncingshielda": "Bouncing Shield",
        "bouncyembersa": "Bouncy Embers",
        "bouncyembersplusa": "Bouncy Embers",
        "bowlinga": "Bowling",
        "brainfreezea": "Brain Freeze",
        "branda": "Brand",
        "brandplusa": "Brand",
        "bristlyfura": "Bristly Fur",
        "brokenbonea": "Broken Bone",
        "broodmothera": "Broodmother",
        "broodmotherplusa": "Broodmother",
        "bulkheala": "Bulk Heal",
        "bulletshota": "Bullet Shot",
        "bulwarka": "Bulwark",
        "bunnyhoppinga": "Bunny Hopping",
        "bunnyhoppingma": "Bunny Hopping",
        "burningblooda": "Burning Blood",
        "burningcorea": "Burning Core",
        "burningcorema": "Burning Core",
        "burningjavelina": "Burning Javelin",
        "burningjavelinea": "Burning Javelin",
        "burningshota": "Burning Shot",
        "burningweaponsa": "Burning Weapons",
        "burrowa": "Burrow",
        "butcheringa": "Butchering",
        "caltropsa": "Caltrops",
        "camouflagema": "Camouflage",
        "camouflagemb": "Camouflage",
        "camouflagea": "Camouflage",
        "cannonshota": "Cannon Shot",
        "cannonshotb": "Cannon Shot",
        "captainshowlstarta": "Captain's Howl",
        "captivatingvoicea": "Captivating Voice",
        "carnagea": "Carnage",
        "carrioneatera": "Carrioneater",
        "castlinga": "Castling",
        "catapulta": "Catapult",
        "catharsisa": "Catharsis",
        "causticbeama": "Caustic Beam",
        "cauterizea": "Cauterize",
        "celestialbrillancea": "Celestial Brilliance",
        "celestialbrillancema": "Celestial Brilliance",
        "celestialtolla": "Celestial Toll",
        "celestialwratha": "Celestial Wrath",
        "chainheala": "Chain Heal",
        "chainhealma": "Chain Heal",
        "chainlightninga": "Chain Lightning",
        "chainlightningma": "Chain Lightning",
        "challengingshouta": "Challenging Shout",
        "changeweapona": "Change Weapon",
        "chantofaccuracya": "Chant of Accuracy",
        "chantofinitiativea": "Chant of Initiative",
        "chaospuddlea": "Chaos Puddle",
        "chaoticwinda": "Chaotic Wind",
        "chargea": "Charge",
        "chargebatterya": "Charge Battery",
        "chargedclawsa": "Charged Claws",
        "childofthestorma": "Child of the Storm",
        "chillinggazea": "Chilling Gaze",
        "circleofhealinga": "Circle of Healing",
        "circuitoverloada": "Circuit Overload",
        "citadela": "Citadel",
        "clairvoyancea": "Clairvoyance",
        "claritya": "Clarity",
        "clearinstructionsa": "Clear Instructions",
        "cleavea": "Cleave",
        "clobbera": "Clobber",
        "coatofarmsa": "Coat of Arms",
        "cocoona": "Cocoon",
        "coldbreatha": "Cold Breath",
        "coldbursta": "Cold Burst",
        "coldfeeta": "Cold Feet",
        "coldfronta": "Cold Front",
        "coldhandsa": "Cold Hands",
        "coldlasera": "Cold Laser",
        "coldnovaa": "Cold Nova",
        "coldsnapa": "Cold Snap",
        "coldsparkstarta": "Cold Spark",
        "coldweaponsa": "Cold Weapons",
        "collectwastea": "Collect Waste",
        "colorfulpuddlea": "Colorful Puddle",
        "colossalblowa": "Colossal Blow",
        "combatbandagesa": "Combat Bandages",
        "combustiona": "Combustion",
        "commandandconquera": "Command and Conquer",
        "concussiveshota": "Concussive Shot",
        "condemnationa": "Condemnation",
        "condemnationma": "Condemnation",
        "consecrateda": "Consecrated",
        "consecrationa": "Consecration",
        "consecrationespa": "Consecration",
        "consumea": "Consume",
        "corrosivetoucha": "Corrosive Touch",
        "corruptharpoona": "Corrupt Harpoons",
        "corruptedbladea": "Corrupted Blade",
        "corruptedknifea": "Corrupted Knife",
        "corruptedplatea": "Corrupted Plate",
        "corruptiona": "Corruption",
        "counterspella": "Counterspell",
        "crabbaita": "Crab Bait",
        "crashlightninga": "Crash Lightning",
        "crashlightningma": "Crash Lightning",
        "crazylooka": "Crazy Look",
        "crescentlighta": "Crescent Light",
        "crosshaira": "Crosshair",
        "crosshairma": "Crosshair",
        "crucifixiona": "Crucifixion",
        "crushingdarknessa": "Crushing Darkness",
        "crystallizationa": "Crystallization",
        "culltheweaka": "Cull the Weak",
        "culltheweakb": "Cull the Weak",
        "curativetherapya": "Curative Therapy",
        "curseofagonya": "Curse of Agony",
        "curseofdecaya": "Curse of Decay",
        "curseofelementsa": "Curse of Elements",
        "curseofelementsma": "Curse of Elements",
        "curseofexhaustiona": "Curse of Exhaustion",
        "curseoffragilitya": "Curse of Fragility",
        "curseoffragilityma": "Curse of Fragility",
        "curseofmadnessa": "Curse of Madness",
        "curseofshadowsa": "Curse of Shadows",
        "curseofshadowsma": "Curse of Shadows",
        "curseoftormenta": "Curse of Torment",
        "curseofvulnerabilitya": "Curse of Vulnerability",
        "curseofweaknessa": "Curse of Weakness",
        "cursedbandagesa": "Cursed Bandages",
        "cursedwatera": "Cursed Water",
        "cursemancya": "Cursemancy",
        "cursenomicona": "Cursenomicon",
        "custodiana": "Custodian",
        "cycloneslasha": "Cyclone Slash",
        "dampenmagica": "Dampen Magic",
        "dampingfielda": "Damping Field",
        "darkblighta": "Dark Blight",
        "darkblowa": "Dark Blow",
        "darkconcoctiona": "Dark Concoction",
        "darkconstrainta": "Dark Constraint",
        "darkcremationa": "Dark Cremation",
        "darkembracea": "Dark Embrace",
        "darkfuturea": "Dark Future",
        "darkgaga": "Dark Gag",
        "darkguarda": "Dark Guard",
        "darklightninga": "Dark Lightning",
        "darklightningeasya": "Dark Lightning",
        "darkmiasmaa": "Dark Miasma",
        "darkomena": "Dark Omen",
        "darkoutbreaka": "Dark Outbreak",
        "darkoutbreakma": "Dark Outbreak",
        "darkoutbursta": "Dark Outburst",
        "darkpacta": "Dark Pact",
        "darkpuddlea": "Dark Puddle",
        "darkrancora": "Dark Rancor",
        "darkrituala": "Dark Ritual",
        "darkshota": "Dark Shot",
        "darknessfallsa": "Darkness Falls",
        "darknessfallsma": "Darkness Falls",
        "dasha": "Dash",
        "dauntlessa": "Dauntless",
        "dawnpunishmenta": "Dawn Punishment",
        "dawnlighta": "Dawnlight",
        "deadlychimea": "Deadly Chime",
        "deadlystrikesa": "Deadly Strikes",
        "deathcoila": "Death Coil",
        "deathgripa": "Death Grip",
        "deathsdoora": "Death's Door",
        "deathsembracea": "Death's Embrace",
        "deathsreacha": "Death's Reach",
        "deathstolla": "Death's Toll",
        "deathstolleasya": "Death's Toll",
        "deathstollma": "Death's Toll",
        "debilitatea": "Debilitate",
        "deepdarknessa": "Deep Darkness",
        "deepdarknessma": "Deep Darkness",
        "deeppuffa": "Deep Puff",
        "defenda": "Defend",
        "defensivestrategya": "Defensive Strategy",
        "defiledlegacya": "Defiled Legacy",
        "deflecta": "Deflect",
        "defrostarchera": "Defrost Archer",
        "defrostswordmana": "Defrost Swordman",
        "dejavua": "Deja Vu",
        "delayresponsea": "Delay Response",
        "deliciousscenta": "Delicious Scent",
        "demandobediencea": "Demand Obedience",
        "dementiaa": "Dementia",
        "dementiama": "Dementia",
        "demolishingblowa": "Demolishing Blow",
        "demonicflamea": "Demonic Flame",
        "demonictutora": "Demonic Tutor",
        "demoralizingshouta": "Demoralizing Shout",
        "desecrationa": "Desecration",
        "desertwhirlwinda": "Desert Whirlwind",
        "despaira": "Despair",
        "desperateplayera": "Desperate Prayer",
        "detectiona": "Detection",
        "detoxifya": "Detoxify",
        "devastatema": "Devastate",
        "devastatemma": "Devastate",
        "devastatea": "Devastate",
        "deviantzealotrya": "Deviant Zealotry",
        "dilutea": "Dilute",
        "dinnerisreadya": "Dinner is Ready!",
        "dinnerisreadyplusa": "Dinner is Ready!",
        "dischargea": "Discharge",
        "disengagea": "Disengage",
        "disintegratea": "Disintegrate",
        "disintegratema": "Disintegrate",
        "dislocatedjawa": "Dislocated Jaw",
        "dispelmagica": "Dispel Magic",
        "divinechimea": "Divine Chime",
        "divinegracestarta": "Divine Grace",
        "divineguidancea": "Divine Guidance",
        "divineinsighta": "Divine Insight",
        "divineinterventiona": "Divine Intervention",
        "divineirea": "Divine Ire",
        "divinejusticea": "Divine Justice",
        "divineordeala": "Divine Ordeal",
        "divinepowera": "Divine Power",
        "divineprotectiona": "Divine Protection",
        "divinepunishmenta": "Divine Punishment",
        "divineretributionma": "Divine Retribution",
        "divineretributiona": "Divine Retribution",
        "divineshielda": "Divine Shield",
        "divinesmitea": "Divine Smite",
        "divinestrikea": "Divine Strike",
        "doityourselfa": "Do it yourself!",
        "doomsdaya": "Doomsday",
        "doublebubblea": "Double Bubble",
        "doublechopa": "Double Chop",
        "doubleshota": "Double Shot",
        "doubleslasha": "Double Slash",
        "doubleslashma": "Double Slash",
        "doublestrikea": "Double Strike",
        "doubletroublea": "Double Trouble",
        "doubletroubleplusa": "Double Trouble",
        "downpoura": "Downpour",
        "dragonbitea": "Dragon Bite",
        "dragonroara": "Dragon Roar",
        "dragonscalesa": "Dragon Scales",
        "drainlifea": "Drain Life",
        "dreadslasha": "Dread Slash",
        "dreadfulwavea": "Dreadful Wave",
        "drilla": "Drill",
        "dualstrikema": "Dual Strike",
        "dualstrikea": "Dual Strike",
        "dualwielda": "Dual Wield",
        "dungtossa": "Dung Toss",
        "duskpunishmenta": "Dusk Punishment",
        "dustdevila": "Dust Devil",
        "dustdevilb": "Dust Devil",
        "dwarffortressa": "Dwarf Fortress",
        "eardestroyera": "Ear Destroyer",
        "earthguarda": "Earth Guard",
        "earthquakea": "Earthquake",
        "earthwavea": "Earthwave",
        "electricdischargea": "Electric Discharge",
        "electricpuddlea": "Electric Puddle",
        "electricpulsea": "Electric Pulse",
        "electricweaponsa": "Electric Weapons",
        "electricitymanuala": "Electricity Manual",
        "electrocutea": "Electrocute",
        "electrocutiona": "Electrocution",
        "electroshocka": "Electroshock",
        "elementalbolta": "Elemental Bolt",
        "elementalproliferationa": "Elemental Proliferation",
        "elementalwarda": "Elemental Ward",
        "elementalnovaa": "Elemental Wave",
        "elvenagilitya": "Elven Agility",
        "embersofdefensea": "Embers of Defense",
        "embersofpowera": "Embers of Power",
        "embersofspeeda": "Embers of Speed",
        "emberstorma": "Emberstorm",
        "emberstormspeciala": "Emberstorm",
        "empowera": "Empower",
        "enchantweaponsa": "Enchant Weapons",
        "encorea": "Encore",
        "endlessabyssa": "Endless Abyss",
        "endlessstorma": "Endless Storm",
        "endurepaina": "Endure Pain",
        "energizingserenadea": "Energizing Serenade",
        "enervatea": "Enervate",
        "enfeeblea": "Enfeeble",
        "enlighteneda": "Enlightened",
        "enragea": "Enrage",
        "entanglingrootsa": "Entangling Roots",
        "entanglingrootseasya": "Entangling Roots",
        "entomba": "Entomb",
        "entrenchma": "Entrench",
        "entrencha": "Entrench",
        "equivalentexchangea": "Equivalent Exchange",
        "eternallullabya": "Eternal Lullaby",
        "eternalrecalla": "Eternal Recall",
        "ethereala": "Ethereal",
        "etherealknivesa": "Ethereal Knives",
        "etherealweaponsa": "Ethereal Weapons",
        "evanescencea": "Evanescence",
        "evasivemaneuvera": "Evasive Maneuver",
        "evisceratea": "Eviscerate",
        "evocationa": "Evocation",
        "excaliburna": "Excaliburn",
        "expectedprophecya": "Expected Prophecy",
        "experttrackerstarta": "Expert Tracker",
        "exploitopeningsa": "Exploit Openings",
        "explosivegifta": "Explosive Gift",
        "explosiveshota": "Explosive Shot",
        "exposearmora": "Expose Armor",
        "fadea": "Fade",
        "falconshotstarta": "Falcon Shot",
        "fallenpromisea": "Fallen Promise",
        "familyjewelsa": "Family Jewels",
        "fanoficiclesa": "Fan of Icicles",
        "fanofknivesa": "Fan of Knives",
        "fantheflamesa": "Fan the Flames",
        "fanaticisma": "Fanaticism",
        "farshota": "Far Shot",
        "faststrikea": "Fast Strike",
        "fatedfuturea": "Fated Future",
        "fearlessnessa": "Fearlessness",
        "featherbarragea": "Feather Barrage",
        "feedthericha": "Feed The Rich",
        "feinta": "Feint",
        "fervencya": "Fervency",
        "ferventprotectiona": "Fervent Protection",
        "fieryblowa": "Fiery Blow",
        "fierycoata": "Fiery Coat",
        "fieryfista": "Fiery Fist",
        "fieryjabsa": "Fiery Jabs",
        "fieryjabsplusa": "Fiery Jabs",
        "fierynovaa": "Fiery Nova",
        "fierynovama": "Fiery Nova",
        "fieryshieldma": "Fiery Shield",
        "fieryshieldstarta": "Fiery Shield",
        "fieryweaponsa": "Fiery Weapons",
        "findweaknessa": "Find Weakness",
        "fireblasta": "Fire Blast",
        "firebolta": "Fire Bolt",
        "firebranda": "Fire Brand",
        "fireclawa": "Fire Claw",
        "fireembera": "Fire Ember",
        "fireintheholea": "Fire in the Hole!",
        "firelasera": "Fire Laser",
        "fireslasha": "Fire Slash",
        "fireballa": "Fireball",
        "fireballma": "Fireball",
        "flameballa": "Fireball",
        "fireproofa": "Fireproof",
        "firestorma": "Firestorm",
        "firstaida": "First Aid",
        "fishingneta": "Fishing Net",
        "fishplosiona": "Fishplosion",
        "fishplosionb": "Fishplosion",
        "flamedancera": "Flame Dancer",
        "flamestorma": "Flame Storm",
        "flamestrikea": "Flamestrike",
        "flamingauraa": "Flaming Aura",
        "flankingstrikema": "Flanking Strike",
        "flankingstrikea": "Flanking Strike",
        "flarea": "Flare",
        "flasha": "Flash",
        "flashfreezea": "Flash Freeze",
        "flashfreezema": "Flash Freeze",
        "flashfreezemma": "Flash Freeze",
        "flashheala": "Flash Heal",
        "flaya": "Flay",
        "flowershurikena": "Flower Shuriken",
        "flowerstreama": "Flower Stream",
        "fluffya": "Fluffy",
        "flyhigha": "Fly High",
        "flynesta": "Fly Nest",
        "focusheala": "Focus Heal",
        "followupa": "Follow-up",
        "forbiddenpowera": "Forbidden Power",
        "foresighta": "Foresight",
        "forestalliesa": "Forest Allies",
        "forestbannera": "Forest Banner",
        "fortunetellinga": "Fortune Telling",
        "fouleruptiona": "Foul Eruption",
        "foulremedya": "Foul Remedy",
        "freezecorruptiona": "Freeze",
        "freezingslasha": "Freezing Slash",
        "frenziedcarnagea": "Frenzied Carnage",
        "frenziedtermitesa": "Frenzied Termites",
        "freshmeata": "Fresh Meat!",
        "freshmeatstarta": "Fresh Meat!",
        "frighteneda": "Frightened",
        "frostaxesa": "Frost Axes",
        "frostbreatha": "Frost Breath",
        "frostbreathma": "Frost Breath",
        "frostharpoona": "Frost Harpoon",
        "frostnovaa": "Frost Nova",
        "frostnovama": "Frost Nova",
        "frostrunea": "Frost Rune",
        "frostvolleya": "Frost Volley",
        "frostweaponsa": "Frost Weapons",
        "frostbolta": "Frostbolt",
        "frostboltma": "Frostbolt",
        "frozenbasha": "Frozen Bash",
        "frozenpufferfisha": "Frozen Pufferfish",
        "frozentomahawka": "Frozen Tomahawk",
        "fungaloutbreaka": "Fungal Outbreak",
        "fungusroota": "Fungus Root",
        "fungussurgea": "Fungus Surge",
        "furiousslashma": "Furious Slash",
        "furiousslasha": "Furious Slash",
        "furiousylmera": "Furious Ylmer",
        "fusionlasera": "Fusion Laser",
        "gardenofthornsa": "Garden of Thorns",
        "getouta": "Get Out!",
        "geysera": "Geyser",
        "geyserma": "Geyser",
        "gildedplatea": "Gilded Plate",
        "givefisha": "Give Fish",
        "givetothepoora": "Give To The Poor",
        "glooma": "Gloom",
        "gloomybursta": "Gloomy Burst",
        "godlystrengtha": "Godly Strength",
        "gorgea": "Gorge",
        "grandcrossa": "Grand Cross",
        "grandcrossma": "Grand Cross",
        "grasphearta": "Grasp Heart",
        "graspheartb": "Grasp Heart",
        "gravitywella": "Gravity Well",
        "greaterheala": "Greater Heal",
        "grimoireofflamesa": "Grimoire of Flames",
        "grindingwheela": "Grinding Wheel",
        "groundslamma": "Ground Slam",
        "groundslama": "Ground Slam",
        "grouptherapya": "Group Therapy",
        "grudgea": "Grudge",
        "guarda": "Guard",
        "guardianangela": "Guardian Angel",
        "gutrippera": "Gut Ripper",
        "hailstorma": "Hailstorm",
        "hallucinationa": "Hallucination",
        "hammerofjusticea": "Hammer of Justice",
        "hamstringa": "Hamstring",
        "hardshella": "Hard Shell",
        "hardeninga": "Hardening",
        "harleya": "Harley",
        "harshcauterizationa": "Harsh Cauterization",
        "harvesta": "Harvest",
        "hatcha": "Hatch",
        "hatchcorrupta": "Hatch",
        "hatchplusa": "Hatch",
        "hawkeyea": "Hawkeye",
        "headbuttma": "Headbutt",
        "headbuttmma": "Headbutt",
        "headbutta": "Headbutt",
        "heala": "Heal",
        "healingraina": "Healing Rain",
        "healingrainma": "Healing Rain",
        "healingserenadema": "Healing Serenade",
        "healingserenadea": "Healing Serenade",
        "healingtotema": "Healing Totem",
        "healingtotemma": "Healing Totem",
        "clonea": "Healthy Clone",
        "heatassimilationa": "Heat Assimilation",
        "heatlaserma": "Heat Laser",
        "heatlaserstarta": "Heat Laser",
        "heatsurgea": "Heat Surge",
        "heattransfera": "Heat Transfer",
        "heattransferma": "Heat Transfer",
        "heatwavea": "Heat Wave",
        "heatwavema": "Heat Wave",
        "heatshielda": "Heater Shield",
        "heavenlyarmamentsa": "Heavenly Armaments",
        "heavenlyblessinga": "Heavenly Blessing",
        "heavenlyblessingma": "Heavenly Blessing",
        "heavenlyjusticea": "Heavenly Justice",
        "heavenlyprotectiona": "Heavenly Protection",
        "heavyartillerya": "Heavy Artillery",
        "heavymetala": "Heavy Metal",
        "heavystrikea": "Heavy Strike",
        "heavyweaponrya": "Heavy Weaponry",
        "hellmarka": "Hell Mark",
        "hellmarkitema": "Hell Mark",
        "hellfirea": "Hellfire",
        "hellflamea": "Hellflame",
        "helpmea": "Help Me!",
        "helpinghanda": "Helping Hand",
        "heraldofdawna": "Herald of Dawn",
        "heraldofduska": "Herald of Dusk",
        "herdinga": "Herding",
        "heresya": "Heresy",
        "heronscouragea": "Herons's Courage",
        "hexproofa": "Hexproof",
        "hiddenhanda": "Hidden Hand",
        "hiddenweapona": "Hidden Weapon",
        "hideandseeka": "Hide and Seek",
        "hightchancellorstaffa": "High Chancellor Staff",
        "hightidea": "High Tide",
        "hitandrunma": "Hit and Run",
        "hitandruna": "Hit and Run",
        "holyaegisa": "Holy Aegis",
        "holybarragea": "Holy Barrage",
        "holyblasta": "Holy Blast",
        "holycleavea": "Holy Cleave",
        "holycrusadera": "Holy Crusader",
        "holyfirea": "Holy Fire",
        "holylancea": "Holy Lance",
        "holylanceeasya": "Holy Lance",
        "holynovaa": "Holy Nova",
        "holynovama": "Holy Nova",
        "holypuddlea": "Holy Puddle",
        "holyripplea": "Holy Ripple",
        "holyrusha": "Holy Rush",
        "holyslasha": "Holy Slash",
        "holyslashwa": "Holy Slash",
        "holysmitea": "Holy Smite",
        "holysmitema": "Holy Smite",
        "holysmitemca": "Holy Smite",
        "holystorma": "Holy Storm",
        "holystormma": "Holy Storm",
        "holysymbola": "Holy Symbol",
        "honorablea": "Honorable",
        "hounda": "Hound",
        "howlhounda": "Howl",
        "howlwolfa": "Howl",
        "huntersmarka": "Hunter's Mark",
        "hurryupa": "Hurry Up",
        "hydrabitea": "Hydra Bite",
        "hydrablooda": "Hydra Blood",
        "hypnotisma": "Hypnotism",
        "hypotermiaa": "Hypothermia",
        "icebarriera": "Ice Barrier",
        "icebarrierma": "Ice Barrier",
        "iceclawsa": "Ice Claws",
        "icecometa": "Ice Comet",
        "icecometma": "Ice Comet",
        "icefalla": "Ice Fall",
        "icefallha": "Ice Fall",
        "icelancea": "Ice Lance",
        "icelancema": "Ice Lance",
        "iceprisona": "Ice Prison",
        "iceshotma": "Ice Shot",
        "iceshota": "Ice Shot",
        "iciclea": "Icicle",
        "iciclebarragea": "Icicle Barrage",
        "iciclelaunchera": "Icicle Launcher",
        "iciclelaunchereasya": "Icicle Launcher",
        "icyblowa": "Icy Blow",
        "icyheadbutta": "Icy Headbutt",
        "icypuddlea": "Icy Puddle",
        "icytornadoa": "Icy Tornado",
        "icyveinsa": "Icy Veins",
        "ignitea": "Ignite",
        "immolatea": "Immolate",
        "impalema": "Impale",
        "impalea": "Impale",
        "impalingroota": "Impaling Root",
        "impalingrootma": "Impaling Root",
        "impiousbursta": "Impious Burst",
        "indomitablea": "Indomitable",
        "infernoa": "Inferno",
        "infestationa": "Infestation",
        "infuriatema": "Infuriate",
        "infuriatea": "Infuriate",
        "infusecouragea": "Infuse Courage",
        "innercombustiona": "Inner Combustion",
        "innerfirea": "Inner Fire",
        "innervatea": "Innervate",
        "intercepta": "Intercept",
        "intimidatema": "Intimidate",
        "intimidatea": "Intimidate",
        "invigoratingblowa": "Invigorating Blow",
        "invisibilitya": "Invisibility",
        "ironclada": "Ironclad",
        "irritatingbarka": "Irritating Bark",
        "itchyburna": "Itchy Burn",
        "ivorytowera": "Ivory Tower",
        "jinglebella": "Jingle Bell",
        "killerbitea": "Killer Bite",
        "killerinstincstarta": "Killer Instinct",
        "kindlea": "Kindle",
        "kindlema": "Kindle",
        "knifebarragea": "Knife Barrage",
        "knightspridea": "Knight's Pride",
        "landslidea": "Landslide",
        "lastdawna": "Last Dawn",
        "lastguardiana": "Last Guardian",
        "lastrequiema": "Last Requiem",
        "lastrewarda": "Last Reward",
        "laststanda": "Last Stand",
        "lavaburstsa": "Lava Bursts",
        "lavaeruptiona": "Lava Eruption",
        "lavapuddlea": "Lava Puddle",
        "lavaspraya": "Lava Spray",
        "lawofdarknessa": "Law of Darkness",
        "lawoflighta": "Law of Light",
        "layonhandsa": "Lay on Hands",
        "layonpawsstarta": "Lay on Paws",
        "leafclawa": "Leaf Claw",
        "leafclawplusa": "Leaf Claw",
        "leapslama": "Leap Slam",
        "lethalshota": "Lethal Shot",
        "lethargya": "Lethargy",
        "librariana": "Librarian",
        "lichstoucha": "Lich's Touch",
        "lifetapa": "Life Tap",
        "lifetotema": "Life Totem",
        "lifeblooma": "Lifebloom",
        "lifebloomplusa": "Lifebloom",
        "lightningboltma": "Lightning Bolt",
        "lightningbreatha": "Lightning Breath",
        "lightningroda": "Lightning Rod",
        "livingbomba": "Living Bomb",
        "livingbombplusa": "Living Bomb",
        "livingflamea": "Living Flame",
        "livingforesta": "Living Forest",
        "lonelybloba": "Lonely Blob",
        "loveenhancera": "Love Enhancer",
        "lowselfesteema": "Low Self-Esteem",
        "luminousbarriera": "Luminous Barrier",
        "luminousbeama": "Luminous Beam",
        "lunargracea": "Lunar Grace",
        "magicdevoura": "Magic Devour",
        "magicmushrooma": "Magic Mushroom",
        "magmabloba": "Magma Blob",
        "magmaprisona": "Magma Prison",
        "magmaprisonma": "Magma Prison",
        "magmasplasha": "Magma Splash",
        "magmasurgea": "Magma Surge",
        "maima": "Maim",
        "maledictionstarta": "Malediction",
        "maliciouseyea": "Malicious Eye",
        "maliciousfarewella": "Malicious Farewell",
        "managema": "Mana Gem",
        "manashielda": "Mana Shield",
        "manasurgea": "Mana Surge",
        "maneuvera": "Maneuver",
        "marktargeta": "Mark Target",
        "markthepreya": "Mark the Prey",
        "martyrdoma": "Martyrdom",
        "masscounterspella": "Mass Counterspell",
        "massdilutea": "Mass Dilute",
        "massdispela": "Mass Dispel",
        "masshysteriaa": "Mass Hysteria",
        "massinvisibilitya": "Mass Invisibility",
        "meatbaga": "Meat Bag",
        "meatfeasta": "Meat Feast",
        "meditatea": "Meditate",
        "melancholya": "Melancholy",
        "melodicrhythma": "Melodic Rhythm",
        "meltedplatinga": "Melted Plating",
        "meltingflamea": "Melting Flame",
        "menacingroara": "Menacing Roar",
        "mentalshakea": "Mental Shake",
        "mentalshella": "Mental Shell",
        "mercifula": "Merciful",
        "mercilessa": "Merciless",
        "mesmericmiragea": "Mesmeric Mirage",
        "metalpuddlea": "Metal Puddle",
        "meteorshowera": "Meteor Shower",
        "meteorshowerma": "Meteor Shower",
        "meteoritea": "Meteorite",
        "meteoritecorruptiona": "Meteorite",
        "meteoritema": "Meteorite",
        "mindblasta": "Mind Blast",
        "mindbolta": "Mind Bolt",
        "mindtricka": "Mind Trick",
        "mindtwista": "Mind Twist",
        "mindvisionsa": "Mind Visions",
        "mirrorimagesa": "Mirror Images",
        "miserya": "Misery",
        "missilebarragea": "Missile Barrage",
        "molebustera": "Mole Buster",
        "moonbeama": "Moon Beam",
        "mooncatalysta": "Moon Catalyst",
        "moonguarda": "Moon Guard",
        "moonguardplusa": "Moon Guard",
        "moonfirea": "Moonfire",
        "moonfireplusa": "Moonfire",
        "mortalstrikea": "Mortal Strike",
        "multishota": "Multishot",
        "musicsheeta": "Music Sheet",
        "mysticalicea": "Mystical Ice",
        "naturescalla": "Nature's Call",
        "naturescallplusa": "Nature's Call",
        "necropotencea": "Necropotence",
        "necroticbursta": "Necrotic Burst",
        "nephridiumacida": "Nephridium Acid",
        "neurotoxina": "Neurotoxin",
        "neverendingstorya": "Neverending Story",
        "nightterrora": "Night Terror",
        "nightmarea": "Nightmare",
        "noxiouseruptiona": "Noxious Eruption",
        "noxiousinjectiona": "Noxious Injection",
        "noxiousinjectionplusa": "Noxious Injection",
        "noxiousparasitesa": "Noxious Parasites",
        "numbingstrikea": "Numbing Strike",
        "numbingstrikeb": "Numbing Strike",
        "obfuscatea": "Obfuscate",
        "obscurebarriera": "Obscure Barrier",
        "obscurestrikea": "Obscure Strike",
        "obsidiantowera": "Obsidian Tower",
        "oceanicbarriera": "Oceanic Barrier",
        "odeofwara": "Ode of War",
        "omenofperila": "Omen of Peril",
        "omnipotencea": "Omnipotence",
        "omnisciencea": "Omniscience",
        "onslaughta": "Onslaught",
        "openwounda": "Open Wound",
        "oppressiona": "Oppression",
        "oppressioneasya": "Oppression",
        "oppressionma": "Oppression",
        "overbearingroara": "Overbearing Roar",
        "overchargea": "Overcharge",
        "overcoata": "Overcoat",
        "overgrowtha": "Overgrowth",
        "overgrowthplusa": "Overgrowth",
        "overheata": "Overheat",
        "overpowera": "Overpower",
        "overwhelma": "Overwhelm",
        "owlblessinga": "Owl Blessing",
        "owlblessingma": "Owl Blessing",
        "owlscreecha": "Owl Screech",
        "pacifisma": "Pacifism",
        "packleadera": "Pack Leader",
        "painsupresiona": "Pain Suppression",
        "palisadea": "Palisade",
        "panaceaa": "Panacea",
        "pandemoniuma": "Pandemonium",
        "panicscreama": "Panic Scream",
        "paralizingvenoma": "Paralyzing Venom",
        "paranoiaa": "Paranoia",
        "parryma": "Parry",
        "parrya": "Parry",
        "patiencea": "Patience",
        "statustransfera": "Payback",
        "penancea": "Penance",
        "invisibilityma": "Perfect Invisibility",
        "perfectparrya": "Perfect Parry",
        "perniciousclawa": "Pernicious Claw",
        "perseverancea": "Perseverance",
        "pestilencea": "Pestilence",
        "petcalla": "Pet Call",
        "petcallplusa": "Pet Call",
        "petrifya": "Petrify",
        "phantomechoesa": "Phantom Echoes",
        "phantomechoesma": "Phantom Echoes",
        "phoenixa": "Phoenix",
        "piercinghowla": "Piercing Howl",
        "piercingstrikea": "Piercing Strike",
        "piercingstrikeeasya": "Piercing Strike",
        "piercingstrikefa": "Piercing Strike",
        "piercingstrikema": "Piercing Strike",
        "pillagea": "Pillage",
        "plaguerata": "Plague Rat",
        "plagueshotma": "Plague Shot",
        "plagueshota": "Plague Shot",
        "plumbinga": "Plumbing",
        "pointblankblasta": "Point Blank Blast",
        "poisoncatalysta": "Poison Catalyst",
        "poisondarta": "Poison Dart",
        "poisonfieldsa": "Poison Fields",
        "poisonflaska": "Poison Flask",
        "poisonsplasha": "Poison Splash",
        "poisonspraya": "Poison Spray",
        "poisoneda": "Poisoned",
        "poisoneddaggersa": "Poisoned Daggers",
        "poisonousassaulta": "Poisonous Assault",
        "poisonousbitea": "Poisonous Bite",
        "poisonousblooda": "Poisonous Blood",
        "poisonousbreatha": "Poisonous Breath",
        "poisonousshotma": "Poisonous Shot",
        "poisonousshota": "Poisonous Shot",
        "pommela": "Pommel",
        "popcornbursta": "Popcorn Burst",
        "pounda": "Pound",
        "powerglovea": "Power Glove",
        "powerslavestarta": "Powerslave",
        "praisethesuna": "Praise the Sun",
        "prayerofhealinga": "Prayer of Healing",
        "prayerofprotectiona": "Prayer of Protection",
        "precisestrikea": "Precise Strike",
        "predatora": "Predator",
        "prescriptiona": "Prescription",
        "prismaticfielda": "Prismatic Field",
        "prismaticfieldma": "Prismatic Field",
        "profanea": "Profane",
        "profanema": "Profane",
        "prophetstaffa": "Prophet's Staff",
        "protecta": "Protect",
        "protectfromevila": "Protect from Evil",
        "provokea": "Provoke",
        "psychicscreama": "Psychic Scream",
        "psychicscreamsa": "Psychic Scream",
        "pulsingheala": "Pulsing Heal",
        "pulsingvigora": "Pulsing Vigor",
        "pulverizea": "Pulverize",
        "pummela": "Pummel",
        "puncha": "Punch",
        "puncturema": "Puncture",
        "puncturea": "Puncture",
        "purgetheweaka": "Purge the Weak",
        "purgethewickeda": "Purge the Wicked",
        "purgingflamea": "Purging Flame",
        "purgingraya": "Purging Ray",
        "purgingwindsa": "Purging Winds",
        "purifya": "Purify",
        "purrificationa": "Purrification",
        "pushforwarda": "Push Forward",
        "putrefactiona": "Putrefaction",
        "pyroblasta": "Pyroblast",
        "pyroblastma": "Pyroblast",
        "quickshota": "Quick Shot",
        "rabida": "Rabid",
        "rabidplusa": "Rabid",
        "rabidbitea": "Rabid Bite",
        "radiancea": "Radiance",
        "radiantassaulta": "Radiant Assault",
        "radiantbursta": "Radiant Burst",
        "raggeddolla": "Ragged Doll",
        "ragingblowa": "Raging Blow",
        "raina": "Rain",
        "rainofarrowsa": "Rain of Arrows",
        "rainofthornsa": "Rain of Thorns",
        "raisefightera": "Raise Fighter",
        "raisefightersa": "Raise Fighters",
        "raisemagesa": "Raise Mages",
        "raisepriestsa": "Raise Priests",
        "raisewarlocksa": "Raise Warlocks",
        "rampagea": "Rampage",
        "rangerarmora": "Ranger Armor",
        "rapidfirema": "Rapid Fire",
        "rapidfirea": "Rapid Fire",
        "rapidmultiplicationa": "Rapid Multiplication",
        "rapturea": "Rapture",
        "rayoffrosta": "Ray of Frost",
        "rayoffrostma": "Ray of Frost",
        "rayofhopea": "Ray of Hope",
        "reactivelaserdta": "Reactive Laser",
        "reactivelaserdtoa": "Reactive Laser",
        "reactivelaserma": "Reactive Laser",
        "reactivelasera": "Reactive Laser",
        "reapinga": "Reaping",
        "reassemblea": "Reassemble",
        "reassemblema": "Reassemble",
        "recklesschargea": "Reckless Charge",
        "recurringnightmarea": "Recurring Nightmare",
        "redstorma": "Red Storm",
        "redemptiona": "Redemption",
        "reforgedcorea": "Reforged Core",
        "regrowheada": "Regrow Head",
        "regrowtha": "Regrowth",
        "reinforcedsteela": "Reinforced Steel",
        "renda": "Rend",
        "renewa": "Renew",
        "repairarmorma": "Repair Armor",
        "repairarmora": "Repair Armor",
        "repentancea": "Repentance",
        "repetitiontraininga": "Repetition Training",
        "replenishmenta": "Replenishment",
        "resurrectiona": "Resurrection",
        "revealingflaska": "Revealing Flask",
        "revealingstrikea": "Revealing Strike",
        "revengea": "Revenge",
        "reverberantversea": "Reverberant Verse",
        "ricocheta": "Ricochet",
        "righteousfirea": "Righteous Fire",
        "rigidstancea": "Rigid Stance",
        "ringsofpowera": "Rings of Power",
        "ripostea": "Riposte",
        "rosegardena": "Rose Garden",
        "royalrama": "Royal Ram",
        "ruggedwrappinga": "Rugged Wrapping",
        "ruinbolta": "Ruin Bolt",
        "ruminantbitea": "Ruminant Bite",
        "rupturea": "Rupture",
        "sacredbeama": "Sacred Beam",
        "sacredblowa": "Sacred Blow",
        "sacredbolta": "Sacred Bolt",
        "sacredboltma": "Sacred Bolt",
        "sacredceremonya": "Sacred Ceremony",
        "sacredceremonyma": "Sacred Ceremony",
        "sacredgrounda": "Sacred Ground",
        "sacredguarda": "Sacred Guard",
        "sacredlightninga": "Sacred Lightning",
        "sacredlightningma": "Sacred Lightning",
        "sacredrancora": "Sacred Rancor",
        "sacredshota": "Sacred Shot",
        "sadtantruma": "Sad Tantrum",
        "safeguarda": "Safeguard",
        "sanctificationa": "Sanctification",
        "sanctificationma": "Sanctification",
        "sanctuarya": "Sanctuary",
        "sanctuaryma": "Sanctuary",
        "sandstorma": "Sand Storm",
        "sandtornadoa": "Sand Tornado",
        "sarcasticsonneta": "Sarcastic Sonnet",
        "sausagefactorya": "Sausage Factory",
        "saveitforlatera": "Save It For Later",
        "sawbladea": "Saw Blade",
        "sawtoothknifea": "Sawtooth Knife",
        "scattershota": "Scattershot",
        "scavengea": "Scavenge",
        "scorchingflamea": "Scorching Flame",
        "scorchingraya": "Scorching Ray",
        "scourgebarriera": "Scourge Barrier",
        "scourgeblasta": "Scourge Blast",
        "scrollofdefensea": "Scroll of Defense",
        "scrollofintellecta": "Scroll of Intellect",
        "scrollofspeeda": "Scroll of Speed",
        "scrya": "Scry",
        "seacursea": "Sea Curse",
        "searingnovaa": "Searing Nova",
        "searingtoucha": "Searing Touch",
        "secondwinda": "Second Wind",
        "sentryalarma": "Sentry Alarm",
        "serratedweaponsa": "Serrated Weapons",
        "settargeta": "Set Target",
        "setupa": "Setup",
        "severarteryma": "Sever Artery",
        "severarterya": "Sever Artery",
        "severeburna": "Severe Burn",
        "shadowawakeninga": "Shadow Awakening",
        "shadowawakeningma": "Shadow Awakening",
        "shadowbarragea": "Shadow Barrage",
        "shadowbindinga": "Shadow Binding",
        "shadowbindingma": "Shadow Binding",
        "shadowbolta": "Shadow Bolt",
        "shadowboltma": "Shadow Bolt",
        "shadowcleavea": "Shadow Cleave",
        "shadowimbuementa": "Shadow Imbuement",
        "shadowlancea": "Shadow Lance",
        "shadowmenda": "Shadow Mend",
        "shadowmendma": "Shadow Mend",
        "shadownovaa": "Shadow Nova",
        "shadowslasha": "Shadow Slash",
        "shadowwolfa": "Shadow Wolf",
        "shadowstepma": "Shadowstep",
        "shadowstepa": "Shadowstep",
        "shakeitoffa": "Shake it off",
        "shakeitoffma": "Shake it off!",
        "shamanisma": "Shamanism",
        "sharingiscaringa": "Sharing Is Caring",
        "sharpenma": "Sharpen",
        "sharpenmwa": "Sharpen",
        "sharpena": "Sharpen",
        "sharpeningcutsa": "Sharpening Cuts",
        "sharpeningknifea": "Sharpening Knife",
        "shattera": "Shatter",
        "shatterma": "Shatter",
        "shatteringfistsa": "Shattering Fists",
        "sheara": "Shear",
        "shieldbashma": "Shield Bash",
        "shieldbasha": "Shield Bash",
        "shieldbreakerma": "Shield Breaker",
        "shieldbreakera": "Shield Breaker",
        "shieldchargema": "Shield Charge",
        "shieldchargea": "Shield Charge",
        "shieldgeneratora": "Shield Generator",
        "shieldjammera": "Shield Jammer",
        "shieldofwardinga": "Shield of Warding",
        "shieldslamma": "Shield Slam",
        "shieldslammma": "Shield Slam",
        "shieldslama": "Shield Slam",
        "shieldsmeltera": "Shield Smelter",
        "shieldstancea": "Shield Stance",
        "shieldthrowa": "Shield Throw",
        "shieldwallma": "Shield Wall",
        "shieldwalla": "Shield Wall",
        "shiftingscrolla": "Shifting Scroll",
        "shiningforcea": "Shining Force",
        "shiva": "Shiv",
        "shocknovaa": "Shock Nova",
        "shocknovama": "Shock Nova",
        "shrapnelshota": "Shrapnel Shot",
        "sickleslasha": "Sickle Slash",
        "sidestepa": "Sidestep",
        "siegebreakerma": "Siege Breaker",
        "siegebreakera": "Siege Breaker",
        "silencingauraa": "Silencing Aura",
        "silentbacklasha": "Silent Backlash",
        "siphonlifea": "Siphon Life",
        "skeweringa": "Skewering",
        "skillfula": "Skillful",
        "skullsplittera": "Skullsplitter",
        "slaveratsa": "Slave Rats",
        "slicema": "Slice",
        "slicemb": "Slice",
        "slicea": "Slice",
        "sliceanddicea": "Slice and Dice!",
        "smellblooda": "Smell Blood",
        "smokebombma": "Smoke Bomb",
        "smokebomba": "Smoke Bomb",
        "snatchingclawa": "Snatching Claw",
        "sneakpeeka": "Sneak Peek",
        "sneakystrikea": "Sneaky Strike",
        "snipea": "Snipe",
        "snipeb": "Snipe",
        "snipershota": "Sniper Shot",
        "snowfalla": "Snowfall",
        "solarflarea": "Solar Flare",
        "sonara": "Sonar",
        "sonarha": "Sonar",
        "songofceleritya": "Song of Celerity",
        "songofquicknessma": "Song of Quickness",
        "songofquicknessa": "Song of Quickness",
        "soothingwatersa": "Soothing Waters",
        "soulharvesta": "Soul Harvest",
        "soullanterna": "Soul Lantern",
        "sparkoflifea": "Spark of Life",
        "spectralmissilesa": "Spectral Missiles",
        "spectralscalesa": "Spectral Scales",
        "spellechoa": "Spell Echo",
        "spikedballa": "Spiked Ball",
        "spikedshielda": "Spiked Shield",
        "spookynighta": "Spooky Night",
        "spreadcorruptiona": "Spread Corruption",
        "sprinta": "Sprint",
        "sprouta": "Sprout",
        "squalla": "Squall",
        "stalkinga": "Stalking",
        "stampedea": "Stampede",
        "standardbearerstarta": "Standard Bearer",
        "starfalla": "Starfall",
        "starfallplusa": "Starfall",
        "staringcontesta": "Staring Contest",
        "starrynighta": "Starry Night",
        "staticchargea": "Static Charge",
        "steala": "Steal",
        "steamrollera": "Steamroller",
        "steelforgea": "Steel Forge",
        "steelskina": "Steelskin",
        "stimulatingstinga": "Stimulating Sting",
        "stingerlaunchera": "Stinger Launcher",
        "stockadema": "Stockade",
        "stockademeasya": "Stockade",
        "stockadea": "Stockade",
        "stompa": "Stomp",
        "stonefista": "Stone Fist",
        "stonewalla": "Stone Wall",
        "stonewalleasya": "Stone Wall",
        "stoneskina": "Stoneskin",
        "storma": "Storm",
        "stormcorruptiona": "Storm",
        "stormjavelina": "Storm Javelin",
        "stormtridenta": "Storm Trident",
        "stormtridentb": "Storm Trident",
        "stormwarda": "Storm Ward",
        "stressfulfumesa": "Stressful Fumes",
        "strongholda": "Stronghold",
        "stungrenadea": "Stun Grenade",
        "subzeroa": "Sub Zero",
        "subjugationa": "Subjugation",
        "submergea": "Submerge",
        "subterfugea": "Subterfuge",
        "sugarrusha": "Sugar Rush",
        "summonimpa": "Summon Imp",
        "summonimpeasya": "Summon Imp",
        "summonimpplusa": "Summon Imp",
        "summonwicka": "Summon Wick",
        "sunbeama": "Sunbeam",
        "sunderarmorma": "Sunder Armor",
        "sunderarmora": "Sunder Armor",
        "superconductora": "Superconductor",
        "sweepingstrikema": "Sweeping Strike",
        "sweepingstrikea": "Sweeping Strike",
        "sweetmelodyma": "Sweet Melody",
        "sweetmelodya": "Sweet Melody",
        "swinga": "Swing",
        "tabularasaa": "Tabula Rasa",
        "tabularasabasa": "Tabula Rasa",
        "tabularasabasb": "Tabula Rasa",
        "tacticalnukea": "Tactical Nuke",
        "tacticalthinkinga": "Tactical Thinking",
        "takecovera": "Take Cover",
        "takingaima": "Taking Aim",
        "tantruma": "Tantrum",
        "targetshootinga": "Target Shooting",
        "tauntingroara": "Taunting Roar",
        "tediouspoema": "Tedious Poem",
        "temporalchainsa": "Temporal Chains",
        "terrorizea": "Terrorize",
        "terrorizinghowla": "Terrorizing Howl",
        "teslacoila": "Tesla Coil",
        "thechosenonea": "The Chosen One",
        "theencyclopediaa": "The Encyclopedia",
        "thehunta": "The Hunt",
        "thewolfslayera": "The Wolfslayer",
        "thornproliferationa": "Thorn Proliferation",
        "thorneatera": "Thorneater",
        "thorneaterhydraa": "Thorneater",
        "thousandneedlesa": "Thousand Needles",
        "threatena": "Threaten",
        "threatenb": "Threaten",
        "throwbolasa": "Throw Bolas",
        "throwknifea": "Throw Knife",
        "throwspeara": "Throw Spear",
        "thunderrunea": "Thunder Rune",
        "thunderclapa": "Thunderclap",
        "thunderfurya": "Thunderfury",
        "thunderfuryma": "Thunderfury",
        "thunderstorma": "Thunderstorm",
        "timona": "Timon",
        "titanfalla": "Titan Fall",
        "tomahawka": "Tomahawk",
        "tomeofintellecta": "Tome of Intellect",
        "torchinga": "Torching",
        "tormenta": "Torment",
        "tormentofthornsa": "Torment of Thorns",
        "totaleclipsea": "Total Eclipse",
        "toxicpuddlea": "Toxic Puddle",
        "toxicraina": "Toxic Rain",
        "toxicretaliationa": "Toxic Retaliation",
        "toxicstrikea": "Toxic Strike",
        "toxicvolleya": "Toxic Volley",
        "tracea": "Trace",
        "tranquilitya": "Tranquility",
        "tranquilityplusa": "Tranquility",
        "transcendencea": "Transcendence",
        "transcribea": "Transcribe",
        "transfusiona": "Transfusion",
        "transmisiona": "Transmission",
        "trebucheta": "Trebuchet",
        "tremora": "Tremor",
        "tremorsa": "Tremors",
        "trickortreata": "Trick or Treat",
        "trustwhortya": "Trustworthy",
        "tuneupa": "Tune Up",
        "tuskbarragea": "Tusk Barrage",
        "tuskbarrageplusa": "Tusk Barrage",
        "tuskchargea": "Tusk Charge",
        "tuskchargeplusa": "Tusk Charge",
        "twilightslaughtera": "Twilight Slaughter",
        "twilightswampa": "Twilight Swamp",
        "twinscrollsstarta": "Twin Scrolls",
        "typhoona": "Typhoon",
        "typhoonma": "Typhoon",
        "ultraregenerationa": "Ultra Regeneration",
        "undyingwilla": "Undying Will",
        "unforgivingnaturea": "Unforgiving Nature",
        "ungodlystrengtha": "Ungodly Strength",
        "unholystorma": "Unholy Storm",
        "unholystormma": "Unholy Storm",
        "unleasheda": "Unleashed",
        "unleashedma": "Unleashed",
        "unstablecorea": "Unstable Core",
        "unstablepowera": "Unstable Power",
        "untrustwhortya": "Untrustworthy",
        "unwaveringa": "Unwavering",
        "unwaveringfaitha": "Unwavering Faith",
        "uproota": "Uproot",
        "upwinda": "Upwind",
        "vaccinea": "Vaccine",
        "valiantdefendera": "Valiant Defender",
        "vampirictoucha": "Vampiric Touch",
        "vampirictutora": "Vampiric Tutor",
        "vanisha": "Vanish",
        "vengeancestarta": "Vengeance",
        "venomflaska": "Venom Flask",
        "vexingcrescendoa": "Vexing Crescendo",
        "viciousbitea": "Vicious Bite",
        "vigilancea": "Vigilance",
        "vigorousa": "Vigorous",
        "vigorousfurystarta": "Vigorous Fury",
        "vilegasa": "Vile Gas",
        "vilegasha": "Vile Gash",
        "vilegashplusa": "Vile Gash",
        "vilelancea": "Vile Lance",
        "violentbursta": "Violent Burst",
        "viperstrikea": "Viper Strike",
        "virulentreactiona": "Virulent Reaction",
        "viscousshielda": "Viscous Shield",
        "vitalitydraina": "Vitality Drain",
        "vitalizea": "Vitalize",
        "vitalizema": "Vitalize",
        "vitalizingserenadema": "Vitalizing Serenade",
        "vitalizingserenadea": "Vitalizing Serenade",
        "voidcrusha": "Void Crush",
        "voidmemorya": "Void Memory",
        "volatilecorea": "Volatile Core",
        "volleya": "Volley",
        "warcrya": "Warcry",
        "warcrycroca": "Warcry",
        "warpainta": "Warpaint",
        "warriormemorya": "Warrior Memory",
        "waterguna": "Water Gun",
        "waterjeta": "Water Jet",
        "waterpuddlea": "Water Puddle",
        "watersrpaya": "Water Spray",
        "watersrpayb": "Water Spray",
        "wateringa": "Watering",
        "weakeninggazea": "Weakening Gaze",
        "weaponcachea": "Weapon Cache",
        "weba": "Web",
        "webweavera": "Webweaver",
        "wellfeda": "Well Fed",
        "whacka": "Whack",
        "whirlwindma": "Whirlwind",
        "whirlwinda": "Whirlwind",
        "whisperingliesa": "Whispering Lies",
        "whiteflamea": "White Flame",
        "whiteflamesa": "White Flames",
        "wickedcraftsmana": "Wicked Craftsman",
        "wildbitea": "Wild Bite",
        "wildchargea": "Wild Charge",
        "wildhunta": "Wild Hunt",
        "wildroara": "Wild Roar",
        "wildrootsa": "Wild Roots",
        "windblessinga": "Wind Blessing",
        "windsofamnesiaa": "Winds of Amnesia",
        "winteriscominga": "Winter Is Coming",
        "winteriscomingma": "Winter Is Coming",
        "winterorba": "Winter Orb",
        "winterorbma": "Winter Orb",
        "wintersnighttalea": "Winter's Night Tale",
        "withera": "Wither",
        "wolfguarda": "Wolf Guard",
        "woodencrosiera": "Wooden Crosier",
        "woollyshella": "Woolly Shell",
        "woollyshellplusa": "Woolly Shell",
        "worldinflamesa": "World in Flames",
        "wreckingballa": "Wrecking Ball",
        "wristcuttera": "Wristcutter",
        "yangmantraa": "Yang Mantra",
        "yangrituala": "Yang Ritual",
        "yinmantraa": "Yin Mantra",
        "yinrituala": "Yin Ritual",
        "yinyangbolta": "Yin Yang Bolt",
        "zapa": "Zap",
        "zealbarriera": "Zeal Barrier",
        "zealousprayera": "Zealous Prayer"
    },
    "B": {
        "absorptionb": "Absorption",
        "abstractionb": "Abstraction",
        "abyssalrevengeb": "Abyssal Revenge",
        "abyssalsonatab": "Abyssal Sonata",
        "abyssalwrathb": "Abyssal Wrath",
        "acidbreathb": "Acid Breath",
        "acidspitb": "Acid Spit",
        "acrobaticstrikemb": "Acrobatic Strike",
        "acrobaticstrikeb": "Acrobatic Strike",
        "adrenalineb": "Adrenaline",
        "aftershockb": "Aftershock",
        "aimedshotmb": "Aimed Shot",
        "aimedshotb": "Aimed Shot",
        "allinb": "All In",
        "ambidextrousb": "Ambidextrous",
        "ambushb": "Ambush",
        "ammunitionsb": "Ammunition",
        "amnesiab": "Amnesia",
        "amplifyingfieldb": "Amplifying Field",
        "anathemab": "Anathema",
        "anklebiteb": "Ankle Bite",
        "annoyingwhistleb": "Annoying Whistle",
        "anthemofhopeb": "Anthem of Hope",
        "antimagicfieldb": "Antimagic Field",
        "apotheosisb": "Apotheosis",
        "arcaneconduitb": "Arcane Conduit",
        "architectssoulb": "Architect's Soul",
        "ardentchampionb": "Ardent Champion",
        "ardentguardb": "Ardent Guard",
        "arenachampionb": "Arena Champion",
        "armageddonb": "Armageddon",
        "armoredsteelb": "Armored Steel",
        "arsenalb": "Arsenal",
        "ashb": "Ash",
        "ashstormb": "Ash Storm",
        "ashstormcorruptionb": "Ash Storm",
        "ashstormplusb": "Ash Storm",
        "ashyskyb": "Ashy Sky",
        "astralhowlob": "Astral Howl",
        "astralwolfob": "Astral Wolf",
        "atonementstartb": "Atonement",
        "awfultantrumb": "Awful Tantrum",
        "awfultantrumplusb": "Awful Tantrum",
        "backboneb": "Backbone",
        "backlashb": "Backlash",
        "backstabmb": "Backstab",
        "backstabb": "Backstab",
        "badauguryb": "Bad Augury",
        "bakeb": "Bake",
        "balllightningb": "Ball Lightning",
        "balladofconquestb": "Ballad of Conquest",
        "balladofevasionb": "Ballad of Evasion",
        "bandaidb": "Band-Aid",
        "bandaidmb": "Band-Aid",
        "baneb": "Bane",
        "banishstartb": "Banish",
        "baptismb": "Baptism",
        "baptismmb": "Baptism",
        "barbedwireb": "Barbed Wire",
        "barkskinb": "Barkskin",
        "barkskinplusb": "Barkskin",
        "barrageb": "Barrage",
        "barricademb": "Barricade",
        "barricadeb": "Barricade",
        "barrierb": "Barrier",
        "barriermb": "Barrier",
        "basthetsgraceb": "Basthet's Grace",
        "battleplanb": "Battle Plan",
        "battleshoutb": "Battle Shout",
        "benedictionb": "Benediction",
        "bewilderb": "Bewilder",
        "bigsnowballb": "Big Snowball",
        "bindinghealb": "Binding Heal",
        "birdofpreyb": "Bird of Prey",
        "biteb": "Bite",
        "blackdeathstartb": "Black Death",
        "blackholeb": "Black Hole",
        "blackkarmab": "Black Karma",
        "blacktalonsb": "Black Talons",
        "bladedanceb": "Blade Dance",
        "bladeflurryb": "Blade Flurry",
        "bladerushb": "Blade Rush",
        "bladestormb": "Blade Storm",
        "blasphemyb": "Blasphemy",
        "blazingnovab": "Blazing Nova",
        "blazingslashb": "Blazing Slash",
        "blazingstrikeb": "Blazing Strike",
        "bleedoutb": "Bleed Out",
        "blizzardb": "Blizzard",
        "blizzardmb": "Blizzard",
        "blizzardmmb": "Blizzard",
        "bloodfeedingb": "Blood Feeding",
        "bloodforbloodmb": "Blood For Blood",
        "bloodforbloodb": "Blood For Blood",
        "bloodinfectionb": "Blood Infection",
        "bloodpuddleb": "Blood Puddle",
        "bloodrainmb": "Blood Rain",
        "bloodrainb": "Blood Rain",
        "bloodsausageb": "Blood Sausage",
        "bloodbathb": "Bloodbath",
        "bloodrageb": "Bloodrage",
        "bloodsuckerb": "Bloodsucker",
        "bloodycleaveb": "Bloody Cleave",
        "bloodyretaliationb": "Bloody Retaliation",
        "blossomb": "Blossom",
        "blowupb": "Blow Up!",
        "bludgeonmb": "Bludgeon",
        "bludgeonb": "Bludgeon",
        "blueflameb": "Blue Flame",
        "bluffb": "Bluff",
        "blurb": "Blur",
        "bombb": "Bomb",
        "bombmb": "Bomb",
        "bomblotteryb": "Bomb Lottery",
        "bombardb": "Bombard",
        "boneclawsb": "Bone Claws",
        "boneguardb": "Bone Guard",
        "bookofnightmaresb": "Book of Nightmares",
        "bookwormb": "Bookworm",
        "boulderthrowb": "Boulder Throw",
        "bouncingshieldb": "Bouncing Shield",
        "bouncyembersb": "Bouncy Embers",
        "bowlingb": "Bowling",
        "brainfreezeb": "Brain Freeze",
        "brandb": "Brand",
        "brandplusb": "Brand",
        "bristlyfurb": "Bristly Fur",
        "brokenboneb": "Broken Bone",
        "broodmotherb": "Broodmother",
        "broodmotherplusb": "Broodmother",
        "bulkhealb": "Bulk Heal",
        "bulwarkb": "Bulwark",
        "bunnyhoppingb": "Bunny Hopping",
        "bunnyhoppingmb": "Bunny Hopping",
        "burningbloodb": "Burning Blood",
        "burningcoreb": "Burning Core",
        "burningcoremb": "Burning Core",
        "burningjavelinb": "Burning Javelin",
        "burningjavelineb": "Burning Javelin",
        "burningshotb": "Burning Shot",
        "burningweaponsb": "Burning Weapons",
        "burrowb": "Burrow",
        "butcheringb": "Butchering",
        "caltropsb": "Caltrops",
        "camouflageb": "Camouflage",
        "captainshowlstartb": "Captain's Howl",
        "captivatingvoiceb": "Captivating Voice",
        "carnageb": "Carnage",
        "carrioneaterb": "Carrioneater",
        "castlingb": "Castling",
        "catapultb": "Catapult",
        "catharsisb": "Catharsis",
        "causticbeamb": "Caustic Beam",
        "cauterizeb": "Cauterize",
        "celestialbrillanceb": "Celestial Brilliance",
        "celestialbrillancemb": "Celestial Brilliance",
        "celestialtollb": "Celestial Toll",
        "celestialwrathb": "Celestial Wrath",
        "chainhealb": "Chain Heal",
        "chainhealmb": "Chain Heal",
        "chainlightningb": "Chain Lightning",
        "chainlightningmb": "Chain Lightning",
        "challengingshoutb": "Challenging Shout",
        "changeweaponb": "Change Weapon",
        "chantofaccuracyb": "Chant of Accuracy",
        "chantofinitiativeb": "Chant of Initiative",
        "chaospuddleb": "Chaos Puddle",
        "chaoticwindb": "Chaotic Wind",
        "chargeb": "Charge",
        "chargebatteryb": "Charge Battery",
        "chargedclawsb": "Charged Claws",
        "childofthestormb": "Child of the Storm",
        "chillinggazeb": "Chilling Gaze",
        "circleofhealingb": "Circle of Healing",
        "circuitoverloadb": "Circuit Overload",
        "citadelb": "Citadel",
        "clairvoyanceb": "Clairvoyance",
        "clarityb": "Clarity",
        "clearinstructionsb": "Clear Instructions",
        "cleaveb": "Cleave",
        "clobberb": "Clobber",
        "coatofarmsb": "Coat of Arms",
        "cocoonb": "Cocoon",
        "coldbreathb": "Cold Breath",
        "coldburstb": "Cold Burst",
        "coldfeetb": "Cold Feet",
        "coldfrontb": "Cold Front",
        "coldhandsb": "Cold Hands",
        "coldlaserb": "Cold Laser",
        "coldnovab": "Cold Nova",
        "coldsnapb": "Cold Snap",
        "coldsparkstartb": "Cold Spark",
        "coldweaponsb": "Cold Weapons",
        "collectwasteb": "Collect Waste",
        "colorfulpuddleb": "Colorful Puddle",
        "colossalblowb": "Colossal Blow",
        "combatbandagesb": "Combat Bandages",
        "combustionb": "Combustion",
        "commandandconquerb": "Command and Conquer",
        "condemnationb": "Condemnation",
        "condemnationmb": "Condemnation",
        "consecratedb": "Consecrated",
        "consecrationb": "Consecration",
        "consecrationespb": "Consecration",
        "consumeb": "Consume",
        "corrosivetouchb": "Corrosive Touch",
        "corruptharpoonb": "Corrupt Harpoons",
        "corruptedbladeb": "Corrupted Blade",
        "corruptedknifeb": "Corrupted Knife",
        "corruptedplateb": "Corrupted Plate",
        "corruptionb": "Corruption",
        "counterspellb": "Counterspell",
        "crabbaitb": "Crab Bait",
        "crashlightningb": "Crash Lightning",
        "crashlightningmb": "Crash Lightning",
        "crazylookb": "Crazy Look",
        "crescentlightb": "Crescent Light",
        "crosshairb": "Crosshair",
        "crosshairmb": "Crosshair",
        "crucifixionb": "Crucifixion",
        "crushingdarknessb": "Crushing Darkness",
        "crystallizationb": "Crystallization",
        "curativetherapyb": "Curative Therapy",
        "curseofagonyb": "Curse of Agony",
        "curseofdecayb": "Curse of Decay",
        "curseofelementsb": "Curse of Elements",
        "curseofelementsmb": "Curse of Elements",
        "curseofexhaustionb": "Curse of Exhaustion",
        "curseoffragilityb": "Curse of Fragility",
        "curseoffragilitymb": "Curse of Fragility",
        "curseofmadnessb": "Curse of Madness",
        "curseofshadowsb": "Curse of Shadows",
        "curseofshadowsmb": "Curse of Shadows",
        "curseoftormentb": "Curse of Torment",
        "curseofvulnerabilityb": "Curse of Vulnerability",
        "curseofweaknessb": "Curse of Weakness",
        "cursedbandagesb": "Cursed Bandages",
        "cursedwaterb": "Cursed Water",
        "cursemancyb": "Cursemancy",
        "cursenomiconb": "Cursenomicon",
        "custodianb": "Custodian",
        "cycloneslashb": "Cyclone Slash",
        "dampenmagicb": "Dampen Magic",
        "dampingfieldb": "Damping Field",
        "darkblightb": "Dark Blight",
        "darkblowb": "Dark Blow",
        "darkconcoctionb": "Dark Concoction",
        "darkconstraintb": "Dark Constraint",
        "darkcremationb": "Dark Cremation",
        "darkfutureb": "Dark Future",
        "darkgagb": "Dark Gag",
        "darkguardb": "Dark Guard",
        "darklightningb": "Dark Lightning",
        "darkmiasmab": "Dark Miasma",
        "darkomenb": "Dark Omen",
        "darkoutbreakb": "Dark Outbreak",
        "darkoutbreakmb": "Dark Outbreak",
        "darkoutburstb": "Dark Outburst",
        "darkpactb": "Dark Pact",
        "darkpuddleb": "Dark Puddle",
        "darkrancorb": "Dark Rancor",
        "darkritualb": "Dark Ritual",
        "darkshotb": "Dark Shot",
        "darknessfallsb": "Darkness Falls",
        "darknessfallsmb": "Darkness Falls",
        "dashb": "Dash",
        "dauntlessb": "Dauntless",
        "dawnpunishmentb": "Dawn Punishment",
        "dawnlightb": "Dawnlight",
        "deadlychimeb": "Deadly Chime",
        "deadlystrikesb": "Deadly Strikes",
        "deathcoilb": "Death Coil",
        "deathgripb": "Death Grip",
        "deathsdoorb": "Death's Door",
        "deathsembraceb": "Death's Embrace",
        "deathsreachb": "Death's Reach",
        "deathstollb": "Death's Toll",
        "deathstolleasyb": "Death's Toll",
        "deathstollmb": "Death's Toll",
        "debilitateb": "Debilitate",
        "deepdarknessb": "Deep Darkness",
        "deepdarknessmb": "Deep Darkness",
        "deeppuffb": "Deep Puff",
        "defendb": "Defend",
        "defensivestrategyb": "Defensive Strategy",
        "defiledlegacyb": "Defiled Legacy",
        "deflectb": "Deflect",
        "defrostarcherb": "Defrost Archer",
        "defrostswordmanb": "Defrost Swordman",
        "dejavub": "Deja Vu",
        "delayresponseb": "Delay Response",
        "demandobedienceb": "Demand Obedience",
        "dementiab": "Dementia",
        "dementiamb": "Dementia",
        "demolishingblowb": "Demolishing Blow",
        "demonicflameb": "Demonic Flame",
        "demonictutorb": "Demonic Tutor",
        "demoralizingshoutb": "Demoralizing Shout",
        "desecrationb": "Desecration",
        "desertwhirlwindb": "Desert Whirlwind",
        "despairb": "Despair",
        "desperateplayerb": "Desperate Prayer",
        "detectionb": "Detection",
        "detoxifyb": "Detoxify",
        "devastatemb": "Devastate",
        "devastatemmb": "Devastate",
        "devastateb": "Devastate",
        "deviantzealotryb": "Deviant Zealotry",
        "diluteb": "Dilute",
        "dinnerisreadyb": "Dinner is Ready!",
        "dinnerisreadyplusb": "Dinner is Ready!",
        "dischargeb": "Discharge",
        "disengageb": "Disengage",
        "disintegrateb": "Disintegrate",
        "disintegratemb": "Disintegrate",
        "dislocatedjawb": "Dislocated Jaw",
        "dispelmagicb": "Dispel Magic",
        "divinechimeb": "Divine Chime",
        "divinegracestartb": "Divine Grace",
        "divineguidanceb": "Divine Guidance",
        "divineinsightb": "Divine Insight",
        "divineireb": "Divine Ire",
        "divinejusticeb": "Divine Justice",
        "divineordealb": "Divine Ordeal",
        "divinepowerb": "Divine Power",
        "divineprotectionb": "Divine Protection",
        "divinepunishmentb": "Divine Punishment",
        "divineretributionmb": "Divine Retribution",
        "divineretributionb": "Divine Retribution",
        "divineshieldb": "Divine Shield",
        "divinesmiteb": "Divine Smite",
        "divinestrikeb": "Divine Strike",
        "doityourselfb": "Do it yourself!",
        "doomsdayb": "Doomsday",
        "doublebubbleb": "Double Bubble",
        "doublechopb": "Double Chop",
        "doubleshotb": "Double Shot",
        "doubleslashb": "Double Slash",
        "doubleslashmb": "Double Slash",
        "doublestrikeb": "Double Strike",
        "doubletroubleb": "Double Trouble",
        "downpourb": "Downpour",
        "dragonbiteb": "Dragon Bite",
        "dragonroarb": "Dragon Roar",
        "dragonscalesb": "Dragon Scales",
        "drainlifeb": "Drain Life",
        "dreadslashb": "Dread Slash",
        "dreadfulwaveb": "Dreadful Wave",
        "drillb": "Drill",
        "dualstrikemb": "Dual Strike",
        "dualstrikeb": "Dual Strike",
        "dualwieldb": "Dual Wield",
        "dungtossb": "Dung Toss",
        "duskpunishmentb": "Dusk Punishment",
        "dwarffortressb": "Dwarf Fortress",
        "earthguardb": "Earth Guard",
        "earthquakeb": "Earthquake",
        "earthwaveb": "Earthwave",
        "electricdischargeb": "Electric Discharge",
        "electricpuddleb": "Electric Puddle",
        "electricpulseb": "Electric Pulse",
        "electricweaponsb": "Electric Weapons",
        "electricitymanualb": "Electricity Manual",
        "electrocuteb": "Electrocute",
        "electrocutionb": "Electrocution",
        "electroshockb": "Electroshock",
        "elementalboltb": "Elemental Bolt",
        "elementalproliferationb": "Elemental Proliferation",
        "elementalwardb": "Elemental Ward",
        "elementalnovab": "Elemental Wave",
        "elvenagilityb": "Elven Agility",
        "emberstormb": "Emberstorm",
        "emberstormspecialb": "Emberstorm",
        "empowerb": "Empower",
        "enchantweaponsb": "Enchant Weapons",
        "encoreb": "Encore",
        "endlessabyssb": "Endless Abyss",
        "endurepainb": "Endure Pain",
        "energizingserenadeb": "Energizing Serenade",
        "enervateb": "Enervate",
        "enfeebleb": "Enfeeble",
        "enlightenedb": "Enlightened",
        "enrageb": "Enrage",
        "entanglingrootsb": "Entangling Roots",
        "entombb": "Entomb",
        "entrenchmb": "Entrench",
        "entrenchb": "Entrench",
        "equivalentexchangeb": "Equivalent Exchange",
        "eternallullabyb": "Eternal Lullaby",
        "eternalrecallb": "Eternal Recall",
        "etherealb": "Ethereal",
        "etherealknivesb": "Ethereal Knives",
        "etherealweaponsb": "Ethereal Weapons",
        "evanescenceb": "Evanescence",
        "evasivemaneuverb": "Evasive Maneuver",
        "eviscerateb": "Eviscerate",
        "evocationb": "Evocation",
        "excaliburnb": "Excaliburn",
        "expectedprophecyb": "Expected Prophecy",
        "experttrackerstartb": "Expert Tracker",
        "exploitopeningsb": "Exploit Openings",
        "explosivegiftb": "Explosive Gift",
        "explosiveshotb": "Explosive Shot",
        "exposearmorb": "Expose Armor",
        "fadeb": "Fade",
        "falconshotstartb": "Falcon Shot",
        "fallenpromiseb": "Fallen Promise",
        "familyjewelsb": "Family Jewels",
        "fanoficiclesb": "Fan of Icicles",
        "fanofknivesb": "Fan of Knives",
        "fantheflamesb": "Fan the Flames",
        "fanaticismb": "Fanaticism",
        "farshotb": "Far Shot",
        "faststrikeb": "Fast Strike",
        "fatedfutureb": "Fated Future",
        "fearlessnessb": "Fearlessness",
        "featherbarrageb": "Feather Barrage",
        "feedtherichb": "Feed The Rich",
        "feintb": "Feint",
        "fervencyb": "Fervency",
        "ferventprotectionb": "Fervent Protection",
        "fieryblowb": "Fiery Blow",
        "fierycoatb": "Fiery Coat",
        "fieryfistb": "Fiery Fist",
        "fieryjabsb": "Fiery Jabs",
        "fieryjabsplusb": "Fiery Jabs",
        "fierynovab": "Fiery Nova",
        "fieryshieldmb": "Fiery Shield",
        "fieryshieldstartb": "Fiery Shield",
        "fieryweaponsb": "Fiery Weapons",
        "findweaknessb": "Find Weakness",
        "fireblastb": "Fire Blast",
        "fireboltb": "Fire Bolt",
        "firebrandb": "Fire Brand",
        "fireclawb": "Fire Claw",
        "fireemberb": "Fire Ember",
        "fireintheholeb": "Fire in the Hole!",
        "firelaserb": "Fire Laser",
        "fireslashb": "Fire Slash",
        "fireballb": "Fireball",
        "fireballmb": "Fireball",
        "flameballb": "Fireball",
        "fireproofb": "Fireproof",
        "firestormb": "Firestorm",
        "firstaidb": "First Aid",
        "fishingnetb": "Fishing Net",
        "flamedancerb": "Flame Dancer",
        "flamestormb": "Flame Storm",
        "flamestrikeb": "Flamestrike",
        "flamingaurab": "Flaming Aura",
        "flankingstrikemb": "Flanking Strike",
        "flankingstrikeb": "Flanking Strike",
        "flareb": "Flare",
        "flashb": "Flash",
        "flashfreezeb": "Flash Freeze",
        "flashfreezemb": "Flash Freeze",
        "flashfreezemmb": "Flash Freeze",
        "flashhealb": "Flash Heal",
        "flayb": "Flay",
        "flowershurikenb": "Flower Shuriken",
        "fluffyb": "Fluffy",
        "flyhighb": "Fly High",
        "flynestb": "Fly Nest",
        "focushealb": "Focus Heal",
        "followupb": "Follow-up",
        "forbiddenpowerb": "Forbidden Power",
        "foresightb": "Foresight",
        "forestalliesb": "Forest Allies",
        "forestbannerb": "Forest Banner",
        "fortunetellingb": "Fortune Telling",
        "fouleruptionb": "Foul Eruption",
        "foulremedyb": "Foul Remedy",
        "freezecorruptionb": "Freeze",
        "freezingslashb": "Freezing Slash",
        "frenziedcarnageb": "Frenzied Carnage",
        "frenziedtermitesb": "Frenzied Termites",
        "freshmeatb": "Fresh Meat!",
        "freshmeatstartb": "Fresh Meat!",
        "frightenedb": "Frightened",
        "frostaxesb": "Frost Axes",
        "frostbreathb": "Frost Breath",
        "frostbreathmb": "Frost Breath",
        "frostharpoonb": "Frost Harpoon",
        "frostnovab": "Frost Nova",
        "frostnovamb": "Frost Nova",
        "frostruneb": "Frost Rune",
        "frostvolleyb": "Frost Volley",
        "frostweaponsb": "Frost Weapons",
        "frostboltb": "Frostbolt",
        "frostboltmb": "Frostbolt",
        "frozenbashb": "Frozen Bash",
        "frozenpufferfishb": "Frozen Pufferfish",
        "frozentomahawkb": "Frozen Tomahawk",
        "fungaloutbreakb": "Fungal Outbreak",
        "fungusrootb": "Fungus Root",
        "fungussurgeb": "Fungus Surge",
        "furiousslashmb": "Furious Slash",
        "furiousslashb": "Furious Slash",
        "fusionlaserb": "Fusion Laser",
        "gardenofthornsb": "Garden of Thorns",
        "getoutb": "Get Out!",
        "geyserb": "Geyser",
        "geysermb": "Geyser",
        "gildedplateb": "Gilded Plate",
        "givefishb": "Give Fish",
        "givetothepoorb": "Give To The Poor",
        "gloomb": "Gloom",
        "gloomyburstb": "Gloomy Burst",
        "godlystrengthb": "Godly Strength",
        "gorgeb": "Gorge",
        "grandcrossb": "Grand Cross",
        "grandcrossmb": "Grand Cross",
        "gravitywellb": "Gravity Well",
        "greaterhealb": "Greater Heal",
        "grimoireofflamesb": "Grimoire of Flames",
        "grindingwheelb": "Grinding Wheel",
        "groundslammb": "Ground Slam",
        "groundslamb": "Ground Slam",
        "grouptherapyb": "Group Therapy",
        "grudgeb": "Grudge",
        "guardb": "Guard",
        "guardianangelb": "Guardian Angel",
        "gutripperb": "Gut Ripper",
        "hailstormb": "Hailstorm",
        "hallucinationb": "Hallucination",
        "hammerofjusticeb": "Hammer of Justice",
        "hamstringb": "Hamstring",
        "hardshellb": "Hard Shell",
        "hardeningb": "Hardening",
        "harleyb": "Harley",
        "harshcauterizationb": "Harsh Cauterization",
        "harvestb": "Harvest",
        "hatchb": "Hatch",
        "hatchcorruptb": "Hatch",
        "hatchplusb": "Hatch",
        "hawkeyeb": "Hawkeye",
        "headbuttmb": "Headbutt",
        "headbuttmmb": "Headbutt",
        "headbuttb": "Headbutt",
        "healb": "Heal",
        "healingrainb": "Healing Rain",
        "healingrainmb": "Healing Rain",
        "healingserenademb": "Healing Serenade",
        "healingserenadeb": "Healing Serenade",
        "healingtotemb": "Healing Totem",
        "heatassimilationb": "Heat Assimilation",
        "heatlasermb": "Heat Laser",
        "heatlaserstartb": "Heat Laser",
        "heatsurgeb": "Heat Surge",
        "heattransferb": "Heat Transfer",
        "heattransfermb": "Heat Transfer",
        "heatwaveb": "Heat Wave",
        "heatwavemb": "Heat Wave",
        "heatshieldb": "Heater Shield",
        "heavenlyarmamentsb": "Heavenly Armaments",
        "heavenlyblessingb": "Heavenly Blessing",
        "heavenlyblessingmb": "Heavenly Blessing",
        "heavenlyjusticeb": "Heavenly Justice",
        "heavenlyprotectionb": "Heavenly Protection",
        "heavyartilleryb": "Heavy Artillery",
        "heavymetalb": "Heavy Metal",
        "heavystrikeb": "Heavy Strike",
        "heavyweaponryb": "Heavy Weaponry",
        "hellmarkb": "Hell Mark",
        "hellfireb": "Hellfire",
        "hellflameb": "Hellflame",
        "helpmeb": "Help Me!",
        "helpinghandb": "Helping Hand",
        "heraldofdawnb": "Herald of Dawn",
        "heraldofduskb": "Herald of Dusk",
        "herdingb": "Herding",
        "heresyb": "Heresy",
        "heronscourageb": "Herons's Courage",
        "hexproofb": "Hexproof",
        "hiddenhandb": "Hidden Hand",
        "hiddenweaponb": "Hidden Weapon",
        "hideandseekb": "Hide and Seek",
        "hightchancellorstaffb": "High Chancellor Staff",
        "hightideb": "High Tide",
        "hitandrunmb": "Hit and Run",
        "hitandrunb": "Hit and Run",
        "holyaegisb": "Holy Aegis",
        "holybarrageb": "Holy Barrage",
        "holyblastb": "Holy Blast",
        "holycleaveb": "Holy Cleave",
        "holycrusaderb": "Holy Crusader",
        "holyfireb": "Holy Fire",
        "holylanceb": "Holy Lance",
        "holynovab": "Holy Nova",
        "holynovamb": "Holy Nova",
        "holypuddleb": "Holy Puddle",
        "holyrippleb": "Holy Ripple",
        "holyrushb": "Holy Rush",
        "holyslashb": "Holy Slash",
        "holyslashwb": "Holy Slash",
        "holysmiteb": "Holy Smite",
        "holysmitemb": "Holy Smite",
        "holysmitemcb": "Holy Smite",
        "holystormb": "Holy Storm",
        "holystormmb": "Holy Storm",
        "holysymbolb": "Holy Symbol",
        "honorableb": "Honorable",
        "howlwolfb": "Howl",
        "huntersmarkb": "Hunter's Mark",
        "hurryupb": "Hurry Up",
        "hydrabiteb": "Hydra Bite",
        "hydrabloodb": "Hydra Blood",
        "hypnotismb": "Hypnotism",
        "hypotermiab": "Hypothermia",
        "icebarrierb": "Ice Barrier",
        "icebarriermb": "Ice Barrier",
        "iceclawsb": "Ice Claws",
        "icecometb": "Ice Comet",
        "icecometmb": "Ice Comet",
        "icefallb": "Ice Fall",
        "icefallhb": "Ice Fall",
        "icelanceb": "Ice Lance",
        "icelancemb": "Ice Lance",
        "iceprisonb": "Ice Prison",
        "iceshotmb": "Ice Shot",
        "iceshotb": "Ice Shot",
        "icicleb": "Icicle",
        "iciclebarrageb": "Icicle Barrage",
        "iciclelauncherb": "Icicle Launcher",
        "iciclelaunchereasyb": "Icicle Launcher",
        "icyblowb": "Icy Blow",
        "icyheadbuttb": "Icy Headbutt",
        "icypuddleb": "Icy Puddle",
        "icytornadob": "Icy Tornado",
        "icyveinsb": "Icy Veins",
        "igniteb": "Ignite",
        "immolateb": "Immolate",
        "impalemb": "Impale",
        "impaleb": "Impale",
        "impalingrootb": "Impaling Root",
        "impalingrootmb": "Impaling Root",
        "impiousburstb": "Impious Burst",
        "indomitableb": "Indomitable",
        "infernob": "Inferno",
        "infestationb": "Infestation",
        "infuriatemb": "Infuriate",
        "infuriateb": "Infuriate",
        "infusecourageb": "Infuse Courage",
        "innercombustionb": "Inner Combustion",
        "innerfireb": "Inner Fire",
        "innervateb": "Innervate",
        "interceptb": "Intercept",
        "intimidatemb": "Intimidate",
        "intimidateb": "Intimidate",
        "invigoratingblowb": "Invigorating Blow",
        "invisibilityb": "Invisibility",
        "ironcladb": "Ironclad",
        "irritatingbarkb": "Irritating Bark",
        "itchyburnb": "Itchy Burn",
        "ivorytowerb": "Ivory Tower",
        "jinglebellb": "Jingle Bell",
        "killerbiteb": "Killer Bite",
        "killerinstincstartb": "Killer Instinct",
        "kindleb": "Kindle",
        "kindlemb": "Kindle",
        "knifebarrageb": "Knife Barrage",
        "knightsprideb": "Knight's Pride",
        "landslideb": "Landslide",
        "lastdawnb": "Last Dawn",
        "lastguardianb": "Last Guardian",
        "lastrequiemb": "Last Requiem",
        "lastrewardb": "Last Reward",
        "laststandb": "Last Stand",
        "lavaburstsb": "Lava Bursts",
        "lavaeruptionb": "Lava Eruption",
        "lavapuddleb": "Lava Puddle",
        "lavasprayb": "Lava Spray",
        "lawofdarknessb": "Law of Darkness",
        "lawoflightb": "Law of Light",
        "layonhandsb": "Lay on Hands",
        "layonpawsstartb": "Lay on Paws",
        "leapslamb": "Leap Slam",
        "lethalshotb": "Lethal Shot",
        "lethargyb": "Lethargy",
        "librarianb": "Librarian",
        "lichstouchb": "Lich's Touch",
        "lifetapb": "Life Tap",
        "lifetotemb": "Life Totem",
        "lifebloomb": "Lifebloom",
        "lifebloomplusb": "Lifebloom",
        "lightningboltmb": "Lightning Bolt",
        "lightningbreathb": "Lightning Breath",
        "lightningrodb": "Lightning Rod",
        "livingbombb": "Living Bomb",
        "livingflameb": "Living Flame",
        "livingforestb": "Living Forest",
        "lonelyblobb": "Lonely Blob",
        "loveenhancerb": "Love Enhancer",
        "lowselfesteemb": "Low Self-Esteem",
        "luminousbarrierb": "Luminous Barrier",
        "luminousbeamb": "Luminous Beam",
        "lunargraceb": "Lunar Grace",
        "magicdevourb": "Magic Devour",
        "magicmushroomb": "Magic Mushroom",
        "magmablobb": "Magma Blob",
        "magmaprisonb": "Magma Prison",
        "magmaprisonmb": "Magma Prison",
        "magmasplashb": "Magma Splash",
        "magmasurgeb": "Magma Surge",
        "maimb": "Maim",
        "maledictionstartb": "Malediction",
        "maliciouseyeb": "Malicious Eye",
        "managemb": "Mana Gem",
        "manashieldb": "Mana Shield",
        "manasurgeb": "Mana Surge",
        "maneuverb": "Maneuver",
        "marktargetb": "Mark Target",
        "markthepreyb": "Mark the Prey",
        "martyrdomb": "Martyrdom",
        "masscounterspellb": "Mass Counterspell",
        "massdiluteb": "Mass Dilute",
        "massdispelb": "Mass Dispel",
        "masshysteriab": "Mass Hysteria",
        "massinvisibilityb": "Mass Invisibility",
        "meatbagb": "Meat Bag",
        "meatfeastb": "Meat Feast",
        "meditateb": "Meditate",
        "melancholyb": "Melancholy",
        "melodicrhythmb": "Melodic Rhythm",
        "meltedplatingb": "Melted Plating",
        "meltingflameb": "Melting Flame",
        "menacingroarb": "Menacing Roar",
        "mentalshakeb": "Mental Shake",
        "mentalshellb": "Mental Shell",
        "mercifulb": "Merciful",
        "mercilessb": "Merciless",
        "mesmericmirageb": "Mesmeric Mirage",
        "metalpuddleb": "Metal Puddle",
        "meteorshowerb": "Meteor Shower",
        "meteorshowermb": "Meteor Shower",
        "meteoriteb": "Meteorite",
        "meteoritecorruptionb": "Meteorite",
        "meteoritemb": "Meteorite",
        "mindblastb": "Mind Blast",
        "mindboltb": "Mind Bolt",
        "mindtrickb": "Mind Trick",
        "mindtwistb": "Mind Twist",
        "mindvisionsb": "Mind Visions",
        "mirrorimagesb": "Mirror Images",
        "miseryb": "Misery",
        "missilebarrageb": "Missile Barrage",
        "molebusterb": "Mole Buster",
        "moonbeamb": "Moon Beam",
        "mooncatalystb": "Moon Catalyst",
        "moonguardb": "Moon Guard",
        "moonfireb": "Moonfire",
        "moonfireplusb": "Moonfire",
        "mortalstrikeb": "Mortal Strike",
        "multishotb": "Multishot",
        "musicsheetb": "Music Sheet",
        "mysticaliceb": "Mystical Ice",
        "naturescallb": "Nature's Call",
        "naturescallplusb": "Nature's Call",
        "necropotenceb": "Necropotence",
        "necroticburstb": "Necrotic Burst",
        "nephridiumacidb": "Nephridium Acid",
        "neurotoxinb": "Neurotoxin",
        "neverendingstoryb": "Neverending Story",
        "nightterrorb": "Night Terror",
        "nightmareb": "Nightmare",
        "noxiouseruptionb": "Noxious Eruption",
        "noxiousinjectionb": "Noxious Injection",
        "noxiousinjectionplusb": "Noxious Injection",
        "noxiousparasitesb": "Noxious Parasites",
        "obfuscateb": "Obfuscate",
        "obscurebarrierb": "Obscure Barrier",
        "obscurestrikeb": "Obscure Strike",
        "obsidiantowerb": "Obsidian Tower",
        "oceanicbarrierb": "Oceanic Barrier",
        "odeofwarb": "Ode of War",
        "omenofperilb": "Omen of Peril",
        "omnipotenceb": "Omnipotence",
        "omniscienceb": "Omniscience",
        "onslaughtb": "Onslaught",
        "openwoundb": "Open Wound",
        "oppressionb": "Oppression",
        "oppressionmb": "Oppression",
        "overbearingroarb": "Overbearing Roar",
        "overchargeb": "Overcharge",
        "overcoatb": "Overcoat",
        "overgrowthb": "Overgrowth",
        "overgrowthplusb": "Overgrowth",
        "overheatb": "Overheat",
        "overpowerb": "Overpower",
        "overwhelmb": "Overwhelm",
        "owlblessingb": "Owl Blessing",
        "owlblessingmb": "Owl Blessing",
        "owlscreechb": "Owl Screech",
        "pacifismb": "Pacifism",
        "packleaderb": "Pack Leader",
        "painsupresionb": "Pain Suppression",
        "palisadeb": "Palisade",
        "panaceab": "Panacea",
        "pandemoniumb": "Pandemonium",
        "panicscreamb": "Panic Scream",
        "paralizingvenomb": "Paralyzing Venom",
        "paranoiab": "Paranoia",
        "parrymb": "Parry",
        "parryb": "Parry",
        "patienceb": "Patience",
        "statustransferb": "Payback",
        "penanceb": "Penance",
        "invisibilitymb": "Perfect Invisibility",
        "perfectparryb": "Perfect Parry",
        "perniciousclawb": "Pernicious Claw",
        "perseveranceb": "Perseverance",
        "pestilenceb": "Pestilence",
        "petcallb": "Pet Call",
        "petcallplusb": "Pet Call",
        "petrifyb": "Petrify",
        "phantomechoesb": "Phantom Echoes",
        "phantomechoesmb": "Phantom Echoes",
        "phoenixb": "Phoenix",
        "piercinghowlb": "Piercing Howl",
        "piercingstrikeb": "Piercing Strike",
        "piercingstrikefb": "Piercing Strike",
        "piercingstrikemb": "Piercing Strike",
        "pillageb": "Pillage",
        "plagueratb": "Plague Rat",
        "plagueshotmb": "Plague Shot",
        "plagueshotb": "Plague Shot",
        "plumbingb": "Plumbing",
        "pointblankblastb": "Point Blank Blast",
        "poisoncatalystb": "Poison Catalyst",
        "poisondartb": "Poison Dart",
        "poisonfieldsb": "Poison Fields",
        "poisonflaskb": "Poison Flask",
        "poisonsplashb": "Poison Splash",
        "poisonsprayb": "Poison Spray",
        "poisonedb": "Poisoned",
        "poisoneddaggersb": "Poisoned Daggers",
        "poisonousassaultb": "Poisonous Assault",
        "poisonousbiteb": "Poisonous Bite",
        "poisonousbloodb": "Poisonous Blood",
        "poisonousbreathb": "Poisonous Breath",
        "poisonousshotmb": "Poisonous Shot",
        "poisonousshotb": "Poisonous Shot",
        "pommelb": "Pommel",
        "popcornburstb": "Popcorn Burst",
        "poundb": "Pound",
        "powergloveb": "Power Glove",
        "powerslavestartb": "Powerslave",
        "praisethesunb": "Praise the Sun",
        "prayerofhealingb": "Prayer of Healing",
        "prayerofprotectionb": "Prayer of Protection",
        "precisestrikeb": "Precise Strike",
        "predatorb": "Predator",
        "prescriptionb": "Prescription",
        "prismaticfieldb": "Prismatic Field",
        "prismaticfieldmb": "Prismatic Field",
        "profaneb": "Profane",
        "profanemb": "Profane",
        "prophetstaffb": "Prophet's Staff",
        "protectb": "Protect",
        "protectfromevilb": "Protect from Evil",
        "provokeb": "Provoke",
        "psychicscreamb": "Psychic Scream",
        "pulsinghealb": "Pulsing Heal",
        "pulsingvigorb": "Pulsing Vigor",
        "pulverizeb": "Pulverize",
        "pummelb": "Pummel",
        "punchb": "Punch",
        "puncturemb": "Puncture",
        "punctureb": "Puncture",
        "purgetheweakb": "Purge the Weak",
        "purgethewickedb": "Purge the Wicked",
        "purgingflameb": "Purging Flame",
        "purgingrayb": "Purging Ray",
        "purgingwindsb": "Purging Winds",
        "purifyb": "Purify",
        "purrificationb": "Purrification",
        "pushforwardb": "Push Forward",
        "putrefactionb": "Putrefaction",
        "pyroblastb": "Pyroblast",
        "pyroblastmb": "Pyroblast",
        "quickshotb": "Quick Shot",
        "rabidb": "Rabid",
        "rabidplusb": "Rabid",
        "rabidbiteb": "Rabid Bite",
        "radianceb": "Radiance",
        "radiantassaultb": "Radiant Assault",
        "radiantburstb": "Radiant Burst",
        "raggeddollb": "Ragged Doll",
        "ragingblowb": "Raging Blow",
        "rainb": "Rain",
        "rainofarrowsb": "Rain of Arrows",
        "rainofthornsb": "Rain of Thorns",
        "raisefighterb": "Raise Fighter",
        "raisefightersb": "Raise Fighters",
        "raisemagesb": "Raise Mages",
        "raisepriestsb": "Raise Priests",
        "raisewarlocksb": "Raise Warlocks",
        "rampageb": "Rampage",
        "rangerarmorb": "Ranger Armor",
        "rapidfiremb": "Rapid Fire",
        "rapidfireb": "Rapid Fire",
        "rapidmultiplicationb": "Rapid Multiplication",
        "raptureb": "Rapture",
        "rayoffrostb": "Ray of Frost",
        "rayoffrostmb": "Ray of Frost",
        "rayofhopeb": "Ray of Hope",
        "reactivelaserdtb": "Reactive Laser",
        "reactivelaserdtob": "Reactive Laser",
        "reactivelasermb": "Reactive Laser",
        "reactivelaserb": "Reactive Laser",
        "reapingb": "Reaping",
        "reassembleb": "Reassemble",
        "reassemblemb": "Reassemble",
        "recklesschargeb": "Reckless Charge",
        "recurringnightmareb": "Recurring Nightmare",
        "redstormb": "Red Storm",
        "redemptionb": "Redemption",
        "reforgedcoreb": "Reforged Core",
        "reinforcedsteelb": "Reinforced Steel",
        "rendb": "Rend",
        "renewb": "Renew",
        "repairarmormb": "Repair Armor",
        "repairarmorb": "Repair Armor",
        "repentanceb": "Repentance",
        "repetitiontrainingb": "Repetition Training",
        "replenishmentb": "Replenishment",
        "resurrectionb": "Resurrection",
        "revealingflaskb": "Revealing Flask",
        "revealingstrikeb": "Revealing Strike",
        "revengeb": "Revenge",
        "reverberantverseb": "Reverberant Verse",
        "ricochetb": "Ricochet",
        "righteousfireb": "Righteous Fire",
        "rigidstanceb": "Rigid Stance",
        "riposteb": "Riposte",
        "rosegardenb": "Rose Garden",
        "royalramb": "Royal Ram",
        "ruggedwrappingb": "Rugged Wrapping",
        "ruinboltb": "Ruin Bolt",
        "ruminantbiteb": "Ruminant Bite",
        "ruptureb": "Rupture",
        "sacredbeamb": "Sacred Beam",
        "sacredblowb": "Sacred Blow",
        "sacredboltb": "Sacred Bolt",
        "sacredboltmb": "Sacred Bolt",
        "sacredceremonyb": "Sacred Ceremony",
        "sacredceremonymb": "Sacred Ceremony",
        "sacredgroundb": "Sacred Ground",
        "sacredguardb": "Sacred Guard",
        "sacredlightningb": "Sacred Lightning",
        "sacredlightningmb": "Sacred Lightning",
        "sacredrancorb": "Sacred Rancor",
        "sacredshotb": "Sacred Shot",
        "safeguardb": "Safeguard",
        "sanctificationb": "Sanctification",
        "sanctificationmb": "Sanctification",
        "sanctuaryb": "Sanctuary",
        "sanctuarymb": "Sanctuary",
        "sandstormb": "Sand Storm",
        "sandtornadob": "Sand Tornado",
        "sarcasticsonnetb": "Sarcastic Sonnet",
        "sausagefactoryb": "Sausage Factory",
        "saveitforlaterb": "Save It For Later",
        "sawbladeb": "Saw Blade",
        "sawtoothknifeb": "Sawtooth Knife",
        "scavengeb": "Scavenge",
        "scorchingflameb": "Scorching Flame",
        "scorchingrayb": "Scorching Ray",
        "scourgebarrierb": "Scourge Barrier",
        "scourgeblastb": "Scourge Blast",
        "scrollofdefenseb": "Scroll of Defense",
        "scrollofintellectb": "Scroll of Intellect",
        "scrollofspeedb": "Scroll of Speed",
        "scryb": "Scry",
        "seacurseb": "Sea Curse",
        "searingnovab": "Searing Nova",
        "searingtouchb": "Searing Touch",
        "secondwindb": "Second Wind",
        "sentryalarmb": "Sentry Alarm",
        "serratedweaponsb": "Serrated Weapons",
        "settargetb": "Set Target",
        "setupb": "Setup",
        "severarterymb": "Sever Artery",
        "severarteryb": "Sever Artery",
        "severeburnb": "Severe Burn",
        "shadowawakeningb": "Shadow Awakening",
        "shadowawakeningmb": "Shadow Awakening",
        "shadowbarrageb": "Shadow Barrage",
        "shadowbindingb": "Shadow Binding",
        "shadowbindingmb": "Shadow Binding",
        "shadowboltb": "Shadow Bolt",
        "shadowboltmb": "Shadow Bolt",
        "shadowcleaveb": "Shadow Cleave",
        "shadowimbuementb": "Shadow Imbuement",
        "shadowlanceb": "Shadow Lance",
        "shadowmendb": "Shadow Mend",
        "shadowmendmb": "Shadow Mend",
        "shadownovab": "Shadow Nova",
        "shadowslashb": "Shadow Slash",
        "shadowstepmb": "Shadowstep",
        "shadowstepb": "Shadowstep",
        "shakeitoffb": "Shake it off",
        "shakeitoffmb": "Shake it off!",
        "shamanismb": "Shamanism",
        "sharingiscaringb": "Sharing Is Caring",
        "sharpenmb": "Sharpen",
        "sharpenmwb": "Sharpen",
        "sharpenb": "Sharpen",
        "sharpeningcutsb": "Sharpening Cuts",
        "sharpeningknifeb": "Sharpening Knife",
        "shatterb": "Shatter",
        "shattermb": "Shatter",
        "shatteringfistsb": "Shattering Fists",
        "shieldbashmb": "Shield Bash",
        "shieldbashb": "Shield Bash",
        "shieldbreakermb": "Shield Breaker",
        "shieldbreakerb": "Shield Breaker",
        "shieldchargemb": "Shield Charge",
        "shieldchargeb": "Shield Charge",
        "shieldgeneratorb": "Shield Generator",
        "shieldjammerb": "Shield Jammer",
        "shieldofwardingb": "Shield of Warding",
        "shieldslammb": "Shield Slam",
        "shieldslammmb": "Shield Slam",
        "shieldslamb": "Shield Slam",
        "shieldsmelterb": "Shield Smelter",
        "shieldstanceb": "Shield Stance",
        "shieldthrowb": "Shield Throw",
        "shieldwallmb": "Shield Wall",
        "shieldwallb": "Shield Wall",
        "shiftingscrollb": "Shifting Scroll",
        "shiningforceb": "Shining Force",
        "shivb": "Shiv",
        "shocknovab": "Shock Nova",
        "shocknovamb": "Shock Nova",
        "shrapnelshotb": "Shrapnel Shot",
        "sickleslashb": "Sickle Slash",
        "sidestepb": "Sidestep",
        "siegebreakermb": "Siege Breaker",
        "siegebreakerb": "Siege Breaker",
        "silencingaurab": "Silencing Aura",
        "silentbacklashb": "Silent Backlash",
        "siphonlifeb": "Siphon Life",
        "skeweringb": "Skewering",
        "skillfulb": "Skillful",
        "skullsplitterb": "Skullsplitter",
        "slaveratsb": "Slave Rats",
        "sliceb": "Slice",
        "sliceanddiceb": "Slice and Dice!",
        "smellbloodb": "Smell Blood",
        "smokebombmb": "Smoke Bomb",
        "smokebombb": "Smoke Bomb",
        "snatchingclawb": "Snatching Claw",
        "sneakpeekb": "Sneak Peek",
        "sneakystrikeb": "Sneaky Strike",
        "snipershotb": "Sniper Shot",
        "snowfallb": "Snowfall",
        "solarflareb": "Solar Flare",
        "sonarb": "Sonar",
        "sonarhb": "Sonar",
        "songofcelerityb": "Song of Celerity",
        "songofquicknessmb": "Song of Quickness",
        "songofquicknessb": "Song of Quickness",
        "soothingwatersb": "Soothing Waters",
        "soulharvestb": "Soul Harvest",
        "soullanternb": "Soul Lantern",
        "sparkoflifeb": "Spark of Life",
        "spectralmissilesb": "Spectral Missiles",
        "spectralscalesb": "Spectral Scales",
        "spellechob": "Spell Echo",
        "spikedballb": "Spiked Ball",
        "spikedshieldb": "Spiked Shield",
        "spookynightb": "Spooky Night",
        "spreadcorruptionb": "Spread Corruption",
        "sprintb": "Sprint",
        "sproutb": "Sprout",
        "squallb": "Squall",
        "stalkingb": "Stalking",
        "stampedeb": "Stampede",
        "standardbearerstartb": "Standard Bearer",
        "starfallb": "Starfall",
        "starfallplusb": "Starfall",
        "staringcontestb": "Staring Contest",
        "starrynightb": "Starry Night",
        "staticchargeb": "Static Charge",
        "stealb": "Steal",
        "steamrollerb": "Steamroller",
        "steelforgeb": "Steel Forge",
        "steelskinb": "Steelskin",
        "stimulatingstingb": "Stimulating Sting",
        "stingerlauncherb": "Stinger Launcher",
        "stockademb": "Stockade",
        "stockadeb": "Stockade",
        "stompb": "Stomp",
        "stonefistb": "Stone Fist",
        "stonewallb": "Stone Wall",
        "stoneskinb": "Stoneskin",
        "stormb": "Storm",
        "stormcorruptionb": "Storm",
        "stormjavelinb": "Storm Javelin",
        "stormwardb": "Storm Ward",
        "stressfulfumesb": "Stressful Fumes",
        "strongholdb": "Stronghold",
        "stungrenadeb": "Stun Grenade",
        "subzerob": "Sub Zero",
        "subjugationb": "Subjugation",
        "submergeb": "Submerge",
        "subterfugeb": "Subterfuge",
        "sugarrushb": "Sugar Rush",
        "summonimpb": "Summon Imp",
        "summonimpplusb": "Summon Imp",
        "sunbeamb": "Sunbeam",
        "sunderarmormb": "Sunder Armor",
        "sunderarmorb": "Sunder Armor",
        "superconductorb": "Superconductor",
        "sweepingstrikemb": "Sweeping Strike",
        "sweepingstrikeb": "Sweeping Strike",
        "sweetmelodymb": "Sweet Melody",
        "sweetmelodyb": "Sweet Melody",
        "swingb": "Swing",
        "tabularasab": "Tabula Rasa",
        "tacticalnukeb": "Tactical Nuke",
        "tacticalthinkingb": "Tactical Thinking",
        "takecoverb": "Take Cover",
        "tantrumb": "Tantrum",
        "targetshootingb": "Target Shooting",
        "tauntingroarb": "Taunting Roar",
        "tediouspoemb": "Tedious Poem",
        "temporalchainsb": "Temporal Chains",
        "terrorizeb": "Terrorize",
        "terrorizinghowlb": "Terrorizing Howl",
        "teslacoilb": "Tesla Coil",
        "thechosenoneb": "The Chosen One",
        "theencyclopediab": "The Encyclopedia",
        "thehuntb": "The Hunt",
        "thewolfslayerb": "The Wolfslayer",
        "thornproliferationb": "Thorn Proliferation",
        "thorneaterb": "Thorneater",
        "thorneaterhydrab": "Thorneater",
        "thousandneedlesb": "Thousand Needles",
        "throwbolasb": "Throw Bolas",
        "throwknifeb": "Throw Knife",
        "thunderclapb": "Thunderclap",
        "thunderfuryb": "Thunderfury",
        "thunderfurymb": "Thunderfury",
        "thunderstormb": "Thunderstorm",
        "titanfallb": "Titan Fall",
        "tomahawkb": "Tomahawk",
        "tomeofintellectb": "Tome of Intellect",
        "torchingb": "Torching",
        "tormentofthornsb": "Torment of Thorns",
        "totaleclipseb": "Total Eclipse",
        "toxicpuddleb": "Toxic Puddle",
        "toxicrainb": "Toxic Rain",
        "toxicretaliationb": "Toxic Retaliation",
        "toxicstrikeb": "Toxic Strike",
        "toxicvolleyb": "Toxic Volley",
        "traceb": "Trace",
        "tranquilityb": "Tranquility",
        "tranquilityplusb": "Tranquility",
        "transcendenceb": "Transcendence",
        "transcribeb": "Transcribe",
        "transfusionb": "Transfusion",
        "transmisionb": "Transmission",
        "trebuchetb": "Trebuchet",
        "tremorb": "Tremor",
        "tremorsb": "Tremors",
        "trickortreatb": "Trick or Treat",
        "trustwhortyb": "Trustworthy",
        "tuneupb": "Tune Up",
        "tuskbarrageb": "Tusk Barrage",
        "tuskchargeb": "Tusk Charge",
        "twilightswampb": "Twilight Swamp",
        "twinscrollsstartb": "Twin Scrolls",
        "typhoonb": "Typhoon",
        "typhoonmb": "Typhoon",
        "ultraregenerationb": "Ultra Regeneration",
        "undyingwillb": "Undying Will",
        "unforgivingnatureb": "Unforgiving Nature",
        "ungodlystrengthb": "Ungodly Strength",
        "unholystormb": "Unholy Storm",
        "unholystormmb": "Unholy Storm",
        "unleashedb": "Unleashed",
        "unstablecoreb": "Unstable Core",
        "unstablepowerb": "Unstable Power",
        "untrustwhortyb": "Untrustworthy",
        "unwaveringb": "Unwavering",
        "unwaveringfaithb": "Unwavering Faith",
        "uprootb": "Uproot",
        "upwindb": "Upwind",
        "vaccineb": "Vaccine",
        "valiantdefenderb": "Valiant Defender",
        "vampirictouchb": "Vampiric Touch",
        "vampirictutorb": "Vampiric Tutor",
        "vanishb": "Vanish",
        "vengeancestartb": "Vengeance",
        "venomflaskb": "Venom Flask",
        "vexingcrescendob": "Vexing Crescendo",
        "viciousbiteb": "Vicious Bite",
        "vigilanceb": "Vigilance",
        "vigorousb": "Vigorous",
        "vigorousfurystartb": "Vigorous Fury",
        "vilegasb": "Vile Gas",
        "vilegashb": "Vile Gash",
        "vilelanceb": "Vile Lance",
        "violentburstb": "Violent Burst",
        "viperstrikeb": "Viper Strike",
        "virulentreactionb": "Virulent Reaction",
        "viscousshieldb": "Viscous Shield",
        "vitalitydrainb": "Vitality Drain",
        "vitalizeb": "Vitalize",
        "vitalizemb": "Vitalize",
        "vitalizingserenademb": "Vitalizing Serenade",
        "vitalizingserenadeb": "Vitalizing Serenade",
        "voidcrushb": "Void Crush",
        "voidmemoryb": "Void Memory",
        "volatilecoreb": "Volatile Core",
        "volleyb": "Volley",
        "warcryb": "Warcry",
        "warcrycrocb": "Warcry",
        "warpaintb": "Warpaint",
        "warriormemoryb": "Warrior Memory",
        "watergunb": "Water Gun",
        "waterjetb": "Water Jet",
        "waterpuddleb": "Water Puddle",
        "wateringb": "Watering",
        "weakeninggazeb": "Weakening Gaze",
        "weaponcacheb": "Weapon Cache",
        "webb": "Web",
        "webweaverb": "Webweaver",
        "wellfedb": "Well Fed",
        "whackb": "Whack",
        "whirlwindmb": "Whirlwind",
        "whirlwindb": "Whirlwind",
        "whisperingliesb": "Whispering Lies",
        "whiteflameb": "White Flame",
        "whiteflamesb": "White Flames",
        "wickedcraftsmanb": "Wicked Craftsman",
        "wildbiteb": "Wild Bite",
        "wildchargeb": "Wild Charge",
        "wildhuntb": "Wild Hunt",
        "wildroarb": "Wild Roar",
        "windblessingb": "Wind Blessing",
        "windsofamnesiab": "Winds of Amnesia",
        "winteriscomingb": "Winter Is Coming",
        "winteriscomingmb": "Winter Is Coming",
        "winterorbb": "Winter Orb",
        "winterorbmb": "Winter Orb",
        "wintersnighttaleb": "Winter's Night Tale",
        "witherb": "Wither",
        "wolfguardb": "Wolf Guard",
        "woodencrosierb": "Wooden Crosier",
        "woollyshellb": "Woolly Shell",
        "worldinflamesb": "World in Flames",
        "wreckingballb": "Wrecking Ball",
        "wristcutterb": "Wristcutter",
        "yangmantrab": "Yang Mantra",
        "yangritualb": "Yang Ritual",
        "yinmantrab": "Yin Mantra",
        "yinritualb": "Yin Ritual",
        "yinyangboltb": "Yin Yang Bolt",
        "zapb": "Zap",
        "zealbarrierb": "Zeal Barrier",
        "zealousprayerb": "Zealous Prayer"
    },
    "Rare": {
        "absorptionrare": "Absorption",
        "acolytetunicrare": "Acolyte Tunic",
        "acrobaticstrikerare": "Acrobatic Strike",
        "adrenalinerare": "Adrenaline",
        "advancedhandbookrare": "Advanced Handbook",
        "agateamuletrare": "Agate Amulet",
        "aimedshotrare": "Aimed Shot",
        "alarmbellrare": "Alarm Bell",
        "albatrosspendantrare": "Albatross Pendant",
        "allinrare": "All In",
        "allseeingamuletrare": "All-seeing Amulet",
        "amberamuletrare": "Amber Amulet",
        "ambidextrousrare": "Ambidextrous",
        "ambushrare": "Ambush",
        "amethystringrare": "Amethyst Ring",
        "ammunitionsrare": "Ammunition",
        "amuletofprotectionrare": "Amulet of Protection",
        "amuletofspeedrare": "Amulet of Speed",
        "amuletofthornsrare": "Amulet of Thorns",
        "ankhofliferare": "Ankh of Life",
        "anklebiteitemrare": "Ankle Bite",
        "annoyingwhistlerare": "Annoying Whistle",
        "anthemofhoperare": "Anthem of Hope",
        "antiquefigurinerare": "Antique Figurine",
        "aquamarinebraceletrare": "Aquamarine Bracelet",
        "architectsringrare": "Architect's Ring",
        "archmagebookrare": "Archmage Book",
        "armageddonrare": "Armageddon",
        "arsenalrare": "Arsenal",
        "ashrare": "Ash",
        "ashstormcorruptionrare": "Ash Storm",
        "ashyskyrare": "Ashy Sky",
        "asmodyrare": "Asmody",
        "assassintoolsrare": "Assassin Tools",
        "avoidancecollarrare": "Avoidance Collar",
        "backlashrare": "Backlash",
        "backstabrare": "Backstab",
        "badauguryrare": "Bad Augury",
        "balllightningrare": "Ball Lightning",
        "ballofwoolrare": "Ball of Wool",
        "balladofconquestrare": "Ballad of Conquest",
        "balladofevasionrare": "Ballad of Evasion",
        "bandagesrare": "Bandages",
        "banerare": "Bane",
        "baptismrare": "Baptism",
        "barbedwirerare": "Barbed Wire",
        "barragerare": "Barrage",
        "barricaderare": "Barricade",
        "barrierrare": "Barrier",
        "bassrare": "Bass",
        "bastionrare": "Bastion",
        "battleaxerare": "Battle Axe",
        "battleplanrare": "Battle Plan",
        "battleshoutrare": "Battle Shout",
        "beermugrare": "Beer Mug",
        "bellrare": "Bell",
        "belphyorpiperare": "Belphyor's Pipe",
        "benedictionrare": "Benediction",
        "berserkpotionrare": "Berserk Potion",
        "berserkerclawrare": "Berserker Claw",
        "bettyrare": "Betty",
        "bindinghealrare": "Binding Heal",
        "birdofpreyrare": "Bird of Prey",
        "blackdeckrare": "Black Deck",
        "blackholerare": "Black Hole",
        "blackkarmarare": "Black Karma",
        "blackpyramidrare": "Black Pyramid",
        "blackguardrare": "Blackguard",
        "bladedancerare": "Blade Dance",
        "bladeflurryrare": "Blade Flurry",
        "bladestormrare": "Blade Storm",
        "bleedoutrare": "Bleed Out",
        "blizzardrare": "Blizzard",
        "bloodblobpetrare": "Blood Blob",
        "bloodfeedingrare": "Blood Feeding",
        "bloodforbloodrare": "Blood For Blood",
        "bloodgobletrare": "Blood Goblet",
        "bloodrainrare": "Blood Rain",
        "bloodsplashpetrare": "Blood Splash",
        "bloodbathrare": "Bloodbath",
        "blooddguardrare": "Bloodguard",
        "bloodragerare": "Bloodrage",
        "bloodseekerrare": "Bloodseeker",
        "bloodstonerare": "Bloodstone",
        "bludgeonrare": "Bludgeon",
        "bluffrare": "Bluff",
        "blurrare": "Blur",
        "bombmrare": "Bomb",
        "bomblotteryrare": "Bomb Lottery",
        "boneclawsrare": "Bone Claws",
        "boneringrare": "Bone Ring",
        "bonkhammerrare": "Bonk Hammer",
        "bookofnightmaresrare": "Book of Nightmares",
        "bookofthedeadrare": "Book of the Dead",
        "bookwormrare": "Bookworm",
        "bootsofswiftnessrare": "Boots of Swiftness",
        "bouncingshieldrare": "Bouncing Shield",
        "brassamuletrare": "Brass Amulet",
        "brasslanternrare": "Brass Lantern",
        "breastplaterare": "Breastplate",
        "brigandarmorrare": "Brigand Armor",
        "bronzegearrare": "Bronze Gear",
        "bucketrare": "Bucket",
        "bulkhealrare": "Bulk Heal",
        "bunnyrare": "Bunny",
        "burialmaskrare": "Burial Mask",
        "burningbloodrare": "Burning Blood",
        "burningorbrare": "Burning Orb",
        "burningshotrare": "Burning Shot",
        "burningweaponsrare": "Burning Weapons",
        "butcherblockrare": "Butcher Block",
        "butcheringrare": "Butchering",
        "butcherskniferare": "Butcher's Knife",
        "caltropsrare": "Caltrops",
        "camouflagerare": "Camouflage",
        "captivatingvoicerare": "Captivating Voice",
        "carnagerare": "Carnage",
        "carprare": "Carp",
        "cauterizerare": "Cauterize",
        "celestialbrillancerare": "Celestial Brilliance",
        "chainhealrare": "Chain Heal",
        "chainlightningrare": "Chain Lightning",
        "chaliceofkingsrare": "Chalice of Kings",
        "chaliceofqueensrare": "Chalice of Queens",
        "challengingshoutrare": "Challenging Shout",
        "champyrare": "Champy",
        "changeweaponrare": "Change Weapon",
        "chantofaccuracyrare": "Chant of Accuracy",
        "chantofinitiativerare": "Chant of Initiative",
        "chaosblobpetrare": "Chaos Blob",
        "chaossplashpetrare": "Chaos Splash",
        "chaoticwindrare": "Chaotic Wind",
        "chargerare": "Charge",
        "chargebatteryrare": "Charge Battery",
        "chargedtridentrare": "Charged Trident",
        "cheeserare": "Cheese",
        "chompyrare": "Chompy",
        "chumpyrare": "Chumpy",
        "circleofhealingrare": "Circle of Healing",
        "citadelrare": "Citadel",
        "clairvoyancerare": "Clairvoyance",
        "clairvoyantscrollrare": "Clairvoyant Scroll",
        "clarityrare": "Clarity",
        "clearinstructionsrare": "Clear Instructions",
        "cleaverare": "Cleave",
        "clergyamuletrare": "Clergy Amulet",
        "cloackofevasionrare": "Cloak of Evasion",
        "cloackofspeedrare": "Cloak of Speed",
        "cloudsongrare": "Cloudsong",
        "clubrare": "Club",
        "coatofarmsrare": "Coat of Arms",
        "coldbonegobletrare": "Cold Bone Goblet",
        "coldbookrare": "Cold Book",
        "coldburstrare": "Cold Burst",
        "coldhandsrare": "Cold Hands",
        "coldrunerare": "Cold Rune",
        "coldsnaprare": "Cold Snap",
        "colorfulpuddlerare": "Colorful Puddle",
        "colossalblowrare": "Colossal Blow",
        "combustionrare": "Combustion",
        "condemnationrare": "Condemnation",
        "continuumbladerare": "Continuum Blade",
        "coolingservosrare": "Cooling Servos",
        "corruptedbladerare": "Corrupted Blade",
        "corruptedplaterare": "Corrupted Plate",
        "crankcrossbowrare": "Crank Crossbow",
        "crescentlightrare": "Crescent Light",
        "crescentmoonrare": "Crescent Moon",
        "crimsonraimentrare": "Crimson Raiment",
        "crossbowrare": "Crossbow",
        "crusaderhelmetrare": "Crusader Helmet",
        "crystalballrare": "Crystal Ball",
        "cubydrare": "Cuby",
        "cubyrare": "Cuby",
        "cupofdeathrare": "Cup of Death",
        "curativetherapyrare": "Curative Therapy",
        "curseofagonyrare": "Curse of Agony",
        "curseofdecayrare": "Curse of Decay",
        "curseofelementsrare": "Curse of Elements",
        "curseofexhaustionrare": "Curse of Exhaustion",
        "curseoffragilityrare": "Curse of Fragility",
        "curseofmadnessrare": "Curse of Madness",
        "curseofshadowsrare": "Curse of Shadows",
        "curseoftormentrare": "Curse of Torment",
        "curseofvulnerabilityrare": "Curse of Vulnerability",
        "curseofweaknessrare": "Curse of Weakness",
        "cursedcardrare": "Cursed Card",
        "curseddaggerrare": "Cursed Dagger",
        "cursenomiconrare": "Cursenomicon",
        "daggerrare": "Dagger",
        "daleyrare": "Daley",
        "darkblobpetrare": "Dark Blob",
        "darkblowrare": "Dark Blow",
        "darkconcoctionrare": "Dark Concoction",
        "darkfuturerare": "Dark Future",
        "darkhoodrare": "Dark Hood",
        "darkoutbreakrare": "Dark Outbreak",
        "darkpactrare": "Dark Pact",
        "darkritualrare": "Dark Ritual",
        "darksplashpetrare": "Dark Splash",
        "darkflameringrare": "Darkflame Ring",
        "darknessfallsrare": "Darkness Falls",
        "dartpouchrare": "Dart Pouch",
        "dawnlightrare": "Dawnlight",
        "deathcoilrare": "Death Coil",
        "deathsreachrare": "Death's Reach",
        "debilitaterare": "Debilitate",
        "deepdarknessrare": "Deep Darkness",
        "defendrare": "Defend",
        "deflectrare": "Deflect",
        "dejavurare": "Deja Vu",
        "delayresponserare": "Delay Response",
        "demolishingblowrare": "Demolishing Blow",
        "demonictutorrare": "Demonic Tutor",
        "demoralizingshoutrare": "Demoralizing Shout",
        "desertjamrare": "Desert Jam",
        "desperateplayerrare": "Desperate Prayer",
        "destinyrare": "Destiny",
        "destroyergauntletsrare": "Destroyer Gauntlets",
        "detectionrare": "Detection",
        "detoxpotionrare": "Detox Potion",
        "detoxifyrare": "Detoxify",
        "devastaterare": "Devastate",
        "diamondringrare": "Diamond Ring",
        "diluterare": "Dilute",
        "dirtybandagesrare": "Dirty Bandages",
        "disengagerare": "Disengage",
        "disintegraterare": "Disintegrate",
        "dispelmagicrare": "Dispel Magic",
        "divinationorbrare": "Divination Orb",
        "divineguidancerare": "Divine Guidance",
        "divineinsightrare": "Divine Insight",
        "divineirerare": "Divine Ire",
        "divinepowerrare": "Divine Power",
        "divinestrikerare": "Divine Strike",
        "doityourselfrare": "Do it yourself!",
        "doublestrikerare": "Double Strike",
        "downpouritemrare": "Downpour",
        "dracomancerstaffrare": "Dracomancer Staff",
        "drainliferare": "Drain Life",
        "dreamsphererare": "Dream Sphere",
        "dreamcatcherrare": "Dreamcatcher",
        "druidicamuletrare": "Druidic Amulet",
        "dryadmaskrare": "Dryad Mask",
        "dualstrikerare": "Dual Strike",
        "durandalrare": "Durandal",
        "edgeoffuryrare": "Edge of Fury",
        "eerieringrare": "Eerie Ring",
        "electricblobpetrare": "Electric Blob",
        "electricdischargerare": "Electric Discharge",
        "electricsplashpetrare": "Electric Splash",
        "electricitymanualrare": "Electricity Manual",
        "electrocuterare": "Electrocute",
        "elementalboltrare": "Elemental Bolt",
        "elementalwardrare": "Elemental Ward",
        "elvencuirassrare": "Elven Cuirass",
        "elvenquiverrare": "Elven Quiver",
        "emberstormrare": "Emberstorm",
        "emeraldnecklacerare": "Emerald Necklace",
        "emeraldstaffrare": "Emerald Staff",
        "empowerrare": "Empower",
        "endlessabyssrare": "Endless Abyss",
        "endlessbagrare": "Endless Bag",
        "energizingserenaderare": "Energizing Serenade",
        "energyshieldrare": "Energy Shield",
        "enervaterare": "Enervate",
        "enragerare": "Enrage",
        "entombrare": "Entomb",
        "entrenchrare": "Entrench",
        "equivalentexchangerare": "Equivalent Exchange",
        "eternalcandlerare": "Eternal Candle",
        "eternallullabyrare": "Eternal Lullaby",
        "evanescencerare": "Evanescence",
        "evisceraterare": "Eviscerate",
        "evocationrare": "Evocation",
        "expectedprophecyrare": "Expected Prophecy",
        "exploitopeningsrare": "Exploit Openings",
        "explosiveshotrare": "Explosive Shot",
        "exposearmorrare": "Expose Armor",
        "faderare": "Fade",
        "faeborgscalerare": "Faeborg Scale",
        "faithringrare": "Faith Ring",
        "familyjewelsrare": "Family Jewels",
        "fanofknivesrare": "Fan of Knives",
        "fanaticismrare": "Fanaticism",
        "farshotrare": "Far Shot",
        "faststrikerare": "Fast Strike",
        "feintrare": "Feint",
        "fennyrare": "Fenny",
        "ferventringrare": "Fervent Ring",
        "fierywandrare": "Fiery Wand",
        "findweaknessrare": "Find Weakness",
        "fireblastrare": "Fire Blast",
        "firebookrare": "Fire Book",
        "firerunerare": "Fire Rune",
        "fireballrare": "Fireball",
        "firestormrare": "Firestorm",
        "firstaidrare": "First Aid",
        "fishingrodrare": "Fishing Rod",
        "fistofthedamnedrare": "Fists of the Damned",
        "flailrare": "Flail",
        "flamestrikerare": "Flamestrike",
        "flamingswordrare": "Flaming Sword",
        "flamyrare": "Flamy",
        "flankingstrikerare": "Flanking Strike",
        "flarerare": "Flare",
        "flashrare": "Flash",
        "flashfreezerare": "Flash Freeze",
        "flashhealrare": "Flash Heal",
        "fluterare": "Flute",
        "foresightrare": "Foresight",
        "forestcrownrare": "Forest Crown",
        "fortunetellingrare": "Fortune Telling",
        "fountainpenrare": "Fountain Pen",
        "fourleafcloverrare": "Four Leaf Clover",
        "freeloverrare": "Free Lover",
        "freezecorruptionrare": "Freeze",
        "freezinginkrare": "Freezing Ink",
        "frostaxerare": "Frost Axe",
        "frostnovarare": "Frost Nova",
        "frostboltrare": "Frostbolt",
        "frostfireringrare": "Frostfire Ring",
        "frostguardrare": "Frostguard",
        "frozenarrowsrare": "Frozen Arrows",
        "frozenheirloomrare": "Frozen Heirloom",
        "frozenorbrare": "Frozen Orb",
        "frozentearrare": "Frozen Tear",
        "fungaloutbreakrare": "Fungal Outbreak",
        "furiousslashrare": "Furious Slash",
        "gardenofthornsrare": "Garden of Thorns",
        "garnetearringsrare": "Garnet Earrings",
        "gauntletsrare": "Gauntlets",
        "geyserrare": "Geyser",
        "gihlrunestonerare": "Gihl Runestone",
        "gildedplaterare": "Gilded Plate",
        "glacialhammerrare": "Glacial Hammer",
        "gladiatorhelmetrare": "Gladiator Helmet",
        "glovesrare": "Gloves",
        "glovesofagilityrare": "Gloves of Agility",
        "goblinamuletrare": "Goblin Amulet",
        "gogglesrare": "Goggles",
        "goldchainrare": "Gold Chain",
        "goldringrare": "Gold Ring",
        "goldenbellrare": "Golden Bell",
        "goldenchalicerare": "Golden Chalice",
        "goldencloakrare": "Golden Cloak",
        "goldencrossrare": "Golden Cross",
        "goldenharprare": "Golden Harp",
        "goldenlaurelrare": "Golden Laurel",
        "greaterhealrare": "Greater Heal",
        "greaterhealthpotionrare": "Greater Health Potion",
        "greatermanapotionrare": "Greater Mana Potion",
        "grimoireofflamesrare": "Grimoire of Flames",
        "grindingwheelrare": "Grinding Wheel",
        "groundslamrare": "Ground Slam",
        "guardrare": "Guard",
        "guardianangelrare": "Guardian Angel",
        "hallucinationrare": "Hallucination",
        "hamstringrare": "Hamstring",
        "handbookrare": "Handbook",
        "harleyrare": "Harley",
        "hatchcorruptrare": "Hatch",
        "headbuttrare": "Headbutt",
        "healrare": "Heal",
        "healingbookrare": "Healing Book",
        "healingrainrare": "Healing Rain",
        "healingserenaderare": "Healing Serenade",
        "healthpotionrare": "Health Potion",
        "heartamuletrare": "Heart Amulet",
        "heartofthornsrare": "Heart of Thorns",
        "heatwaverare": "Heat Wave",
        "kiteshieldrare": "Heater Shield",
        "heavenlyarmamentsrare": "Heavenly Armaments",
        "heavenlyblessingrare": "Heavenly Blessing",
        "heavybeltrare": "Heavy Belt",
        "heavystrikerare": "Heavy Strike",
        "heavyweaponryrare": "Heavy Weaponry",
        "hellmarkitemrare": "Hell Mark",
        "hellbladerare": "Hellblade",
        "helmetrare": "Helmet",
        "helpinghandrare": "Helping Hand",
        "hexproofrare": "Hexproof",
        "hiddenweaponrare": "Hidden Weapon",
        "hightchancellorstaffrare": "High Chancellor Staff",
        "hitandrunrare": "Hit and Run",
        "holyaegisrare": "Holy Aegis",
        "holyblastrare": "Holy Blast",
        "holyblobpetrare": "Holy Blob",
        "holybookrare": "Holy Book",
        "holyfirerare": "Holy Fire",
        "holygrailrare": "Holy Grail",
        "holyhammerrare": "Holy Hammer",
        "holynovarare": "Holy Nova",
        "holyripplerare": "Holy Ripple",
        "holyrunerare": "Holy Rune",
        "holyslashwrare": "Holy Slash",
        "holysmiterare": "Holy Smite",
        "holysplashpetrare": "Holy Splash",
        "holystormrare": "Holy Storm",
        "hornethelmetrare": "Horned Helmet",
        "hourglassofdeathrare": "Hourglass of Death",
        "howlrare": "Howl",
        "huntersmarkrare": "Hunter's Mark",
        "huntingringrare": "Hunting Ring",
        "hurryupitemrare": "Hurry Up",
        "hydraeggrare": "Hydra Egg",
        "hypnoshellrare": "Hypno Shell",
        "hypotermiarare": "Hypothermia",
        "icebarrierrare": "Ice Barrier",
        "icecometrare": "Ice Comet",
        "icelancerare": "Ice Lance",
        "iceorbrare": "Ice Orb",
        "iceshotrare": "Ice Shot",
        "icebreakerrare": "Icebreaker",
        "iciclerare": "Icicle",
        "iciclebarragerare": "Icicle Barrage",
        "iciclelauncheritemrare": "Icicle Launcher",
        "icyblobpetrare": "Icy Blob",
        "icysplashpetrare": "Icy Splash",
        "icyveinsrare": "Icy Veins",
        "icywandrare": "Icy Wand",
        "ignidohscorerare": "Ignidoh's Core",
        "igniscloackrare": "Ignis Cloak",
        "igniterare": "Ignite",
        "immolaterare": "Immolate",
        "impstatuetterare": "Imp Statuette",
        "impalerare": "Impale",
        "infuriaterare": "Infuriate",
        "infusecouragerare": "Infuse Courage",
        "innercombustionrare": "Inner Combustion",
        "innerfirerare": "Inner Fire",
        "innervaterare": "Innervate",
        "interceptrare": "Intercept",
        "intimidaterare": "Intimidate",
        "invigoratingblowrare": "Invigorating Blow",
        "invisibilityrare": "Invisibility",
        "ironfortressrare": "Iron Fortress",
        "ironkanaborare": "Iron Kanabo",
        "ironwandrare": "Iron Wand",
        "ironcladrare": "Ironclad",
        "jaderingrare": "Jade Ring",
        "jewelersringrare": "Jeweler's Ring",
        "justicarringrare": "Justicar Ring",
        "kingmakerrare": "Kingmaker",
        "largeshieldrare": "Kite Shield",
        "lapisnecklacerare": "Lapis Necklace",
        "largepouchrare": "Large Pouch",
        "lasthoperare": "Last Hope",
        "lastrequiemrare": "Last Requiem",
        "lastrewardrare": "Last Reward",
        "laststandrare": "Last Stand",
        "lavablobpetrare": "Lava Blob",
        "lavacrystalrare": "Lava Crystal",
        "lavaorbrare": "Lava Orb",
        "lavapotionrare": "Lava Potion",
        "lavasplashpetrare": "Lava Splash",
        "leapslamrare": "Leap Slam",
        "leatherarmorrare": "Leather Armor",
        "leatherbootsrare": "Leather Boots",
        "leatherglovesrare": "Leather Gloves",
        "lethalshotrare": "Lethal Shot",
        "lianterare": "Lianty",
        "librarianrare": "Librarian",
        "lifeessencerare": "Life Essence",
        "lifetaprare": "Life Tap",
        "lightbringerrare": "Lightbringer",
        "lightningbookrare": "Lightning Book",
        "lightningrunerare": "Lightning Rune",
        "lightningspearrare": "Lightning Spear",
        "livingflamerare": "Living Flame",
        "livingforestrare": "Living Forest",
        "lockpicksrare": "Lockpicks",
        "lonelyblobrare": "Lonely Blob",
        "longbowrare": "Long Bow",
        "lostmailrare": "Lost Mail",
        "luckypawrare": "Lucky Paw",
        "lunaringrare": "Luna Ring",
        "madnessringrare": "Madness Ring",
        "magicmushroomrare": "Magic Mushroom",
        "magictomerare": "Magic Tome",
        "magusstaffrare": "Magus Staff",
        "maimrare": "Maim",
        "maliciouseyerare": "Malicious Eye",
        "managemrare": "Mana Gem",
        "manalooprare": "Mana Loop",
        "manapotionrare": "Mana Potion",
        "manashieldrare": "Mana Shield",
        "manasurgerare": "Mana Surge",
        "massdispelrare": "Mass Dispel",
        "massinvisibilityrare": "Mass Invisibility",
        "matriarchsclawrare": "Matriarch's Claw",
        "meditaterare": "Meditate",
        "megaphonerare": "Megaphone",
        "melancholyrare": "Melancholy",
        "mentalshakerare": "Mental Shake",
        "merchantbadgerare": "Merchant Badge",
        "mesmericmiragerare": "Mesmeric Mirage",
        "metalblobpetrare": "Metal Blob",
        "metalsplashpetrare": "Metal Splash",
        "meteorshowerrare": "Meteor Shower",
        "meteoriterare": "Meteorite",
        "meteoritecorruptionrare": "Meteorite",
        "mindblastrare": "Mind Blast",
        "mindbookrare": "Mind Book",
        "mindtwistrare": "Mind Twist",
        "mindvisionsrare": "Mind Visions",
        "minotaurhornrare": "Minotaur Horn",
        "mirrorimagesrare": "Mirror Images",
        "mirrorofkalandrarare": "Mirror of Kassandra",
        "mixedsaladrare": "Mixed Salad",
        "mnemrunestonerare": "Mnem Runestone",
        "morningstarrare": "Morning Star",
        "mortalstrikerare": "Mortal Strike",
        "mountainkingrare": "Mountain King",
        "mozzyrare": "Mozzy",
        "multishotrare": "Multishot",
        "musicsheetrare": "Music Sheet",
        "mysticstaffrare": "Mystic Staff",
        "necromancerroberare": "Necromancer Robe",
        "necropotencerare": "Necropotence",
        "necroticburstrare": "Necrotic Burst",
        "netherbladerare": "Netherblade",
        "neurotoxinrare": "Neurotoxin",
        "neverendingstoryrare": "Neverending Story",
        "neverfrostrare": "Neverfrost",
        "nightmarerare": "Nightmare",
        "nightveilrare": "Nightveil",
        "ninjascrollrare": "Ninja Scroll",
        "nobleshieldrare": "Noble Shield",
        "noxiouseruptionrare": "Noxious Eruption",
        "noxiousparasitesrare": "Noxious Parasites",
        "nullifierrare": "Nullifier",
        "obsidiandaggerrare": "Obsidian Dagger",
        "obsidianringrare": "Obsidian Ring",
        "obsidianrodrare": "Obsidian Staff",
        "oculyrare": "Oculy",
        "odeofwarrare": "Ode of War",
        "oldhorseshoerare": "Old Horseshoe",
        "omenofperilrare": "Omen of Peril",
        "omnipotencerare": "Omnipotence",
        "omnisciencerare": "Omniscience",
        "onyxamuletrare": "Onyx Amulet",
        "opalringrare": "Opal Ring",
        "orbofstormsrare": "Orb of Storms",
        "orbyrare": "Orby",
        "osmiumfeetrare": "Osmium Feet",
        "overheatitemrare": "Overheat",
        "overpowerrare": "Overpower",
        "pacifismrare": "Pacifism",
        "painsupresionrare": "Pain Suppression",
        "paladingauntletsrare": "Paladin Gauntlets",
        "palisadeitemrare": "Palisade",
        "panacearare": "Panacea",
        "pandemoniumrare": "Pandemonium",
        "pandorasboxrare": "Pandora's Box",
        "parryrare": "Parry",
        "pebblethrowrare": "Pebble Throw",
        "penancerare": "Penance",
        "penitenceringrare": "Penitence Ring",
        "perseverancerare": "Perseverance",
        "pestilencerare": "Pestilence",
        "piercinghowlrare": "Piercing Howl",
        "piousringrare": "Pious Ring",
        "plagueshotrare": "Plague Shot",
        "platemailrare": "Platemail",
        "platinumringrare": "Platinum Ring",
        "pointyhatrare": "Pointy Hat",
        "poisoncatalystrare": "Poison Catalyst",
        "poisondartrare": "Poison Dart",
        "poisonfieldsrare": "Poison Fields",
        "poisonflaskrare": "Poison Flask",
        "poisonsprayrare": "Poison Spray",
        "poisoneddaggerrare": "Poisoned Dagger",
        "poisoneddaggersrare": "Poisoned Daggers",
        "poisonousbloodrare": "Poisonous Blood",
        "poisonousshotrare": "Poisonous Shot",
        "pommelrare": "Pommel",
        "powercoilrare": "Power Coil",
        "prayerofhealingrare": "Prayer of Healing",
        "prayerofprotectionrare": "Prayer of Protection",
        "precisestrikerare": "Precise Strike",
        "prescriptionrare": "Prescription",
        "primalnecklacerare": "Primal Necklace",
        "prismaticfieldrare": "Prismatic Field",
        "profanerare": "Profane",
        "prophetstaffrare": "Prophet's Staff",
        "protectfromevilrare": "Protect from Evil",
        "provokerare": "Provoke",
        "pufferfishrare": "Pufferfish",
        "pulsinghealrare": "Pulsing Heal",
        "pulverizerare": "Pulverize",
        "pummelrare": "Pummel",
        "punchrare": "Punch",
        "puncturerare": "Puncture",
        "purgingrayrare": "Purging Ray",
        "pushforwardrare": "Push Forward",
        "putrefactionrare": "Putrefaction",
        "pyroblastrare": "Pyroblast",
        "pyromancerroberare": "Pyromancer Robe",
        "quickshotrare": "Quick Shot",
        "quillrare": "Quill",
        "quillrainrare": "Quill Rain",
        "radiantassaultrare": "Radiant Assault",
        "raiderslicerrare": "Raider Slicer",
        "rainrare": "Rain",
        "rainofarrowsrare": "Rain of Arrows",
        "raincoatrare": "Raincoat",
        "raisemagerare": "Raise Mage",
        "raisepriestrare": "Raise Priest",
        "raisewarlockrare": "Raise Warlock",
        "rampagerare": "Rampage",
        "rapidfirerare": "Rapid Fire",
        "ravenstaffrare": "Raven Staff",
        "rayoffrostrare": "Ray of Frost",
        "rayofhoperare": "Ray of Hope",
        "razorrare": "Razor",
        "recklesschargerare": "Reckless Charge",
        "recurringnightmarerare": "Recurring Nightmare",
        "redcaperare": "Red Cape",
        "redemptionrare": "Redemption",
        "redsteelcloackrare": "Redsteel Cloak",
        "reinforcedarmorrare": "Reinforced Armor",
        "reinforcedsteelrare": "Reinforced Steel",
        "rejuvenationpotionrare": "Rejuvenation Potion",
        "rendrare": "Rend",
        "renewrare": "Renew",
        "repairarmorrare": "Repair Armor",
        "repetitiontrainingrare": "Repetition Training",
        "replenishmentrare": "Replenishment",
        "reprisalrare": "Reprisal",
        "resurrectionrare": "Resurrection",
        "retaliatorrare": "Retaliator",
        "revealingflaskrare": "Revealing Flask",
        "revengerare": "Revenge",
        "reverberantverserare": "Reverberant Verse",
        "ricochetrare": "Ricochet",
        "ringoffirerare": "Ring of Fire",
        "ringofhoperare": "Ring of Hope",
        "ringofprotectionrare": "Ring of Protection",
        "rosegardenrare": "Rose Garden",
        "roundshieldrare": "Round Shield",
        "royalcoinrare": "Royal Coin",
        "rubyamuletrare": "Ruby Amulet",
        "rubycuirassrare": "Ruby Cuirass",
        "ruinboltrare": "Ruin Bolt",
        "runicdicerare": "Runic Dice",
        "rupturerare": "Rupture",
        "rustyarmorrare": "Rusty Armor",
        "sacredaxerare": "Sacred Axe",
        "sacredboltrare": "Sacred Bolt",
        "sacredceremonyrare": "Sacred Ceremony",
        "sacredgroundrare": "Sacred Ground",
        "sacredtabletrare": "Sacred Tablet",
        "safeguardrare": "Safeguard",
        "samuraiarmorrare": "Samurai Armor",
        "sanctificationrare": "Sanctification",
        "sanctuaryrare": "Sanctuary",
        "sapphireamuletrare": "Sapphire Amulet",
        "sapphireringrare": "Sapphire Ring",
        "sarcasticsonnetrare": "Sarcastic Sonnet",
        "savantroberare": "Savant Robe",
        "saveitforlaterrare": "Save It For Later",
        "sawbladerare": "Saw Blade",
        "sawtoothkniferare": "Sawtooth Knife",
        "scarabshieldrare": "Scarab Shield",
        "scarabyrare": "Scaraby",
        "scavengerare": "Scavenge",
        "scholarroberare": "Scholar Robe",
        "scorchingrayrare": "Scorching Ray",
        "scrollofdefenserare": "Scroll of Defense",
        "scrollofintellectrare": "Scroll of Intellect",
        "scrollofresurrectionrare": "Scroll of Resurrection",
        "scrollofspeedrare": "Scroll of Speed",
        "scryrare": "Scry",
        "scryerstaffrare": "Scryer Staff",
        "searingblastrare": "Searing Blast",
        "searingdaggerrare": "Searing Dagger",
        "searingnovarare": "Searing Nova",
        "searingtouchrare": "Searing Touch",
        "seashellamuletrare": "Seashell Amulet",
        "seashellringrare": "Seashell Ring",
        "secondwindrare": "Second Wind",
        "serenityringrare": "Serenity Ring",
        "setuprare": "Setup",
        "severarteryrare": "Sever Artery",
        "shacklesofwarrare": "Shackles Of War",
        "shadowbindingrare": "Shadow Binding",
        "shadowboltrare": "Shadow Bolt",
        "shadowbookrare": "Shadow Book",
        "shadowcloackrare": "Shadow Cloak",
        "shadowmendrare": "Shadow Mend",
        "shadoworbrare": "Shadow Orb",
        "shadowrunerare": "Shadow Rune",
        "shadowsteprare": "Shadowstep",
        "shakeitoffrare": "Shake it off",
        "sharingiscaringrare": "Sharing Is Caring",
        "sharpscimitarrare": "Sharp Scimitar",
        "sharpenrare": "Sharpen",
        "sharpeningkniferare": "Sharpening Knife",
        "sharpyrare": "Sharpy",
        "shatterrare": "Shatter",
        "shieldbashrare": "Shield Bash",
        "shieldbreakerrare": "Shield Breaker",
        "shieldchargerare": "Shield Charge",
        "shieldgeneratoritemb": "Shield Generator",
        "shieldofthornsrare": "Shield of Thorns",
        "shieldofwardingrare": "Shield of Warding",
        "shieldslamrare": "Shield Slam",
        "shieldstancerare": "Shield Stance",
        "shieldthrowrare": "Shield Throw",
        "shieldwallrare": "Shield Wall",
        "shiftingscrollrare": "Shifting Scroll",
        "shiningforcerare": "Shining Force",
        "shivrare": "Shiv",
        "shocknovarare": "Shock Nova",
        "shortswordrare": "Short Sword",
        "shoulderplaterare": "Shoulder Plate",
        "shrapnelshotrare": "Shrapnel Shot",
        "siegebreakerrare": "Siege Breaker",
        "silverchalicerare": "Silver Chalice",
        "silverringrare": "Silver Ring",
        "simplehatrare": "Simple Hat",
        "singingswordrare": "Singing Sword",
        "siphonliferare": "Siphon Life",
        "skullsplitterrare": "Skullsplitter",
        "slicerare": "Slice",
        "slimyrare": "Slimy",
        "slingshotrare": "Slingshot",
        "slippersrare": "Slippers",
        "smallpouchrare": "Small Pouch",
        "smokebombrare": "Smoke Bomb",
        "sneakpeekrare": "Sneak Peek",
        "sneakystrikerare": "Sneaky Strike",
        "snipershotrare": "Sniper Shot",
        "snowfallrare": "Snowfall",
        "soaprare": "Soap",
        "solringrare": "Sol Ring",
        "songofcelerityrare": "Song of Celerity",
        "songofquicknessrare": "Song of Quickness",
        "sparkofliferare": "Spark of Life",
        "spectralmissilesrare": "Spectral Missiles",
        "spiderqueeneyerare": "Spider Queen Eye",
        "spikedballrare": "Spiked Ball",
        "spikedbracersrare": "Spiked Bracers",
        "spikedshieldrare": "Spiked Shield",
        "spikedshoulderpadsrare": "Spiked Shoulderpads",
        "sprintrare": "Sprint",
        "spyglassrare": "Spyglass",
        "squallrare": "Squall",
        "stainlesscuirassrare": "Stainless Cuirass",
        "starrynightrare": "Starry Night",
        "steadfastbootsrare": "Steadfast Boots",
        "steadfastshieldrare": "Steadfast Shield",
        "steelrodrare": "Steel Rod",
        "steelskinrare": "Steelskin",
        "stimulantpillsrare": "Stimulant Pills",
        "stockaderare": "Stockade",
        "stoneamuletrare": "Stone Amulet",
        "stonemaulrare": "Stone Maul",
        "stoneskinrare": "Stoneskin",
        "stormcorruptionrare": "Storm",
        "stormjavelinrare": "Storm Javelin",
        "stormtiararare": "Storm Tiara",
        "stormcallerfeatherrare": "Stormcaller Feather",
        "stormyrare": "Stormy",
        "strawhatrare": "Straw Hat",
        "strongmojorare": "Strong Mojo",
        "subzerorare": "Sub Zero",
        "sunbeamrare": "Sunbeam",
        "sunderarmorrare": "Sunder Armor",
        "superconductorrare": "Superconductor",
        "suppressionhelmetrare": "Suppresion Helmet",
        "surpriseboxrare": "Surprise Box",
        "surprisegiftboxrare": "Surprise Gift Box",
        "sweepingstrikerare": "Sweeping Strike",
        "sweetmelodyrare": "Sweet Melody",
        "tabularasarare": "Tabula Rasa",
        "tacticalthinkingrare": "Tactical Thinking",
        "taintedrodrare": "Tainted Rod",
        "tediouspoemrare": "Tedious Poem",
        "tempestrare": "Tempest",
        "templeamuletrare": "Temple Amulet",
        "temporalchainsrare": "Temporal Chains",
        "terrorringrare": "Terror Ring",
        "terrorizerare": "Terrorize",
        "tesseractrare": "Tesseract",
        "theanvilrare": "The Anvil",
        "thedarkonerare": "The Dark One",
        "thedefilerrare": "The Defiler",
        "theencyclopediarare": "The Encyclopedia",
        "thejuggernautrare": "The Juggernaut",
        "theonerare": "The One",
        "thepolluterrare": "The Polluter",
        "theporcupinerare": "The Porcupine",
        "theproficientrare": "The Proficient",
        "thewallrare": "The Wall",
        "thewolfslayerrare": "The Wolfslayer",
        "thermalamuletrare": "Thermal Amulet",
        "thermalringrare": "Thermal Ring",
        "thornproliferationrare": "Thorn Proliferation",
        "thornyringrare": "Thorny Ring",
        "thousandneedlesrare": "Thousand Needles",
        "throwbolasrare": "Throw Bolas",
        "thunderstormrare": "Thunderstorm",
        "tikimaskrare": "Tiki Mask",
        "titanfallrare": "Titan Fall",
        "titangauntletsrare": "Titan Gauntlets",
        "tomeofintellectrare": "Tome of Intellect",
        "topazringrare": "Topaz Ring",
        "torchrare": "Torch",
        "tormentofthornsrare": "Torment of Thorns",
        "touristmaprare": "Tourist Map",
        "toxicblobpetrare": "Toxic Blob",
        "toxicrainrare": "Toxic Rain",
        "toxicsplashpetrare": "Toxic Splash",
        "toxicstrikerare": "Toxic Strike",
        "tracerare": "Trace",
        "transfusionrare": "Transfusion",
        "transmisionrare": "Transmission",
        "tremorsrare": "Tremors",
        "tuneuprare": "Tune Up",
        "turbanrare": "Turban",
        "twilightswamprare": "Twilight Swamp",
        "twinbladesrare": "Twin Blades",
        "tyrantnecklacerare": "Tyrant Necklace",
        "undeathichorrare": "Undeath Ichor",
        "unholyhammerrare": "Unholy Hammer",
        "unholystormrare": "Unholy Storm",
        "unstablepowerrare": "Unstable Power",
        "uprootrare": "Uproot",
        "upwindrare": "Upwind",
        "vampirictouchrare": "Vampiric Touch",
        "vampirictutorrare": "Vampiric Tutor",
        "vanishrare": "Vanish",
        "venomamuletrare": "Venom Amulet",
        "venomfangrare": "Venom Fang",
        "veteranarmorrare": "Veteran Armor",
        "vexingcrescendorare": "Vexing Crescendo",
        "vigilancerare": "Vigilance",
        "vigorousrare": "Vigorous",
        "vilegasrare": "Vile Gas",
        "vilelancerare": "Vile Lance",
        "vileringrare": "Vile Ring",
        "viperringrare": "Viper Ring",
        "viperstrikerare": "Viper Strike",
        "virulentringrare": "Virulent Ring",
        "visionringrare": "Vision Ring",
        "vitalizerare": "Vitalize",
        "vitalizingserenaderare": "Vitalizing Serenade",
        "voidcrushrare": "Void Crush",
        "volcanicaxerare": "Volcanic Axe",
        "volleyrare": "Volley",
        "voodoodollrare": "Voodoo Doll",
        "warbannerrare": "War Banner",
        "wardrumrare": "War Drum",
        "warhammerrare": "War Hammer",
        "warpaintrare": "Warpaint",
        "warriorcoderare": "Warrior Code",
        "waterblobpetrare": "Water Blob",
        "waterjetrare": "Water Jet",
        "watersplashpetrare": "Water Splash",
        "watervaserare": "Water Vase",
        "weaponcacherare": "Weapon Cache",
        "weaponpouchrare": "Weapon Pouch",
        "whirlwindrare": "Whirlwind",
        "whisperingliesrare": "Whispering Lies",
        "wickedcraftsmanrare": "Wicked Craftsman",
        "windsofamnesiarare": "Winds of Amnesia",
        "wingedwandrare": "Winged Wand",
        "winteriscomingrare": "Winter Is Coming",
        "winterorbrare": "Winter Orb",
        "wintersnighttalerare": "Winter's Night Tale",
        "wolfskincloackrare": "Wolfskin Cloak",
        "wolfyrare": "Wolfy",
        "woodencrosierrare": "Wooden Crosier",
        "woollyhatrare": "Woolly Hat",
        "wreckingballrare": "Wrecking Ball",
        "xulrunestonerare": "Xul Runestone",
        "yggdrasilrootrare": "Yggdrasil Root",
        "yinyangbadgerare": "Yin Yang Badge",
        "yinyangboltrare": "Yin Yang Bolt",
        "ylmerbranchrare": "Ylmer's Branch",
        "yoggercleaverrare": "Yogger's Cleaver",
        "zaprare": "Zap"
    }
};

var vanillaCards = {};

var cardTypes = [];
var discardCardTypes = [];
var addCardTypes = [];
var addCardList = [];
var cardObj = defaultCard;
var itemObj = defaultItem;
var cardToGainList = [];
var customCards = {};
var cardsAdded = [];
var uploadingCards = {};
var uploadingSprites = {};
var customSprites = {}; // { spriteName: blob object }
var customSpriteObjURLs = {}; // { spriteName: blob url } used because we don't want duplicates (I have no idea how much of an impact it has on users :))
// var customSpriteJSON = {}; // { spriteName: blob as string } used to save to localStorage (though I should be using indexedDB, and will shift there post-June)
var vanillaSprites = {}; // { spriteName: blob object } used because we don't want to save these to localStorage (only limited space!)
var medsLocks = {};
var duplicateCard = {};
var hoverCardSVGs = {}; // surely there's a way around this

var db = new Dexie("customContent");

db.version(1).stores({
    sprites: `
        name,
        type,
        blob`,
});

$(window).on("resize", function () {
    resizeWindow();
});

$(document).ready(function () {
    document.title = "AtO Custom Content";
    $("select[meds-select-enums]").each(function () {
        var select = $(this);
        $(this).attr("meds-select-enums").split(", ").forEach(function (en) {
            $.each(Enums[en], function (key, value) {
                $('<option/>', { value: key, text: value }).appendTo(select);
            });
        });
    });
    vanillaSpriteList.forEach(function (spriteName) {
        $('<option/>', { value: spriteName }).appendTo($("#text_sprite_datalist"));
    });
    var myDefaultAllowList = bootstrap.Tooltip.Default.allowList;
    myDefaultAllowList.table = [];
    myDefaultAllowList.tr = ['style'];
    myDefaultAllowList.td = ['colspan', 'style', 'id', 'class'];
    myDefaultAllowList.th = [];
    myDefaultAllowList.tbody = [];
    myDefaultAllowList.thead = [];
    myDefaultAllowList.div = ['class', 'id', 'style'];
    myDefaultAllowList.svg = ["viewBox", "style", "width", "height"];
    myDefaultAllowList.g = [];
    myDefaultAllowList.foreignObject = ["width", "height", "x", "y"];
    myDefaultAllowList.image = ["width", "height", "x", "y", "xlink:href"];
    myDefaultAllowList.text = ["x", "y", "class", "text-anchor", "dominant-baseline"];

    // Configure CSS sanitizer to allow font-family
    // Bootstrap 5 sanitizes CSS properties - we need to allow font-family
    if (bootstrap.Tooltip.Default && typeof bootstrap.Tooltip.Default.sanitizeFn === 'function') {
        var originalTooltipSanitize = bootstrap.Tooltip.Default.sanitizeFn;
        bootstrap.Tooltip.Default.sanitizeFn = function (input) {
            var result = originalTooltipSanitize(input);
            // Preserve font-family if it exists in the original input
            if (input && typeof input === 'string' && input.includes('font-family')) {
                var fontFamilyRegex = /font-family\s*:\s*["']?([^;"']+)["']?/gi;
                var matches = input.match(fontFamilyRegex);
                if (matches && (!result || !result.includes('font-family'))) {
                    // Reconstruct with font-family preserved
                    return result ? result.replace(/(style\s*=\s*["'])([^"']*)(["'])/i,
                        function (m, p1, content, p2) {
                            return p1 + content + (content && !content.endsWith(';') ? '; ' : ' ') + matches[0] + p2;
                        }) : input;
                }
            }
            return result;
        };
    }

    // Also configure for Popover
    if (bootstrap.Popover && bootstrap.Popover.Default && typeof bootstrap.Popover.Default.sanitizeFn === 'function') {
        var originalPopoverSanitize = bootstrap.Popover.Default.sanitizeFn;
        bootstrap.Popover.Default.sanitizeFn = function (input) {
            var result = originalPopoverSanitize(input);
            if (input && typeof input === 'string' && input.includes('font-family')) {
                var fontFamilyRegex = /font-family\s*:\s*["']?([^;"']+)["']?/gi;
                var matches = input.match(fontFamilyRegex);
                if (matches && (!result || !result.includes('font-family'))) {
                    return result ? result.replace(/(style\s*=\s*["'])([^"']*)(["'])/i,
                        function (m, p1, content, p2) {
                            return p1 + content + (content && !content.endsWith(';') ? '; ' : ' ') + matches[0] + p2;
                        }) : input;
                }
            }
            return result;
        };
    }

    // Also configure Popover's allowList
    if (bootstrap.Popover && bootstrap.Popover.Default) {
        var popoverAllowList = bootstrap.Popover.Default.allowList;
        Object.keys(myDefaultAllowList).forEach(function (key) {
            if (popoverAllowList[key]) {
                popoverAllowList[key] = myDefaultAllowList[key];
            }
        });
    }

    Object.keys(vanillaCardList.No).forEach(function (cardID) {
        $("#select_new_card_vanilla").append(`<option value="` + cardID + `">` + vanillaCardList.No[cardID] + `</option>`);
    });
    $("#select_new_card_vanilla").val("defend");

    // #TODO (but after customCards has loaded): add a datalist for discover card IDs
    // for (var a = 0; )
    //$("#text_card_id_add_datalist").append();

    // card type
    $("#btn_card_type_add").on('click', function () {
        var newType = $.trim($("#select_card_type option:selected").val());
        var i = cardTypes.indexOf(newType);
        i === -1 ? cardTypes.push(newType) : cardTypes.splice(i, 1);
        if (cardTypes.length > 1 && cardTypes[0] === "None") { cardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_card_type_clear").on('click', function () {
        cardTypes = [];
        updateDisplay();
    });

    // discard card type
    $("#btn_discard_card_type_add").on('click', function () {
        var newType = $.trim($("#select_discard_card_type option:selected").val());
        var i = discardCardTypes.indexOf(newType);
        i === -1 ? discardCardTypes.push(newType) : discardCardTypes.splice(i, 1);
        if (discardCardTypes.length > 1 && discardCardTypes[0] === "None") { discardCardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_discard_card_type_clear").on('click', function () {
        discardCardTypes = [];
        updateDisplay();
    });

    // add card type
    $("#btn_add_card_type_add").on('click', function () {
        var newType = $.trim($("#select_add_card_type option:selected").val());
        var i = addCardTypes.indexOf(newType);
        i === -1 ? addCardTypes.push(newType) : addCardTypes.splice(i, 1);
        if (addCardTypes.length > 1 && addCardTypes[0] === "None") { addCardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_add_card_type_clear").on('click', function () {
        addCardTypes = [];
        updateDisplay();
    });

    // add card id
    $("#btn_add_card_list_add").on('click', function () {
        var newType = $.trim($("#select_add_card_list_add").val());
        var i = addCardList.indexOf(newType);
        i === -1 ? addCardList.push(newType) : addCardList.splice(i, 1);
        if (addCardList.length > 1 && addCardList[0] === "None") { addCardList.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_add_card_list_clear").on('click', function () {
        addCardList = [];
        updateDisplay();
    });

    // add card id to item
    $("#btn_cardtogainlist_add").on('click', function () {
        var newID = $.trim($("#text_cardtogainlist_add").val());
        var i = cardToGainList.indexOf(newID);
        i === -1 ? cardToGainList.push(newID) : cardToGainList.splice(i, 1);
        updateDisplay();
    });
    $("#btn_cardtogainlist_clear").on('click', function () {
        cardToGainList = [];
        updateDisplay();
    });

    $("#btn_menu_show").on('click', function () {
        if (localStorage.getItem("cardview_open") === "false") {
            localStorage.setItem("cardview_open", true);
        } else {
            localStorage.setItem("cardview_open", false);
        };
        updateCardListDisplay();
    });
    $("#svg_card_side").on('shown.bs.collapse', function () {
        boxfitCard("#svg_card_side");
    });
    $("#btn_menu_list").on('click', function () {
        if (localStorage.getItem("cardlist_open") === "false") {
            localStorage.setItem("cardlist_open", true);
        } else {
            localStorage.setItem("cardlist_open", false);
        };
        updateCardListDisplay();
    });
    $("#btn_menu_download").on('click', function () {
    });

    $("#btn_menu_download").popover({
        html: true,
        content: `<div class="d-flex flex-column w-100">
                        <button id="btn_download_this" class="btn btn-success mb-1" type="button">Card</button>
                        <button id="btn_download_upgrades" class="btn btn-success mb-1" type="button">Card + Upgrades</button>
                        <button id="btn_download_all" class="btn btn-success" type="button">All Cards</button>
                </div>`,
        title: ``,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_menu_download").on('inserted.bs.popover', function () {
        $("#btn_download_this").on('click', function () {
            var zip = new JSZip();
            zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file($("#text_id").val() + ".json", JSON.stringify(cardObj, null, 4));
            if (vanillaSprites.hasOwnProperty(cardObj.Sprite)) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(cardObj.Sprite + ".png", vanillaSprites[cardObj.Sprite]);
            } else if (customSprites.hasOwnProperty(cardObj.Sprite)) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(cardObj.Sprite + ".png", customSprites[cardObj.Sprite]);
            };
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, $("#text_id").val() + ".zip");
            });
            $("#btn_menu_download").popover("hide");
        });
        $("#btn_download_upgrades").on('click', function () {
            var zip = new JSZip();
            // zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file($("#text_id").val() + ".json", JSON.stringify(cardObj, null, 4));
            var baseCard = customCards.hasOwnProperty(cardObj.BaseCard) ? customCards[cardObj.BaseCard] : cardObj;
            zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file(baseCard.ID + ".json", JSON.stringify(baseCard, null, 4));
            var spriteBlob = getSpriteBlob(baseCard.Sprite);
            if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(baseCard.Sprite + ".png", spriteBlob); }
            if (baseCard.UpgradesTo1.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo1)) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file(baseCard.UpgradesTo1 + ".json", JSON.stringify(customCards[baseCard.UpgradesTo1], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesTo1].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(customCards[baseCard.UpgradesTo1].Sprite + ".png", spriteBlob); }
            };
            if (baseCard.UpgradesTo2.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo2)) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file(baseCard.UpgradesTo2 + ".json", JSON.stringify(customCards[baseCard.UpgradesTo2], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesTo2].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(customCards[baseCard.UpgradesTo2].Sprite + ".png", spriteBlob); }
            };
            if (baseCard.UpgradesToRare.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesToRare)) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file(baseCard.UpgradesToRare + ".json", JSON.stringify(customCards[baseCard.UpgradesToRare], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesToRare].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(customCards[baseCard.UpgradesToRare].Sprite + ".png", spriteBlob); }
            };
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, baseCard.ID + "_all.zip");
            });
            $("#btn_menu_download").popover("hide");
        });
        $("#btn_download_all").on('click', function () {
            var zip = new JSZip();
            Object.keys(customCards).forEach(function (cardID) {
                zip.folder("Obeliskial_importing").folder("TESTING").folder("card").file(cardID + ".json", JSON.stringify(customCards[cardID], null, 4));
                var spriteBlob = getSpriteBlob(customCards[cardID].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("TESTING").folder("sprite").file(customCards[cardID].Sprite + ".png", spriteBlob); }
            });
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, "customCards.zip");
            });
            $("#btn_menu_download").popover("hide");
        });
    });

    $("#modal_new_card").on('shown.bs.modal', function () {
        var newHTML = "";
        var doneIDs = [];
        Object.keys(customCards).sort().forEach(function (cardID) {
            var card = customCards[cardID];
            if (!(doneIDs.includes(card.ID)) && card.CardUpgraded === "No") {
                newHTML += `<option value="` + card.ID + `">` + neverBlankName(card.CardName) + `</option>`;
                doneIDs.push(card.ID);
            } else if (customCards.hasOwnProperty(card.UpgradedFrom) && !(doneIDs.includes(card.UpgradedFrom))) {
                newHTML += `<option value="` + card.UpgradedFrom + `">` + neverBlankName(card.CardName) + `</option>`;
                doneIDs.push(card.UpgradedFrom);
            } else if (!(doneIDs.includes(card.UpgradedFrom))) {
                newHTML += `<option value="` + card.ID + `">` + neverBlankName(card.CardName) + `</option>`;
                doneIDs.push(card.ID);
            };
        });
        $("#select_new_card_custom").html(newHTML);
        getNewCardObjects();
    });
    $("#modal_sprite_library").on('hidden.bs.modal', function () {
        $("#btn_upload_sprite").prop("disabled", true);
        $("#file_upload_sprite").val("");
    });
    $("#file_upload_sprite").on('input', function () {
        if ($("#file_upload_sprite")[0].files.length > 0) {
            $("#btn_upload_sprite").prop("disabled", false);
        } else {
            $("#btn_upload_sprite").prop("disabled", true);
        };
    });
    $("#btn_upload_sprite").on('click', async function () {
        for (var a = 0; a < $("#file_upload_sprite")[0].files.length; a++) {
            if (!$("#file_upload_sprite")[0].files[a].type === "image/png") {
                continue;
            };
            var spriteName = $("#file_upload_sprite")[0].files[a].name.toLowerCase().replace(".png", "");
            const imgDataURI = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    resolve(reader.result);
                };
                reader.onerror = async (err) => {
                    console.log("Error reading file: " + file.name);
                    reject(err);
                };
                reader.readAsDataURL($("#file_upload_sprite")[0].files[a]);
            });
            if (customSprites.hasOwnProperty(spriteName)) {
                // #TODO: "sprite with this name already exists. do you want to overwrite?"
                if ($('[custom-sprite-id="' + spriteName + '"]').length > 0) {
                    $('[custom-sprite-id="' + spriteName + '"]').parent("div.col").remove();
                };
            };
            var res = await resizeAndBlob(imgDataURI, 256, 256);
            await addCustomSprite(spriteName, res);
        };
        $("#file_upload_sprite").val("");
    });
    $("#text_id").on('input', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
    });
    $("#text_id").on('change', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
        updateDisplay();
    });
    $('[meds-on-input="lc-update-display"]').on('input', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
        updateDisplay();
    });
    $('[meds-on-input="update-display"]').on('input', function () { updateDisplay() });
    $('[meds-on-input="update-new-card"]').on('input', function () { getNewCardObjects(); });
    $("#file_new_card_upload").on('input', function () {
        $("#radio_new_card_upload").prop("checked", true);
        getNewCardObjects();
    });
    $("#select_new_card_vanilla").on('change', function () {
        $("#radio_new_card_vanilla").prop("checked", true);
        getNewCardObjects();
    });
    $("#select_new_card_custom").on('change', function () {
        $("#radio_new_card_custom").prop("checked", true);
        getNewCardObjects();
    });
    $("#text_new_card_json").on('keyup', function () {
        $("#radio_new_card_json").prop("checked", true);
        getNewCardObjects();
    });
    $("#text_new_card_json").on('change', function () {
        $("#radio_new_card_json").prop("checked", true);
        getNewCardObjects();
    });
    $("#btn_show_help").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_help").show();
    });
    $("#btn_show_settings").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_settings").show();
    });
    $("#btn_menu_new").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_new_card").show();
    });
    $("#btn_sprite_library").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").show();
    });
    $("#btn_menu_delete").popover({
        html: true,
        content: `<div class="btn-group w-100" role="group" aria-label="Delete: yes or no?">
                        <button id="btn_delete_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_delete_no" class="btn btn-primary w-50" type="button">No</button>
                </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_menu_delete").on('inserted.bs.popover', function () {
        $("#btn_delete_yes").on('click', function () {
            if (customCards.hasOwnProperty($("#text_id").val())) {
                delete customCards[$("#text_id").val()]
            };

            cardObj = Object.keys(customCards).length > 0 ? Object.values(customCards)[0] : defaultCard; // don't care if return order not guaranteed
            cardObject2Fields(cardObj);
            updateDisplay();
            $("#btn_menu_delete").popover("hide");
        });
        $("#btn_delete_no").on('click', function () {
            $("#btn_menu_delete").popover("hide");
        });
    });

    $("#btn_delete_all").popover({
        html: true,
        content: `<div class="btn-group w-100" role="group" aria-label="Delete all: yes or no?">
                        <button id="btn_delete_all_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_delete_all_no" class="btn btn-primary w-50" type="button">No</button>
                </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_delete_all").on('inserted.bs.popover', function () {
        $("#btn_delete_all_yes").on('click', function () {
            localStorage.clear();
            db.open().then(() => {
                return db.delete();
            })
            location.reload();
        });
        $("#btn_delete_all_no").on('click', function () {
            $("#btn_delete_all").popover("hide");
        });
    });
    $("#btn_new_card_create").on('click', function () {
        if ($(this).html() == "Create") {
            newCardCreate("create");
        } else {
            newCardCreate("show");
        };
    });
    $("#btn_new_card_overwrite").on('click', function () {
        newCardCreate("overwrite");
    });
    $("#btn_new_card_copy").on('click', function () {
        newCardCreate("copy");
    });

    $("#btn_create_upgrades").popover({
        html: true,
        content: `<div class="mb-1 text-center">
                        Automatically creates upgrades based&nbsp;on&nbsp;current&nbsp;card.&nbsp;Very&nbsp;basic.
                    </div>
                    <div class="btn-group w-100" role="group" aria-label="Create Upgrades: are you sure?">
                        <button id="btn_create_upgrades_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_create_upgrades_no" class="btn btn-primary w-50" type="button">No</button>
                    </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_create_upgrades").on('inserted.bs.popover', function () {
        $("#btn_create_upgrades_yes").on('click', function () {
            if (["Weapon", "Armor", "Jewelry", "Accesory", "Pet"].includes($("#select_card_class").val())) {
                // console.log("ITEM");
                var newC = Object.assign({}, cardObj);
                newC.ID = newC.ID + "rare";
                newC.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_rare").val(newC.ID);
                cardObj.UpgradesToRare = newC.ID;
                newC.CardUpgraded = "Rare";
                newC.UpgradesTo1 = "";
                newC.UpgradesTo2 = "";
                newC.UpgradesToRare = "";
                var itemC = JSON.parse(newC.Item);
                if (itemC.DamageFlatBonusValue > 0) {
                    itemC.DamageFlatBonusValue += 1;
                };
                if (itemC.AuraCurseBonusValue1 > 0) {
                    itemC.AuraCurseBonusValue1 += 1;
                };
                if (itemC.CharacterStatModifiedValue > 0) {
                    itemC.CharacterStatModifiedValue += 1;
                };
                if (itemC.AuraCurseGainValue1 > 0) {
                    itemC.AuraCurseGainValue1 += 1;
                };
                if (itemC.AuraCurseGainSelfValue1 > 0) {
                    itemC.AuraCurseGainSelfValue1 += 1;
                };
                if (itemC.DamageToTarget > 0) {
                    itemC.DamageToTarget += 1;
                };
                if (itemC.HealQuantity > 0) {
                    itemC.HealQuantity += 1;
                };
                if (itemC.TimesPerCombat > 0) {
                    itemC.TimesPerCombat += 1;
                } else if (itemC.TimesPerTurn > 0) {
                    itemC.TimesPerTurn += 1;
                } else if (itemC.DestroyAfterUses > 0) {
                    itemC.DestroyAfterUses += 1;
                };
                if (itemC.HealFlatBonus > 0) {
                    itemC.HealFlatBonus += 1;
                };
                if (itemC.HealReceivedFlatBonus > 0) {
                    itemC.HealReceivedFlatBonus += 1;
                };
                if (itemC.PercentDiscountShop > 0) {
                    itemC.PercentDiscountShop += 10;
                };
                newC.Item = JSON.stringify(itemC);
                customCards[newC.ID] = newC;
            } else if (cardTypes.includes("Enchantment")) {
                // console.log("ENCH");
                var newB = Object.assign({}, cardObj);
                newB.ID = newB.ID + "b";
                newB.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_b").val(newB.ID);
                cardObj.UpgradesTo2 = newB.ID;
                newB.CardUpgraded = "B";
                newB.UpgradesTo1 = "";
                newB.UpgradesTo2 = "";
                newB.UpgradesToRare = "";
                var itemB = JSON.parse(newB.ItemEnchantment);
                var newA = Object.assign({}, cardObj);
                newA.ID = newA.ID + "a";
                newA.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_a").val(newA.ID);
                cardObj.UpgradesTo1 = newA.ID;
                newA.CardUpgraded = "A";
                newA.UpgradesTo1 = "";
                newA.UpgradesTo2 = "";
                newA.UpgradesToRare = "";
                var itemA = JSON.parse(newA.ItemEnchantment);

                if (itemA.DamageFlatBonusValue > 0) {
                    itemA.DamageFlatBonusValue += 1;
                    itemB.DamageFlatBonusValue += 2;
                };
                if (itemA.AuraCurseBonusValue1 > 0) {
                    itemA.AuraCurseBonusValue1 += 1;
                    itemB.AuraCurseBonusValue1 += 2;
                };
                if (itemA.CharacterStatModifiedValue > 0) {
                    itemA.CharacterStatModifiedValue += 1;
                    itemB.CharacterStatModifiedValue += 2;
                };
                if (itemA.AuraCurseGainValue1 > 0) {
                    itemA.AuraCurseGainValue1 += 1;
                    itemB.AuraCurseGainValue1 += 2;
                };
                if (itemA.AuraCurseGainSelfValue1 > 0) {
                    itemA.AuraCurseGainSelfValue1 += 1;
                    itemB.AuraCurseGainSelfValue1 += 2;
                };
                if (itemA.DamageToTarget > 0) {
                    itemA.DamageToTarget += 1;
                    itemB.DamageToTarget += 2;
                };
                if (itemA.HealQuantity > 0) {
                    itemA.HealQuantity += 1;
                    itemB.HealQuantity += 2;
                };
                if (itemA.TimesPerCombat > 0) {
                    itemA.TimesPerCombat += 1;
                    itemB.TimesPerCombat += 2;
                } else if (itemA.TimesPerTurn > 0) {
                    itemA.TimesPerTurn += 1;
                    itemB.TimesPerTurn += 2;
                } else if (itemA.DestroyAfterUses > 0) {
                    var base = itemA.DestroyAfterUses;
                    itemA.DestroyAfterUses = Math.trunc(itemA.DestroyAfterUses * 1.2);
                    itemB.DestroyAfterUses = Math.trunc(itemB.DestroyAfterUses * 1.5);
                    if (itemA.DestroyAfterUses == base) {
                        itemA.DestroyAfterUses = base + 1;
                        itemB.DestroyAfterUses = base + 2;
                    };
                };
                if (itemA.HealFlatBonus > 0) {
                    itemA.HealFlatBonus += 1;
                    itemB.HealFlatBonus += 2;
                };
                if (itemA.HealReceivedFlatBonus > 0) {
                    itemA.HealReceivedFlatBonus += 1;
                    itemB.HealReceivedFlatBonus += 2;
                };
                newA.Item = JSON.stringify(itemA);
                newB.Item = JSON.stringify(itemB);
                customCards[newA.ID] = newA;
                customCards[newB.ID] = newB;
            } else {
                // console.log("CARDUPGRADE");
                var newA = Object.assign({}, cardObj);
                var newB = Object.assign({}, cardObj);
                var newC = Object.assign({}, cardObj);
                newA.ID = newA.ID + "a";
                newB.ID = newB.ID + "b";
                newC.ID = newC.ID + "rare";
                newA.UpgradedFrom = cardObj.ID;
                newB.UpgradedFrom = cardObj.ID;
                newC.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_a").val(newA.ID);
                $("#text_upgrades_to_b").val(newB.ID);
                $("#text_upgrades_to_rare").val(newC.ID);
                cardObj.UpgradesTo1 = newA.ID;
                cardObj.UpgradesTo2 = newB.ID;
                cardObj.UpgradesToRare = newC.ID;
                newA.CardUpgraded = "A";
                newB.CardUpgraded = "B";
                newC.CardUpgraded = "Rare";
                newA.UpgradesTo1 = "";
                newA.UpgradesTo2 = "";
                newA.UpgradesToRare = "";
                newB.UpgradesTo1 = "";
                newB.UpgradesTo2 = "";
                newB.UpgradesToRare = "";
                newC.UpgradesTo1 = "";
                newC.UpgradesTo2 = "";
                newC.UpgradesToRare = "";
                newC.Vanish = true;
                if (newA.EnergyCost > 0) {
                    newA.EnergyCost = newA.EnergyCost - 1;
                    newC.EnergyCost = newC.EnergyCost - 1;
                } else if (newA.Damage > 0) {
                    newA.Damage = newA.Damage + 2;
                    newC.Damage = newC.Damage + 2;
                    if (newA.Damage2 > 0) {
                        newA.Damage2 = newA.Damage2 + 2;
                        newC.Damage2 = newC.Damage2 + 2;
                    };
                } else if (newA.Heal > 0) {
                    newA.Heal = newA.Heal + 2;
                    newC.Heal = newC.Heal + 2;
                } else if (!newA.Innate) {
                    newA.Innate = true;
                    newC.Innate = true;
                };
                if (newB.Aura !== "" || newB.AuraSelf !== "" || newB.Curse !== "" || newB.CurseSelf !== "") {
                    if (newB.Aura !== "" || newB.AuraSelf !== "") {
                        newB.AuraCharges = newB.AuraCharges + 2;
                        newC.AuraCharges = newC.AuraCharges + 2;
                    };
                    if (newB.Aura2 !== "" || newB.AuraSelf2 !== "") {
                        newB.AuraCharges2 = newB.AuraCharges2 + 2;
                        newC.AuraCharges2 = newC.AuraCharges2 + 2;
                    };
                    if (newB.Aura3 !== "" || newB.AuraSelf3 !== "") {
                        newB.AuraCharges3 = newB.AuraCharges3 + 2;
                        newC.AuraCharges3 = newC.AuraCharges3 + 2;
                    };
                    if (newB.Curse !== "" || newB.CurseSelf !== "") {
                        newB.CurseCharges = newB.CurseCharges + 2;
                        newC.CurseCharges = newC.CurseCharges + 2;
                    };
                    if (newB.Curse2 !== "" || newB.CurseSelf2 !== "") {
                        newB.CurseCharges2 = newB.CurseCharges2 + 2;
                        newC.CurseCharges2 = newC.CurseCharges2 + 2;
                    };
                    if (newB.Curse3 !== "" || newB.CurseSelf3 !== "") {
                        newB.CurseCharges3 = newB.CurseCharges3 + 2;
                        newC.CurseCharges3 = newC.CurseCharges3 + 2;
                    };
                } else if (newB.Vanish) {
                    newB.Vanish = false;
                } else if (newB.TargetType === "Single" && newB.TargetSide !== "Self") {
                    newB.TargetType = "Global";
                    newC.TargetType = "Global";
                };
                customCards[newA.ID] = newA;
                customCards[newB.ID] = newB;
                customCards[newC.ID] = newC;
            };
            $("#btn_create_upgrades").popover("hide");
            updateDisplay();
        });
        $("#btn_create_upgrades_no").on('click', function () {
            $("#btn_create_upgrades").popover("hide");
        });
    });

    $("#btn_new_card_json_clear").on('click', function () {
        $("#text_new_card_json").val("");
        getNewCardObjects();
    });

    $("button[meds-lock]").on('click', function () {
        var locking = false;
        if (!medsLocks.hasOwnProperty(cardObj.BaseCard)) {
            medsLocks[cardObj.BaseCard] = [];
        };
        if (medsLocks[cardObj.BaseCard].includes($(this).attr("meds-lock"))) {
            locking = true;
        };
        if (locking) {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
            $(this).children("i").removeClass("bi-unlock-fill");
            $(this).children("i").addClass("bi-lock-fill");
            medsLocks[cardObj.BaseCard].splice(medsLocks[cardObj.BaseCard].indexOf($(this).attr("meds-lock")), 1);
        } else {
            $(this).removeClass("btn-success");
            $(this).addClass("btn-danger");
            $(this).children("i").removeClass("bi-lock-fill");
            $(this).children("i").addClass("bi-unlock-fill");
            medsLocks[cardObj.BaseCard].push($(this).attr("meds-lock"));
        };
        localStorage.setItem("medsLocks", JSON.stringify(medsLocks));
    });

    $("#check_show_advanced").on('change', function () {
        if ($("#check_show_advanced").is(':checked')) {
            localStorage.setItem("settings_advanced", "true");
        } else {
            localStorage.setItem("settings_advanced", "false");
        };
        updateDisplay();
    });

    $("#check_side_menu_absolute").on('change', function () {
        if ($("#check_side_menu_absolute").is(':checked')) {
            localStorage.setItem("settings_side_menu_absolute", "true");
        } else {
            localStorage.setItem("settings_side_menu_absolute", "false");
        };
        resizeWindow();
    });

    $(window).on("resize", function () {
        updateCardListDisplay();
    });

    startUp();
});

function cardObject2Fields(card) {
    var t = "";
    // empty fields
    if (Object.entries(card).sort().toString() !== Object.entries(defaultCard).sort().toString()) { cardObject2Fields(defaultCard); };
    itemObj = defaultItem;
    if (card.Item.length > 0) {
        // item/enchantment
        itemObj = JSON.parse(card.Item);
    } else if (card.ItemEnchantment.length > 0) {
        itemObj = JSON.parse(card.ItemEnchantment);
    };
    cardTypes = [];
    if (card.CardClass === "Item") {
        $("#select_card_class").val(card.CardType);
        /*} else if (card.CardClass === "Special" && card.CardType === "Enchantment") {
            $("#select_card_class").val("Enchantment");*/
    } else {
        $("#select_card_class").val(card.CardClass);
    };
    $("#select_card_upgraded").val(card.CardUpgraded);
    $("#text_base_card").val(card.BaseCard.toLowerCase());
    $("#text_upgrades_to_a").val(card.UpgradesTo1.toLowerCase());
    $("#text_upgrades_to_b").val(card.UpgradesTo2.toLowerCase());
    $("#text_upgrades_to_rare").val(card.UpgradesToRare.toLowerCase());
    $("#text_name").val(card.CardName);
    $("#select_card_rarity").val(card.CardRarity);
    $("#text_id").val(card.ID);
    // item
    $("#check_curseditem").prop("checked", itemObj.CursedItem);
    $("#check_passsingleandcharacterrolls").prop("checked", itemObj.PassSingleAndCharacterRolls);
    $("#amount_percentdiscountshop").val(itemObj.PercentDiscountShop);
    $("#amount_percentretentionendgame").val(itemObj.PercentRetentionEndGame);
    if (itemObj.CharacterStatModified === "Speed" && itemObj.CharacterStatModifiedValue != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue);
    } else if (itemObj.CharacterStatModified2 === "Speed" && itemObj.CharacterStatModifiedValue2 != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue2);
    } else if (itemObj.CharacterStatModified3 === "Speed" && itemObj.CharacterStatModifiedValue3 != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue3);
    } else {
        $("#amount_characterstatspeed").val(0);
    };
    if (itemObj.CharacterStatModified === "EnergyTurn" && itemObj.CharacterStatModifiedValue != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue);
    } else if (itemObj.CharacterStatModified2 === "EnergyTurn" && itemObj.CharacterStatModifiedValue2 != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue2);
    } else if (itemObj.CharacterStatModified3 === "EnergyTurn" && itemObj.CharacterStatModifiedValue3 != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue3);
    } else {
        $("#amount_characterstatenergyperturn").val(0);
    };
    $("#amount_maxhealth").val(itemObj.MaxHealth);
    $("#select_resistmodified1").val(itemObj.ResistModified1);
    $("#select_resistmodified2").val(itemObj.ResistModified2);
    $("#select_resistmodified3").val(itemObj.ResistModified3);
    $("#amount_resistmodifiedvalue1").val(itemObj.ResistModifiedValue1);
    $("#amount_resistmodifiedvalue2").val(itemObj.ResistModifiedValue2);
    $("#amount_resistmodifiedvalue3").val(itemObj.ResistModifiedValue3);
    $("#amount_cardsreduced").val(itemObj.CardsReduced);
    $("#select_cardtoreducetype").val(itemObj.CardToReduceType);
    $("#amount_costreducereduction").val(itemObj.CostReduceReduction);
    $("#amount_costreduceenergyrequirement").val(itemObj.CostReduceEnergyRequirement);
    $("#check_reducehighestcost").prop("checked", itemObj.ReduceHighestCost);
    $("#check_costreducepermanent").prop("checked", itemObj.CostReducePermanent);
    $("#amount_energyquantity").val(itemObj.EnergyQuantity);
    if (itemObj.EmptyHand) {
        $("#select_activation").val("medsEmptyHand");
    } else {
        switch (itemObj.Activation) {
            case "PreFinishCast":
            case "FinishFinishCast":
                $("#select_activation").val("FinishCast");
                break;
            case "BeginTurnCardsDealt":
            case "BeginTurnAboutToDealCards":
                $("#select_activation").val("BeginTurn");
                break;
            case "CorruptionBeginRound":
                $("#select_activation").val("BeginRound");
            case "CorruptionCombatStart":
            case "PreBeginCombat":
                $("#select_activation").val("BeginCombat");
                break;
            default:
                $("#select_activation").val(itemObj.Activation);
                break;
        };
        // console.log("ACTIVATION: " + itemObj.Activation);
    };
    $("#select_auracursesetted").val(itemObj.AuraCurseSetted);
    $("#amount_auracursenumforoneevent").val(itemObj.AuraCurseNumForOneEvent);
    $("#select_castedcardtype").val(itemObj.CastedCardType);
    $("#amount_lowerorequalpercenthp").val(itemObj.LowerOrEqualPercentHP);
    if (itemObj.ExactRound > 0) {
        $("#amount_roundcycle").val(itemObj.ExactRound);
        $("#select_activation_roundcycle").val("onx");
    } else if (itemObj.RoundCycle > 1) {
        $("#amount_roundcycle").val(itemObj.RoundCycle);
        $("#select_activation_roundcycle").val("everyx");
    } else {
        $("#amount_roundcycle").val(0);
        $("#select_activation_roundcycle").val("every");
    };
    $("#amount_timespercombat").val(itemObj.TimesPerCombat);
    $("#amount_timesperturn").val(itemObj.TimesPerTurn);
    $("#amount_destroyafteruses").val(itemObj.DestroyAfterUses);
    if (itemObj.DestroyEndOfTurn) {
        $("#select_activation_destroy").val("end");
    } else if (itemObj.DestroyStartOfTurn) {
        $("#select_activation_destroy").val("start");
    } else if (itemObj.DestroyAfterUses > 0) {
        $("#select_activation_destroy").val("afterx");
    } else {
        $("#select_activation_destroy").val("never");
    };
    $("#select_itemtarget").val(itemObj.ItemTarget);

    $("#amount_drawcards").val(itemObj.DrawCards);
    $("#check_drawmultiplybyenergyused").prop("checked", itemObj.DrawMultiplyByEnergyUsed);
    $("#amount_cardnum").val(itemObj.CardNum);
    $("#text_cardtogainlist_add").val("");

    $("#select_cardtogaintype").val(itemObj.CardToGainType);
    cardToGainList = [];
    if (itemObj.CardToGainList.length > 0) {
        cardToGainList = itemObj.CardToGainList;
        $("#select_cardtogainwhat").val("list");
    } else if (itemObj.CardToGain.length > 0) {
        cardToGainList[0] = itemObj.CardToGain;
        $("#select_cardtogainwhat").val("list");
    } else if (itemObj.DuplicateActive) {
        $("#select_cardtogainwhat").val("duplicate");
    } else {
        $("#select_cardtogainwhat").val("type");
    };
    $("#select_carditem_cardplace").val(itemObj.CardPlace);
    $("#check_cardtogain_vanish").prop("checked", itemObj.Vanish);
    t = (itemObj.Permanent ? "" : "T")
    if (itemObj.CostZero) {
        $("#select_cardtogain_costreduction").val("Free" + t);
    } else if (itemObj.CostReduction > 0) {
        $("#select_cardtogain_costreduction").val(itemObj.CostReduction + t);
    } else {
        $("#select_cardtogain_costreduction").val("nochange");
    };
    $("#check_droponly").prop("checked", itemObj.DropOnly);
    $("#check_questitem").prop("checked", itemObj.QuestItem);
    $("#check_onlyadditemtonpcs").prop("checked", itemObj.OnlyAddItemToNPCs);
    $("#amount_effect_caster_delay").val(itemObj.EffectCasterDelay);
    $("#amount_effect_target_delay").val(itemObj.EffectTargetDelay);
    $("#select_modifieddamagetype").val(itemObj.ModifiedDamageType);
    $("#select_damagetotargettype").val(itemObj.DamageToTargetType);
    $("#amount_damagetotarget").val(itemObj.DamageToTarget);
    $("#check_dttmultiplybyenergyused").prop("checked", itemObj.DTTMultiplyByEnergyUsed);
    $("#select_damageflatbonus").val(itemObj.DamageFlatBonus);
    $("#amount_damageflatbonusvalue").val(itemObj.DamageFlatBonusValue);
    $("#select_damageflatbonus2").val(itemObj.DamageFlatBonus2);
    $("#amount_damageflatbonusvalue2").val(itemObj.DamageFlatBonusValue2);
    $("#select_damageflatbonus3").val(itemObj.DamageFlatBonus3);
    $("#amount_damageflatbonusvalue3").val(itemObj.DamageFlatBonusValue3);
    $("#select_damagepercentbonus").val(itemObj.DamagePercentBonus);
    $("#amount_damagepercentbonusvalue").val(itemObj.DamagePercentBonusValue);
    $("#select_damagepercentbonus2").val(itemObj.DamagePercentBonus2);
    $("#amount_damagepercentbonusvalue2").val(itemObj.DamagePercentBonusValue2);
    $("#select_damagepercentbonus3").val(itemObj.DamagePercentBonus3);
    $("#amount_damagepercentbonusvalue3").val(itemObj.DamagePercentBonusValue3);
    $("#amount_healquantity").val(itemObj.HealQuantity);
    $("#amount_healpercentquantity").val(itemObj.HealPercentQuantity);
    $("#amount_healpercentquantityself").val(itemObj.HealPercentQuantitySelf);
    $("#amount_healflatbonus").val(itemObj.HealFlatBonus);
    $("#amount_healpercentbonus").val(itemObj.HealPercentBonus);
    $("#amount_healreceivedflatbonus").val(itemObj.HealReceivedFlatBonus);
    $("#amount_healreceivedpercentbonus").val(itemObj.HealReceivedPercentBonus);
    $("#select_auracursebonus1").val(itemObj.AuraCurseBonus1);
    $("#amount_auracursebonusvalue1").val(itemObj.AuraCurseBonusValue1);
    $("#select_auracursebonus2").val(itemObj.AuraCurseBonus2);
    $("#amount_auracursebonusvalue2").val(itemObj.AuraCurseBonusValue2);
    $("#select_auracurseimmune1").val(itemObj.AuraCurseImmune1);
    $("#select_auracurseimmune2").val(itemObj.AuraCurseImmune2);
    $("#select_auracursecustom").val("");
    $("#select_auracursecustomac").val("");
    $("#amount_auracursecustommaxcharges").val(0);
    $("#amount_auracursecustomresistances").val(0);
    $("#amount_auracursecustomhealing").val(0);
    if (itemObj.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnEnemies") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnHeroes") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextAllResistHealingReceived") {
        $("#select_auracursecustom").val("healingresist");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustomresistances").val(itemObj.AuraCurseCustomModValue1);
        $("#amount_auracursecustomhealing").val(itemObj.AuraCurseCustomModValue2);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextExplodeChargesMonsters") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val("dark");
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    };
    $("#select_auracursegainself1").val(itemObj.AuraCurseGainSelf1);
    $("#amount_auracursegainselfvalue1").val(itemObj.AuraCurseGainSelfValue1);
    $("#select_auracursegainself2").val(itemObj.AuraCurseGainSelf2);
    $("#amount_auracursegainselfvalue2").val(itemObj.AuraCurseGainSelfValue2);
    $("#select_auracursegain1").val(itemObj.AuraCurseGain1);
    $("#amount_auracursegainvalue1").val(itemObj.AuraCurseGainValue1);
    $("#check_acg1multiplybyenergyused").prop("checked", itemObj.ACG1MultiplyByEnergyUsed);
    $("#select_auracursegain2").val(itemObj.AuraCurseGain2);
    $("#amount_auracursegainvalue2").val(itemObj.AuraCurseGainValue2);
    $("#check_acg2multiplybyenergyused").prop("checked", itemObj.ACG2MultiplyByEnergyUsed);
    $("#select_auracursegain3").val(itemObj.AuraCurseGain3);
    $("#amount_auracursegainvalue3").val(itemObj.AuraCurseGainValue3);
    $("#check_acg3multiplybyenergyused").prop("checked", itemObj.ACG3MultiplyByEnergyUsed);
    $("#amount_chancetodispel").val(itemObj.ChanceToDispel);
    $("#amount_chancetodispelnum").val(itemObj.ChanceToDispelNum);
    if (Object.entries(itemObj).sort().toString() !== Object.entries(defaultItem).sort().toString()) {
        $("#select_effect_caster").val(itemObj.EffectCaster);
        $("#select_sound").val(itemObj.ItemSound);
        $("#select_effect_target").val(itemObj.EffectTarget)
    } else {
        $("#select_effect_caster").val(card.EffectCaster);
        $("#select_sound").val(card.Sound);
        $("#select_effect_target").val(card.EffectTarget);
    };
    $("#select_effectitemowner").val(itemObj.EffectItemOwner);

    // card
    $("#select_aura1_target").val(card.Aura);
    $("#select_aura2_target").val(card.Aura2);
    $("#select_aura3_target").val(card.Aura3);
    $("#amount_aura1_target").val(card.AuraCharges);
    $("#amount_aura2_target").val(card.AuraCharges2);
    $("#amount_aura3_target").val(card.AuraCharges3);
    $("#select_aura1_self").val(card.AuraSelf);
    $("#select_aura2_self").val(card.AuraSelf2);
    $("#select_aura3_self").val(card.AuraSelf3);
    if (card.AutoplayDraw == true) {
        $("#select_autoplay").val("start");
    } else if (card.AutoplayEndTurn == true) {
        $("#select_autoplay").val("end");
    } else {
        $("#select_autoplay").val("no");
    };
    $("#check_autoplay").prop("checked", card.AutoplayDraw);
    cardTypes[0] = card.CardType;
    for (var a = 0; a < card.CardTypeAux.length; a++) {
        if (!(["Attack", "Spell"].includes(card.CardTypeAux[a]))) { cardTypes[cardTypes.length] = card.CardTypeAux[a]; };
    };
    $("#select_curse1_target").val(card.Curse);
    $("#select_curse2_target").val(card.Curse2);
    $("#select_curse3_target").val(card.Curse3);
    $("#amount_curse1_target").val(card.CurseCharges);
    $("#amount_curse2_target").val(card.CurseCharges2);
    $("#amount_curse3_target").val(card.CurseCharges3);
    $("#select_curse1_self").val(card.CurseSelf);
    $("#select_curse2_self").val(card.CurseSelf2);
    $("#select_curse3_self").val(card.CurseSelf3);
    $("#amount_damage_1_target").val(card.Damage);
    $("#amount_damage_1_self").val(card.DamageSelf);
    $("#amount_damage_1_sides").val(card.DamageSides);
    $("#select_damage_1_type").val(card.DamageType);
    $("#amount_damage_2_target").val(card.Damage2);
    $("#amount_damage_2_self").val(card.DamageSelf2);
    $("#amount_damage_2_sides").val(card.DamageSides2);
    $("#select_damage_2_type").val(card.DamageType2);
    $("#amount_damage_overcharge").val(card.DamageEnergyBonus);
    $("#amount_discard_cards").val(card.DiscardCard);
    $("#check_discard_random").prop("checked", card.DiscardCardAutomatic);
    $("#select_discard_place").val(card.DiscardCardPlace);
    discardCardTypes = [];
    discardCardTypes[0] = card.DiscardCardType;
    for (var a = 0; a < card.DiscardCardTypeAux.length; a++) {
        discardCardTypes[a + 1] = card.DiscardCardTypeAux[a];
    };
    $("#dispel_auras").val(card.DispelAuras);
    $("#amount_draw_cards").val(card.DrawCard);
    $("#check_effect_cast_center").prop("checked", card.EffectCastCenter);
    $("#check_effect_caster_repeat").prop("checked", card.EffectCasterRepeat);
    $("#select_effect_pre_action").val(card.EffectPreAction);
    $("#select_effect_trail").val(card.EffectTrail);
    $("#select_effect_trail_angle").val(card.EffectTrailAngle);
    $("#select_auracurse1_overcharge").val(card.AcEnergyBonus);
    $("#amount_auracurse1_overcharge").val(card.AcEnergyBonusQuantity);
    $("#select_auracurse2_overcharge").val(card.AcEnergyBonus2);
    $("#amount_auracurse2_overcharge").val(card.AcEnergyBonus2Quantity);
    if (card.DamageEnergyBonus > 0 || card.HealEnergyBonus > 0 || (card.AcEnergyBonus != "" && card.AcEnergyBonusQuantity > 0) || (card.AcEnergyBonus2 != "" && card.AcEnergyBonus2Quantity > 0)) {
        $("#select_repeat").val("Overcharge");
    } else if (card.EffectRepeatMaxBonus > 1) {
        $("#select_repeat").val("RepeatUpToX");
        $("#amount_repeat").val(card.EffectRepeatMaxBonus);
    } else if (card.EffectRepeat > 1) {
        $("#amount_repeat").val(card.EffectRepeat);
        if (card.EffectRepeatTarget == "Chain") {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat").val("Chain");
        } else if (card.EffectRepeatTarget == "NoRepeat") {
            $("#select_repeat").val("Jump");
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
        } else {
            $("#select_repeat").val("RepeatX");
        };
    } else {
        $("#select_repeat").val("NoRepeat");
    };
    $("#amount_repeat_modifier").val(card.EffectRepeatModificator);
    $("#select_repeat_target").val(card.EffectRepeatTarget);
    $("#check_effect_trail_repeat").prop("checked", card.EffectTrailRepeat);
    $("#amount_energy_cost").val(card.EnergyCost);
    $("#amount_energy_recharge").val(card.EnergyRecharge);
    $("#amount_healing_target").val(card.Heal);
    $("#select_dispel_target").val(card.HealAuraCurseName);
    $("#select_dispel_target2").val(card.HealAuraCurseName2);
    $("#select_dispel_target3").val(card.HealAuraCurseName3);
    $("#select_dispel_target4").val(card.HealAuraCurseName4);
    $("#select_dispel_self").val(card.HealAuraCurseSelf);
    $("#heal_curses").val(card.HealCurses);
    $("#amount_healing_overcharge").val(card.HealEnergyBonus);
    $("#amount_healing_self").val(card.HealSelf);
    $("#amount_healing_sides").val(card.HealSides);
    $("#check_ignore_block").prop("checked", card.IgnoreBlock);
    $("#check_ignore_block2").prop("checked", card.IgnoreBlock2);
    $("#increase_auras").val(card.IncreaseAuras);
    $("#increase_curses").val(card.IncreaseCurses);
    $("#reduce_auras").val(card.ReduceAuras);
    $("#reduce_curses").val(card.ReduceCurses);
    $("#check_innate").prop("checked", card.Innate);
    $("#amount_look").val(card.LookCards);
    $("#amount_look_discard").val(card.LookCardsDiscardUpTo);
    $("#amount_look_vanish").val(card.LookCardsVanishUpTo);
    $("#amount_self_health_loss").val(card.SelfHealthLoss);
    $("#select_sound_pre_action").val(card.SoundPreAction);
    $("#select_sound_pre_action_female").val(card.SoundPreActionFemale);
    $("#text_sprite").val(card.Sprite);
    $("#steal_auras").val(card.StealAuras);
    $("#transfer_curses").val(card.TransferCurses);
    if (card.TargetPosition == "Front" && $("#select_target_position option[value='Front']").length == 0) { $("#select_target_position").append(`<option value="Front">Front</option>`); };
    if (card.TargetPosition == "Middle" && $("#select_target_position option[value='Middle']").length == 0) { $("#select_target_position").append(`<option value="Middle">Middle</option>`); };
    if (card.TargetPosition == "Back" && $("#select_target_position option[value='Back']").length == 0) { $("#select_target_position").append(`<option value="Back">Back</option>`); };
    $("#select_target_position").val(card.TargetPosition);
    if (card.TargetType == "Global") {
        switch (card.TargetSide) {
            case "Enemy":
                $("#select_target_type").val("AllMonsters");
                break;
            case "Friend":
                $("#select_target_type").val("AllHeroes");
                break;
            default:
                $("#select_target_type").val("Global");
                break;
        };
    } else {
        switch (card.TargetSide) {
            case "Enemy":
                $("#select_target_type").val("AnyMonster");
                break;
            case "Friend":
                $("#select_target_type").val("AnyHero");
                break;
            case "Anyone":
                $("#select_target_type").val("Anyone");
                break;
            case "Self":
                $("#select_target_type").val("Self");
                break;
            case "FriendNotSelf":
                $("#select_target_type").val("OtherHero");
                break;
        };
    };
    $("#check_vanish").prop("checked", card.Vanish);
    $("#amount_gold").val(card.GoldGainQuantity);
    $("#amount_shards").val(card.ShardsGainQuantity);
    $("#select_requires").val(card.EffectRequired);
    $("#check_sv1_aura").prop('checked', card.AuraChargesSpecialValue1);
    $("#check_sv2_aura").prop('checked', card.AuraChargesSpecialValue2);
    $("#check_sv3_aura").prop('checked', card.AuraChargesSpecialValueGlobal);
    $("#check_sv1_aura2").prop('checked', card.AuraCharges2SpecialValue1);
    $("#check_sv2_aura2").prop('checked', card.AuraCharges2SpecialValue2);
    $("#check_sv3_aura2").prop('checked', card.AuraCharges2SpecialValueGlobal);
    $("#check_sv1_aura3").prop('checked', card.AuraCharges3SpecialValue1);
    $("#check_sv2_aura3").prop('checked', card.AuraCharges3SpecialValue2);
    $("#check_sv3_aura3").prop('checked', card.AuraCharges3SpecialValueGlobal);
    $("#check_sv1_curse").prop('checked', card.CurseChargesSpecialValue1);
    $("#check_sv2_curse").prop('checked', card.CurseChargesSpecialValue2);
    $("#check_sv3_curse").prop('checked', card.CurseChargesSpecialValueGlobal);
    $("#check_sv1_curse2").prop('checked', card.CurseCharges2SpecialValue1);
    $("#check_sv2_curse2").prop('checked', card.CurseCharges2SpecialValue2);
    $("#check_sv3_curse2").prop('checked', card.CurseCharges2SpecialValueGlobal);
    $("#check_sv1_curse3").prop('checked', card.CurseCharges3SpecialValue1);
    $("#check_sv2_curse3").prop('checked', card.CurseCharges3SpecialValue2);
    $("#check_sv3_curse3").prop('checked', card.CurseCharges3SpecialValueGlobal);
    $("#check_sv1_damage").prop('checked', card.DamageSpecialValue1);
    $("#check_sv2_damage").prop('checked', card.DamageSpecialValue2);
    $("#check_sv3_damage").prop('checked', card.DamageSpecialValueGlobal);
    $("#check_sv1_damage2").prop('checked', card.Damage2SpecialValue1);
    $("#check_sv2_damage2").prop('checked', card.Damage2SpecialValue2);
    $("#check_sv3_damage2").prop('checked', card.Damage2SpecialValueGlobal);
    $("#check_sv1_heal_self").prop('checked', card.HealSelfSpecialValue1);
    $("#check_sv2_heal_self").prop('checked', card.HealSelfSpecialValue2);
    $("#check_sv3_heal_self").prop('checked', card.HealSelfSpecialValueGlobal);
    $("#check_sv1_heal").prop('checked', card.HealSpecialValue1);
    $("#check_sv2_heal").prop('checked', card.HealSpecialValue2);
    $("#check_sv3_heal").prop('checked', card.HealSpecialValueGlobal);
    $("#check_sv1_health_loss").prop('checked', card.SelfHealthLossSpecialGlobal);
    $("#check_sv2_health_loss").prop('checked', card.SelfHealthLossSpecialValue1);
    $("#check_sv3_health_loss").prop('checked', card.SelfHealthLossSpecialValue2);
    $("#check_sv3_draw_card").prop('checked', card.DrawCardSpecialValueGlobal);
    $("#check_sv3_energy_recharge").prop('checked', card.EnergyRechargeSpecialValueGlobal);
    $("#select_sv1_aura").val(card.SpecialAuraCurseName1);
    $("#select_sv2_aura").val(card.SpecialAuraCurseName2);
    $("#select_sv3_aura").val(card.SpecialAuraCurseNameGlobal);
    $("#select_sv1").val(card.SpecialValue1);
    $("#select_sv2").val(card.SpecialValue2);
    $("#select_sv3").val(card.SpecialValueGlobal);
    $("#amount_sv1_modifier").val(card.SpecialValueModifier1);
    $("#amount_sv2_modifier").val(card.SpecialValueModifier2);
    $("#amount_sv3_modifier").val(card.SpecialValueModifierGlobal);
    $("#amount_vampirism").val(card.HealSelfPerDamageDonePercent);
    $("#amount_add_cards").val(card.AddCard);
    $("#amount_add_cards_choose").val(card.AddCardChoose);
    t = (card.AddCardCostTurn ? "" : "T")
    if (card.AddCardReducedCost == -1) {
        $("#select_discover_cost").val("Free" + t);
    } else if (card.AddCardReducedCost > 0) {
        $("#select_discover_cost").val(card.AddCardReducedCost + t);
    } else {
        $("#select_discover_cost").val("nochange");
    };
    addCardTypes = [];
    addCardList = [];
    if (card.AddCardId !== "") {
        $("#select_discover_what").val("list");
        addCardList[0] = card.AddCardId;
    } else if (card.AddCardList.length > 1) {
        $("#select_discover_what").val("list");
        addCardList = card.AddCardList;
    } else {
        addCardTypes[0] = card.AddCardType;
        for (var a = 0; a < card.AddCardTypeAux.length; a++) {
            addCardTypes[a + 1] = card.AddCardTypeAux[a];
        };
        $("#select_discover_what").val("type");
    };
    $("#select_discover_where_from").val(card.AddCardFrom);
    $("#select_discover_where_to").val(card.AddCardPlace);
    $("#check_discover_vanish").prop('checked', card.AddCardVanish);
    $("#text_summon_aura").val(card.SummonAura);
    $("#text_summon_aura2").val(card.SummonAura2);
    $("#text_summon_aura3").val(card.SummonAura3);
    $("#amount_summon_aura").val(card.SummonAuraCharges);
    $("#amount_summon_aura2").val(card.SummonAuraCharges2);
    $("#amount_summon_aura3").val(card.SummonAuraCharges3);
    $("#text_summon_unit").val(card.SummonUnit);
    $("#amount_summon_unit").val(card.SummonUnitNum);
    $("#amount_effect_post_cast_delay").val(card.EffectPostCastDelay);
    $("#amount_effect_post_target_delay").val(card.EffectPostTargetDelay);
    $("#amount_effect_repeat_delay").val(card.EffectRepeatDelay);
    $("#amount_trail_speed").val(card.EffectTrailSpeed);
    $("#check_is_pet_attack").prop('checked', card.IsPetAttack);
    $("#check_is_pet_cast").prop('checked', card.IsPetCast);
    $("#check_lazy").prop('checked', card.Lazy);
    $("#check_modified_by_trait").prop('checked', card.ModifiedByTrait);
    $("#check_move_to_center").prop('checked', card.MoveToCenter);
    $("#check_pet_front").prop('checked', card.PetFront);
    $("#check_pet_invert").prop('checked', card.PetInvert);
    $("#text_pet_model").val(card.PetModel);
    $("#text_pet_offset").val(card.PetOffset);
    $("#text_pet_size").val(card.PetSize);
    $("#check_playable").prop('checked', card.Playable);
    $("#amount_pull_target").val(card.PullTarget);
    $("#amount_push_target").val(card.PushTarget);
    $("#amount_self_kill_hidden").val(card.SelfKillHiddenSeconds);
    $("#check_show_in_tome").prop('checked', card.ShowInTome);
    $("#check_starter").prop('checked', card.Starter);
    $("#check_visible").prop('checked', card.Visible);
    $("#amount_card_number").val(card.CardNumber);
    $("#check_corrupted").prop('checked', card.Corrupted);
    $("#text_description").val(card.Description);
    $("#text_description_id").val(card.DescriptionID);
    $("#check_end_turn").prop('checked', card.EndTurn);
    $("#amount_energy_cost_for_show").val(card.EnergyCostForShow);
    $("#amount_energy_reduction_permanent").val(card.EnergyReductionPermanent);
    $("#amount_energy_reduction_temporal").val(card.EnergyReductionTemporal);
    $("#check_energy_reduction_to_zero_permanent").prop('checked', card.EnergyReductionToZeroPermanent);
    $("#check_energy_reduction_to_zero_temporal").prop('checked', card.EnergyReductionToZeroTemporal);
    $("#amount_exhaust_counter").val(card.ExhaustCounter);
    $("#check_flip_sprite").prop('checked', card.FlipSprite);
    $("#text_fluff").val(card.Fluff);
    $("#amount_fluff_percent").val(card.FluffPercent);
    $("#check_kill_pet").prop('checked', card.KillPet);
    $("#amount_max_in_deck").val(card.MaxInDeck);
    $("#check_only_in_weekly").prop('checked', card.OnlyInWeekly);
    $("#text_sku").val(card.Sku);
};

async function updateDisplay() {
    // console.log($("#select_card_class").val());
    if ($("#select_card_upgraded").val() === "No") {
        $("#col_upgrades_to_a.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_b.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_rare.visually-hidden").removeClass("visually-hidden");
        $("#col_base_card").addClass("visually-hidden");
        $("#btn_create_upgrades.visually-hidden").removeClass("visually-hidden");
        $("#select_card_upgraded.b-r-6").removeClass("b-r-6");
    } else {
        $("#col_base_card.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_a").addClass("visually-hidden");
        $("#col_upgrades_to_b").addClass("visually-hidden");
        $("#col_upgrades_to_rare").addClass("visually-hidden");
        $("#btn_create_upgrades").addClass("visually-hidden");
        $("#select_card_upgraded").addClass("b-r-6");
    };
    if (["Weapon", "Armor", "Jewelry", "Accesory", "Pet"].includes($("#select_card_class").val()) || cardTypes.includes("Enchantment")) {
        $(".show-group-card").addClass("visually-hidden");
        $(".show-group-item.visually-hidden").removeClass("visually-hidden");
        if (localStorage.getItem("settings_advanced") == "true") {
            $("#show_advanced.visually-hidden").removeClass("visually-hidden");
            $("#accordion-appearance.b-b-6").removeClass("b-b-6");
        } else {
            $("#show_advanced").addClass("visually-hidden");
            $("#accordion-appearance").addClass("b-b-6");
        };
        if (parseIntNoNaN($("#amount_cardnum").val()) > 0) {
            $("#show_cardtogainwhat.visually-hidden").removeClass("visually-hidden");
            $("#show_cardtogain_costreduction.visually-hidden").removeClass("visually-hidden");
            if ($("#select_cardtogainwhat").val() === "duplicate") {
                $("#show_cardtogaintype.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist").addClass("visually-hidden");
                $("#show_cardtogainlist_add").addClass("visually-hidden");
                $("#show_cardtogainaction").addClass("visually-hidden");
            } else if ($("#select_cardtogainwhat").val() === "list") {
                $("#show_cardtogaintype").addClass("visually-hidden");
                $("#show_cardtogainlist.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist_add.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainaction.visually-hidden").removeClass("visually-hidden");
            } else {
                $("#show_cardtogaintype.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist").addClass("visually-hidden");
                $("#show_cardtogainlist_add").addClass("visually-hidden");
                $("#show_cardtogainaction.visually-hidden").removeClass("visually-hidden");
            };
        } else {
            $("#show_cardtogainwhat").addClass("visually-hidden");
            $("#show_cardtogain_costreduction").addClass("visually-hidden");
            $("#show_cardtogaintype").addClass("visually-hidden");
            $("#show_cardtogainlist").addClass("visually-hidden");
            $("#show_cardtogainlist_add").addClass("visually-hidden");
            $("#show_cardtogainaction").addClass("visually-hidden");
        };
        $("#text_cardtogainlist").val(cardToGainList.length === 0 ? "None..." : cardToGainList.join(', '));
        if (cardToGainList.indexOf($.trim($("#text_cardtogainlist_add").val()).toLowerCase()) === -1) {
            $("#btn_cardtogainlist_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_cardtogainlist_add").removeClass("btn-danger");
            $("#btn_cardtogainlist_add").addClass("btn-success");
        } else {
            $("#btn_cardtogainlist_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_cardtogainlist_add").removeClass("btn-success");
            $("#btn_cardtogainlist_add").addClass("btn-danger");
        };
        if ($("#select_auracursecustom").val() === "maxcharges") {
            $("#show_auracursecustomac.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustommaxcharges.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing").addClass("visually-hidden");
        } else if ($("#select_auracursecustom").val() === "healingresist") {
            $("#show_auracursecustomac.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustommaxcharges").addClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#show_auracursecustomac").addClass("visually-hidden");
            $("#show_auracursecustommaxcharges").addClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing").addClass("visually-hidden");
        };

        var sActivation = $("#select_activation").val();
        $(".show_activation_component").addClass("visually-hidden");
        switch (sActivation) {
            case "AuraCurseSet":
                $("#show_activation_auracurseset.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "BeginRound":
            case "EndRound":
                $('#select_activation_roundcycle option[value="every"]').html("Every Round");
                $('#select_activation_roundcycle option[value="everyx"]').html("Every X Rounds");
                $('#select_activation_roundcycle option[value="onx"]').html("On Round X");
                $("#show_activation_rounds.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                break;
            case "BeginTurn":
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
            case "EndTurn":
                $('#select_activation_roundcycle option[value="every"]').html("Every Turn");
                $('#select_activation_roundcycle option[value="everyx"]').html("Every X Turns");
                $('#select_activation_roundcycle option[value="onx"]').html("On Turn X");
                $("#show_activation_rounds.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                break;
            case "CastCard":
            case "FinishCast":
                $("#show_castedcardtype.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "Hit":
            case "Damage":
            case "medsEmptyHand":
            case "Block":
            case "Blocked":
            case "Evade":
            case "Evaded":
            case "Heal":
            case "Healed":
            case "Killed":
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "Hitted":
            case "Damaged":
                $("#show_lowerorequalpercenthp.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $("#show_lowerorequalpercenthp.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
            case "None":
            case "BeginCombat":
            case "BeginCombatEnd":
                break;
        };
        /*if ($("#select_activation_destroy").val() === "end") {
            $('[for="amount_destroyafteruses"]').text("How many turns?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else if ($("#select_activation_destroy").val() === "start") {
            $('[for="amount_destroyafteruses"]').text("How many turns?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else */
        if ($("#select_activation_destroy").val() === "afterx") {
            $('[for="amount_destroyafteruses"]').text("How many uses?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#show_activation_destroy_uses").addClass("visually-hidden");
        };
        if ($("#select_activation_roundcycle").val() === "onx") {
            $('label[for="amount_roundcycle"]').text("Which?");
            $("#select_activation_roundcycle.b-r-6").removeClass("b-r-6");
            $("#show_roundcycle.visually-hidden").removeClass("visually-hidden");
            $("#show_timespercombat").addClass("visually-hidden");
        } else if ($("#select_activation_roundcycle").val() === "everyx") {
            $('label[for="amount_roundcycle"]').text("Every...");
            $("#select_activation_roundcycle.b-r-6").removeClass("b-r-6");
            $("#show_roundcycle.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#select_activation_roundcycle").addClass("b-r-6");
            $("#show_roundcycle").addClass("visually-hidden");
        };
        if (cardTypes.includes("Enchantment")) {
            $("#col_vanish.visually-hidden").removeClass("visually-hidden");
            $("#col_innate.visually-hidden").removeClass("visually-hidden");
            $("#col_types_1.visually-hidden").removeClass("visually-hidden");
            $("#col_types_2.visually-hidden").removeClass("visually-hidden");
            $("#col_requires.visually-hidden").removeClass("visually-hidden");
            $("#col_cursed").addClass("visually-hidden");
            $("#accordion_group_energy_target.visually-hidden").removeClass("visually-hidden");
            $("#row_repeat").addClass("visually-hidden");
            $("#text_card_type").val(cardTypes.length === 0 ? "None" : cardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
            if (cardTypes.includes("Melee_Attack") || cardTypes.includes("Ranged_Attack")) { $("#text_card_type").val($("#text_card_type").val() + ", Attack"); }
            if (cardTypes.includes("Song") || cardTypes.includes("Fire_Spell") || cardTypes.includes("Cold_Spell") || cardTypes.includes("Lightning_Spell") || cardTypes.includes("Mind_Spell") || cardTypes.includes("Shadow_Spell") || cardTypes.includes("Holy_Spell") || cardTypes.includes("Curse_Spell") || cardTypes.includes("Healing_Spell")) { $("#text_card_type").val($("#text_card_type").val() + ", Spell"); }
            if (cardTypes.indexOf($.trim($("#select_card_type option:selected").val())) === -1) {
                $("#btn_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
                $("#btn_card_type_add").removeClass("btn-danger");
                $("#btn_card_type_add").addClass("btn-success");
            } else {
                $("#btn_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
                $("#btn_card_type_add").removeClass("btn-success");
                $("#btn_card_type_add").addClass("btn-danger");
            };

            if ($("#select_card_class").val() == "Monster") {
                $("#select_target_position option[value='Anywhere']").remove();
                $("#select_target_type option[value='AnyMonster']").text("Any Hero");
                $("#select_target_type option[value='AnyHero']").text("Any Monster");
                $("#select_target_type option[value='AllHeroes']").text("All Monsters");
                $("#select_target_type option[value='AllMonsters']").text("All Heroes");
                $("#select_target_type option[value='OtherHero']").text("Other Monster");
                $("#col_energy").addClass("visually-hidden");
                $("#col_innate").addClass("visually-hidden");
            } else {
                $("#select_target_position option[value='Anywhere']").length == 0 && $("#select_target_position").prepend(`<option value="Anywhere">Anywhere</option>`);
                $("#select_target_type option[value='AnyMonster']").text("Any Monster");
                $("#select_target_type option[value='AnyHero']").text("Any Hero");
                $("#select_target_type option[value='AllHeroes']").text("All Heroes");
                $("#select_target_type option[value='AllMonsters']").text("All Monsters");
                $("#select_target_type option[value='OtherHero']").text("Other Hero");
                $("#col_energy.visually-hidden").removeClass("visually-hidden");
                $("#col_innate.visually-hidden").removeClass("visually-hidden");
            };
            if ($("#select_target_type").val() == "Anyone") {
                $("#select_target_position option[value='Front']").remove();
                $("#select_target_position option[value='Middle']").remove();
                $("#select_target_position option[value='Back']").remove();
                $("#col_target_position.visually-hidden").removeClass("visually-hidden");
            } else if (["Self", "OtherHero"].includes($("#select_target_type").val())) {
                $("#col_target_position").addClass("visually-hidden");
            } else if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
                $("#select_target_position option[value='Front']").length == 0 && $("#select_target_position").append(`<option value="Front">Front</option>`);
                $("#select_target_position option[value='Middle']").length == 0 && $("#select_target_position").append(`<option value="Middle">Middle</option>`);
                $("#select_target_position option[value='Back']").length == 0 && $("#select_target_position").append(`<option value="Back">Back</option>`);
                $("#col_target_position.visually-hidden").removeClass("visually-hidden");
            } else {
                $("#col_target_position").addClass("visually-hidden");
            };

        };
    } else {
        $(".show-group-item").addClass("visually-hidden");
        $(".show-group-card.visually-hidden").removeClass("visually-hidden");
        $("#accordion-appearance.b-b-6").removeClass("b-b-6");
        $("#row_repeat.visually-hidden").removeClass("visually-hidden");
        if (localStorage.getItem("settings_advanced") === "true") {
            $("#show_advanced.visually-hidden").removeClass("visually-hidden");
            $("#accordion-x-equals.b-b-6").removeClass("b-b-6");
        } else {
            $("#show_advanced").addClass("visually-hidden");
            $("#accordion-x-equals").addClass("b-b-6");
        };
        if ($("#select_card_upgraded").val() === "Rare") {
            $("#check_vanish").prop("checked", true);
            $("#check_vanish").prop("disabled", true);
        } else {
            $("#check_vanish").prop("disabled", false);
        };
        $("#text_card_type").val(cardTypes.length === 0 ? "None" : cardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (cardTypes.includes("Melee_Attack") || cardTypes.includes("Ranged_Attack")) { $("#text_card_type").val($("#text_card_type").val() + ", Attack"); }
        if (cardTypes.includes("Song") || cardTypes.includes("Fire_Spell") || cardTypes.includes("Cold_Spell") || cardTypes.includes("Lightning_Spell") || cardTypes.includes("Mind_Spell") || cardTypes.includes("Shadow_Spell") || cardTypes.includes("Holy_Spell") || cardTypes.includes("Curse_Spell") || cardTypes.includes("Healing_Spell")) { $("#text_card_type").val($("#text_card_type").val() + ", Spell"); }
        if (cardTypes.indexOf($.trim($("#select_card_type option:selected").val())) === -1) {
            $("#btn_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_card_type_add").removeClass("btn-danger");
            $("#btn_card_type_add").addClass("btn-success");
        } else {
            $("#btn_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_card_type_add").removeClass("btn-success");
            $("#btn_card_type_add").addClass("btn-danger");
        };
        $("#text_discard_card_type").val(discardCardTypes.length === 0 ? "Any" : discardCardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (discardCardTypes.indexOf($.trim($("#select_discard_card_type option:selected").val())) === -1) {
            $("#btn_discard_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_discard_card_type_add").removeClass("btn-danger");
            $("#btn_discard_card_type_add").addClass("btn-success");
        } else {
            $("#btn_discard_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_discard_card_type_add").removeClass("btn-success");
            $("#btn_discard_card_type_add").addClass("btn-danger");
        };
        if ($("#amount_discard_cards").val() == 0) {
            $("#col_discard_card_type").addClass("visually-hidden");
            $("#col_discard_card_type_add").addClass("visually-hidden");
        } else {
            $("#col_discard_card_type.visually-hidden").removeClass("visually-hidden");
            $("#col_discard_card_type_add.visually-hidden").removeClass("visually-hidden");
        };
        $("#text_add_card_type").val(addCardTypes.length === 0 ? "Any" : addCardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (addCardTypes.indexOf($.trim($("#select_add_card_type option:selected").val())) === -1) {
            $("#btn_add_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_add_card_type_add").removeClass("btn-danger");
            $("#btn_add_card_type_add").addClass("btn-success");
        } else {
            $("#btn_add_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_add_card_type_add").removeClass("btn-success");
            $("#btn_add_card_type_add").addClass("btn-danger");
        };
        $("#text_add_card_list").val(addCardList.length === 0 ? "" : addCardList.join(', '));
        if (addCardList.indexOf($.trim($("#select_add_card_list_add").val()).toLowerCase()) === -1) {
            $("#btn_add_card_list_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_add_card_list_add").removeClass("btn-danger");
            $("#btn_add_card_list_add").addClass("btn-success");
        } else {
            $("#btn_add_card_list_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_add_card_list_add").removeClass("btn-success");
            $("#btn_add_card_list_add").addClass("btn-danger");
        };
        if ($("#amount_add_cards").val() == 0) {
            $("#show_add_cards_choose").addClass("visually-hidden");
            $("#show_discover_what").addClass("visually-hidden");
            $("#amount_add_cards").addClass("b-r-6");
            $("#show_discover_cost").addClass("visually-hidden");
            $("#show_discover_where").addClass("visually-hidden");
            $("#show_discover_card_type").addClass("visually-hidden");
            $("#show_discover_card_type_add").addClass("visually-hidden");
            $("#show_discover_card_list").addClass("visually-hidden");
            $("#show_discover_card_list_add").addClass("visually-hidden");
        } else {
            if ($("#select_discover_what").val() === "type") {
                $("#show_discover_card_type.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_type_add.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_list").addClass("visually-hidden");
                $("#show_discover_card_list_add").addClass("visually-hidden");
            } else {
                $("#show_discover_card_list.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_list_add.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_type").addClass("visually-hidden");
                $("#show_discover_card_type_add").addClass("visually-hidden");
            };
            $("#show_add_cards_choose.visually-hidden").removeClass("visually-hidden");
            $("#show_discover_what.visually-hidden").removeClass("visually-hidden");
            $("#amount_add_cards.b-r-6").removeClass("b-r-6");
            $("#show_discover_cost.visually-hidden").removeClass("visually-hidden");
            $("#show_discover_where.visually-hidden").removeClass("visually-hidden");
        };

        if ($("#select_card_class").val() == "Monster") {
            $("#select_target_position option[value='Anywhere']").remove();
            $("#select_target_type option[value='AnyMonster']").text("Any Hero");
            $("#select_target_type option[value='AnyHero']").text("Any Monster");
            $("#select_target_type option[value='AllHeroes']").text("All Monsters");
            $("#select_target_type option[value='AllMonsters']").text("All Heroes");
            $("#select_target_type option[value='OtherHero']").text("Other Monster");
            $("#col_energy").addClass("visually-hidden");
            $("#col_autoplay").addClass("visually-hidden");
            $("#col_resources").addClass("visually-hidden");
            $("#col_innate").addClass("visually-hidden");
            $("#col_vanish").addClass("visually-hidden");
        } else {
            $("#select_target_position option[value='Anywhere']").length == 0 && $("#select_target_position").prepend(`<option value="Anywhere">Anywhere</option>`);
            $("#select_target_type option[value='AnyMonster']").text("Any Monster");
            $("#select_target_type option[value='AnyHero']").text("Any Hero");
            $("#select_target_type option[value='AllHeroes']").text("All Heroes");
            $("#select_target_type option[value='AllMonsters']").text("All Monsters");
            $("#select_target_type option[value='OtherHero']").text("Other Hero");
            $("#col_energy.visually-hidden").removeClass("visually-hidden");
            $("#col_autoplay.visually-hidden").removeClass("visually-hidden");
            $("#col_resources.visually-hidden").removeClass("visually-hidden");
            $("#col_innate.visually-hidden").removeClass("visually-hidden");
            $("#col_vanish.visually-hidden").removeClass("visually-hidden");
        };
        if ($("#select_target_type").val() == "Anyone") {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#select_target_position option[value='Front']").remove();
            $("#select_target_position option[value='Middle']").remove();
            $("#select_target_position option[value='Back']").remove();
            $("#col_target_position.visually-hidden").removeClass("visually-hidden");
        } else if (["Self", "OtherHero"].includes($("#select_target_type").val())) {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#col_target_position").addClass("visually-hidden");
        } else if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#select_target_position option[value='Front']").length == 0 && $("#select_target_position").append(`<option value="Front">Front</option>`);
            $("#select_target_position option[value='Middle']").length == 0 && $("#select_target_position").append(`<option value="Middle">Middle</option>`);
            $("#select_target_position option[value='Back']").length == 0 && $("#select_target_position").append(`<option value="Back">Back</option>`);
            $("#col_target_position.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#select_repeat option[value='Chain']").remove();
            $("#select_repeat option[value='Jump']").remove();
            $("#col_target_position").addClass("visually-hidden");
        };
        /*if ($("#select_target_type").val() == "Self") {
            $('label[for="amount_damage_1_target"]').text("Self");
            $('label[for="amount_damage_2_target"]').text("Self");
            $('label[for="amount_healing_target"]').text("Self");
            $('label[for="select_aura1_target"]').text("Self");
            $('label[for="select_aura2_target"]').text("Self");
            $('label[for="select_aura3_target"]').text("Self");
            $('label[for="select_curse1_target"]').text("Self");
            $('label[for="select_curse2_target"]').text("Self");
            $('label[for="select_curse3_target"]').text("Self");
            $("#display_healing_self").addClass("visually-hidden");
            $("#display_damage1_self").addClass("visually-hidden");
            $("#display_damage2_self").addClass("visually-hidden");
            $("#display_aura1_self").addClass("visually-hidden");
            $("#display_aura2_self").addClass("visually-hidden");
            $("#display_aura3_self").addClass("visually-hidden");
            $("#display_curse1_self").addClass("visually-hidden");
            $("#display_curse2_self").addClass("visually-hidden");
            $("#display_curse3_self").addClass("visually-hidden");
        } else {
            $('label[for="amount_damage_1_target"]').text("Target");
            $('label[for="amount_damage_2_target"]').text("Target");
            $('label[for="amount_healing_target"]').text("Target");
            $('label[for="select_aura1_target"]').text("Target");
            $('label[for="select_aura2_target"]').text("Target");
            $('label[for="select_aura3_target"]').text("Target");
            $('label[for="select_curse1_target"]').text("Target");
            $('label[for="select_curse2_target"]').text("Target");
            $('label[for="select_curse3_target"]').text("Target");
            $("#display_healing_self.visually-hidden").removeClass("visually-hidden");
            $("#display_damage1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_damage2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura3_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse3_self.visually-hidden").removeClass("visually-hidden");
        };*/
        switch ($("#select_repeat").val()) {
            case "NoRepeat":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount").addClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "RepeatX":
                (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) ? $("#col_repeat_target.visually-hidden").removeClass("visually-hidden") : $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "RepeatUpToX":
                (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) ? $("#col_repeat_target.visually-hidden").removeClass("visually-hidden") : $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Chain":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Jump":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier.visually-hidden").removeClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Overcharge":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount").addClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge.visually-hidden").removeClass("visually-hidden");
                break;
        };
    }
    var oldObj = cardObj;

    var oldID = cardObj.hasOwnProperty("ID") ? cardObj.ID : "";
    // console.log("OLDID: " + oldID);
    cardObj = generateCardObj();
    // console.log("?");
    // console.log(cardObj);
    // console.log("CARDOBJITEM");
    // console.log((cardObj.Item.length > 0 ? JSON.parse(cardObj.Item) : "BLANK"));
    var baseCard = cardObj.CardUpgraded === "No" ? cardObj : (customCards.hasOwnProperty(oldObj.BaseCard) ? customCards[oldObj.BaseCard] : cardObj);
    var baseID = baseCard.ID;
    var newA = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesTo1.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesTo1)) {
        newA = customCards[oldObj.UpgradesTo1];
    } else if (cardObj.CardUpgraded !== "A" && baseCard.UpgradesTo1.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo1)) {
        newA = customCards[baseCard.UpgradesTo1];
    };
    var newAID = newA === "" ? "" : newA.ID;
    var newB = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesTo2.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesTo2)) {
        newB = customCards[oldObj.UpgradesTo2];
    } else if (cardObj.CardUpgraded !== "B" && baseCard.UpgradesTo2.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo2)) {
        newB = customCards[baseCard.UpgradesTo2];
    };
    var newBID = newB === "" ? "" : newB.ID;

    var newRare = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesToRare.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesToRare)) {
        newRare = customCards[oldObj.UpgradesToRare];
    } else if (cardObj.CardUpgraded !== "Rare" && baseCard.UpgradesToRare.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesToRare)) {
        newRare = customCards[baseCard.UpgradesToRare];
    };
    var newRareID = newRare === "" ? "" : newRare.ID;
    if (oldObj.CardName !== cardObj.CardName && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("name"))) {
        baseCard.CardName = cardObj.CardName;
        if (newA !== "") {
            newA.CardName = cardObj.CardName;
        };
        if (newB !== "") {
            newB.CardName = cardObj.CardName;
        };
        if (newRare !== "") {
            newRare.CardName = cardObj.CardName;
        };
    };
    if (oldObj.ID !== cardObj.ID && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("id"))) {
        if (oldObj.CardUpgraded === "No") {
            if (newA !== "") {
                newA.BaseCard = cardObj.ID;
                newA.UpgradedFrom = cardObj.ID;
            };
            if (newB !== "") {
                newB.BaseCard = cardObj.ID;
                newB.UpgradedFrom = cardObj.ID;
            };
            if (newRare !== "") {
                newRare.BaseCard = cardObj.ID;
                newRare.UpgradedFrom = cardObj.ID;
            };
        } else if (oldObj.CardUpgraded === "A") {
            baseCard.UpgradesTo1 = cardObj.ID;
        } else if (oldObj.CardUpgraded === "B") {
            baseCard.UpgradesTo2 = cardObj.ID;
        } else {
            baseCard.UpgradesToRare = cardObj.ID;
        };
    };
    if (oldObj.Sprite !== cardObj.Sprite && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("sprite"))) {
        baseCard.Sprite = cardObj.Sprite;
        if (newA !== "") {
            newA.Sprite = cardObj.Sprite;
        };
        if (newB !== "") {
            newB.Sprite = cardObj.Sprite;
        };
        if (newRare !== "") {
            newRare.Sprite = cardObj.Sprite;
        };
    };
    if (oldObj.CardClass !== cardObj.CardClass && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("class"))) {
        baseCard.CardClass = cardObj.CardClass;
        if (newA !== "") {
            newA.CardClass = cardObj.CardClass;
        };
        if (newB !== "") {
            newB.CardClass = cardObj.CardClass;
        };
        if (newRare !== "") {
            newRare.CardClass = cardObj.CardClass;
        };
    };
    if (oldObj.CardUpgraded === "No") {
        if (oldObj.UpgradesTo1 !== cardObj.UpgradesTo1 && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeA")) && newA !== "") {
            newA.ID = cardObj.UpgradesTo1;
        };
        if (oldObj.UpgradesTo2 !== cardObj.UpgradesTo2 && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeB")) && newB !== "") {
            newB.ID = cardObj.UpgradesTo2;
        };
        if (oldObj.UpgradesToRare !== cardObj.UpgradesToRare && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeRare")) && newRare !== "") {
            newRare.ID = cardObj.UpgradesToRare;
        };
    } else {
        if (oldObj.BaseCard !== cardObj.BaseCard && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("baseCard"))) {
            baseCard.ID = cardObj.BaseCard;
            baseCard.BaseCard = cardObj.BaseCard;
            if (newA !== "") {
                newA.BaseCard = cardObj.BaseCard;
            };
            if (newB !== "") {
                newB.BaseCard = cardObj.BaseCard;
            };
            if (newRare !== "") {
                newRare.BaseCard = cardObj.BaseCard;
            };
        };
    };

    $("[meds-lock]").each(function () {
        if (medsLocks.hasOwnProperty(cardObj.BaseCard) && medsLocks[cardObj.BaseCard].includes($(this).attr("meds-lock"))) {
            $(this).removeClass("btn-success");
            $(this).addClass("btn-danger");
            $(this).children("i").removeClass("bi-lock-fill");
            $(this).children("i").addClass("bi-unlock-fill");
        } else {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
            $(this).children("i").removeClass("bi-unlock-fill");
            $(this).children("i").addClass("bi-lock-fill");
        };
    });

    // delete previous customcard if ID has changed (if ID has not changed, they just get overwritten)
    if (oldID != cardObj.ID) {
        if (customCards.hasOwnProperty(oldID)) { delete customCards[oldID]; };
    };
    // save to custom card deck
    customCards[cardObj.ID] = cardObj;
    // pregen SVG

    // same for base/a/b/rare
    if (baseCard !== cardObj) {
        if (customCards.hasOwnProperty(baseID) && baseCard.ID !== baseID) {
            delete customCards[baseID];
        };
        customCards[baseCard.ID] = baseCard;
    };
    if (newA !== "") {
        if (customCards.hasOwnProperty(newAID) && newA.ID !== newAID) {
            delete customCards[newAID];
        };
        customCards[newA.ID] = newA;
    };
    if (newB !== "") {
        if (customCards.hasOwnProperty(newBID) && newB.ID !== newBID) {
            delete customCards[newBID];
        };
        customCards[newB.ID] = newB;
    };
    if (newRare !== "") {
        if (customCards.hasOwnProperty(newRareID) && newRare.ID !== newRareID) {
            delete customCards[newRareID];
        };
        customCards[newRare.ID] = newRare;
    };

    $("#text_json").val(JSON.stringify(cardObj, null, 4));

    // $("#svg_card_output").html(generateCardSVG(cardObj));
    $("#svg_card_side").html(await generateCardSVG(cardObj));
    localStorage.setItem("customCards", JSON.stringify(customCards));
    localStorage.setItem("currentCardID", cardObj.ID);
    updateCardList();
    boxfitCard("#svg_card_side");
};

async function generateCardSVG(card) {
    if (card == null) { return ""; }
    var cardHTML = `<svg viewBox="0 0 681 1024" style="overflow: hidden;">
                        <g>
                            <image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_background_`;
    // console.log("CARD: " + card.CardName);
    // console.log(card);
    // console.log("DEFAULTITEM");
    // console.log(defaultItem);
    var cardItem = defaultItem;
    var bItem = false;
    var bEnch = false;
    // console.log("card.Item" + card.Item);
    // console.log("card.ItemEnchantment" + card.ItemEnchantment);
    if (card.Item.length > 0) {
        cardItem = JSON.parse(card.Item);
        bItem = true;
    } else if (card.ItemEnchantment.length > 0) {
        cardItem = JSON.parse(card.ItemEnchantment);
        bItem = true;
        bEnch = true;
    };
    // console.log("CARDITEM" + bItem);
    // console.log(cardItem);
    // console.log(card.CardClass);
    if (card.CardClass == null) { card.CardClass = bItem ? (bEnch ? "Special" : "Weapon") : "Warrior"; };
    switch (card.CardClass) {
        case "Weapon":
        case "Armor":
        case "Jewelry":
        case "Accesory":
        case "Pet":
            cardHTML += "item";
            break;
        /*case "Enchantment":
            cardHTML += "special";
            break;*/
        default:
            cardHTML += card.CardClass.toLowerCase();
            break;
    }
    cardHTML += `.png"></image>`
    if (!customSpriteObjURLs.hasOwnProperty(card.Sprite.toLowerCase())) {
        // console.log("notfound");
        if ($('#text_sprite_datalist option[value="' + card.Sprite.toLowerCase() + '"]').length > 0) {
            // download vanilla card image
            const response = await fetch('/AtO_images/card/' + card.Sprite.toLowerCase() + '.png');
            if (response.ok) {
                // console.log("found" + card.Sprite.toLowerCase());
                // save it into sprite library
                vanillaSprites[card.Sprite.toLowerCase()] = await response.blob();
                customSpriteObjURLs[card.Sprite.toLowerCase()] = URL.createObjectURL(vanillaSprites[card.Sprite.toLowerCase()]);
            } else {
                console.log("Unable to retrieve vanilla card sprite: " + card.Sprite.toLowerCase() + "! Error: " + response.status);
            };
        } else if (uploadingSprites.hasOwnProperty(card.Sprite.toLowerCase())) {
            customSpriteObjURLs[card.Sprite.toLowerCase()] = URL.createObjectURL(uploadingSprites[card.Sprite.toLowerCase()]);
        };
    };
    if (customSpriteObjURLs.hasOwnProperty(card.Sprite.toLowerCase())) {
        cardHTML += `<image width="472" height="472" x="105" y="47" xlink:href="` + customSpriteObjURLs[card.Sprite.toLowerCase()] + `"></image>`;
    };
    cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_border_` + card.CardRarity.toLowerCase() + `.png"></image>`;
    if (bItem && !bEnch) {
        // item type for top left of itemcards
        if (card.CardType === "Weapon") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_item_weapon.png"></image>`;
        } else if (card.CardType === "Armor") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_item_armor.png"></image>`;
        } else if (card.CardType === "Jewelry") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_item_jewelry.png"></image>`;
        } else if (card.CardType === "Accesory") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_item_accessory.png"></image>`;
        };
    } else if (card.CardClass != "Monster") {
        cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_energy_` + card.CardRarity.toLowerCase() + `.png"></image>`;
    };
    cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_description.png"></image>
                            <image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_name.png"></image>` + (bItem && !bEnch ? "" : `
                            <image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_target.png"></image>
                            <image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_type.png"></image>`) + `
                            ` + (card.Innate ? `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_innate.png"></image>` : "") + `
                            ` + (card.Vanish ? `<image width="681" height="1024" x="0" y="0" xlink:href="/AtO_images/card_base_vanish.png"></image>` : "") + `
                            <foreignObject width="575" height="100" x="50" y="465">
                                <div class="d-flex h-100 w-100">
                                    <div class="boxfit_card_name meds-text-upgrade-` + card.CardUpgraded.toLowerCase() + ` m-auto text-nowrap">` + neverBlankName(card.CardName) + `
                                    </div>
                                </div>
                            </foreignObject>`;

    if (!bItem || bEnch) {
        cardHTML += `<text x="50%" y="614" class="svg-text-target" text-anchor="middle" dominant-baseline="middle">`;
        // target: see AtO CardData.SetTarget() for details, though the implementation is slightly different
        if (card.AutoplayDraw) {
            cardHTML += "On draw";
        } else if (card.AutoplayEndTurn) {
            cardHTML += "On end turn";
        } else if (card.TargetType == "Global" & card.TargetSide == "Anyone") {
            cardHTML += "Global";
        } else if (card.TargetType == "Global" & card.TargetSide == "Friend") {
            cardHTML += "All " + (card.CardClass == "Monster" ? "Monsters" : "Heroes");
        } else if (card.TargetType == "Global" & card.TargetSide == "Enemy") {
            cardHTML += "All " + (card.CardClass == "Monster" ? "Heroes" : "Monsters");
        } else if (card.TargetSide == "Self") {
            cardHTML += "Self";
        } else if (card.TargetSide == "Anyone" && card.TargetPosition == "Random") {
            cardHTML += "Random";
        } else if (card.TargetType == "Single" && card.TargetSide == "Anyone" && card.TargetPosition == "Anywhere") {
            cardHTML += "Anyone";
        } else if (card.TargetSide == "FriendNotSelf") {
            cardHTML += "Other " + (card.CardClass == "Monster" ? "Monster" : "Hero");
        } else {
            if (card.TargetPosition !== "Anywhere") {
                cardHTML += Enums.CardTargetPosition[card.TargetPosition] + " ";
            };
            cardHTML += card.TargetSide.replace("Friend", card.CardClass == "Monster" ? "Monster" : "Hero").replace("Enemy", card.CardClass == "Monster" ? "Hero" : "Monster").replace("Anyone", "Unit");
        };
        cardHTML += `</text>
                            <text x="50%" y="983" class="svg-text-type" text-anchor="middle" dominant-baseline="middle">` + (card.CardType == "None" ? (card.CardClass == "Monster" ? "Monster" : "None") : Enums.CardTypeFull[card.CardType]) + (card.CardTypeAux.length === 0 ? "" : " [...]") + `</text>`;
    };
    // description: we use foreignObject for the description in the SVG because otherwise multiple lines are v. hard to do :‘(
    cardHTML += `<foreignObject width="` + (bItem && !bEnch ? "530" : "530") + `" height="` + (bItem && !bEnch ? "380" : "300") + `" x="` + (bItem && !bEnch ? "75" : "75") + `" y="` + (bItem && !bEnch ? "585" : "630") + `">
                                    <div class="d-flex h-100 w-100">
                                    <div class="boxfit_` + (bItem && !bEnch ? "item" : "card") + `_description w-100 my-auto text-center svg-text-description">`;

    var desc = "";
    if (bItem) {
        if (cardItem.MaxHealth != 0) {
            desc += `<p>Max HP&nbsp;<span style="color: var(--meds-color-` + (cardItem.MaxHealth > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.MaxHealth) + `</span></p>`;
        };
        var done2 = false;
        var done3 = false;
        if (cardItem.ResistModified1 === "All" && cardItem.ResistModifiedValue1 !== 0) {
            desc += `<p>All resistances&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue1) + `%</span></p>`;
        } else if (cardItem.ResistModified1 !== "None" && cardItem.ResistModifiedValue1 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified1);
            if (cardItem.ResistModified2 !== "None" && cardItem.ResistModifiedValue2 == cardItem.ResistModifiedValue1) {
                desc += inlineIconHTML(cardItem.ResistModified2);
                done2 = true;
            }
            if (cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 == cardItem.ResistModifiedValue1) {
                desc += inlineIconHTML(cardItem.ResistModified3);
                done3 = true;
            }
            desc += `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue1) + `%</span>`;
        };
        if (!done2 && cardItem.ResistModified2 !== "None" && cardItem.ResistModifiedValue2 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified2);
            if (!done3 && cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 == cardItem.ResistModifiedValue2) {
                desc += inlineIconHTML(cardItem.ResistModified3);
                done3 = true;
            }
            desc += `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue2) + `%</span>`;
        };
        if (!done3 && cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified3) + `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue3) + `%</span>`;
        };
        if (cardItem.CharacterStatModifiedValue !== 0) {
            if (cardItem.CharacterStatModified === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue) + `</span></p>`;
            } else if (cardItem.CharacterStatModified === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") + `&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue) + `</span></p>`;
            };
        };
        if (cardItem.CharacterStatModifiedValue2 !== 0) {
            if (cardItem.CharacterStatModified2 === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue2) + `</span></p>`;
            } else if (cardItem.CharacterStatModified2 === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") + `&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue2) + `</span></p>`;
            };
        };
        if (cardItem.CharacterStatModifiedValue3 !== 0) {
            if (cardItem.CharacterStatModified3 === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue3) + `</span></p>`;
            } else if (cardItem.CharacterStatModified3 === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") + `&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue3) + `</span></p>`;
            };
        };

        // flat damage
        done2 = false;
        done3 = false;
        // console.log("DamageFlatBonus: " + cardItem.DamageFlatBonus + " " + cardItem.DamageFlatBonusValue)
        if (cardItem.DamageFlatBonus === "All" && cardItem.DamageFlatBonusValue !== 0) {
            desc += `<p class="text-nowrap">All damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue) + `</span></p>`;
        } else if (cardItem.DamageFlatBonus !== "None" && cardItem.DamageFlatBonusValue !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus);
            if (cardItem.DamageFlatBonus2 !== "None" && cardItem.DamageFlatBonusValue2 === cardItem.DamageFlatBonusValue) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus2);
                done2 = true;
            };
            if (cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 === cardItem.DamageFlatBonusValue) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue) + `</span></p>`;
        };
        if (!done2 && cardItem.DamageFlatBonus2 !== "None" && cardItem.DamageFlatBonusValue2 !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus2);
            if (!done3 && cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 === cardItem.DamageFlatBonusValue2) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue2) + `</span></p>`;
        };
        if (!done3 && cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus3);
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue3) + `</span></p>`;
        };

        // percent damage
        done2 = false;
        done3 = false;
        if (cardItem.DamagePercentBonus === "All" && cardItem.DamagePercentBonusValue !== 0) {
            desc += `<p>All damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue) + `%</span></p>`;
        } else if (cardItem.DamagePercentBonus !== "None" && cardItem.DamagePercentBonusValue !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus);
            if (cardItem.DamagePercentBonus2 !== "None" && cardItem.DamagePercentBonusValue2 === cardItem.DamagePercentBonusValue) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus2);
                done2 = true;
            };
            if (cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 === cardItem.DamagePercentBonusValue) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue) + `%</span></p>`;
        };
        if (!done2 && cardItem.DamagePercentBonus2 !== "None" && cardItem.DamagePercentBonusValue2 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus2);
            if (!done3 && cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 === cardItem.DamagePercentBonusValue2) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue2) + `%</span></p>`;
        };
        if (!done3 && cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus3);
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue3) + `%</span></p>`;
        };

        if (cardItem.UseTheNextInsteadWhenYouPlay && cardItem.HealPercentBonus != 0) { // is this specifically for Focus Heal ???
            desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[The&nbsp;next&nbsp;` + (cardItem.DestroyAfterUses > 1 ? "(" + carditem.DestroyAfterUses + ")&nbsp;" : "") + `<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType].replace(" ", "&nbsp;")) + `</span>]</p>`;
        };
        // flat heal
        if (cardItem.HealFlatBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal done&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealFlatBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealFlatBonus) + `</span></p>`;
        };
        // percent heal
        if (cardItem.HealPercentBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal done&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealPercentBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealPercentBonus) + `%</span></p>`;
        };
        // flat heal received
        if (cardItem.HealReceivedFlatBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal received&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealReceivedFlatBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealReceivedFlatBonus) + `</span></p>`;
        };
        // percent heal received
        if (cardItem.HealReceivedPercentBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal received&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealReceivedPercentBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealReceivedPercentBonus) + `%</span></p>`;
        };
        // + auracurse
        done2 = false;
        if (cardItem.AuraCurseBonus1.length > 0 && cardItem.AuraCurseBonusValue1 > 0) {
            desc += `<p>` + inlineIconHTML(cardItem.AuraCurseBonus1);
            if (cardItem.AuraCurseBonus2.length > 0 && cardItem.AuraCurseBonusValue2 === cardItem.AuraCurseBonusValue1) {
                desc += inlineIconHTML(cardItem.AuraCurseBonus2);
                done2 = true;
            };
            desc += `&nbsp;charges&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseBonusValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseBonusValue1) + `</span></p>`;
        };
        if (!done2 && cardItem.AuraCurseBonus2.length > 0 && cardItem.AuraCurseBonusValue2 > 0) {
            desc += `<p>` + inlineIconHTML(cardItem.AuraCurseBonus2) + `&nbsp;charges&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseBonusValue2) + `</span></p>`;
        };
        // auracurse immunity
        if (cardItem.AuraCurseImmune1.length > 0 || cardItem.AuraCurseImmune2.length > 0) {
            desc += `<p>Immune to:&nbsp;` + (cardItem.AuraCurseImmune1.length > 0 ? inlineIconHTML(cardItem.AuraCurseImmune1) : "") + (cardItem.AuraCurseImmune2.length > 0 ? inlineIconHTML(cardItem.AuraCurseImmune2) : "") + `</span></p>`;
        };
        // shop discount
        if (cardItem.PercentDiscountShop != 0) {
            desc += `<p><span style="color: var(--meds-color-` + (cardItem.PercentDiscountShop > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.PercentDiscountShop) + `%</span>&nbsp;extra discount</p>`;
        };
        // percent gold/shards retained
        if (cardItem.PercentRetentionEndGame != 0) {
            desc += `<p>When you die, retain an additional&nbsp;<span style="color: var(--meds-color-` + (cardItem.PercentRetentionEndGame > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.PercentRetentionEndGame) + `%</span>&nbsp;gold and shards</p>`;
        };
        // custom aura/curse mods
        if (cardItem.AuraCurseCustomString.length > 0 && cardItem.AuraCurseCustomAC.length > 0) {
            if (cardItem.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnEnemies" && cardItem.AuraCurseCustomModValue1 > 0) { // nullifier
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on monsters have&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `</span> Max. charges</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnHeroes") { // power coil
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on heroes have&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `</span> Max. charges</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextAllResistHealingReceived") { // golden laurel
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on heroes give&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `%</span>&nbsp;all resist and&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue2) + `%</span>&nbsp;healing received per charge</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextExplodeChargesMonsters") { // dark one, cup of death
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;charged on monsters explode at &nbsp;<span style="color: var(--meds-color-system);">` + cardItem.AuraCurseCustomModValue1 + `</span></p>`;
            };
        };
        // special for Harley
        if (cardItem.id === "harleyrare") { desc += `<p>Immortal</p>`; };
        // transform damage
        if (cardItem.ModifiedDamageType !== "None") {
            desc += `<p>Transform damage to&nbsp;` + inlineIconHTML(cardItem.ModifiedDamageType) + `</p>`;
        };
        if (cardItem.IsEnchantment && (cardItem.CastedCardType !== "None" || (cardItem.Activation === "PreFinishCast" || cardItem.Activation === "FinishCast" || cardItem.Activation === "FinishFinishCast") && !(cardItem.EmptyHand))) {
            if (cardItem.UseTheNextInsteadWhenYouPlay) {
                // console.log("PIE");
                if (cardItem.HealPercentBonus == 0) { // i.e., not focus heal?
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[The&nbsp;next&nbsp;` + (cardItem.DestroyAfterUses > 1 ? "(" + cardItem.DestroyAfterUses + ")&nbsp;" : "") + `<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType]).replace(" ", "&nbsp;") + `</span>]</p>`;
                };
            } else {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you play a&nbsp;<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType]).replace(" ", "&nbsp;") + `</span>]</p>`;
            };
        };
        if (cardItem.Activation !== "None" && cardItem.Activation !== "PreBeginCombat") {
            if (cardItem.TimesPerTurn === 1) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[1 time/turn]</p>`;
            } else if (cardItem.TimesPerTurn > 1) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[` + cardItem.TimesPerTurn + ` times/turn]</p>`;
            };
            if (cardItem.Activation === "BeginCombat") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Combat start]</p>`;
            } else if (cardItem.Activation === "BeginCombatEnd") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Combat end]</p>`;
            } else if (cardItem.Activation === "BeginTurnAboutToDealCards" || cardItem.Activation === "BeginTurnCardsDealt") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.RoundCycle + ` turns]</p>`;
                } else if (cardItem.ExactRound > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[On turn ` + cardItem.ExactRound + `]</p>`;
                } else if (cardItem.ExactRound === 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[First turn]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every turn]</p>`;
                }
            } else if (cardItem.Activation === "Damage") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Damage with hit]</p>`;
            } else if (cardItem.Activation === "Damaged") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Damaged by others` + (cardItem.LowerOrEqualPercentHP < 100 ? ` <` + cardItem.LowerOrEqualPercentHP + `%` : "") + `]</p>`;
            } else if (cardItem.Activation === "Hitted") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When hit]</p>`;
            } else if (cardItem.Activation === "Block") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you block]</p>`;
            } else if (cardItem.Activation === "Heal") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you heal a hero]</p>`;
            } else if (cardItem.Activation === "Healed") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When healed]</p>`;
            } else if (cardItem.Activation === "Evaded") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When evaded]</p>`;
            } else if (cardItem.Activation === "Evade") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you evade]</p>`;
            } else if (cardItem.Activation === "BeginRound") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.Roundcycle + ` rounds]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every round]</p>`;
                }
            } else if (cardItem.Activation === "BeginTurn") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.RoundCycle + ` turns]</p>`;
                } else if (cardItem.ExactRound > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[On turn ` + cardItem.ExactRound + `]</p>`;
                } else if (cardItem.ExactRound === 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[First turn]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every turn]</p>`;
                }
            } else if (cardItem.Activation === "Killed") {
                desc += `<p>When you die,</p>`;
            } else if (cardItem.AuraCurseSetted.length > 0 && cardItem.AuraCurseNumForOneEvent === 0) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you apply&nbsp;` + inlineIconHTML(cardItem.AuraCurseSetted) + `]</p>`;
            };
            if (cardItem.UsedEnergy) {
                desc += `<p>For every&nbsp;` + inlineIconHTML("energy") + `&nbsp;used:</p>`;
            };
            if (cardItem.EmptyHand) {
                desc += `<p>If you play a&nbsp;` + inlineIconHTML("card") + `&nbsp;that leaves your hand empty</p>`;
            };
            if (cardItem.ChanceToDispel > 0 && cardItem.ChanceToDispelNum > 0) {
                desc += `<p>` + (cardItem.ChanceToDispel < 100 ? (`<span style="color: var(--meds-color-aura);">` + cardItem.ChanceToDispel + `%</span>&nbsp;chance to: d`) : "D") + `ispel&nbsp;<span style="color: var(--meds-color-aura);">` + cardItem.ChanceToDispelNum + `</span></p>`;
            };
            if (!(cardItem.IsEnchantment)) {
                if (cardItem.CastedCardType !== "None") {
                    desc += `<p>When you play a&nbsp;<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CastedCardType].replace(" ", "&nbsp;") + `</span>:</p>`;
                } else if (["PreFinishCast", "FinishCast", "FinishFinishCast"].includes(cardItem.Activation) && !(cardItem.EmptyHand)) {
                    desc += `<p>When you play a&nbsp;<span style="color: var(--meds-color-system);">` + inlineIconHTML("card") + `</span>:</p>`;
                };
            };
            // draw cards
            if (cardItem.DrawCards > 0) {
                desc += `<p>Draw ` + cardItem.DrawCards + inlineIconHTML("card") + `</p>`;
            };
            // flat heal
            if (cardItem.HealQuantity > 0) {
                if (cardItem.ItemTarget === "AllHero") {
                    desc += `<p>All heroes recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "Self") {
                    if (cardItem.Activation === "Killed") {
                        desc += `<p>resurrect with&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;of your HP</p>`;
                    } else {
                        desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                    };
                } else if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                };
            };
            var gainText = "";
            var sufferText = "";
            var applyText = "";


            // energy
            if (cardItem.EnergyQuantity > 0 && cardItem.ItemTarget === "Self") {
                gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.EnergyQuantity + `</span>` + inlineIconHTML("energy");
            };

            // percent heal
            if (cardItem.HealPercentQuantity > 0) {
                if (cardItem.ItemTarget === "AllHero") {
                    desc += `<p>All heroes recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "Self") {
                    if (cardItem.Activation === "Killed") {
                        desc += `<p>resurrect with&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;of your HP</p>`;
                    } else {
                        desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                    };
                } else if (cardItem.ItemTarget === "LowestFlatHpEnemy") {
                    desc += `<p>lowest HP monster recovers&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpHero") {
                    desc += `<p>lowest HP hero recovers&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                };
            };
            if (cardItem.HealPercentQuantitySelf < 0) {
                desc += `<p>You lose&nbsp;<span style="color: var(--meds-color-damage)">` + cardItem.HealPercentQuantitySelf + `% HP</span>`;
            };

            // deal damage
            if (cardItem.DamageToTarget > 0 && cardItem.DamageToTargetType !== "None") {
                if (cardItem.ItemTarget == "Self") {
                    sufferText += `<span style="color: var(--meds-color-damage);">` + cardItem.DamageToTarget + `</span>` + inlineIconHTML(cardItem.DamageToTargetType);
                } else {
                    desc += `<p>Deal&nbsp;<span style="color: var(--meds-color-damage);">` + cardItem.DamageToTarget + `</span>` + inlineIconHTML(cardItem.DamageToTargetType) + `</p>`;
                };
            };
            // on activation, apply aura/curse
            if (cardItem.AuraCurseGain1 !== "Null" && cardItem.AuraCurseGainValue1 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain1)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    };
                };
            };
            if (cardItem.AuraCurseGain2 !== "Null" && cardItem.AuraCurseGainValue2 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain2)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    };
                };
            };
            if (cardItem.AuraCurseGain3 !== "Null" && cardItem.AuraCurseGainValue3 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain3)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    };
                };
            };
            // on activation, apply aura/curse to self
            if (cardItem.AuraCurseGainSelf1 !== "Null" && cardItem.AuraCurseGainSelfValue1 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGainSelf1)) {
                    gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainSelfValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf1);
                } else {
                    sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainSelfValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf1);
                };
            };
            if (cardItem.AuraCurseGainSelf2 !== "Null" && cardItem.AuraCurseGainSelfValue2 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGainSelf2)) {
                    gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainSelfValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf2);
                } else {
                    sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainSelfValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf2);
                };
            };

            if (gainText !== "") {
                desc += `<p>Gain&nbsp;` + gainText + `</p>`;
            };
            if (sufferText !== "") {
                desc += `<p>Suffer&nbsp;` + sufferText + `</p>`;
            };
            if (applyText !== "") {
                desc += `<p>` + ((cardItem.AuraCurseSetted.length > 0 && cardItem.AuraCurseNumForOneEvent > 0) ? `For every&nbsp;` + (cardItem.AuraCurseNumForOneEvent > 1 ? `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseNumForOneEvent + `</span>` : "") + inlineIconHTML(cardItem.AuraCurseSetted) + `&nbsp;charge` + (cardItem.AuraCurseNumForOneEvent > 1 ? "s" : "") + ` you apply, a` : "A");
                if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to all monsters</p>`;
                } else if (cardItem.ItemTarget === "AllHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to all heroes</p>`;
                } else if (cardItem.ItemTarget === "RandomHero") {
                    desc += ` random hero gains&nbsp;` + applyText + `</p>`;
                } else if (cardItem.ItemTarget === "RandomEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to a random monster</p>`;
                } else if (cardItem.ItemTarget === "HighestFlatHpEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to highest HP monster</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to lowest HP monster</p>`;
                } else if (cardItem.ItemTarget === "HighestFlatHpHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to highest HP hero</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to lowest HP hero</p>`;
                } else if (cardItem.ItemTarget === "Random") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to a random character</p>`;
                } else {
                    desc += `pply&nbsp;` + applyText + `</p>`;
                };
            };
            if (cardItem.CardNum > 0) {
                var tempCardToAdd = "";
                var cardGainList = [];
                if (cardItem.CardToGainList.length > 0) {
                    cardGainList = cardItem.CardToGainList;
                } else if (cardItem.CardToGain.length > 0) {
                    cardGainList[0] = cardItem.CardToGain;
                };
                if (cardGainList.length > 0) {
                    tempCardToAdd += (cardItem.CardNum > 1 ? cardItem.CardNum : "");
                    for (var a = 0; a < cardGainList.length; a++) {
                        tempCardToAdd += inlineIconHTML("card") + `&nbsp;<span style="color: #`;
                        if (customCards.hasOwnProperty(cardGainList[a])) {
                            if (customCards[cardGainList[a]].CardUpgraded === "Rare") {
                                tempCardToAdd += `7F15A6;">`;
                            } else if (customCards[cardGainList[a]].CardUpgraded === "B") {
                                tempCardToAdd += `875700;">`;
                            } else if (customCards[cardGainList[a]].CardUpgraded === "A") {
                                tempCardToAdd += `215382;">`;
                            } else {
                                tempCardToAdd += `5E3016;">`;
                            };
                            tempCardToAdd += customCards[cardGainList[a]].CardName;
                        } else if (vanillaCardList["No"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `5E3016;">` + vanillaCardList["No"][cardGainList[a]];
                        } else if (vanillaCardList["A"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `215382;">` + vanillaCardList["A"][cardGainList[a]];
                        } else if (vanillaCardList["B"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `875700;">` + vanillaCardList["B"][cardGainList[a]];
                        } else if (vanillaCardList["Rare"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `7F15A6;">` + vanillaCardList["Rare"][cardGainList[a]];
                        } else {
                            tempCardToAdd += `5E3016;">` + cardGainList[a];
                        };
                        tempCardToAdd += `</span>` + (a == cardGainList.length - 2 ? "&nbsp;or&nbsp;" : (a < cardGainList.length - 2 ? ",&nbsp;" : ""));
                    };
                } else {
                    tempCardToAdd += (cardItem.CardNum > 1 ? cardItem.CardNum : "") + inlineIconHTML("card") + (cardItem.CardToGainType == "None" ? "" : (`<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CardToGainType] + `</span>`));
                };
                desc += `<p>`;
                if (cardItem.DuplicateActive) {
                    if (cardItem.CardPlace === "Hand") {
                        desc += `Put a copy of it into your hand`;
                    };
                } else if (cardItem.CardPlace === "RandomDeck") {
                    desc += `Shuffle&nbsp;` + tempCardToAdd + `&nbsp;into your deck`;
                } else if (cardItem.CardPlace === "Cast") {
                    desc += `Cast card&nbsp;` + tempCardToAdd;
                } else if (cardItem.CardPlace === "Hand") {
                    desc += `Put&nbsp;` + tempCardToAdd + `&nbsp;into your hand`;
                };
                if (cardItem.CostZero) {
                    desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost 0` + (cardItem.Vanish ? " and vanish" : "") + (cardItem.Permanent ? "" : " this turn") + `)</span>`;
                } else if (cardItem.CostReduction > 0) {
                    desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost reduced by ` + cardItem.CostReduction + (cardItem.Vanish ? " and vanish" : "") + (cardItem.Permanent ? "" : " this turn") + `)</span>`;
                };
                desc += `</p>`;
            };
            if (cardItem.CardsReduced > 0 && cardItem.CostReduceReduction > 0) {
                desc += `<p>Reduce the cost of` + (cardItem.ReduceHighestCost ? (` the ` + (cardItem.CardsReduced > 1 ? "(" + cardItem.CardsReduced + ") " : "") + `highest cost`) : (`&nbsp;<span style="color: var(--meds-color-system);">` + cardItem.CardsReduced + `</span>&nbsp;random`)) + `&nbsp;` + (cardItem.CardToReduceType == "None" ? inlineIconHTML("card") : (`<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CardToReduceType] + `</span>`)) + `&nbsp;in your hand` + (cardItem.CostReduceEnergyRequirement > 0 ? `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%;">&nbsp;(with cost ≥ ` + cardItem.CostReduceEnergyRequirement + `)&nbsp;</span>` : " ") + `by ` + cardItem.CostReduceReduction + (cardItem.CostReducePermanent ? "" : " until discarded") + `</p>`;
            };
        };
        if (cardItem.DestroyStartOfTurn || cardItem.DestroyEndOfTurn) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts one turn -</p>`;
        } else if (cardItem.DestroyAfterUses > 0 && !(cardItem.UseTheNextInsteadWhenYouPlay)) {
            if (cardItem.DestroyAfterUses > 1) {
                desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts ` + cardItem.DestroyAfterUses + ` uses -</p>`;
            } else {
                desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts 1 use -</p>`;
            };
        };
        if (cardItem.TimesPerCombat === 1) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Once per combat -</p>`;
        } else if (cardItem.TimesPerCombat === 2) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Twice per combat -</p>`;
        } else if (cardItem.TimesPerCombat === 3) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Thrice per combat -</p>`;
        };
        if (cardItem.PassSingleAndCharacterRolls) {
            desc += `<p>100% success in single character event rolls</p>`;
        };
    } else {
        if (card.EffectRequired != "") {
            desc += `<p style="color: var(--meds-color-damage);">Requires ` + inlineIconHTML(card.EffectRequired); + `</p>`;
        };
        if (card.DrawCard != 0 && !(card.DrawCardSpecialValueGlobal)) {
            desc += `<p>Draw ` + card.DrawCard + inlineIconHTML("card") + `</p>`;
        };
        if (card.SpecialValueGlobal === "DiscardedCards") {
            if (card.DiscardCardPlace === "Vanish") {
                desc += `<p>Vanish X` + inlineIconHTML("card") + `</p>`;
            } else {
                desc += `<p>Discard X` + inlineIconHTML("card") + `</p>`;
            };
        };
        if (card.DrawCardSpecialValueGlobal) {
            desc += `<p>Draw&nbsp;<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML("card") + `</p>`;
        };

        if (card.AddCard > 0) {
            if (card.AddCardId !== "") {
                str5 = (card.AddCard > 1 ? card.AddCard : "") + inlineIconHTML("card");
                var cardName = card.AddCardId;
                if (customCards.hasOwnProperty(card.AddCardId)) {

                    if (customCards[card.AddCardId].CardUpgraded === "Rare") {
                        str5 += `<span style="color: #7F15A6;">`;
                    } else if (customCards[card.AddCardId].CardUpgraded === "B") {
                        str5 += `<span style="color: #875700;">`;
                    } else if (customCards[card.AddCardId].CardUpgraded === "A") {
                        str5 += `<span style="color: #215382;">`;
                    } else {
                        str5 += `<span style="color: #5E3016;">`;
                    };
                    cardName = customCards[card.AddCardId].CardName;
                } else if (vanillaCardList["No"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #5E3016;">`;
                    cardName = vanillaCardList["No"][card.AddCardId];
                } else if (vanillaCardList["A"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #215382;">`;
                    cardName = vanillaCardList["A"][card.AddCardId];
                } else if (vanillaCardList["B"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #875700;">`;
                    cardName = vanillaCardList["B"][card.AddCardId];
                } else if (vanillaCardList["Rare"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #7F15A6;">`;
                    cardName = vanillaCardList["Rare"][card.AddCardId];
                } else {
                    str5 += `<span style="color: #5E3016;">`;
                };
                str5 += cardName + `</span>`;
                if (card.AddCardPlace === "RandomDeck") {
                    desc += `<p>Shuffle&nbsp;` + str5 + `&nbsp;into ` + (card.TargetSide === "Self" ? "your" : "target's") + ` deck`;
                } else if (card.AddCardPlace === "Hand") {
                    desc += `<p>Put&nbsp;` + str5 + `&nbsp;into your hand`;
                } else if (card.AddCardPlace === "TopDeck") {
                    desc += card.TargetSide === "Self" ? `<p>Place&nbsp;` + str5 + `&nbsp;on top of your deck</p>` : `<p>Put&nbsp;` + str5 + `&nbsp;on top of target's deck`;
                } else if (card.AddCardPlace === "Discard") {
                    desc += `<p>Place&nbsp;` + str5 + `&nbsp;on ` + (card.TargetSide === "Self" ? "your" : `target's`) + ` discard pile`;
                };
            } else {
                if (card.AddCardChoose > 0) {
                    str5 = (card.AddCardChoose > 1 ? card.AddCardChoose : "") + inlineIconHTML("card");
                } else {
                    str5 = (card.AddCard > 1 ? card.AddCard : "") + inlineIconHTML("card");
                };
                if (card.AddCardType !== "None") {
                    str5 += `<span style="color: #5E3016;">` + Enums.CardTypeFull[card.AddCardType] + (card.AddCardTypeAux.length === 0 ? "" : " [...]") + `</span>`;
                };

                if (card.AddCardFrom === "Game") {
                    if (card.AddCardPlace === "RandomDeck") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and shuffle ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your deck`;
                    } else if (card.AddCardPlace === "Hand") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your hand`;
                    } else if (card.AddCardPlace === "TopDeck") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` on top of your deck`;
                    };
                } else if (card.AddCardFrom === "Deck") {
                    if (card.AddCardPlace === "Hand") {
                        desc += `<p>Reveal&nbsp` + str5 + `&nbsp;from your draw pile and put ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your hand`;
                    } else if (card.AddCardPlace === "TopDeck") {
                        desc += `<p>Reveal&nbsp` + str5 + `&nbsp;from your draw pile and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` on top of your deck`;
                    };
                } else if (card.AddCardFrom === "Discard") {
                    desc += `<p>Pick&nbsp;` + str5 + `&nbsp;from your discard pile and place it `;
                    if (card.AddCardPlace === "TopDeck") {
                        desc += `on top of your deck`;
                    } else if (card.AddCardPlace === "RandomDeck") {
                        desc += `into your hand`;
                    };
                } else if (card.AddCardFrom === "Hand") {
                    desc += `<p>Duplicate&nbsp;` + str5 + `&nbsp;from your hand`;
                    if (card.TargetSide === "Friend") {
                        if (card.AddCardPlace === "TopDeck") {
                            desc += ` and put it at top of target's deck`;
                        } else if (card.AddCardPlace === "RandomDeck") {
                            desc += ` and shuffle it in target's deck`;
                        };
                    };
                } else if (card.AddCardFrom === "Vanish") {
                    desc += `<p>Pick&nbsp;` + str5 + `&nbsp;from your vanish pile and `
                    if (card.AddCardPlace === "TopDeck") {
                        desc += `place it on top of your deck`;
                    } else if (card.AddCardPlace === "Hand") {
                        desc += `put it into your hand`;
                    };
                };
            };
            if (card.AddCardReducedCost !== 0) {
                desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost ` + (card.AddCardReducedCost < 0 ? "0" : "reduced by " + card.AddCardReducedCost);
                if (card.AddCardVanish) {
                    desc += ` and vanish`;
                } else if (card.AddCardCostTurn) {
                    desc += ` until discarded`;
                }
                desc += `)</span>`;
            };
            desc += `</p>`;
        };

        if (card.DiscardCard > 0) {
            var discardText = card.DiscardCardType === "None" ? "" : (`&nbsp;<span style="color: var(--meds-color-system)">` + Enums.CardTypeFull[card.DiscardCardType] + (card.DiscardCardTypeAux.length === 0 ? "" : " [...]") + `</span>`);
            if (card.DiscardCardPlace == "Discard") {
                desc += "<p>Discard " + card.DiscardCard + inlineIconHTML(card.DiscardCardAutomatic ? "card_random" : "card") + discardText + `</p>`;
            } else if (card.DiscardCardPlace == "Vanish") {
                desc += "<p>Vanish " + card.DiscardCard + inlineIconHTML(card.DiscardCardAutomatic ? "card_random" : "card") + discardText + `</p>`;
            } else {
                desc += `<p>Place&nbsp;` + card.DiscardCard + inlineIconHTML(card.DiscardCardAutomatic ? "card_random" : "card") + discardText + `&nbsp;from your hand on top of your deck</p>`;
            };
        };
        if (card.LookCards > 0) {
            desc += `<p>Look ` + card.LookCards + inlineIconHTML("card") + `</p>`;
            if (card.LookCardsDiscardUpTo == -1) {
                desc += `<p>Discard any of them</p>`;
            } else if (card.LookCardsDiscardUpTo > 0) {
                desc += `<p>Discard up to ` + card.LookCardsDiscardUpTo + ` of them</p>`;
            } else if (card.LookCardsVanishUpTo > 0) {
                desc += `<p>Vanish up to ` + card.LookCardsVanishUpTo + ` of them</p>`;
            };
        };


        if (card.SummonUnit != "" & card.SummonUnitNum > 0) {
            desc += `<p style="color: var(--meds-color-system);">Summon ` + (card.SummonUnitNum > 1 ? card.SummonUnitNum + " " : "") + card.SummonUnit + `</p>`;
        };
        if (card.DispelAuras == -1) {
            desc += `<p>Purge all</p>`;
        } else if (card.DispelAuras > 0) {
            desc += `<p>Purge <span style="color: var(--meds-color-curse);">` + card.DispelAuras + `</span></p>`;
        };
        var purgeTarget = "";
        var dispelTarget = "";
        // AtO has dispel/purge split into specialvalue/not, and I cbf working out why. We'll see what happens? :D // #TODO: check if this is the purge/transform issue you noted before?
        if (card.HealAuraCurseName != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName);
            };
        };
        if (card.HealAuraCurseName2 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName2)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName2);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName2);
            };
        };
        if (card.HealAuraCurseName3 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName3)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName3);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName3);
            };
        };
        if (card.HealAuraCurseName4 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName4)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName4);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName4);
            };
        };
        if (purgeTarget !== "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            desc += `<p>Purge ` + (card.TargetSide == "Self" ? "your " : "") + purgeTarget + `</p>`;
        };
        if (dispelTarget != "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            desc += `<p>Dispel ` + (card.TargetSide == "Self" ? "your " : "") + dispelTarget + `</p>`;
        };
        if (card.HealCurses == -1) {
            desc += `<p>Dispel all</p>`;
        } else if (card.HealCurses > 0) {
            desc += `<p>Dispel <span style="color: var(--meds-color-aura);">` + card.HealCurses + `</span></p>`;
        };
        if (card.HealAuraCurseSelf != "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseSelf)) {
                desc += `<p>Purge your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            } else {
                desc += `<p>Dispel your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            };
        };
        if (card.TransferCurses > 0) {
            desc += `<p>Transfer ` + card.TransferCurses + ` curses</p>`;
        };
        if (card.StealAuras > 0) {
            desc += `<p>Steal ` + card.StealAuras + ` auras</p>`;
        };
        if (card.IncreaseAuras > 0) {
            desc += `<p>Increase aura charges by ` + card.IncreaseAuras + `%</p>`;
        };
        if (card.IncreaseCurses > 0) {
            desc += `<p>Increase curse charges by ` + card.IncreaseCurses + `%</p>`;
        };
        if (card.ReduceAuras > 0) {
            desc += `<p>Reduce aura charges by ` + card.ReduceAuras + `%</p>`;
        };
        if (card.ReduceCurses > 0) {
            desc += `<p>Reduce curse charges by ` + card.ReduceCurses + `%</p>`;
        };
        var damageTarget = "";
        if (card.Damage > 0 && !card.DamageSpecialValue1 && !card.DamageSpecialValue2 && !card.DamageSpecialValueGlobal) {
            damageTarget += `<span style="color: var(--meds-color-damage);">` + card.Damage + `</span>` + inlineIconHTML(card.DamageType);
            if (card.Damage2 > 0 && card.DamageType === card.DamageType2 && (card.Damage2SpecialValue1 || card.Damage2SpecialValue2 || card.Damage2SpecialValueGlobal)) {
                damageTarget += `+<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
            };
        };
        if (card.Damage2 > 0 && !card.Damage2SpecialValue1 && !card.Damage2SpecialValue2 && !card.Damage2SpecialValueGlobal) {
            damageTarget += `<span style="color: var(--meds-color-damage);">` + card.Damage2 + `</span>` + inlineIconHTML(card.DamageType2);
        };
        if (damageTarget != "") {
            desc += `<p>Deal ` + damageTarget + `</p>`;
        }
        if (card.HealSelfPerDamageDonePercent > 0) {
            desc += `<p>Heal yourself for ` + card.HealSelfPerDamageDonePercent + `% of the damage done</p>`;
        };
        if (card.SelfHealthLoss > 0 && !card.SelfHealthLossSpecialGlobal) {
            if (card.SelfHealthLossSpecialValue1) {
                desc += `<p>Lose <span style="color: var(--meds-color-damage);">X HP</span></p>`;
            } else {
                desc += `<p>Lose <span style="color: var(--meds-color-damage);">` + card.SelfHealthLoss + ` HP</span></p>`;
            };
        };
        var flag1 = false;
        var flag2 = false;
        var bTransformAnd = false;
        if ((card.TargetSide === "Friend" || card.TargetSide === "FriendNotSelf") && card.SpecialValueGlobal === "AuraCurseYours" && card.SpecialAuraCurseNameGlobal != "" && card.SpecialValueModifierGlobal > 0) {
            desc += `<p>Split your ` + inlineIconHTML(card.SpecialAuraCurseNameGlobal) + `</p>`;
            flag1 = true;
        };
        var str5 = "";
        var str6 = "";
        var str7 = "";
        var transform = ""; // this is cheating, because I cbf. :)
        if (!card.Damage2SpecialValue1 && !flag1 && (card.SpecialValueGlobal !== "None" || card.SpecialValue1 !== "None" || card.SpecialValue2 !== "None")) {
            if (!card.DamageSpecialValueGlobal && !card.DamageSpecialValue1 && !card.DamageSpecialValue2) {

                if (card.TargetSide === "Self" && (card.SpecialValueGlobal === "AuraCurseTarget" || card.SpecialValueGlobal === "AuraCurseYours")) {
                    if (card.SpecialAuraCurseNameGlobal != "") {
                        str5 = card.SpecialAuraCurseNameGlobal;
                    };
                    if (card.AuraChargesSpecialValueGlobal) {
                        if (card.Aura != "") {
                            str6 = card.Aura;
                        };
                        if (card.Aura2 != "" && card.AuraCharges2SpecialValueGlobal) {
                            str7 = card.Aura2;
                        };
                    } else if (card.CurseChargesSpecialValueGlobal) {
                        if (card.Curse != "") {
                            str6 = card.Curse;
                        };
                        if (card.Curse2 != "" && card.CurseCharges2SpecialValueGlobal) {
                            str7 = card.Curse2;
                        };

                    };
                } else if (card.SpecialValue1 === "AuraCurseTarget") {
                    if (card.SpecialAuraCurseName1 != "") {
                        str5 = card.SpecialAuraCurseName1;
                    };
                    if (card.AuraChargesSpecialValue1) {
                        if (card.Aura != "") {
                            str6 = card.Aura;
                        };
                        if (card.Aura2 != "" && card.AuraCharges2SpecialValue1) {
                            str7 = card.Aura2;
                        };
                    } else if (card.CurseChargesSpecialValue1) {
                        if (card.Curse != "") {
                            str6 = card.Curse;
                        };
                        if (card.Curse2 != "" && card.CurseCharges2SpecialValue1) {
                            str7 = card.Curse2;
                        };
                    };
                };
                if (str5 != "" && str6 != "") {
                    flag2 = true;
                    if (str5 == str6) { // thing coming from = thing going to? e.g. bleed->bleed
                        if (card.SpecialValueGlobal === "AuraCurseTarget") {
                            if (card.SpecialValueModifierGlobal == 100) {
                                desc += "<p>Double target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal == 200) {
                                desc += "<p>Triple target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal < 100) {
                                desc += `<p>Target loses ` + (100 - card.SpecialValueModifierGlobal) + "%" + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValueGlobal === "AuraCurseYours") {
                            if (card.SpecialValueModifierGlobal == 100) {
                                desc += "<p>Double your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal == 200) {
                                desc += "<p>Triple your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal < 100) {
                                desc += `<p>Lose ` + (100 - card.SpecialValueModifierGlobal) + "% of your " + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValue1 === "AuraCurseTarget") {
                            if (card.SpecialValueModifier1 == 100) {
                                desc += "<p>Double target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 == 200) {
                                desc += "<p>Triple target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 < 100) {
                                desc += `<p>Target loses ` + (100 - card.SpecialValueModifier1) + "%" + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValue1 === "AuraCurseYours") {
                            if (card.SpecialValueModifier1 == 100) {
                                desc += "<p>Double your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 == 200) {
                                desc += "<p>Triple your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 < 100) {
                                desc += `<p>Lose ` + (100 - card.SpecialValueModifier1) + "% of your " + inlineIconHTML(str6) + `</p>`;
                            };
                        };
                    } else {
                        transform = str5;
                        desc += `<p>Transform` + inlineIconHTML(str5) + `into` + inlineIconHTML(str6);
                        if (str7 != "") {
                            desc += inlineIconHTML(str7); // vanilla has "and", but given I can't see it used anywhere I think I'd prefer this format?
                        };
                        if (card.SpecialValueModifier1 > 0 && card.SpecialValueModifier1 != 100) {
                            desc += `<span style="color: var(--meds-color-system);">x` + parseFloat((card.SpecialValueModifier1 / 100).toFixed(2)) + `</span>`;
                        };
                        desc += `</p>`;
                    };
                };
            };
        };
        var num4 = 0;
        str5 = "";
        if (card.Damage > 0 && (card.DamageSpecialValue1 || card.DamageSpecialValueGlobal)) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
        };
        if (card.Damage2 > 0 && (card.DamageSpecialValue2 || card.DamageSpecialValueGlobal)) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
        } else if (card.Damage2 > 0 && card.Damage2SpecialValueGlobal && card.DamageType != card.DamageType2) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
        }; // #TODO: check this, I'm pretty sure something in this damage section is wrong?
        if (card.Damage2 > 0 && card.Damage2SpecialValue1 && (card.DamageSpecialValue1 || card.DamageSpecialValue2 || card.DamageSpecialValueGlobal)) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
        };
        if (str5 !== "") {
            desc += `<p>Deal ` + str5 + `</p>`;
        };
        var theAura = "";
        if (!flag1 && !flag2) {
            str5 = "";
            if (card.EnergyRechargeSpecialValueGlobal) {
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML("energy");
            };
            if (card.Aura !== "" && (card.AuraChargesSpecialValue1 || card.AuraChargesSpecialValueGlobal)) {
                theAura = card.Aura;
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura);
            };
            if (card.Aura2 !== "" && (card.AuraCharges2SpecialValue1 || card.AuraCharges2SpecialValueGlobal)) {
                if (card.Aura === card.Aura2) {
                    // for cards like Ice Barrier that give X+Y charges (where X equals [...])
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura2);
                theAura = card.Aura2;
            };
            if (card.Aura3 !== "" && (card.AuraCharges3SpecialValue1 || card.AuraCharges3SpecialValueGlobal)) {
                if (card.Aura === card.Aura3) {
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                if (card.Aura2 === card.Aura3) {
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.Aura2) + `+`;
                };
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura3);
                theAura = card.Aura3;
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Gain ` + str5 + `</p>`;
                } else {
                    desc += `<p>Grant ` + str5 + `</p>`;
                };
            };

            str5 = "";
            if (card.Curse !== "" && (card.CurseChargesSpecialValue1 || card.CurseChargesSpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse);
            };
            if (card.Curse2 !== "" && (card.CurseCharges2SpecialValue1 || card.CurseCharges2SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse2);
            };
            if (card.Curse3 !== "" && (card.CurseCharges3SpecialValue1 || card.CurseCharges3SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse3);
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Suffer ` + str5 + `</p>`;
                } else {
                    desc += `<p>Apply ` + str5 + `</p>`;
                };
            };

            str5 = "";
            if (card.CurseSelf !== "" && (card.CurseChargesSpecialValue1 || card.CurseChargesSpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf);
            };
            if (card.CurseSelf2 !== "" && (card.CurseCharges2SpecialValue1 || card.CurseCharges2SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf2);
            };
            if (card.CurseSelf3 !== "" && (card.CurseCharges3SpecialValue1 || card.CurseCharges3SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf3);
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Suffer ` + str5 + `</p>`;
                } else { // this section is redundant because it's cardsYouSuffer either way :D       if (!(card.Damage > 0 || card.Damage2 > 0 || card.DamageSelf > 0 || card.DamageSelf2 > 0)) {
                    desc += `<p>You suffer ` + str5 + `</p>`;
                };
            };
        };
        if (card.Heal > 0 && (card.HealSpecialValue1 || card.HealSpecialValueGlobal)) {
            desc += `<p>Heal <span style="color: var(--meds-color-heal);">X</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.HealSelf > 0 && (card.HealSelfSpecialValue1 || card.HealSelfSpecialValueGlobal)) {
            desc += `<p>Self heal <span style="color: var(--meds-color-heal);">X</span>` + inlineIconHTML("heal") + `</p>`;
        };
        // look, I've separated SpecialValue2 out entirely because I don't want it to fall over if the devs have something else in AtO handling it, but ideally this would be fully integrated and we'd have X/Y/Z.
        // if you get excited when refactoring, consider building that!
        // (also consider a descriptionbuilder based on textSuffer, textGrant, textDeal, textHeal, etc)
        if (flag2 && card.SpecialValue2 !== "None") {
            // transform + do something else
            var aTarget = "";
            var aSelf = "";
            var cTarget = "";
            var cSelf = "";
            if (card.Aura !== "" && card.AuraChargesSpecialValue2) {
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura);
            };
            if (card.Aura2 !== "" && card.AuraCharges2SpecialValue2) {
                if (card.Aura === card.Aura2) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura2);
            };
            if (card.Aura3 !== "" && card.AuraCharges3SpecialValue2) {
                if (card.Aura === card.Aura3) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                if (card.Aura2 === card.Aura3) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.Aura2) + `+`;
                };
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura3);
            };
            if (card.AuraSelf !== "" && card.AuraChargesSpecialValue2) {
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf);
            };
            if (card.AuraSelf2 !== "" && card.AuraSelfCharges2SpecialValue2) {
                if (card.AuraSelf === card.AuraSelf2) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf) + `+`;
                };
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf2);
            };
            if (card.AuraSelf3 !== "" && card.AuraSelfCharges3SpecialValue2) {
                if (card.AuraSelf === card.AuraSelf3) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf) + `+`;
                };
                if (card.AuraSelf2 === card.AuraSelf3) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.AuraSelf2) + `+`;
                };
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf3);
            };

            if (card.Curse !== "" && card.CurseChargesSpecialValue2) {
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse);
            };
            if (card.Curse2 !== "" && card.CurseCharges2SpecialValue2) {
                if (card.Curse === card.Curse2) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse) + `+`;
                };
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse2);
            };
            if (card.Curse3 !== "" && card.CurseCharges3SpecialValue2) {
                if (card.Curse === card.Curse3) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse) + `+`;
                };
                if (card.Curse2 === card.Curse3) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.Curse2Charges + `</span>` + inlineIconHTML(card.Curse2) + `+`;
                };
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse3);
            };
            if (card.CurseSelf !== "" && card.CurseChargesSpecialValue2) {
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf);
            };
            if (card.CurseSelf2 !== "" && card.CurseSelfCharges2SpecialValue2) {
                if (card.CurseSelf === card.CurseSelf2) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf) + `+`;
                };
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf2);
            };
            if (card.CurseSelf3 !== "" && card.CurseSelfCharges3SpecialValue2) {
                if (card.CurseSelf === card.CurseSelf3) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf) + `+`;
                };
                if (card.CurseSelf2 === card.CurseSelf3) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.Curse2Charges + `</span>` + inlineIconHTML(card.CurseSelf2) + `+`;
                };
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf3);
            };

            if (aTarget !== "") {
                bTransformAnd = true;
                if (card.TargetSide === "Self") {
                    aSelf += aTarget;
                } else {
                    desc += `<p>Grant ` + aTarget + `</p>`;
                };
            };
            if (aSelf !== "") {
                bTransformAnd = true;
                desc += `<p>Gain ` + aSelf + `</p>`;
            };
            if (cTarget !== "") {
                bTransformAnd = true;
                if (card.TargetSide === "Self") {
                    cSelf += cTarget;
                } else {
                    desc += `<p>Apply ` + cTarget + `</p>`;
                };
            };
            if (cSelf !== "") {
                bTransformAnd = true;
                desc += `<p>Suffer ` + cSelf + `</p>`;
            };
        };
        if (bTransformAnd) {
            var mod = 0;
            if (card.SpecialValueModifier2 > 0) {
                mod = card.SpecialValueModifier2 / 100;
            };
            str5 = "";
            if (card.SpecialValue2 === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseName2);
            } else if (card.SpecialValue2 === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseName2);
            };
            if (card.SpecialValue2 === "HealthYours") {
                str5 += `X equals your HP`;
            } else if (card.SpecialValue2 === "HealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` HP`;
            };
            if (card.SpecialValue2 === "CardsHand") {
                str5 += `X equals your hand` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDeck") {
                str5 += `X equals your draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDiscard") {
                str5 += `X equals your discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsVanish") {
                str5 += `X equals your vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDeckTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDiscardTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsVanishTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` vanish&nbsp;pile` + inlineIconHTML("card");
            };
            if (str5 !== "") {
                desc += `<p style="color: var(--meds-color-system); font-size: 70%; line-height: 60%; font-weight: 600;">(` + str5 + (mod > 0 && mod != 1 ? "x" + parseFloat(mod.toFixed(2)) : "") + `)</p>`;
            };
        };
        if (!flag1 && !flag2) {
            var mod = 0;
            if (card.SpecialValueModifierGlobal > 0) {
                mod = card.SpecialValueModifierGlobal / 100;
            } else if (card.SpecialValueModifier1 > 0) {
                mod = card.SpecialValueModifier1 / 100;
            };
            str5 = "";
            if (card.SpecialValue1 === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseName1);
            } else if (card.SpecialValue1 === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseName1);
            } else if (card.SpecialValueGlobal === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseNameGlobal);
            } else if (card.SpecialValueGlobal === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseNameGlobal);
            };
            if (card.SpecialValueGlobal === "HealthYours" || card.SpecialValue1 === "HealthYours") {
                str5 += `X equals your HP`;
            } else if (card.SpecialValue1 === "HealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` HP`;
            };
            if (card.SpecialValueGlobal === "SpeedYours" || card.SpecialValue1 === "SpeedYours" || card.SpecialValue2 === "SpeedYours") {
                str5 += `X equals your speed`;
            } else if (card.SpecialValueGlobal === "SpeedTarget" || card.SpecialValue1 === "SpeedTarget" || card.SpecialValue2 === "SpeedTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` speed`;
            } else if (card.SpecialValueGlobal === "SpeedDifference" || card.SpecialValue1 === "SpeedDifference" || card.SpecialValue2 === "SpeedDifference") {
                str5 += `X equals speed difference between you and the target`;
            } else if (card.SpecialValueGlobal === "DiscardedCards" || card.SpecialValue1 === "DiscardedCards" || card.SpecialValue2 === "DiscardedCards") {
                if (card.DiscardCardPlace === "Vanish") {
                    str5 += `X equals vanished` + inlineIconHTML("card");
                } else {
                    str5 += `X equals discarded` + inlineIconHTML("card");
                };
            } else if (card.SpecialValueGlobal === "VanishedCards" || card.SpecialValue1 === "VanishedCards" || card.SpecialValue2 === "VanishedCards") {
                str5 += `X equals vanished` + inlineIconHTML("card");
            };
            if (card.SpecialValueGlobal === "CardsHand" || card.SpecialValue1 === "CardsHand" || card.SpecialValue2 === "CardsHand") {
                str5 += `X equals your hand` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDeck" || card.SpecialValue1 === "CardsDeck" || card.SpecialValue2 === "CardsDeck") {
                str5 += `X equals your draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDiscard" || card.SpecialValue1 === "CardsDiscard" || card.SpecialValue2 === "CardsDiscard") {
                str5 += `X equals your discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsVanish" || card.SpecialValue1 === "CardsVanish" || card.SpecialValue2 === "CardsVanish") {
                str5 += `X equals your vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDeckTarget" || card.SpecialValue1 === "CardsDeckTarget" || card.SpecialValue2 === "CardsDeckTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDiscardTarget" || card.SpecialValue1 === "CardsDiscardTarget" || card.SpecialValue2 === "CardsDiscardTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsVanishTarget" || card.SpecialValue1 === "CardsVanishTarget" || card.SpecialValue2 === "CardsVanishTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "MissingHealthYours" || card.SpecialValue1 === "MissingHealthYours" || card.SpecialValue2 === "MissingHealthYours") {
                str5 += `X equals your missing health`;
            } else if (card.SpecialValueGlobal === "MissingHealthTarget" || card.SpecialValue1 === "MissingHealthTarget" || card.SpecialValue2 === "MissingHealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` missing health`;
            };
            if (str5 !== "") {
                desc += `<p style="color: var(--meds-color-system); font-size: 70%; line-height: 60%; font-weight: 600;">(` + str5 + (mod > 0 && mod != 1 ? "x" + parseFloat(mod.toFixed(2)) : "") + `)</p>`;
            };
        };
        if (card.SelfHealthLoss > 0 && card.SelfHealthLossSpecialGlobal) {
            desc += `<p>Lose <span style="color: var(--meds-color-damage);">X HP</span></p>`;
        };


        if (transform != "") { purgeTarget = purgeTarget.replaceAll(inlineIconHTML(transform), ""); };
        if (purgeTarget != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None")) {
            desc += `<p>Purge ` + (card.TargetSide == "Self" ? "your " : "") + purgeTarget + `</p>`;
        };
        if (transform != "") { dispelTarget = dispelTarget.replaceAll(inlineIconHTML(transform), ""); };
        if (dispelTarget != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None")) {
            desc += `<p>Dispel ` + (card.TargetSide == "Self" ? "your " : "") + dispelTarget + `</p>`;
        };
        if (card.HealAuraCurseSelf != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") && card.HealAuraCurseSelf !== transform) {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseSelf)) {
                desc += `<p>Purge your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            } else {
                desc += `<p>Dispel your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            };
        };

        var auraTarget = "";
        var curseTarget = "";
        var auraSelf = "";
        var curseSelf = "";
        var damageSides = "";
        if (card.EnergyRecharge > 0) {
            auraSelf += `<span style="color: var(--meds-color-system);">` + card.EnergyRecharge + `</span>` + inlineIconHTML("energy");
        };

        if (card.DamageSelf > 0) {
            if (card.DamageSpecialValueGlobal || card.DamageSpecialValue1 || card.DamageSpecialValue2) {
                curseSelf += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
            } else {
                curseSelf += `<span style="color: var(--meds-color-damage);">` + card.DamageSelf + `</span>` + inlineIconHTML(card.DamageType);
            };
        };
        if (card.DamageSelf2 > 0) {
            if (card.Damage2SpecialValueGlobal || card.Damage2SpecialValue1 || card.Damage2SpecialValue2) {
                curseSelf += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
            } else {
                curseSelf += `<span style="color: var(--meds-color-damage);">` + card.DamageSelf2 + `</span>` + inlineIconHTML(card.DamageType2);
            };
        };
        if (card.Aura !== "" && card.AuraCharges > 0 && card.Aura !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura);
            };
        };
        if (card.Aura2 !== "" && card.AuraCharges2 > 0 && card.Aura2 !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.Aura2);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.Aura2);
            };
        };
        if (card.Aura3 !== "" && card.AuraCharges3 > 0 && card.Aura3 !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.Aura3);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.Aura3);
            };
        };
        if (!flag1) {
            if (card.AuraSelf !== "" && (card.AuraChargesSpecialValue1 || card.AuraChargesSpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf);
            };
            if (card.AuraSelf2 !== "" && (card.AuraCharges2SpecialValue1 || card.AuraCharges2SpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf2);
            };
            if (card.AuraSelf3 !== "" && (card.AuraCharges3SpecialValue1 || card.AuraCharges3SpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf3);
            };
        }
        if (card.Curse != "" && card.CurseCharges > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse);
            };
        };
        if (card.Curse2 != "" && card.CurseCharges2 > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.Curse2);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.Curse2);
            };
        };
        if (card.Curse3 != "" && card.CurseCharges3 > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.Curse3);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.Curse3);
            };
        };
        if (auraTarget != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Gain" : "Grant") + ` ` + auraTarget + `</p>`;
        };
        if (curseTarget != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Suffer" : "Apply") + ` ` + curseTarget + `</p>`;
        };
        if (card.AuraSelf != "" && card.AuraCharges > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf);
        };
        if (card.AuraSelf2 != "" && card.AuraCharges2 > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.AuraSelf2);
        };
        if (card.AuraSelf3 != "" && card.AuraCharges3 > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.AuraSelf3);
        };
        if (card.CurseSelf != "" && card.CurseCharges > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf);
        };
        if (card.CurseSelf2 != "" && card.CurseCharges2 > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.CurseSelf2);
        };
        if (card.CurseSelf3 != "" && card.CurseCharges3 > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.CurseSelf3);
        };
        if (auraSelf != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Gain" : "You gain") + ` ` + auraSelf + `</p>`;
        };
        if (curseSelf != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Suffer" : "You suffer") + ` ` + curseSelf + `</p>`;
        };
        if (card.Heal > 0 && !card.HealSpecialValue1 && !card.HealSpecialValueGlobal) {
            desc += `<p>` + (card.TargetSide == "Self" ? "Self heal" : "Heal") + ` <span style="color: var(--meds-color-heal);">` + card.Heal + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.HealSelf > 0 && !card.HealSelfSpecialValue1 && !card.HealSelfSpecialValueGlobal) {
            desc += `<p>Self heal <span style="color: var(--meds-color-heal);">` + card.HealSelf + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.EnergyRecharge < 0) {
            desc += `<p>Lose <span style="color: var(--meds-color-system);">` + Math.abs(card.EnergyRecharge) + `</span>` + inlineIconHTML("energy") + `</p>`;
        };
        if (card.DamageSides > 0) {
            damageSides += `<span style="color: var(--meds-color-damage);">` + card.DamageSides + `</span>` + inlineIconHTML(card.DamageType);
        };
        if (card.DamageSides2 > 0) {
            damageSides += `<span style="color: var(--meds-color-damage);">` + card.DamageSides2 + `</span>` + inlineIconHTML(card.DamageType2);
        };

        if (damageSides !== "") {
            desc += `<p>Target sides ` + damageSides + `</p>`;
        };
        if (card.HealSides > 0) {
            desc += `<p>Heal sides <span style="color: var(--meds-color-heal);">` + card.HealSides + `</span>` + inlineIconHTML("heal") + `</p>`;
        };

        if (card.KillPet) {
            desc += `<p>Kill hero's pet (<span style="color: var(--meds-color-damage);">you&nbsp;monster!</span>)</p>`;
        };
        // overcharge damage
        if (card.DamageEnergyBonus > 0) {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;Deal&nbsp;<span style="color: var(--meds-color-damage);">` + card.DamageEnergyBonus + `</span>` + inlineIconHTML(card.DamageType) + `</p>`;
        };
        // overcharge auracurse
        auraTarget = "";
        curseTarget = "";
        // I'm pretty sure this could be better. v. repetitive.
        if (card.AcEnergyBonus != "" && card.AcEnergyBonusQuantity > 0) {
            if (card.TargetSide == "Self") {
                // gain / suffer
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                    auraTarget += (auraTarget == "" ? "Gain" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                } else {
                    curseTarget += (curseTarget == "" ? "Suffer" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                };
            } else if (card.TargetSide == "Friend" && Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                // grant
                auraTarget += (auraTarget == "" ? "Grant" : "") + `&nbsp;&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
            } else {
                // apply
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                    auraTarget += (auraTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                } else {
                    curseTarget += (curseTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                };
            };
        };
        if (card.AcEnergyBonus2 != "" && card.AcEnergyBonus2Quantity > 0) {
            if (card.TargetSide == "Self") {
                // gain / suffer
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus2)) {
                    auraTarget += (auraTarget == "" ? "Gain" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                } else {
                    curseTarget += (curseTarget == "" ? "Suffer" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                };
            } else {
                // grant / apply
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus2)) {
                    auraTarget += (auraTarget == "" ? "Grant" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                } else {
                    curseTarget += (curseTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                };
            };
        };
        if (auraTarget != "") {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;` + auraTarget + `</p>`;
        };
        if (curseTarget != "") {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;` + curseTarget + `</p>`;
        };
        // overcharge heal
        if (card.HealEnergyBonus > 0) {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;Heal&nbsp;<span style="color: var(--meds-color-heal);">` + card.HealEnergyBonus + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        var gainText = "";
        var lossText = "";

        if (card.GoldGainQuantity > 0) {
            gainText += card.GoldGainQuantity + inlineIconHTML("gold");
        } else if (card.GoldGainQuantity < 0) {
            lossText += card.GoldGainQuantity + inlineIconHTML("gold");
        };
        if (card.ShardsGainQuantity > 0) {
            if (gainText != "") { gainText += " and " };
            gainText += card.ShardsGainQuantity + inlineIconHTML("shards");
        } else if (card.ShardsGainQuantity < 0) {
            if (lossText != "") { lossText += " and " };
            lossText += card.ShardsGainQuantity + inlineIconHTML("shards");
        };
        if (gainText != "") {
            desc += `<p style="color: var(--meds-color-heal);">Gain ` + gainText + ` per hero</p>`;
        };
        if (lossText != "") {
            desc += `<p style="color: var(--meds-color-damage);">Lose ` + lossText + ` per hero</p>`;
        };
        if (card.EffectRepeatMaxBonus > 1) {
            desc += `<p style="color: var(--meds-color-lasts);">- Repeat up to ` + card.EffectRepeatMaxBonus + ` -</p>`;
        } else if (card.EffectRepeat > 1) {
            if (card.EffectRepeatTarget == "Chain") {
                desc += `<p style="color: var(--meds-color-lasts);">- Chain ` + (card.EffectRepeat - 1) + ` -</p>`;
            } else if (card.EffectRepeatTarget == "NoRepeat") {
                desc += `<p style="color: var(--meds-color-lasts);">- Jump ` + (card.EffectRepeat - 1) + ` (+` + card.EffectRepeatModificator + `%) -</p>`;
            } else {
                desc += `<p style="color: var(--meds-color-lasts);">- Repeat ` + (card.EffectRepeat - 1) + ` -</p>`;
            };
        };
        if (card.IgnoreBlock || card.IgnoreBlock2) {
            desc += `<p style="color: var(--meds-color-repeat);">Ignore block</p>`;
        };
        if (card.SelfKillHiddenSeconds > 0) {
            desc += `<p>Escapes</p>`;
        };
    };
    cardHTML += desc + `</div></div></foreignObject>` + ((!bItem || bEnch) && card.CardClass != "Monster" ? (`<text class="svg-text-energy" x="90" y="105" text-anchor="middle" dominant-baseline="middle">` + card.EnergyCost + `</text>`) : "") + `</g>
                    </svg>`;
    return cardHTML;
};

function inlineIconHTML(iconName) {
    return `<img src="/AtO_images/icon_` + iconName.toLowerCase() + `.png" class="img-fluid" style="max-height: 3rem; position: relative; bottom: 7px;" alt="` + iconName + `"/>`;
};

function generateCardObj() {
    var newCard = {};
    var newItem = {};
    newCard.Aura = $("#select_aura1_target").val();
    newCard.Aura2 = $("#select_aura2_target").val();
    newCard.Aura3 = $("#select_aura3_target").val();
    newCard.AuraCharges = parseIntNoNaN($("#amount_aura1_target").val());
    newCard.AuraCharges2 = parseIntNoNaN($("#amount_aura2_target").val());
    newCard.AuraCharges3 = parseIntNoNaN($("#amount_aura3_target").val());
    newCard.AuraSelf = $("#select_aura1_self").val();
    newCard.AuraSelf2 = $("#select_aura2_self").val();
    newCard.AuraSelf3 = $("#select_aura3_self").val();
    newCard.AutoplayEndTurn = false;
    newCard.AutoplayDraw = false;
    if ($("#select_autoplay").val() == "start") {
        newCard.AutoplayDraw = true;
    } else if ($("#select_autoplay").val() == "end") {
        newCard.AutoplayEndTurn = true;
    };
    newCard.CardUpgraded = $("#select_card_upgraded").val()
    if ($("#select_card_upgraded").val() == "No") {
        newCard.BaseCard = $("#text_id").val();
        newCard.UpgradedFrom = "";
        newCard.UpgradesTo1 = $("#text_upgrades_to_a").val();
        newCard.UpgradesTo2 = $("#text_upgrades_to_b").val();
        newCard.UpgradesToRare = $("#text_upgrades_to_rare").val();
    } else {
        newCard.BaseCard = $("#text_base_card").val();
        newCard.UpgradedFrom = $("#text_base_card").val();
        newCard.UpgradesTo1 = "";
        newCard.UpgradesTo2 = "";
        newCard.UpgradesToRare = "";
    }
    newItem.IsEnchantment = false;
    if (["Weapon", "Armor", "Jewelry", "Accesory", "Pet"].includes($("#select_card_class").val())) {
        // console.log("we have seen cardclass item");
        newCard.CardClass = "Item";
        newCard.CardType = $("#select_card_class").val();
        newCard.CardTypeAux = [];
    } else {
        newCard.CardClass = $("#select_card_class").val();
        if (cardTypes.includes("Enchantment")) { newItem.IsEnchantment = true; };
        if (newCard.CardClass == "Boon" && !cardTypes.includes("Boon")) {
            if (cardTypes[0] == "None") {
                cardTypes[0] = "Boon";
            } else {
                cardTypes.push("Boon");
            };
        };
        if (newCard.CardClass == "Injury" && !cardTypes.includes("Injury")) {
            if (cardTypes[0] == "None") {
                cardTypes[0] = "Injury";
            } else {
                cardTypes.push("Injury");
            };
        };
        if (cardTypes.length == 0) {
            newCard.CardType = "None";
            newCard.CardTypeAux = [];
        } else {
            newCard.CardType = cardTypes[0];
            newCard.CardTypeAux = cardTypes.slice(1);
            if (cardTypes.includes("Melee_Attack") || cardTypes.includes("Ranged_Attack")) { newCard.CardTypeAux[newCard.CardTypeAux.length] = "Attack"; }
            if (cardTypes.includes("Song") || cardTypes.includes("Fire_Spell") || cardTypes.includes("Cold_Spell") || cardTypes.includes("Lightning_Spell") || cardTypes.includes("Mind_Spell") || cardTypes.includes("Shadow_Spell") || cardTypes.includes("Holy_Spell") || cardTypes.includes("Curse_Spell") || cardTypes.includes("Healing_Spell")) { newCard.CardTypeAux[newCard.CardTypeAux.length] = "Spell"; }
        };
    };
    newCard.CardName = $("#text_name").val().trim();
    newCard.CardRarity = $("#select_card_rarity").val();
    newCard.Curse = $("#select_curse1_target").val();
    newCard.Curse2 = $("#select_curse2_target").val();
    newCard.Curse3 = $("#select_curse3_target").val();
    newCard.CurseCharges = parseIntNoNaN($("#amount_curse1_target").val());
    newCard.CurseCharges2 = parseIntNoNaN($("#amount_curse2_target").val());
    newCard.CurseCharges3 = parseIntNoNaN($("#amount_curse3_target").val());
    newCard.CurseSelf = $("#select_curse1_self").val();
    newCard.CurseSelf2 = $("#select_curse2_self").val();
    newCard.CurseSelf3 = $("#select_curse3_self").val();
    newCard.Damage = parseIntNoNaN($("#amount_damage_1_target").val());
    newCard.DamageSelf = parseIntNoNaN($("#amount_damage_1_self").val());
    newCard.DamageSides = parseIntNoNaN($("#amount_damage_1_sides").val());
    newCard.DamageType = $("#select_damage_1_type").val();
    newCard.Damage2 = parseIntNoNaN($("#amount_damage_2_target").val());
    newCard.DamageSelf2 = parseIntNoNaN($("#amount_damage_2_self").val());
    newCard.DamageSides2 = parseIntNoNaN($("#amount_damage_2_sides").val());
    newCard.DamageType2 = $("#select_damage_2_type").val();
    newCard.DamageEnergyBonus = $("#select_repeat").val() == "Overcharge" ? parseIntNoNaN($("#amount_damage_overcharge").val()) : 0;
    newCard.DiscardCard = parseIntNoNaN($("#amount_discard_cards").val());
    newCard.DiscardCardAutomatic = $("#check_discard_random").is(':checked');
    newCard.DiscardCardPlace = $("#select_discard_place").val();
    if (discardCardTypes.length == 0) {
        newCard.DiscardCardType = "None";
        newCard.DiscardCardTypeAux = [];
    } else {
        newCard.DiscardCardType = discardCardTypes[0];
        newCard.DiscardCardTypeAux = discardCardTypes.slice(1);
    };
    newCard.DispelAuras = parseIntNoNaN($("#dispel_auras").val());
    newCard.DrawCard = parseIntNoNaN($("#amount_draw_cards").val());
    newCard.EffectCastCenter = $("#check_effect_cast_center").is(':checked');
    newCard.EffectCaster = $("#select_effect_caster").val();
    newCard.EffectCasterRepeat = $("#check_effect_caster_repeat").is(':checked');
    newCard.EffectPreAction = $("#select_effect_pre_action").val();
    newCard.EffectTarget = $("#select_effect_target").val();
    newCard.EffectTrail = $("#select_effect_trail").val();
    newCard.EffectTrailAngle = $("#select_effect_trail_angle").val();
    newCard.AcEnergyBonus = "";
    newCard.AcEnergyBonusQuantity = 0;
    newCard.AcEnergyBonus2 = "";
    newCard.AcEnergyBonus2Quantity = 0;
    newCard.EffectRepeat = 1;
    newCard.EffectRepeatTarget = "Same";
    newCard.EffectRepeatMaxBonus = 0;
    newCard.EffectRepeatModificator = 0;
    switch ($("#select_repeat").val()) {
        case "NoRepeat":
            break;
        case "RepeatX":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
                newCard.EffectRepeatTarget = $("#select_repeat_target").val();
            };
            break;
        case "RepeatUpToX":
            newCard.EffectRepeatMaxBonus = parseIntNoNaN($("#amount_repeat").val());
            if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
                newCard.EffectRepeatTarget = $("#select_repeat_target").val();
            };
            break;
        case "Chain":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            newCard.EffectRepeatModificator = -50;
            newCard.EffectRepeatTarget = "Chain";
            break;
        case "Jump":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            newCard.EffectRepeatModificator = parseIntNoNaN($("#amount_repeat_modifier").val());
            newCard.EffectRepeatTarget = "NoRepeat";
            break;
        case "Overcharge":
            newCard.AcEnergyBonus = $("#select_auracurse1_overcharge").val();
            newCard.AcEnergyBonusQuantity = parseIntNoNaN($("#amount_auracurse1_overcharge").val());
            newCard.AcEnergyBonus2 = $("#select_auracurse2_overcharge").val();
            newCard.AcEnergyBonus2Quantity = parseIntNoNaN($("#amount_auracurse2_overcharge").val());
            break;
    };
    newCard.EffectRepeatEnergyBonus = newCard.EffectRepeatMaxBonus;
    newCard.EffectTrailRepeat = $("#check_effect_trail_repeat").is(':checked');
    newCard.EnergyCost = parseIntNoNaN($("#amount_energy_cost").val());
    newCard.EnergyRecharge = parseIntNoNaN($("#amount_energy_recharge").val());
    newCard.Heal = parseIntNoNaN($("#amount_healing_target").val());
    newCard.HealAuraCurseName = $("#select_dispel_target").val();
    newCard.HealAuraCurseName2 = $("#select_dispel_target2").val();
    newCard.HealAuraCurseName3 = $("#select_dispel_target3").val();
    newCard.HealAuraCurseName4 = $("#select_dispel_target4").val();
    newCard.HealAuraCurseSelf = $("#select_dispel_self").val();
    newCard.HealCurses = parseIntNoNaN($("#heal_curses").val());
    newCard.HealEnergyBonus = $("#select_repeat").val() == "Overcharge" ? parseIntNoNaN($("#amount_healing_overcharge").val()) : 0;
    newCard.HealSelf = parseIntNoNaN($("#amount_healing_self").val());
    newCard.HealSides = parseIntNoNaN($("#amount_healing_sides").val());
    newCard.ID = $("#text_id").val().trim();
    // console.log("ID: " + newCard.ID);
    newCard.IgnoreBlock = $("#check_ignore_block").is(':checked');
    newCard.IgnoreBlock2 = $("#check_ignore_block2").is(':checked');
    newCard.IncreaseAuras = parseIntNoNaN($("#increase_auras").val());
    newCard.IncreaseCurses = parseIntNoNaN($("#increase_curses").val());
    newCard.ReduceAuras = parseIntNoNaN($("#reduce_auras").val());
    newCard.ReduceCurses = parseIntNoNaN($("#reduce_curses").val());
    newCard.Innate = $("#check_innate").is(':checked');
    newCard.LookCards = parseIntNoNaN($("#amount_look").val());
    newCard.LookCardsDiscardUpTo = parseIntNoNaN($("#amount_look_discard").val());
    newCard.LookCardsVanishUpTo = parseIntNoNaN($("#amount_look_vanish").val());
    newCard.SelfHealthLoss = parseIntNoNaN($("#amount_self_health_loss").val());
    newCard.Sound = $("#select_sound").val();
    newCard.SoundPreAction = $("#select_sound_pre_action").val();
    newCard.SoundPreActionFemale = $("#select_sound_pre_action_female").val();
    newCard.Sprite = $("#text_sprite").val();
    newCard.StealAuras = parseIntNoNaN($("#steal_auras").val());
    newCard.TransferCurses = parseIntNoNaN($("#transfer_curses").val());
    newCard.TargetPosition = "Anywhere";
    newCard.TargetSide = "Anyone";
    newCard.TargetType = "Single";
    switch ($("#select_target_type").val()) {
        case "Anyone":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Anyone";
            newCard.TargetType = "Single";
            break;
        case "Self":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Self";
            newCard.TargetType = "Single";
            break;
        case "AnyHero":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Friend";
            newCard.TargetType = "Single";
            break;
        case "OtherHero":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "FriendNotSelf";
            newCard.TargetType = "Single";
            break;
        case "AnyMonster":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Enemy";
            newCard.TargetType = "Single";
            break;
        case "AllHeroes":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Friend";
            newCard.TargetType = "Global";
            break;
        case "AllMonsters":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Enemy";
            newCard.TargetType = "Global";
            break;
        case "Global":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Anyone";
            newCard.TargetType = "Global";
            break;
    };
    newCard.Vanish = $("#check_vanish").is(':checked');
    newCard.GoldGainQuantity = parseIntNoNaN($("#amount_gold").val());
    newCard.ShardsGainQuantity = parseIntNoNaN($("#amount_shards").val());
    newCard.HealSelfPerDamageDonePercent = parseFloat($("#amount_vampirism").val());
    newCard.EffectRequired = $("#select_requires").val();
    newCard.AuraChargesSpecialValue1 = $("#check_sv1_aura").is(':checked');
    newCard.AuraChargesSpecialValue2 = $("#check_sv2_aura").is(':checked');
    newCard.AuraChargesSpecialValueGlobal = $("#check_sv3_aura").is(':checked');
    newCard.AuraCharges2SpecialValue1 = $("#check_sv1_aura2").is(':checked');
    newCard.AuraCharges2SpecialValue2 = $("#check_sv2_aura2").is(':checked');
    newCard.AuraCharges2SpecialValueGlobal = $("#check_sv3_aura2").is(':checked');
    newCard.AuraCharges3SpecialValue1 = $("#check_sv1_aura3").is(':checked');
    newCard.AuraCharges3SpecialValue2 = $("#check_sv2_aura3").is(':checked');
    newCard.AuraCharges3SpecialValueGlobal = $("#check_sv3_aura3").is(':checked');
    newCard.CurseChargesSpecialValue1 = $("#check_sv1_curse").is(':checked');
    newCard.CurseChargesSpecialValue2 = $("#check_sv2_curse").is(':checked');
    newCard.CurseChargesSpecialValueGlobal = $("#check_sv3_curse").is(':checked');
    newCard.CurseCharges2SpecialValue1 = $("#check_sv1_curse2").is(':checked');
    newCard.CurseCharges2SpecialValue2 = $("#check_sv2_curse2").is(':checked');
    newCard.CurseCharges2SpecialValueGlobal = $("#check_sv3_curse2").is(':checked');
    newCard.CurseCharges3SpecialValue1 = $("#check_sv1_curse3").is(':checked');
    newCard.CurseCharges3SpecialValue2 = $("#check_sv2_curse3").is(':checked');
    newCard.CurseCharges3SpecialValueGlobal = $("#check_sv3_curse3").is(':checked');
    newCard.DamageSpecialValue1 = $("#check_sv1_damage").is(':checked');
    newCard.DamageSpecialValue2 = $("#check_sv2_damage").is(':checked');
    newCard.DamageSpecialValueGlobal = $("#check_sv3_damage").is(':checked');
    newCard.Damage2SpecialValue1 = $("#check_sv1_damage2").is(':checked');
    newCard.Damage2SpecialValue2 = $("#check_sv2_damage2").is(':checked');
    newCard.Damage2SpecialValueGlobal = $("#check_sv3_damage2").is(':checked');
    newCard.HealSelfSpecialValue1 = $("#check_sv1_heal_self").is(':checked');
    newCard.HealSelfSpecialValue2 = $("#check_sv2_heal_self").is(':checked');
    newCard.HealSelfSpecialValueGlobal = $("#check_sv3_heal_self").is(':checked');
    newCard.HealSpecialValue1 = $("#check_sv1_heal").is(':checked');
    newCard.HealSpecialValue2 = $("#check_sv2_heal").is(':checked');
    newCard.HealSpecialValueGlobal = $("#check_sv3_heal").is(':checked');
    newCard.SelfHealthLossSpecialGlobal = $("#check_sv1_health_loss").is(':checked');
    newCard.SelfHealthLossSpecialValue1 = $("#check_sv2_health_loss").is(':checked');
    newCard.SelfHealthLossSpecialValue2 = $("#check_sv3_health_loss").is(':checked');
    newCard.DrawCardSpecialValueGlobal = $("#check_sv3_draw_card").is(':checked');
    newCard.EnergyRechargeSpecialValueGlobal = $("#check_sv3_energy_recharge").is(':checked');
    newCard.SpecialAuraCurseName1 = $("#select_sv1_aura").val();
    newCard.SpecialAuraCurseName2 = $("#select_sv2_aura").val();
    newCard.SpecialAuraCurseNameGlobal = $("#select_sv3_aura").val();
    newCard.SpecialValue1 = $("#select_sv1").val();
    newCard.SpecialValue2 = $("#select_sv2").val();
    newCard.SpecialValueGlobal = $("#select_sv3").val();
    newCard.SpecialValueModifier1 = parseFloat($("#amount_sv1_modifier").val());
    newCard.SpecialValueModifier2 = parseFloat($("#amount_sv2_modifier").val());
    newCard.SpecialValueModifierGlobal = parseFloat($("#amount_sv3_modifier").val());
    newCard.AddCard = parseIntNoNaN($("#amount_add_cards").val());
    newCard.AddCardChoose = parseIntNoNaN($("#amount_add_cards_choose").val());
    newCard.AddCardReducedCost = 0;
    newCard.AddCardCostTurn = false;
    newCard.AddCardFrom = "Deck";
    newCard.AddCardId = "";
    newCard.AddCardList = [];
    newCard.AddCardPlace = "Discard";
    newCard.AddCardType = "None";
    newCard.AddCardTypeAux = [];
    newCard.AddCardVanish = false
    newCard.RelatedCard = "";
    newCard.RelatedCard2 = "";
    newCard.RelatedCard3 = "";
    if (newCard.AddCard > 0) {
        newCard.AddCardChoose = parseIntNoNaN($("#amount_add_cards_choose").val());
        if ($("#select_discover_cost").val() === "nochange") {
        } else if ($("#select_discover_cost").val() === "Free") {
            newCard.AddCardReducedCost = -1;
        } else if ($("#select_discover_cost").val() === "FreeT") {
            newCard.AddCardReducedCost = -1;
            newCard.AddCardCostTurn = true;
        } else if ($("#select_discover_cost").val().slice(-1) == "T") {
            newCard.AddCardReducedCost = parseIntNoNaN($("#select_discover_cost").val().slice(1));
            newCard.AddCardCostTurn = true;
        } else {
            newCard.AddCardReducedCost = parseIntNoNaN($("#select_discover_cost").val());
            newCard.AddCardCostTurn = false;
        };
        if ($("#select_discover_what").val() === "type") {
            if (addCardTypes.length > 1) {
                newCard.AddCardType = addCardTypes[0];
                newCard.AddCardTypeAux = addCardTypes.slice(1);
            } else if (addCardTypes.length === 1) {
                newCard.AddCardType = addCardTypes[0];
                newCard.AddCardTypeAux = addCardTypes.slice(1);
            };
        } else {
            // by card id (e.g. enchant weapons)
            if (addCardList.length > 1) {
                newCard.AddCardList = addCardList;
                newCard.RelatedCard = addCardList[0];
                newCard.RelatedCard2 = addCardList[1];
                if (addCardList.length > 2) { newCard.RelatedCard3 = addCardList[2]; };
            } else if (addCardList.length == 1) {
                newCard.AddCardId = addCardList[0];
                newCard.RelatedCard = addCardList[0];
            };
        };
        newCard.AddCardFrom = $("#select_discover_where_from").val();
        newCard.AddCardPlace = $("#select_discover_where_to").val();
        newCard.AddCardVanish = $("#check_discover_vanish").is(':checked');
    };
    // I think summoning will be difficult, because I suspect that I would need another slot. Could do a jank enchantment version instead, a la blobs?
    newCard.SummonAura = $("#text_summon_aura").val();
    newCard.SummonAura2 = $("#text_summon_aura2").val();
    newCard.SummonAura3 = $("#text_summon_aura3").val();
    newCard.SummonAuraCharges = parseIntNoNaN($("#amount_summon_aura").val());
    newCard.SummonAuraCharges2 = parseIntNoNaN($("#amount_summon_aura2").val());
    newCard.SummonAuraCharges3 = parseIntNoNaN($("#amount_summon_aura3").val());
    newCard.SummonUnit = $("#text_summon_unit").val();
    newCard.SummonUnitNum = parseIntNoNaN($("#amount_summon_unit").val());
    // other, low priority
    newCard.EffectPostCastDelay = parseFloat($("#amount_effect_post_cast_delay").val());
    newCard.EffectPostTargetDelay = parseFloat($("#amount_effect_post_target_delay").val());
    newCard.EffectRepeatDelay = parseFloat($("#amount_effect_repeat_delay").val());
    newCard.EffectTrailSpeed = parseFloat($("#amount_trail_speed").val())
    newCard.IsPetAttack = $("#check_is_pet_attack").is(':checked');
    newCard.IsPetCast = $("#check_is_pet_cast").is(':checked');
    newCard.Lazy = $("#check_lazy").is(':checked');
    newCard.ModifiedByTrait = $("#check_modified_by_trait").is(':checked');
    newCard.MoveToCenter = $("#check_move_to_center").is(':checked');
    newCard.PetFront = $("#check_pet_front").is(':checked');
    newCard.PetInvert = $("#check_pet_invert").is(':checked');
    newCard.PetModel = $("#text_pet_model").val();
    newCard.PetOffset = $("#text_pet_offset").val();
    newCard.PetSize = $("#text_pet_size").val();
    newCard.Playable = (newCard.CardClass == "Boon" || newCard.CardClass == "Injury") ? false : $("#check_playable").is(':checked');
    newCard.PullTarget = parseIntNoNaN($("#amount_pull_target").val());
    newCard.PushTarget = parseIntNoNaN($("#amount_push_target").val());
    newCard.SelfKillHiddenSeconds = parseIntNoNaN($("#amount_self_kill_hidden").val());
    newCard.ShowInTome = $("#check_show_in_tome").is(':checked');
    newCard.Starter = $("#check_starter").is(':checked');
    newCard.Visible = $("#check_visible").is(':checked');
    // probably unnecessary?
    newCard.CardNumber = parseIntNoNaN($("#amount_card_number").val());
    newCard.CardTypeList = []; // #TODO, but probably not
    newCard.Corrupted = $("#check_corrupted").is(':checked'); // #TODO when you do monster cards?
    newCard.Description = "";
    newCard.DescriptionID = ""; // #TODO: DescriptionID
    newCard.EndTurn = $("#check_end_turn").is(':checked');
    newCard.EnergyCostForShow = parseIntNoNaN($("#amount_energy_cost_for_show").val());
    newCard.EnergyReductionPermanent = parseIntNoNaN($("#amount_energy_reduction_permanent").val());
    newCard.EnergyReductionTemporal = parseIntNoNaN($("#amount_energy_reduction_temporal").val());
    newCard.EnergyReductionToZeroPermanent = $("#check_energy_reduction_to_zero_permanent").is(':checked');
    newCard.EnergyReductionToZeroTemporal = $("#check_energy_reduction_to_zero_temporal").is(':checked');
    newCard.ExhaustCounter = parseIntNoNaN($("#amount_exhaust_counter").val());
    newCard.FlipSprite = $("#check_flip_sprite").is(':checked');
    newCard.Fluff = $("#text_fluff").val();
    newCard.FluffPercent = parseFloat($("#amount_fluff_percent").val());
    newCard.KillPet = $("#check_kill_pet").is(':checked');
    newCard.MaxInDeck = parseIntNoNaN($("#amount_max_in_deck").val());
    newCard.OnlyInWeekly = $("#check_only_in_weekly").is(':checked');
    newCard.Sku = $("#text_sku").val();
    newItem.ACG1MultiplyByEnergyUsed = $("#check_acg1multiplybyenergyused").is(':checked');
    newItem.ACG2MultiplyByEnergyUsed = $("#check_acg2multiplybyenergyused").is(':checked');
    newItem.ACG3MultiplyByEnergyUsed = $("#check_acg3multiplybyenergyused").is(':checked');
    newItem.DTTMultiplyByEnergyUsed = $("#check_dttmultiplybyenergyused").is(':checked');
    newItem.DrawMultiplyByEnergyUsed = $("#check_drawmultiplybyenergyused").is(':checked');
    newItem.UsedEnergy = (newItem.ACG1MultiplyByEnergyUsed || newItem.ACG2MultiplyByEnergyUsed || newItem.ACG3MultiplyByEnergyUsed || newItem.DTTMultiplyByEnergyUsed || newItem.DrawMultiplyByEnergyUsed);

    newItem.ActivationOnlyOnHeroes = false; // would only be used for monster cards?
    newItem.AuraCurseBonus1 = $("#select_auracursebonus1").val();
    newItem.AuraCurseBonusValue1 = parseIntNoNaN($("#amount_auracursebonusvalue1").val());
    newItem.AuraCurseBonus2 = $("#select_auracursebonus2").val();
    newItem.AuraCurseBonusValue2 = parseIntNoNaN($("#amount_auracursebonusvalue2").val());
    newItem.AuraCurseCustomAC = $("#select_auracursecustomac").val();
    newItem.AuraCurseCustomString = "";
    newItem.AuraCurseCustomModValue1 = 0;
    newItem.AuraCurseCustomModValue2 = 0;
    if ($("#select_auracursecustom").val() === "healingresist") {
        newItem.AuraCurseCustomString = "itemCustomTextAllResistHealingReceived";
        newItem.AuraCurseCustomModValue1 = parseIntNoNaN($("#amount_auracursecustomresistances").val());
        newItem.AuraCurseCustomModValue2 = parseIntNoNaN($("#amount_auracursecustomhealing").val());
    } else if ($("#select_auracursecustom").val() === "maxcharges") {
        newItem.AuraCurseCustomModValue1 = parseIntNoNaN($("#amount_auracursecustommaxcharges").val());
        if ($("#select_auracursecustomac").val() === "Dark") {
            newItem.AuraCurseCustomString = "itemCustomTextExplodeChargesMonsters";
        } else if (Object.keys(Enums.Aura).includes($("#select_auracursecustomac").val())) {
            newItem.AuraCurseCustomString = "itemCustomTextMaxChargesIncrasedOnHeroes";
        } else if (Object.keys(Enums.Curse).includes($("#select_auracursecustomac").val())) {
            newItem.AuraCurseCustomString = "itemCustomTextMaxChargesIncrasedOnEnemies";
        };
    };
    newItem.AuraCurseGain1 = $("#select_auracursegain1").val();
    newItem.AuraCurseGain2 = $("#select_auracursegain2").val();
    newItem.AuraCurseGain3 = $("#select_auracursegain3").val();
    newItem.AuraCurseGainSelf1 = $("#select_auracursegainself1").val();
    newItem.AuraCurseGainSelf2 = $("#select_auracursegainself2").val();
    newItem.AuraCurseGainSelfValue1 = parseIntNoNaN($("#amount_auracursegainselfvalue1").val());
    newItem.AuraCurseGainSelfValue2 = parseIntNoNaN($("#amount_auracursegainselfvalue2").val());
    newItem.AuraCurseGainValue1 = parseIntNoNaN($("#amount_auracursegainvalue1").val());
    newItem.AuraCurseGainValue2 = parseIntNoNaN($("#amount_auracursegainvalue2").val());
    newItem.AuraCurseGainValue3 = parseIntNoNaN($("#amount_auracursegainvalue3").val());
    newItem.AuraCurseImmune1 = $("#select_auracurseimmune1").val();
    newItem.AuraCurseImmune2 = $("#select_auracurseimmune2").val();
    newItem.CardNum = parseIntNoNaN($("#amount_cardnum").val());
    newItem.CardPlace = $("#select_carditem_cardplace").val();
    newItem.DuplicateActive = false;
    newItem.CastEnchantmentOnFinishSelfCast = false;
    newItem.CardToGain = "";
    newItem.CardToGainList = [];
    newItem.CardToGainType = $("#select_cardtogaintype").val();

    if ($("#select_cardtogainwhat").val() === "duplicate") {
        newItem.CardPlace = "Hand";
        newItem.DuplicateActive = true;
        newItem.CastEnchantmentOnFinishSelfCast = true;
    } else if ($("#select_cardtogainwhat").val() === "list") {
        newItem.CardPlace = $("#select_carditem_cardplace").val();

        if (addCardList.length > 1) {
            newCard.AddCardList = addCardList;
        } else if (addCardList.length == 1) {
            newCard.AddCardId = addCardList[0];
            newCard.RelatedCard = addCardList[0];
        };

        if (cardToGainList.length > 1) {
            newItem.CardToGainList = cardToGainList;
            newCard.RelatedCard = cardToGainList[0];
            newCard.RelatedCard2 = cardToGainList[1];
            if (cardToGainList.length > 2) { newCard.RelatedCard3 = cardToGainList[2]; };
        } else if (cardToGainList.length > 0) {
            newItem.CardToGain = cardToGainList[0];
            newCard.RelatedCard = cardToGainList[0];
        };
    } else {
        newItem.CardPlace = $("#select_carditem_cardplace").val();
    };
    if (newItem.CardPlace == null) { newItem.CardPlace = "Hand" };

    newItem.CostReduction = 0;
    newItem.Vanish = $("#check_cardtogain_vanish").is(':checked');
    newItem.Permanent = false;
    newItem.CostZero = false;
    if ($("#select_cardtogain_costreduction").val() === "nochange") {
    } else if ($("#select_cardtogain_costreduction").val() === "Free") {
        newItem.CostZero = true;
        newItem.Permanent = true;
    } else if ($("#select_cardtogain_costreduction").val() === "FreeT") {
        newItem.CostZero = true;
    } else if ($("#select_cardtogain_costreduction").val().slice(-1) == "T") {
        newItem.CostReduction = parseIntNoNaN($("#select_cardtogain_costreduction").val().slice(1));
    } else {
        newItem.CostReduction = parseIntNoNaN($("#select_cardtogain_costreduction").val());
        newItem.Permanent = true;
    };


    newItem.CardToReduceType = $("#select_cardtoreducetype").val();
    newItem.CardsReduced = parseIntNoNaN($("#amount_cardsreduced").val());
    newItem.CostReduceReduction = parseIntNoNaN($("#amount_costreducereduction").val());
    newItem.CostReduceEnergyRequirement = parseIntNoNaN($("#amount_costreduceenergyrequirement").val());
    newItem.ReduceHighestCost = $("#check_reducehighestcost").is(':checked');
    newItem.CostReducePermanent = $("#check_costreducepermanent").is(':checked');

    newItem.EnergyQuantity = parseIntNoNaN($("#amount_energyquantity").val());
    newItem.SpriteBossDrop = ""; // #TODO maybe custom Obeliskial image later?
    newItem.AuraCurseNumForOneEvent = 0;
    newItem.AuraCurseSetted = "";
    newItem.CastedCardType = "None";
    newItem.RoundCycle = 0;
    newItem.EmptyHand = false;
    newItem.ExactRound = 0;
    var sActivation = $("#select_activation").val();
    newItem.ItemTarget = $("#select_itemtarget").val();
    newItem.LowerOrEqualPercentHP = parseIntNoNaN($("#amount_lowerorequalpercenthp").val());
    newItem.TimesPerCombat = parseIntNoNaN($("#amount_timespercombat").val());
    newItem.TimesPerTurn = parseIntNoNaN($("#amount_timesperturn").val());
    newItem.DestroyEndOfTurn = false;
    newItem.DestroyStartOfTurn = false;
    if ($("#select_activation_destroy").val() === "end") {
        // destroy for items only
        newItem.DestroyAfterUse = false;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
        newItem.DestroyEndOfTurn = true;
    } else if ($("#select_activation_destroy").val() === "start") {
        // destroy for items only
        newItem.DestroyAfterUse = false;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
        newItem.DestroyStartOfTurn = true;
    } else if ($("#select_activation_destroy").val() === "afterx") {
        // destroy for items only
        newItem.DestroyAfterUse = newItem.IsEnchantment ? false : true;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
    } else {
        newItem.DestroyAfterUse = false;
        newItem.DestroyAfterUses = 0;
    };
    newItem.UseTheNextInsteadWhenYouPlay = (newItem.IsEnchantment && sActivation === "FinishCast" && newItem.DestroyAfterUses > 0);
    newItem.ChanceToDispel = parseIntNoNaN($("#amount_chancetodispel").val());
    newItem.ChanceToDispelNum = parseIntNoNaN($("#amount_chancetodispelnum").val());

    newItem.CharacterStatModified = "None";
    newItem.CharacterStatModified2 = "None";
    newItem.CharacterStatModified3 = "None";
    newItem.CharacterStatModifiedValue = 0;
    newItem.CharacterStatModifiedValue2 = 0;
    newItem.CharacterStatModifiedValue3 = 0;
    if ($("#amount_characterstatspeed").val() != 0) {
        newItem.CharacterStatModified = "Speed";
        newItem.CharacterStatModifiedValue = parseIntNoNaN($("#amount_characterstatspeed").val());
        if ($("#amount_characterstatenergyperturn").val() != 0) {
            newItem.CharacterStatModified2 = "EnergyTurn";
            newItem.CharacterStatModifiedValue2 = parseIntNoNaN($("#amount_characterstatenergyperturn").val());
        };
    } else if ($("#amount_characterstatenergyperturn").val() != 0) {
        newItem.CharacterStatModified = "EnergyTurn";
        newItem.CharacterStatModifiedValue = parseIntNoNaN($("#amount_characterstatenergyperturn").val());
    };
    newItem.CursedItem = $("#check_curseditem").is(':checked');
    newItem.DamageFlatBonus = $("#select_damageflatbonus").val();
    // console.log($("#select_damageflatbonus").val());
    // console.log(newItem.DamageFlatBonus);
    newItem.DamageFlatBonus2 = $("#select_damageflatbonus2").val();
    newItem.DamageFlatBonus3 = $("#select_damageflatbonus3").val();
    newItem.DamageFlatBonusValue = parseIntNoNaN($("#amount_damageflatbonusvalue").val());
    newItem.DamageFlatBonusValue2 = parseIntNoNaN($("#amount_damageflatbonusvalue2").val());
    newItem.DamageFlatBonusValue3 = parseIntNoNaN($("#amount_damageflatbonusvalue3").val());
    if ((newItem.DamageFlatBonus == "None" || newItem.DamageFlatBonusValue == 0) && newItem.DamageFlatBonus2 != "None" && newItem.DamageFlatBonusValue2 != 0) {
        //damage1 not used, damage2 used
        newItem.DamageFlatBonus = newItem.DamageFlatBonus2;
        newItem.DamageFlatBonusValue = newItem.DamageFlatBonusValue2;
        newItem.DamageFlatBonus2 = "None";
        newItem.DamageFlatBonusValue2 = 0;
    };
    if ((newItem.DamageFlatBonus == "None" || newItem.DamageFlatBonusValue == 0) && newItem.DamageFlatBonus3 != "None" && newItem.DamageFlatBonusValue3 != 0) {
        //damage1 not used, damage3 used
        newItem.DamageFlatBonus = newItem.DamageFlatBonus3;
        newItem.DamageFlatBonusValue = newItem.DamageFlatBonusValue3;
        newItem.DamageFlatBonus3 = "None";
        newItem.DamageFlatBonusValue3 = 0;
    };
    if ((newItem.DamageFlatBonus2 == "None" || newItem.DamageFlatBonusValue2 == 0) && newItem.DamageFlatBonus3 != "None" && newItem.DamageFlatBonusValue3 != 0) {
        //damage2 not used, damage3 used
        newItem.DamageFlatBonus2 = newItem.DamageFlatBonus3;
        newItem.DamageFlatBonusValue2 = newItem.DamageFlatBonusValue3;
        newItem.DamageFlatBonus3 = "None";
        newItem.DamageFlatBonusValue3 = 0;
    };
    newItem.DamagePercentBonus = $("#select_damagepercentbonus").val();
    newItem.DamagePercentBonus2 = $("#select_damagepercentbonus2").val();
    newItem.DamagePercentBonus3 = $("#select_damagepercentbonus3").val();
    newItem.DamagePercentBonusValue = parseIntNoNaN($("#amount_damagepercentbonusvalue").val());
    newItem.DamagePercentBonusValue2 = parseIntNoNaN($("#amount_damagepercentbonusvalue2").val());
    newItem.DamagePercentBonusValue3 = parseIntNoNaN($("#amount_damagepercentbonusvalue3").val());
    if ((newItem.DamagePercentBonus == "None" || newItem.DamagePercentBonusValue == 0) && newItem.DamagePercentBonus2 != "None" && newItem.DamagePercentBonusValue2 != 0) {
        //damage1 not used, damage2 used
        newItem.DamagePercentBonus = newItem.DamagePercentBonus2;
        newItem.DamagePercentBonusValue = newItem.DamagePercentBonusValue2;
        newItem.DamagePercentBonus2 = "None";
        newItem.DamagePercentBonusValue2 = 0;
    };
    if ((newItem.DamagePercentBonus == "None" || newItem.DamagePercentBonusValue == 0) && newItem.DamagePercentBonus3 != "None" && newItem.DamagePercentBonusValue3 != 0) {
        //damage1 not used, damage3 used
        newItem.DamagePercentBonus = newItem.DamagePercentBonus3;
        newItem.DamagePercentBonusValue = newItem.DamagePercentBonusValue3;
        newItem.DamagePercentBonus3 = "None";
        newItem.DamagePercentBonusValue3 = 0;
    };
    if ((newItem.DamagePercentBonus2 == "None" || newItem.DamagePercentBonusValue2 == 0) && newItem.DamagePercentBonus3 != "None" && newItem.DamagePercentBonusValue3 != 0) {
        //damage2 not used, damage3 used
        newItem.DamagePercentBonus2 = newItem.DamagePercentBonus3;
        newItem.DamagePercentBonusValue2 = newItem.DamagePercentBonusValue3;
        newItem.DamagePercentBonus3 = "None";
        newItem.DamagePercentBonusValue3 = 0;
    };
    newItem.DamageToTarget = parseIntNoNaN($("#amount_damagetotarget").val());
    newItem.DamageToTargetType = $("#select_damagetotargettype").val();
    newItem.DrawCards = parseIntNoNaN($("#amount_drawcards").val());
    newItem.DropOnly = $("#check_droponly").is(':checked');
    newItem.EffectCasterDelay = parseFloat($("#amount_effect_caster_delay").val());
    newItem.EffectTargetDelay = parseFloat($("#amount_effect_target_delay").val());

    newItem.HealFlatBonus = parseIntNoNaN($("#amount_healflatbonus").val());
    newItem.HealPercentBonus = parseIntNoNaN($("#amount_healpercentbonus").val());
    newItem.HealPercentQuantity = parseIntNoNaN($("#amount_healpercentquantity").val());
    newItem.HealPercentQuantitySelf = parseIntNoNaN($("#amount_healpercentquantityself").val());
    newItem.HealQuantity = parseIntNoNaN($("#amount_healquantity").val());
    newItem.HealReceivedFlatBonus = parseIntNoNaN($("#amount_healreceivedflatbonus").val());
    newItem.HealReceivedPercentBonus = parseIntNoNaN($("#amount_healreceivedpercentbonus").val());
    newItem.MaxHealth = parseIntNoNaN($("#amount_maxhealth").val());
    newItem.ModifiedDamageType = $("#select_modifieddamagetype").val();
    newItem.OnlyAddItemToNPCs = $("#check_onlyadditemtonpcs").is(':checked');
    newItem.PassSingleAndCharacterRolls = $("#check_passsingleandcharacterrolls").is(':checked');
    newItem.PercentDiscountShop = parseIntNoNaN($("#amount_percentdiscountshop").val());
    newItem.PercentRetentionEndGame = parseIntNoNaN($("#amount_percentretentionendgame").val());
    newItem.QuestItem = $("#check_questitem").is(':checked');
    newItem.ResistModified1 = $("#select_resistmodified1").val()
    newItem.ResistModified2 = $("#select_resistmodified2").val()
    newItem.ResistModified3 = $("#select_resistmodified3").val()
    newItem.ResistModifiedValue1 = parseIntNoNaN($("#amount_resistmodifiedvalue1").val());
    newItem.ResistModifiedValue2 = parseIntNoNaN($("#amount_resistmodifiedvalue2").val());
    newItem.ResistModifiedValue3 = parseIntNoNaN($("#amount_resistmodifiedvalue3").val());
    switch (sActivation) {
        case "AuraCurseSet":
            newItem.Activation = sActivation;
            newItem.AuraCurseNumForOneEvent = parseIntNoNaN($("#amount_auracursenumforoneevent").val());
            newItem.AuraCurseSetted = $("#select_auracursesetted").val();
            newItem.RoundCycle = 0;
            newItem.ExactRound = 0;
            break;
        case "BeginTurn":
            if ($("#select_carditem_cardplace").val() === "Deck") {
                newItem.Activation = "BeginTurnAboutToDealCards";
            } else if ($("#select_carditem_cardplace").val() === "Cast") {
                newItem.Activation = "BeginTurn";
            } else {
                newItem.Activation = "BeginTurnCardsDealt";
            };
            if ($("#select_activation_roundcycle").val() === "onx") {
                newItem.ExactRound = parseIntNoNaN($("#amount_roundcycle").val());
            } else if ($("#select_activation_roundcycle").val() === "everyx") {
                newItem.RoundCycle = parseIntNoNaN($("#amount_roundcycle").val());
            };
            break;
        case "BeginRound":
        // if corruption card, CorruptionBeginRound
        case "EndRound":
        case "EndTurn":
            newItem.Activation = sActivation;
            if ($("#select_activation_roundcycle").val() === "onx") {
                newItem.ExactRound = parseIntNoNaN($("#amount_roundcycle").val());
            } else if ($("#select_activation_roundcycle").val() === "everyx") {
                newItem.RoundCycle = parseIntNoNaN($("#amount_roundcycle").val());
            };
            break;
        case "CastCard":
        case "FinishCast":
            newItem.CastedCardType = $("#select_castedcardtype").val();
            if (newItem.DuplicateActive) {
                newItem.Activation = "PreFinishCast";
            } else if (newItem.CardNum > 0) {
                newItem.Activation = "FinishFinishCast";
            } else {
                newItem.Activation = "FinishCast";
            };
            break;
        case "medsEmptyHand":
            newItem.Activation = "FinishCast";
            newItem.EmptyHand = true;
            break;
        case "BeginCombat":
            if ((newItem.AuraCurseGain1 !== "" && newItem.AuraCurseGainValue1 !== 0) || (newItem.AuraCurseGain2 !== "" && newItem.AuraCurseGainValue2 !== 0) || (newItem.AuraCurseGain3 !== "" && newItem.AuraCurseGainValue3 !== 0) || (newItem.AuraCurseGainSelf1 !== "" && newItem.AuraCurseGainSelfValue1 !== 0) || (newItem.AuraCurseGainSelf2 !== "" && newItem.AuraCurseGainSelfValue2 !== 0) || (newItem.CardNum > 0) || (newItem.CostReduceReduction !== 0 && newItem.CardsReduced !== 0) || (newItem.EnergyQuantity !== 0) || (newItem.DrawCards !== 0) || (newItem.ChanceToDispel > 0 && newItem.ChanceToDispelNum !== 0) || (newItem.DamageToTarget > 0 && newItem.DamageToTargetType !== "None") || (newItem.HealQuantity !== 0) || (newItem.HealPercentQuantity !== 0)) {
                newItem.Activation = sActivation;
            } else {
                newItem.Activation = "PreBeginCombat";
            };
            break;
        case "Hitted":
        case "Damaged":
        case "Hit":
        case "Damage":
        case "Block":
        case "Blocked":
        case "Evade":
        case "Evaded":
        case "Heal":
        case "Healed":
        case "Killed":
        case "None":
        case "BeginCombatEnd":
            newItem.Activation = sActivation;
            // if corruption card, CorruptionCombatStart
            // PreBeginCombat is used in vanilla for things that don't have an actual effect, just passive stats, but idgaf
            break;
    };
    newItem.NotShowCharacterBonus = (newItem.AuraCurseSetted.length > 0 && newItem.AuraCurseNumForOneEvent > 0);
    // NaN checks?
    Object.keys(newCard).forEach((key) => {
        // console.log("KEY :" + key + " TYPE: " + typeof newCard[key]);
        if (typeof newCard[key] === typeof 0 && isNaN(newCard[key])) { newCard[key] = defaultCard[key] };
    });
    Object.keys(newItem).forEach((key) => {
        if (typeof newItem[key] === typeof 0 && isNaN(newItem[key])) { newItem[key] = defaultItem[key] };
    });

    itemObj = newItem;
    newCard.Item = "";
    newCard.ItemEnchantment = "";
    if (Object.entries(newItem).sort().toString() !== Object.entries(defaultItem).sort().toString() && (newCard.CardClass == "Item" || newCard.CardType == "Enchantment" || newCard.CardTypeAux.includes("Enchantment"))) {
        newItem.EffectCaster = $("#select_effect_caster").val();
        newItem.EffectItemOwner = $("#select_effectitemowner").val();
        newItem.EffectTarget = $("#select_effect_target").val();
        newItem.ID = $("#text_id").val().trim();
        newItem.ItemSound = $("#select_sound").val();
        //console.log("DIFFERENT!!!!!");
        //console.log(Object.entries(newItem).sort().toString());
        //console.log(Object.entries(defaultItem).sort().toString());
        if (newItem.IsEnchantment) {
            newCard.ItemEnchantment = JSON.stringify(newItem);
            newCard.Playable = true; // enchantments always playable! this prevents issues w/ copying them from monster cards
            // newCard.Corrupted = false; // likewise
        } else {
            newCard.Playable = false; // items never playable!
            newCard.Item = JSON.stringify(newItem);
        };

    };

    // console.log("ID4: " + newCard.ID);
    return newCard;
};

function neverBlank(str) {
    return (str === "" ? " " : str);
};

function neverBlankName(str) {
    return (str === "" ? "(no name)" : str);
};

function getMenuCardHTML(card) {
    //
    /*
    // name + download + delete
    var newMenuCardHTML = `<div class="input-group flex-nowrap mt--1 b-t-0">
        <button class="btn btn-lg b-t-0 btn-outline-card-` + card.CardUpgraded.toLowerCase() + (neverBlank(card.ID) === neverBlank(cardObj.ID) ? " active" : "") + ` w-100" type="button" hover-card-id="` + neverBlank(card.ID) + `">` + neverBlankName(card.CardName) + `</button>
        <button class="btn btn-lg b-t-0 btn-success" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Download" download-card-id="` + neverBlank(card.ID) + `"><i class="bi bi-download"></i></button>
        <button class="btn btn-lg b-t-0 btn-danger" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete" delete-card-id="` + neverBlank(card.ID) + `"><i class="bi bi-trash3-fill"></i></button>
    </div>`;


        <div class="input-group flex-nowrap mt--1">
            <button class="btn btn-lg btn-outline-card-no btn-outline-light active w-100" type="button">Elemental Proliferation</button>
            <button class="btn btn-lg btn-outline-card-a" type="button">A</button>
            <button class="btn btn-lg btn-outline-card-b" type="button">B</button>
            <button class="btn btn-lg btn-outline-card-rare" type="button">C</button>
        </div>
    */

    // disable button if
    var newMenuCardHTML = `<div class="input-group flex-nowrap mt--1 b-t-0">`;
    var upgradeA = "";
    var upgradeB = "";
    var upgradeRare = "";
    if (card.CardUpgraded === "No") {
        // this is the base card
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-no` + (card.ID === cardObj.ID ? " active" : "") + ` w-100" type="button" hover-card-id="` + neverBlank(card.ID) + `">` + neverBlankName(card.CardName) + `</button>`;
        cardsAdded.push(card.ID);
        upgradeA = card.UpgradesTo1;
        upgradeB = card.UpgradesTo2;
        upgradeRare = card.UpgradesToRare;
    } else {
        if (card.BaseCard.length > 0 && customCards.hasOwnProperty(card.BaseCard)) {
            // base card exists
            newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-no` + (card.BaseCard === cardObj.ID ? " active" : "") + ` w-100" type="button" hover-card-id="` + card.BaseCard + `">` + neverBlankName(card.CardName) + `</button>`;
            cardsAdded.push(card.BaseCard);
            upgradeA = customCards[card.BaseCard].UpgradesTo1;
            upgradeB = customCards[card.BaseCard].UpgradesTo2;
            upgradeRare = customCards[card.BaseCard].UpgradesToRare;
        } else {
            // base card does not exist
            newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-no text-secondary w-100" type="button">` + neverBlankName(card.CardName) + `</button>`;
        };
    };
    if (card.CardUpgraded === "A") {
        // this card is upgradeA
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-a` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">A</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeA.length > 0 && customCards.hasOwnProperty(upgradeA)) {
        // upgradeA exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-a` + (upgradeA === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeA + `">A</button>`;
        cardsAdded.push(upgradeA);
    } else {
        // upgradeA does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-a text-secondary" type="button">A</button>`;
    };
    if (card.CardUpgraded === "B") {
        // this card is upgradeB
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-b` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">B</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeB.length > 0 && customCards.hasOwnProperty(upgradeB)) {
        // upgradeB exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-b` + (upgradeB === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeB + `">B</button>`;
        cardsAdded.push(upgradeB);
    } else {
        // upgradeB does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-b text-secondary" type="button">B</button>`;
    };

    if (card.CardUpgraded === "Rare") {
        // upgradeRare is this card
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-rare` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">C</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeRare.length > 0 && customCards.hasOwnProperty(upgradeRare)) {
        // upgradeRare exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-rare` + (upgradeRare === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeRare + `">C</button>`;
        cardsAdded.push(upgradeRare);
    } else {
        // upgradeRare does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-rare text-secondary" type="button">C</button>`;
    };

    newMenuCardHTML += `</div>`;
    return newMenuCardHTML;
};

async function getNewCardObjects() {
    uploadingCards = {};
    uploadingSprites = {};
    var first = true;
    var newCardObj = defaultCard;
    $("#btn_new_card_create").html("Create");
    $("#label_new_card_json_invalid").addClass("visually-hidden");
    const promises = [];
    const promisedSprites = [];
    var promisedSpriteNames = [];
    var incomingPromiseCardType = "card";
    var otherDone = false;
    /*// wait for all new cards to be added to the array
    await new Promise((resolve, reject) => {

    })*/
    if ($("#radio_new_card_vanilla").prop("checked")) {
        await addVanillaCard($("#select_new_card_vanilla").val());
        if (vanillaCards.hasOwnProperty($("#select_new_card_vanilla").val())) {
            // card has already been downloaded
            newCardObj = vanillaCards[$("#select_new_card_vanilla").val()];
            if (newCardObj.UpgradesTo1.length > 0) {
                await addVanillaCard(newCardObj.UpgradesTo1);
            };
            if (newCardObj.UpgradesTo2.length > 0) {
                await addVanillaCard(newCardObj.UpgradesTo2);
            };
            if (newCardObj.UpgradesToRare.length > 0) {
                await addVanillaCard(newCardObj.UpgradesToRare);
            };
            promises.push(newCardObj);
            if (newCardObj.UpgradesTo1.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1)) {
                promises.push(vanillaCards[newCardObj.UpgradesTo1]);
            };
            if (newCardObj.UpgradesTo2.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2)) {
                promises.push(vanillaCards[newCardObj.UpgradesTo2]);
            };
            if (newCardObj.UpgradesToRare.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare)) {
                promises.push(vanillaCards[newCardObj.UpgradesToRare]);
            };
        };
    } else if ($("#radio_new_card_custom").prop("checked") && customCards.hasOwnProperty($("#select_new_card_custom").val())) {
        newCardObj = customCards[$("#select_new_card_custom").val()];
        promises.push(newCardObj);
        if (newCardObj.UpgradesTo1.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesTo1)) {
            promises.push(customCards[newCardObj.UpgradesTo1]);
        };
        if (newCardObj.UpgradesTo2.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesTo2)) {
            promises.push(customCards[newCardObj.UpgradesTo2]);
        };
        if (newCardObj.UpgradesToRare.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesToRare)) {
            promises.push(customCards[newCardObj.UpgradesToRare]);
        };
    } else if ($("#radio_new_card_upload").prop("checked")) {
        incomingPromiseCardType = "text";
        for (var a = 0; a < $("#file_new_card_upload")[0].files.length; a++) {
            if ($("#file_new_card_upload")[0].files[a].type == "application/zip" || $("#file_new_card_upload")[0].files[a].type == "application/zip-compressed" || $("#file_new_card_upload")[0].files[a].type == "application/x-zip-compressed" || $("#file_new_card_upload")[0].files[a].type == "application/x-zip") {
                await JSZip.loadAsync($("#file_new_card_upload")[0].files[a]).then(function (incomingZip) {
                    incomingZip.forEach(async function (relativePath, file) {
                        if (file.name.length > 4 && file.name.slice(-5).toLowerCase() == ".json") {
                            try {
                                promises.push(file.async("text"));
                            } catch (err) {
                                console.log("Error parsing JSON in zip file: " + relativePath);
                            };
                        } else if (file.name.length > 3 && file.name.slice(-4).toLowerCase() == ".png") {
                            try {
                                var spriteName = file.name.toLowerCase().replace(".png", "")
                                if (spriteName.lastIndexOf("/") > 0) {
                                    spriteName = spriteName.slice(spriteName.lastIndexOf("/") + 1);
                                };
                                promisedSpriteNames.push(spriteName);
                                promisedSprites.push(file.async("base64"));
                            } catch (err) {
                                console.log("Error parsing PNG in zip file: " + relativePath);
                            };
                        };
                    });
                }, function (err) {
                    console.log("Error reading zip: " + $("#file_new_card_upload")[0].files[a].name);
                });
            } else if ($("#file_new_card_upload")[0].files[a].type == "application/json" || $("#file_new_card_upload")[0].files[a].type == "text/plain") {
                const fileText = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = async () => {
                        resolve(reader.result);
                    };
                    reader.onerror = async (err) => {
                        console.log("Error reading file: " + $("#file_new_card_upload")[0].files[a].name);
                        reject(err);
                    };
                    reader.readAsText($("#file_new_card_upload")[0].files[a]);
                });
                try {
                    promises.push(fileText);
                } catch (err) {
                    console.log("Error parsing JSON in file: " + $("#file_new_card_upload")[0].files[a].name);
                };
            } else if ($("#file_new_card_upload")[0].files[a].type == "image/png") {
                //#TODO: png (though why would they put it here)

            } else {
                console.log("Unknown type of file: " + $("#file_new_card_upload")[0].files[a].name);
                continue;
            };
        };
    } else if ($("#radio_new_card_json").prop("checked")) {
        try {
            promises.push(cardCaseClean(JSON.parse($("#text_new_card_json").val())));
        } catch {
            $("#label_new_card_json_invalid.visually-hidden").removeClass("visually-hidden");
        };
    } else {
        promises.push(defaultCard);
    };
    Promise.all(promisedSprites).then(async (newSprites) => {
        uploadingSprites = {};
        if (newSprites.length < 1)
            return;
        for (var a = 0; a < newSprites.length; a++) {
            uploadingSprites[promisedSpriteNames[a]] = await resizeAndBlob("data:image/png;base64," + newSprites[a], 256, 256);
        };
        if (otherDone) {
            generateCardSVG(newCardObj).then((newCardSVG) => {
                var newCardHTML = `<div>` + newCardSVG + `</div><div class="d-flex mt-1 mx-auto">`;
                var more = Object.keys(uploadingCards).length - 1;
                if (newCardObj.UpgradesTo1.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo1) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo1))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_a" src="/AtO_images/icon_upgrade_a.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo1 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade A"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesTo2.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo2) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo2))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_b" src="/AtO_images/icon_upgrade_b.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo2 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade B"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesToRare.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesToRare) || vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare) || uploadingCards.hasOwnProperty(newCardObj.UpgradesToRare))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_rare" src="/AtO_images/icon_upgrade_rare.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesToRare + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade Rare"/>`;
                    more = more - 1;
                };
                newCardHTML += `</div>`;
                if (more > 0) {
                    newCardHTML += `<div class="mx-auto w-100 text-center">... and ` + more + ` more!</div>`;
                    // #TODO: it would be nice to instead have these listed out (rhs of card?) and hoverable.
                };
                $("#svg_card_new [hover-card-id]").popover("dispose");
                $("#svg_card_new").html(newCardHTML);
                boxfitCard("#svg_card_new");
                if ($("#svg_card_new [hover-card-id]").length > 0) {
                    setupHoverCards("#svg_card_new", "nothing");
                };
            });
        } else {
            otherDone = true;
        };
    });
    Promise.all(promises).then((newCards) => {
        uploadingCards = {};
        if (newCards.length < 1)
            return;
        var first = true;
        for (var a = 0; a < newCards.length; a++) {
            if (incomingPromiseCardType === "text") {
                newCards[a] = cardCaseClean(JSON.parse(newCards[a]));
            };
            if (newCards[a].hasOwnProperty("ID")) {
                uploadingCards[newCards[a].ID] = Object.assign({}, newCards[a]);
                if (first) {
                    newCardObj = newCards[a];
                    first = false;
                };
            };
        };
        if (customCards.hasOwnProperty(newCardObj.ID)) {
            // card already exists!
            newCardObj = customCards[newCardObj.ID];
            $("#btn_new_card_create").html(`Show in Editor`);
            if ($("#radio_new_card_custom").prop("checked")) {
                $("#btn_new_card_overwrite").addClass("visually-hidden");
            } else {
                $("#btn_new_card_overwrite.visually-hidden").removeClass("visually-hidden");
            };
            if ($("#radio_new_card_default").prop("checked")) {
                $("#btn_new_card_copy").html(`Add New Blank`);
            } else {
                $("#btn_new_card_copy").html(`Make Copy`);
            };
            $("#btn_new_card_copy.visually-hidden").removeClass("visually-hidden");
            $("#label_new_card_already_exists.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#btn_new_card_create").html(`Create`);
            $("#btn_new_card_overwrite").addClass("visually-hidden");
            $("#btn_new_card_copy").addClass("visually-hidden");
            $("#label_new_card_already_exists").addClass("visually-hidden");
        };
        if (otherDone || promisedSprites.length < 1) {
            generateCardSVG(newCardObj).then((newCardSVG) => {
                var newCardHTML = `<div>` + newCardSVG + `</div><div class="d-flex mt-1 mx-auto">`;
                var more = Object.keys(uploadingCards).length - 1;
                if (newCardObj.UpgradesTo1.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo1) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo1))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_a" src="/AtO_images/icon_upgrade_a.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo1 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade A"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesTo2.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo2) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo2))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_b" src="/AtO_images/icon_upgrade_b.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo2 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade B"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesToRare.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesToRare) || vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare) || uploadingCards.hasOwnProperty(newCardObj.UpgradesToRare))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_rare" src="/AtO_images/icon_upgrade_rare.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesToRare + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade Rare"/>`;
                    more = more - 1;
                };
                newCardHTML += `</div>`;
                if (more > 0) {
                    newCardHTML += `<div class="mx-auto w-100 text-center">... and ` + more + ` more!</div>`;
                    // #TODO: it would be nice to instead have these listed out (rhs of card?) and hoverable.
                };
                $("#svg_card_new [hover-card-id]").popover("dispose");
                $("#svg_card_new").html(newCardHTML);
                boxfitCard("#svg_card_new");
                if ($("#svg_card_new [hover-card-id]").length > 0) {
                    setupHoverCards("#svg_card_new", "nothing");
                };
            });
        } else {
            otherDone = true;
        };
    });
};

function updateCardList() {
    $("#menu_card_list [hover-card-id]").popover("dispose");
    $("#menu_card_list").html("");
    cardsAdded = [];
    var customCardsByName = {};
    Object.keys(customCards).forEach((cardID) => {
        var cardName = customCards[cardID].CardName;
        if (customCardsByName.hasOwnProperty(cardName)) {
            for (var a = 0; a < 1000; a++) {
                if (!customCardsByName.hasOwnProperty(cardName + a)) {
                    cardName = cardName + a;
                    break;
                };
            };
        };
        customCardsByName[cardName] = cardID;
    });
    Object.keys(customCardsByName).sort().forEach(function (cardName) {
        if (!cardsAdded.includes(customCardsByName[cardName])) {
            $("#menu_card_list").append(getMenuCardHTML(customCards[customCardsByName[cardName]]));
        };
    });
    setupHoverCards("#menu_card_list", "go");
    updateCardListDisplay();
};

function updateCardListDisplay() {
    var height = $(window).height() - $("nav.navbar").height() - $("#side_menu_buttons").height();
    if (localStorage.getItem("cardview_open") === "false" && localStorage.getItem("cardlist_open") === "false") {
        // both closed
        $("#btn_menu_new.b-bl-0").removeClass("b-bl-0");
        $("#btn_menu_list.b-br-0").removeClass("b-br-0");
    } else {
        $("#btn_menu_new").addClass("b-bl-0");
        $("#btn_menu_list").addClass("b-br-0");
    };

    if (localStorage.getItem("cardview_open") === "false") {
        // card view closed
        $("#btn_menu_show.active").removeClass("active");
        $("#btn_menu_show i.bi-eye-fill").removeClass("bi-eye-fill");
        $("#btn_menu_show i").addClass("bi-eye-slash-fill");
        bsSideCardShow.hide();
    } else {
        // card view open
        $("#btn_menu_show").addClass("active");
        $("#btn_menu_show i.bi-eye-slash-fill").removeClass("bi-eye-slash-fill");
        $("#btn_menu_show i").addClass("bi-eye-fill");
        bsSideCardShow.show();
        // await delay(1000);
        height -= 524;
    };
    if (localStorage.getItem("cardlist_open") === "false") {
        // card list closed
        $("#svg_card_side.b-b-0").removeClass("b-b-0");
        $("#svg_card_side").addClass("b-b-6");
        $("#btn_menu_list.active").removeClass("active");
        bsSideCardList.hide();
    } else {
        // card list open
        $("#svg_card_side.b-b-6").removeClass("b-b-6");
        $("#svg_card_side").addClass("b-b-0");
        $("#btn_menu_list").addClass("active");
        bsSideCardList.show();
    };
    $("#menu_card_list").css({ "max-height": height - 48 });
};

function getComputedProp(el, prop) {
    return window.getComputedStyle(el, null).getPropertyValue(prop);
};

async function setupHoverCards(where, clickAction) {
    for (var a = 0; a < $(where + " [hover-card-id]").length; a++) {
        const el = $(where + " [hover-card-id]")[a];
        var hoverCardID = $(el).attr("hover-card-id");
        if (typeof hoverCardID !== 'undefined' && hoverCardID !== false) {
            const cardID = (hoverCardID === " " ? "" : hoverCardID);
            hoverCardSVGs[cardID] = "card not found!";
            if (customCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(customCards[cardID]);
            } else if (vanillaCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(vanillaCards[cardID]);
            } else if (uploadingCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(uploadingCards[cardID]);
            } else {
                console.log("Card not found for setupHoverCards: " + cardID);
                return;
            };
            if (clickAction == "go") {
                $(el).on('click', function () {
                    if (customCards.hasOwnProperty($(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id"))) {
                        cardObj = customCards[$(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id")];
                        cardObject2Fields(cardObj);
                        updateDisplay();
                    };
                    // #TODO: clicking on vanilla card goes to it?
                });
            };
            $(el).popover({
                html: true,
                content: function () {
                    if (typeof $(el).attr("hover-card-id") !== 'undefined' && $(el).attr("hover-card-id") !== false && hoverCardSVGs.hasOwnProperty($(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id"))) {
                        return `<div class="text-center" style="width: 250px;">` + hoverCardSVGs[$(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id")] + `</div>`;
                    } else {
                        return `card not found!`
                    };

                },
                title: "",
                sanitize: false,
                trigger: 'hover',
                placement: 'top',
                delay: { "show": 0, "hide": 0 }
            });
            $(el).on('inserted.bs.popover', function () {
                boxfitCard(".popover");
            });
        };
    };
};

function boxfitCard(where) {
    $(where + " .boxfit_card_name").boxfit({ width: 570, height: 80 });
    if ($(where + " .boxfit_card_description").length > 0) {
        $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 68 });
        if ($(where + " .boxfit_card_description p img").length > 0) {
            // boxfit twice because it results in more consistent appearance
            $(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 68 });
            /*$(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            // still occasionally wiggy, so maybe thrice?
            $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 70 });
            $(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));*/
        };
    };
    if ($(where + " .boxfit_item_description").length > 0) {
        $(where + " .boxfit_item_description").boxfit({ width: 530, height: 370, multiline: true, maximum_font_size: 68 });
        if ($(where + " .boxfit_item_description p img").length > 0) {
            // boxfit twice because it results in more consistent appearance
            $(where + " .boxfit_item_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_item_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_item_description p img").css("height", window.getComputedStyle($(where + " .boxfit_item_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_item_description").boxfit({ width: 530, height: 370, multiline: true, maximum_font_size: 68 });
        };
    };
};

function cardCaseClean(card) {
    var newCard = card;
    newCard.ID = newCard.ID.toLowerCase();
    newCard.BaseCard = newCard.BaseCard.toLowerCase();
    newCard.UpgradedFrom = newCard.UpgradedFrom.toLowerCase();
    newCard.UpgradesTo1 = newCard.UpgradesTo1.toLowerCase();
    newCard.UpgradesTo2 = newCard.UpgradesTo2.toLowerCase();
    newCard.UpgradesToRare = newCard.UpgradesToRare.toLowerCase();
    newCard.Sprite = newCard.Sprite.toLowerCase();
    newCard.AddCardId = newCard.AddCardId.toLowerCase();
    newCard.AddCardList = newCard.AddCardList.map(a => (a.toLowerCase()));
    return newCard;
};

async function addVanillaCard(cardID) {
    if (!vanillaCards.hasOwnProperty(cardID)) {
        // download card json
        const response = await fetch('/AtO_other/vanilla_cards/' + cardID + '.json');
        if (response.ok) {
            vanillaCards[cardID] = cardCaseClean(await response.json());
            // console.log("VANILLACARD ADDED: " + cardID);
            // console.log(vanillaCards[cardID]);
        } else {
            console.log("Unable to retrieve vanilla card " + cardID + "! Error: " + response.status);
        };
    };
};

async function newCardCreate(createType) {
    if (uploadingCards == {}) {
        // do nothing? shake a lil?
    } else {
        // console.log("THE ENTIRE UPLOADINGCARDS");
        // console.log(uploadingCards);
        for (var a = 0; a < Object.keys(uploadingSprites).length; a++) {
            await addCustomSprite(Object.keys(uploadingSprites)[a], uploadingSprites[Object.keys(uploadingSprites)[a]]);
            // how do you deal with duplicates? probs just overwrite tbh
        };
        for (var a = 0; a < Object.keys(uploadingCards).length; a++) {
            var newCardObj = defaultCard;
            if (createType == "show") {
                newCardObj = uploadingCards[Object.keys(uploadingCards)[a]];
                if (customCards.hasOwnProperty(newCardObj.ID)) {
                    cardObj = customCards[newCardObj.ID];
                } else {
                    // ... ??? I mean, this only arises if the user has... cleared customCards while the new card modal is open?
                    // I think just close it and let the user reopen
                }
                break;
            } else if (createType == "copy") {
                newCardObj = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);
                for (var b = 2; b < 1000; b++) {
                    if (!customCards.hasOwnProperty(newCardObj.ID + b) && !vanillaCards.hasOwnProperty(newCardObj.ID + b)) {
                        newCardObj.ID = newCardObj.ID + b;
                        newCardObj.BaseCard = newCardObj.BaseCard + b;
                        if (newCardObj.UpgradedFrom.length > 0) { newCardObj.UpgradedFrom += b; };
                        if (newCardObj.UpgradesTo1.length > 0) { newCardObj.UpgradesTo1 += b; };
                        if (newCardObj.UpgradesTo2.length > 0) { newCardObj.UpgradesTo2 += b; };
                        if (newCardObj.UpgradesToRare.length > 0) { newCardObj.UpgradesToRare += b; };
                        break;
                    };
                };
                customCards[newCardObj.ID] = newCardObj;
            } else { // create, overwrite
                newCardObj = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);
                // console.log("creating card: " + newCardObj.ID);
                // console.log(newCardObj);
                customCards[newCardObj.ID] = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);;
                // console.log(customCards[newCardObj.ID]);
            };
            if (a === 0) { cardObj = newCardObj; };
        };
    };
    closeNewCardModal();
};

function closeNewCardModal() {
    cardObject2Fields(cardObj);
    updateDisplay();
    $("#text_new_card_json").val("");
    $("#svg_card_new").html("");
    bootstrap.Modal.getOrCreateInstance("#modal_new_card").hide();
};

async function startUp() {
    // this is literally only off in its own async function because I am a noob that doesn't know how to cleanly await generateCardSVG :(
    // (I think the answer is to just .then it?)

    db.open().then(() => {
        return db.sprites.where('type').equals('card').toArray();
    }).then((sprites) => {
        for (var a = 0; a < sprites.length; a++) {
            addCustomSprite(sprites[a]["name"], sprites[a]["blob"], true);
        };
    }).catch(Dexie.MissingAPIError, () => {
        console.log("database ERROR: could not find indexedDB API");
    }).catch((e) => {
        console.log("database ERROR: " + e);
    });



    if (localStorage.getItem("medsLocks") !== null) { medsLocks = JSON.parse(localStorage.getItem("medsLocks")); };
    if (localStorage.getItem("settings_advanced") == "true") { $("#check_show_advanced").prop("checked", true) };
    if (localStorage.getItem("settings_side_menu_absolute") == "false") { $("#check_side_menu_absolute").prop("checked", false) };
    resizeWindow();

    for (var a = 0; a < defaultCustomSprites.length; a++) {
        const response = await fetch('/AtO_images/card/custom/' + defaultCustomSprites[a] + '.png');
        if (response.ok) {
            // create object URL
            customSpriteObjURLs[defaultCustomSprites[a]] = URL.createObjectURL(await response.blob());
            $("#secret_sprite_container").append(`<div class="col"><img class="img-fluid rounded-2" role="button" src="` + customSpriteObjURLs[defaultCustomSprites[a]] + `" custom-sprite-id="` + defaultCustomSprites[a] + `" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="` + defaultCustomSprites[a] + `.png" aria-label="` + defaultCustomSprites[a] + `"/></div>`);
            const tooltip = bootstrap.Tooltip.getOrCreateInstance('[custom-sprite-id="' + defaultCustomSprites[a] + '"]');
            $('[custom-sprite-id="' + defaultCustomSprites[a] + '"]').on('click', function () {
                $("#text_sprite").val($(this).attr("custom-sprite-id"));
                bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").hide();
                updateDisplay();
            });
        } else {
            console.log("Unable to retrieve secret sisters custom card sprite: " + defaultCustomSprites[a] + "! Error: " + response.status);
        };
    };

    if (localStorage.getItem("customCards") !== null) { customCards = JSON.parse(localStorage.getItem("customCards")); };
    if (Object.keys(customCards).length < 1) { customCards[""] = defaultCard; };

    if (localStorage.getItem("currentCardID") !== null && customCards.hasOwnProperty(localStorage.getItem("currentCardID"))) {
        cardObj = customCards[localStorage.getItem("currentCardID")];
    } else {
        // currentCardID either not stored or not found in customCards
        cardObj = customCards[Object.keys(customCards)[0]];
    };
    cardObject2Fields(cardObj);
    updateDisplay();
    $("#show_side_menu.visually-hidden").removeClass("visually-hidden");
    $("#accordion_card_data.visually-hidden").removeClass("visually-hidden");
    $("#loading_card_creator").addClass("visually-hidden");

    updateDisplay();
    if (localStorage.getItem("cardview_open") === "false") {
        $("#btn_menu_show.active").removeClass("active");
        $("#btn_menu_show i.bi-eye-fill").removeClass("bi-eye-fill");
        $("#btn_menu_show i").addClass("bi-eye-slash-fill");
        bsSideCardShow.hide();
    } else {
        bsSideCardShow.show();
    };
    if (localStorage.getItem("cardlist_open") === "false") {
        $("#svg_card_side.b-b-0").removeClass("b-b-0");
        $("#svg_card_side").addClass("b-b-6");
        $("#btn_menu_list.active").removeClass("active");
        bsSideCardList.hide();
    } else {
        bsSideCardList.show();
    };
    if (localStorage.getItem("cardview_open") === "false" && localStorage.getItem("cardlist_open") === "false") {
        $("#btn_menu_new.b-bl-0").removeClass("b-bl-0");
        $("#btn_menu_list.b-br-0").removeClass("b-br-0");
    };

    if (localStorage.getItem("seen_help") != "true") {
        localStorage.setItem("seen_help", "true");
        bootstrap.Modal.getOrCreateInstance("#modal_help").show();
    };
};

async function addCustomSprite(originalSpriteName, sprite, startup = false) {
    var spriteName = originalSpriteName.toLowerCase();
    customSprites[spriteName] = sprite;
    // revoke object URL if it already exists
    if (customSpriteObjURLs.hasOwnProperty(spriteName)) { URL.revokeObjectURL(customSprites[spriteName]); };
    // create object URL
    customSpriteObjURLs[spriteName] = URL.createObjectURL(customSprites[spriteName]);
    $("#custom_sprite_container").prepend(`<div class="col"><img class="img-fluid rounded-2" role="button" src="` + customSpriteObjURLs[spriteName] + `" custom-sprite-id="` + spriteName + `" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="` + spriteName + `.png" aria-label="` + spriteName + `"/></div>`);
    const tooltip = bootstrap.Tooltip.getOrCreateInstance('[custom-sprite-id="' + spriteName + '"]');
    $('[custom-sprite-id="' + spriteName + '"]').on('click', function () {
        $("#text_sprite").val($(this).attr("custom-sprite-id"));
        bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").hide();
        updateDisplay();
    });
    // JSON
    if (!startup) {
        db.open().then(() => {
            return db.sprites.put({ name: spriteName, type: "card", blob: sprite })
        }).catch(Dexie.MissingAPIError, () => {
            console.log("database ERROR: could not find indexedDB API");
        }).catch((e) => {
            console.log("database ERROR: " + e);
        });
    };
};

function resizeAndBlob(data, newWidth, newHeight) {
    return new Promise(async function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function () {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.width = newWidth;
            canvas.height = newHeight;
            context.drawImage(this, 0, 0, newWidth, newHeight);
            canvas.toBlob((blob) => {
                resolve(blob);
            });
        };
        img.src = data;
    });
};

function getSpriteBlob(spriteName) {
    if (uploadingSprites.hasOwnProperty(spriteName)) {
        return uploadingSprites[spriteName];
    } else if (customSprites.hasOwnProperty(spriteName)) {
        return customSprites[spriteName];
    } else if (vanillaSprites.hasOwnProperty(spriteName)) {
        return vanillaSprites[spriteName];
    } else {
        return "failure";
    };
};

function resizeWindow() {
    if (localStorage.getItem("settings_side_menu_absolute") == "false") {
        $("#nav-card > .mw-1920").css({ "max-width": $(window).width() - 350 - 48 });
    } else {
        $("#nav-card > .mw-1920").css({ "max-width": 1920 });
    };
};

function parseIntNoNaN(incoming) {
    return isNaN(parseInt(incoming)) ? 0 : parseInt(incoming);
};

const vanillaSpriteList = ["absorption", "abstraction", "abyssalwrath", "acolytetunic", "acrobaticstrike", "adrenaline", "advancedhandbook", "adventure", "aftershock", "agateamulet", "aimedshot", "alarmbell", "albatrosspendant", "all-seeingamulet", "allin", "amberamulet", "ambidextrous", "ambush", "amethystring", "ammunitions", "amplifyingfield", "amuletofprotection", "amuletofspeed", "amuletofthorns", "anathema", "ankhoflife", "annoyingwhistle", "anthemofhope", "antimagicfield", "apocalipse", "apotheosis", "aquamarinebracelet", "arcaneconduit", "architectsring", "archmagebook", "arenachampion", "armagedon", "arsenal", "ash", "ashstormb", "ashysky", "asmody", "assassintools", "astralhowl", "astralwolfcard", "atonement", "avoidancecollar", "awfultantrum", "axesweep", "backbone", "backlash", "backstab", "badaugury", "bake", "balladofconquest", "balladofevasion", "balllighting", "ballofwool", "bandages", "bane", "banish", "baptism", "barbedwire", "barbercuts", "barkskin", "barrage", "barricade", "barrier", "bass", "basthetgrace", "bastion", "battleaxe", "battleplan", "battleshout", "beartrap", "beermug", "bell", "belphyorpipe", "benediction", "berserkerclaw", "berserkpotion", "betty", "bewilder", "bfighter", "bindingheal", "blackdeath", "blackdeck", "blackguard", "blackhole", "blackkarma", "blackpyramid", "blackpyre", "blacktalons", "bladedance", "bladeflurry", "bladestorm", "blasphemy", "blazingblow", "bleedout", "blessedsteel", "blizzard", "bloodbath", "bloodblob", "blooddrinker", "bloodfeeding", "bloodforblood", "bloodgoblet", "bloodinfection", "bloodpuddle", "bloodrage", "bloodrain", "bloodseeker", "bloodsplash", "bloodstone", "bloodycleave", "bloodyretaliation", "blossom", "blowup", "bludgeon", "blueflame", "bluff", "blur", "bmage", "bomb", "bombard", "bomblottery", "boneclaws", "bonering", "bonkhammer", "bookofnightmares", "bookofthedead", "bookworm", "bootsofswiftness", "boulderthrow", "bouncingshield", "bouncyembers", "bowling", "bpriest", "brainfreeze", "brand", "brassamulet", "brasslantern", "breastplate", "brigandarmor", "bristlefur", "broccoli", "brokenbone", "brokenitem", "bronzegear", "broodmother", "bucket", "bulkheal", "bulletshot", "bulwark", "bunny", "bunnyhopping", "burialmask", "burneditem", "burningblood", "burningcore", "burningjav", "burningorb", "burningshot", "burningweapons", "burntcarp", "burrow", "butchering", "butcherknife", "butcherstable", "bwarlock", "caltrops", "camouflage", "candy", "cannonshot", "captainhowl", "captivatingvoice", "carnage", "carp", "carrioneater", "carrot", "catapult", "catharsis", "causticbeam", "cauterize", "celestialbrillance", "celestialtoll", "celestialwrath", "chainheal", "chainlighting", "chainsaw", "chaliceofkings", "chaliceofqueens", "challengingshout", "champy", "changeweapon", "chantofaccuracy", "chantofinitiative", "chaosblob", "chaospuddle", "chaossplash", "chaoticwind", "charge", "chargebattery", "chargedclaw", "chargedtrident", "cheese", "chillinggaze", "chompy", "chumpy", "circleofhealing", "circuitoverload", "citadel", "clairvoyance", "clairvoyantscroll", "clarity", "clearinstructions", "cleave", "clergyamulet", "cloackofevasion", "cloackofspeed", "cloudsong", "club", "coatofarms", "cocoon", "coldbonegoblet", "coldbook", "coldbreath", "coldfeet", "coldfront", "coldhands", "coldlaser", "coldrune", "coldsnap", "coldspark", "coldweapons", "collectwaste", "colorfulpuddle", "colosasalblow", "combatbandages", "combustion", "commandandconquer", "concusiveshot", "condemnation", "consecration", "consume", "continuumblade", "coolingcube", "corrosivetouch", "corruptedblade", "corruptedplate", "corruptharpoons", "corruption", "counterspell", "crabbait", "crankcrossbow", "crashlightning", "crescentlight", "crescentmoon", "crimsonraiment", "crossbow", "crosshair", "crucifixion", "crusaderhelmet", "crushingdarkness", "crystalescape", "crystalitzation", "crystallball", "cuby", "cubyd", "cupofdeath", "curativetherapy", "cursedcard", "curseddagger", "cursedjewelersring", "cursemancy", "curseofagony", "curseofdecay", "curseofelements", "curseofexhaustion", "curseoffragility", "curseofmadness", "curseofshadows", "curseoftorment", "curseofvulnerability", "curseofweakness", "custodian", "dagger", "daley", "daleyb", "dampenmagic", "dampingfield", "darkblob", "darkconcoction", "darkcremation", "darkembrace", "darkflamering", "darkflash", "darkfuture", "darkgag", "darkguard", "darkhood", "darklighning", "darkmiasma", "darknessfalls", "darkone", "darkoutbreak", "darkpack", "darkpuddle", "darkrancor", "darkritual", "darkshot", "darksplash", "dartpouch", "dawnlight", "dawnpunisher", "deadlychime", "deadlystrikes", "deatha", "deathcoil", "deathdoor", "deathsembrace", "deathsgrab", "deathsreach", "deathstoll", "debilitate", "deepdarkness", "deeproots", "defectivesummon", "defend", "defensivestrategy", "defiledlegacy", "deflect", "defrost", "dejavu", "delayresponse", "demandobedience", "dementia", "demolishingblow", "demonicflame", "demonictutor", "demoralizingshout", "desecration", "desertjam", "despair", "desperateprayer", "destiny", "destroyerguantlets", "detection", "detoxify", "detoxpotion", "devastate", "diamondring", "dilute", "dinnersready", "dirtybandages", "disengage", "disintegrate", "dispelmagic", "divinationorb", "divinechime", "divinegrace", "divineguidance", "divineinsight", "divineire", "divinepower", "divinepunishment", "divineretribution", "divinestrike", "doityourself", "dolly", "doublebubble", "doublechop", "doubleshot", "doublestrike", "doubletrouble", "dracomancerstaff", "dragonbite", "dragonroar", "dragonscales", "drainlife", "dreadfulwave", "dreamcatcher", "dreamsphere", "drill", "druidicamulet", "dryadmask", "dualstrike", "dualwield", "dungtoss", "durandal", "duskpunisher", "dustdevil", "eardestroyer", "earthquake", "earthwave", "edgeoffury", "eeriering", "electricaldischarge", "electricblob", "electricitymanual", "electricpuddle", "electricsplash", "electricweapons", "electrocute", "electroshock", "elementalbolt", "elementalnova", "elementalproliferation", "elementalward", "elvencuirass", "elvenquiver", "embers", "emberstorm", "emeraldneackle", "emeraldstaff", "empower", "enchantweapons", "endlessabyss", "endlessbag", "endurepain", "energizingserenade", "energyshield", "enervate", "enlightened", "enrage", "enragedylmer", "entanglingroot", "entomb", "entrench", "envenom", "equivalentexchange", "eternalcandle", "eternallullaby", "ethereal", "etherealknives", "etherealweapons", "evanescence", "eviscerate", "eviscerateb", "evocation", "excaliburn", "expectedprophecy", "experttracker", "exploitopenings", "explosivegift", "explosiveshot", "exposearmor", "fade", "faeborgscale", "faithring", "falconshot", "familyjewels", "fanatism", "fanoficicles", "fanofknives", "fantheflames", "farshot", "faststrike", "fatedfuture", "feedtherich", "feint", "fenny", "fennyrare", "ferventring", "fieryfist", "fieryjabs", "fieryshield", "fierywand", "fieryweapons", "findweakness", "findweaknessb", "fireball", "fireblast", "firebook", "firebrand", "fireclaw", "firedancer", "fireember", "fireemberitem", "fireinthehole", "firelaser", "fireproof", "firerune", "fireslash", "firestorm", "firesword", "firstaid", "fishingnet", "fishingrod", "fishplosion", "fistofthedamned", "flail", "flamehoarding", "flamestorm", "flamestrike", "flamy", "flankingstrike", "flare", "flash", "flashfreeze", "flashheal", "flay", "flowershuriken", "flowerstream", "flute", "flyhigh", "flynest", "focusheal", "followup", "foresight", "forestallies", "forestbanner", "forestcrown", "fortunetelling", "foulremedy", "fountainpen", "fourleafclover", "freelover", "freeze", "freezingink", "freezingslash", "frenziedcarnage", "frenziedtermites", "freshmeat", "freshmeatb", "friendlytadpole", "frightened", "frostaxe", "frostbolt", "frostbreath", "frostfirering", "frostguard", "frostnova", "frostvolley", "frostweapons", "frozenarrows", "frozenaxes", "frozenbash", "frozencarp", "frozenheirloom", "frozenorb", "frozenpufferfish", "frozentear", "frozentomahawk", "fungaloutbreak", "fungusroot", "furious slash", "furiouscarp", "fusionlaser", "gardenofthorns", "garnetearrring", "gauntlets", "getout", "geyser", "gihlrunestone", "gildedplate", "givetothepoor", "glacialhammer", "gladiatorhelmet", "gloomyburst", "gloves", "glovesofagility", "gobble", "goblinamulet", "godlystrengh", "goggles", "goldcard", "goldchain", "goldenbell", "goldenchalice", "goldencloak", "goldencross", "goldenharp", "goldenlaurel", "goldescape", "goldring", "goldyshardscard1", "goldyshardscard2", "gourmetmeat", "grainmachinegun", "grandcross", "grandcrossshadow", "graspheart", "gravitywell", "greaterheal", "greaterhealth (2)", "greatermana", "grimoireofflames", "grindingwheel", "groundslam", "groundslamb", "grudge", "guard", "guardianangel", "hallucination", "hamstring", "handbook", "hardening", "hardshell", "harley", "harleyrare", "harshcauterize", "hatch", "hawkeye", "headbutt", "heal", "healingbook", "healingrain", "healingserenade", "healingtotem", "healthpotion", "heartamulet", "heartofthorns", "heatassimilation", "heatlaser", "heatshield", "heatsurge", "heattramsfer", "heatwave", "heavenlyarmaments", "heavenlyblessing", "heavenlyjustice", "heavenlyprotection", "heavybelt", "heavymetal", "heavypackage", "heavystrike", "heavyweaponry", "hellblade", "hellfire", "hellflame", "hellmark", "helmet", "helpinghand", "helpme", "herding", "heresy", "heronscourage", "hexproof", "hiddenhand", "hiddenweapon", "highchancellor", "hitandrun", "holyaegis", "holybarrage", "holyblast", "holyblob", "holybook", "holycleave", "holycrusader", "holyfire", "holygrail", "holyhammer", "holylance", "holynova", "holypuddle", "holyripple", "holyrune", "holyslash", "holysmite", "holysplash", "holystorm", "holysymbol", "honorable", "hornedhelmet", "horseshoe", "houndcard", "hourglassofdeath", "huntersmark", "huntingring", "hurryup", "hydrabite", "hydrablood", "hydraegg", "hypnoshell", "hypnotism", "hypotermia", "icebarrier", "icebreaker", "iceclaws", "icecomet", "icefall", "icelance", "iceorb", "iceprison", "iceshot", "icicle", "iciclebarrage", "icyblob", "icyblow", "icypuddle", "icyssplash", "icytornado", "icyveins", "icywand", "ignidohscore", "igniscloak", "ignite", "immolate", "impale", "impalingroot", "impstatuette", "inferno", "infestation", "infuriate", "infusecourage", "innercombustion", "innerfire", "innervate", "intercept", "intimidate", "invigoratingblow", "invisibility", "ironclad", "ironfortress", "ironkanabo", "ironwand", "itchyburn", "ivorytower", "jadeescape", "jadering", "jaw", "jewelersring", "jinglebell", "justicarring", "killerinstinc", "kindle", "kingscrown", "kitehield", "knightspride", "lapisnecklace", "largepouchofweapons", "largeshield", "lastguardian", "lastrequiem", "lastreward", "laststand", "lavablob", "lavabomb", "lavaburst", "lavacrystal", "lavaeruption", "lavaorb", "lavapotion", "lavapuddle", "lavasplash", "lavaspray", "layofpaws", "leafclaw", "leapslam", "leatherarmor", "leatherboots", "leathergloves", "lethalshot", "lethargy", "letthefeastbegin", "liante", "librarian", "lichstouch", "lifebloom", "lifeessence", "lifetap", "lightbringer", "lightfeet", "lightningbook", "lightningbreath", "lightningrod", "lightningrune", "lightningspear", "livingflame", "livingforest", "lockpicks", "lonelyblob", "longbow", "lostmail", "loveenhancer", "lowselfsteem", "luckypaw", "luminousbarrier", "luminousbeam", "lunaring", "madnessring", "magicdevour", "magicmushroom", "magictome", "magmaprison", "magmasurge", "magusstaff", "maim", "malediction", "maliciouseye", "managem", "manaloop", "manapotion", "manashield", "manasurge", "maneuver", "marktheprey", "massdispel", "masshisteria", "massinvisibility", "matriarchclaw", "meat", "meatbag", "meatfeast", "meditate", "megaphone", "melancholy", "melodicrhythm", "meltedplating", "meltingflame", "mentalshake", "mentalshell", "merchantbadge", "merciful", "merciless", "mesmericmirage", "metalblob", "metalpuddle", "metalsplash", "meteor shower", "meteorite", "minbook", "mindblast", "mindbolt", "mindtrick", "mindtwist", "mindvisions", "minotaurhorn", "mirrorimages", "mirrorofkalandra", "misery", "missilebarrage", "mixedsalad", "mnemrunestone", "molebuster", "moonbeam", "mooncatalyst", "moonfire", "moonguard", "morningstar", "mortalstrike", "mountainking", "mozzy", "multishot", "musicsheet", "mysticalice", "mysticstaff", "naturescall", "necromancerrobe", "necronomicon", "necropotence", "necroticburst", "nephridiumacid", "netherblade", "neurotoxin", "neverendingstory", "neverfrost", "nightmare", "nightterror", "nightveil", "ninjascroll", "nobleshield", "noxiouseruption", "noxiousinjection", "noxiousparasites", "nullifier", "numbingstrike", "obfuscate", "obscurebarrier", "obsianvil", "obsiboots", "obsidiandagger", "obsidiantower", "obsiring", "obsirod", "oculy", "odeofwar", "omenofperil", "omnipotenceb", "omniscience", "onslaught", "onyxamulet", "opalring", "openwound", "oppresionholy", "oppresionshadow", "orbofstorms", "orby", "overbearingroar", "overgrowth", "overheat", "overpower", "owlblessing", "owlscreech", "pacifism", "painsuppression", "paladingauntlets", "panacea", "pandemonium", "pandorasbox", "panicscream", "paralizingvenom", "parasite", "parry", "pebblethrow", "penance", "penitencering", "perfectparry", "perniciousclaw", "pestilence", "phantomechoes", "phoenix", "piercinghowl", "piercingstrikefire", "piercingstrikeshadow", "piercingstrikesholy", "piggybank", "pillage", "piousring", "placeholder", "plaguerat", "plagueshot", "platemail", "platinumring", "plumbing", "pointblankblast", "pointyhat", "poisoncatalyst", "poisondart", "poisoneddagger", "poisoneddaggers", "poisonfields", "poisonflask", "poisonousassault", "poisonousbite", "poisonousbreath", "poisonousshot", "poisonsplash", "poisonsplashitem", "poisonspray", "pommel", "pouchofweapons", "pound", "powercoil", "powerglove", "praisethesun", "prayerofhealing", "prayerofprotection", "precisestrike", "predator", "premiummeat", "prescription", "primalnecklace", "prismaticfield", "profane", "proficient", "prophetstaff", "protect", "protectfromevil", "provoke", "provokeb", "psychichscream", "pufferfish", "pulsingheal", "pulsingvitality", "pulverize", "pummel", "punch", "puncture", "purgethewicked", "purgingflame", "purgingray", "purgingwind", "purrification", "pushforward", "putrefaction", "pyroblast", "pyromancerrobe", "quickshot", "quill", "rabid", "rabidbite", "radiance", "radiantassault", "radiantburst", "raiderslicer", "rain", "raincoat", "rainofarrows", "rainofthorns", "rampage", "rangerarmor", "rapidfire", "rapidmultiplication", "rapture", "ravenstaff", "rayoffrost", "rayofhope", "razor", "reactivelaser", "reassemble", "recklesscharge", "recurringnightmare", "redcape", "redemption", "redsteelcloack", "redstorm", "reforgedcore", "reinforcedarmor", "reinforcedsteel", "rejuvenationpotion", "rend", "renew", "repairarmor", "repetitiontraining", "replenishment", "reprisal", "resurrection", "retaliator", "revealingflask", "revealingstrike", "revenge", "reverberantverse", "ricochet", "ringoffire", "ringofhope", "ringofprotection", "ringsofpower", "riposte", "rob", "rosegarden", "roundshield", "royalcoin", "royalram", "rubyamulet", "rubycuirass", "ruinbolt", "ruminant", "runicdice", "rupture", "rustyarmor", "sacredaxe", "sacredblow", "sacredbolt", "sacredceremony", "sacredground", "sacredguard", "sacredlightning", "sacredrancor", "sacredshot", "sacredtablet", "sad", "safeguard", "samuraiarmor", "sanctification", "sanctuary", "sandstorm", "sandtornado", "sapphireamulet", "sapphirering", "sarcasticsonnet", "sausage", "sausagefactory", "savantrobe", "saveitforlater", "sawblade", "sawtoothknife", "scarabshield", "scattershot", "scavenge", "scholarrobe", "scorchingflame", "scorchingray", "scourgeescape", "scrollofresurection", "scrollofspeed", "scrolloidefense", "scrollointellect", "scry", "scryerstaff", "searingdagger", "searingnova", "searingtouch", "seashellamulet", "seashellring", "secondwind", "sentryalarm", "serenityring", "serratedweapons", "settarget", "setup", "setupb", "severartery", "severeburn", "shacklesofwar", "shadowawakening", "shadowbarrage", "shadowbinding", "shadowbolt", "shadowbook", "shadowcleave", "shadowcloack", "shadowimbuement", "shadowlance", "shadowmend", "shadownova", "shadoworb", "shadowrune", "shadowslash", "shadowstep", "shakeitoff", "shamanism", "shardscard", "sharingiscaring", "sharpeningknife", "sharpenup", "sharpscimitar", "sharpy", "shateringfists", "shatter", "shear", "shieldbash", "shieldbreaker", "shieldcharge", "shieldjammer", "shieldofthorns", "shieldofwarding", "shieldslam", "shieldsmelter", "shieldthrow", "shieldwall", "shieldwallb", "shiftingscroll", "shiningforce", "shiv", "shocknova", "shortsword", "shoulderplate", "shrapnelshot", "sicklestrike", "siegebreaker", "silentbacklash", "silverchalice", "silverring", "simplehat", "singingsword", "siphonlife", "skewering", "skillful", "skullring", "skullsplitter", "slice", "sliceandice", "slimy", "slingshot", "slippers", "smallpouchofweapons", "smellblood", "smokebomb", "snatchingclaw", "sneakpeek", "sneakystrike", "snipershot", "snowfall", "soap", "solarflare", "solring", "songofcelerity", "songofquickness", "soulharvest", "soullanterrn", "sparkoflife", "spectralmissiles", "spectralscales", "spellecho", "spiderqueeneye", "spikedball", "spikedbracers", "spikedshield", "spikedshoulderpads", "spoiledmeat", "spreadcorruption", "sprint", "sprout", "spyglass", "squall", "squidtoken", "stainlesscuirass", "stalking", "stampede", "standardbearer", "starfall", "staringcontest", "starrynight", "staticcharge", "statustransfer", "steadfastboots", "steadfastshield", "steamroller", "steelfishingarod", "steelforge", "steelskin", "stimulantpills", "stimulatingsting", "stingerlaucnher", "stockade", "stomp", "stoneamulet", "stonefist", "stonemaul", "stoneskin", "stonewall", "storm", "stormcallerfeather", "stormfury", "stormjavelin", "stormtiara", "stormtrident", "stormward", "stormy", "strawhat", "stressfulfumes", "strongmojo", "stungrenade", "submerge", "subterfuge", "subzero", "success", "sugarrush", "summonimp", "sunbeam", "sunderarmor", "superconductor", "suppressionhelmet", "surprisebox", "surprisegiftbox", "sweepingstrikes", "sweetmelody", "swing", "tabularasa", "tacticalnuke", "tacticalthinking", "taintedfishingrod", "takecover", "takingaim", "tantrum", "tantrumitem", "targetshooting", "tattereddoll", "tediouspoem", "tempest", "templeamulet", "temporalchains", "terrorize", "terrorizinghowl", "teslacoil", "tesseract", "thechosenone", "thedefiler", "theencyclopedia", "thehunt", "thejuggernaut", "theone", "thepolluter", "theporcupine", "thermalamulet", "thermalring", "thewall", "thorimsrod", "thorneater", "thornproliferation", "thornyring", "thousandneedles", "threaten", "throwbolas", "throwspear", "thrustwhorty", "thunderclap", "thunderstorm", "tikimask", "titanfall", "titangauntlets", "tomahawk", "tomato", "tombstonepet", "tomeofintellect", "topazring", "torch", "torching", "tormentofthorns", "totaleclipse", "touristmap", "toxicblob", "toxicpuddle", "toxicrain", "toxicretaliation", "toxicsplash", "toxicstrike", "trace", "tradingicons_56", "tranquility", "transcendence", "transcribe", "transfusion", "transmision", "treat", "trebuchet", "trick", "trickortreat", "trickortreat2", "tuneup", "turban", "tuskbarrage", "tuskcharge", "twilightslauger", "twilightswamp", "twinblades", "twinscrolls", "typhoon", "tyrantnecklace", "ultraregeneration", "undeathichor", "undyingwill", "unforgivingnature", "ungodlystrengh", "unholyhammer", "unholysmite", "unholysotrm", "unleashed", "unstablepower", "unthrustwhorty", "unwaveringfaith", "uproot", "upwind", "uselessletter", "vaccine", "valiantdefender", "vampirictouch", "vampirictutor", "vampirism", "vanish", "vengance", "venomamulet", "venomfang", "venomflask", "veteranarmor", "vexingcrescendo", "viciousbite", "vigilance", "vigorous", "vigorousfury", "vilegas", "vilegash", "vilelance", "vilering", "violentburst", "viperring", "viperstrike", "virulentreaction", "virulentring", "viscousshield", "visionring", "vitalitydrain", "vitalize", "vitalizingserenade", "vodoodoll", "voidcrush", "voidmemory", "volatilecore", "volcanicaxe", "volley", "warbanner", "wardrum", "warhammer", "warpaint", "warriorcode", "waterblob", "watering", "waterjet", "waterpuddle", "watersplash", "waterspray", "watervase", "weakeningaze", "weaponcache", "web", "webweaver", "wellfed", "whack", "whirlwind", "whisperinglies", "whiteflame", "whoolyhat", "wickedcraftsman", "wildcharge", "wildhunt", "wildroar", "windsofamnesia", "wingedwand", "winteriscoming", "winterorb", "wintersnighttale", "wither", "wolfguard", "wolfskincloack", "wolfslayer", "wolfycard", "wolfyrarecard", "wollyshell", "woodencrosier", "worldinflames", "wreckingball", "xulrunestone", "yangritual", "yggdrasilroot", "yinritual", "yinyangbadge", "yinyangbolt", "ylmerbranch", "yoggercleaver", "yoggersteal", "zap"];

const defaultCustomSprites = ["ss_arcaneritual", "ss_astralprojection", "ss_awakening", "ss_beckoningdeath", "ss_bladeofnature", "ss_blight", "ss_bloodmoney", "ss_bloodthirsty", "ss_bombearrings", "ss_book1", "ss_book2", "ss_book3", "ss_calloftheobelisk", "ss_cataclysm", "ss_celestialbeing", "ss_charge_rattery", "ss_crackofthunder", "ss_darkblade", "ss_darkmatter", "ss_darknlight", "ss_despairingdepths", "ss_devour", "ss_divinepresence", "ss_duplikate", "ss_eclipse", "ss_fireicelightning", "ss_flowerblade", "ss_flushwithfrogs", "ss_flyfree", "ss_frogchoir", "ss_frogfam", "ss_frostblade", "ss_furiousflames", "ss_gearup", "ss_glassring", "ss_goldenapple", "ss_goldrubyring", "ss_handoffate", "ss_hands_darkness", "ss_hedgewitch_breakthrough", "ss_hedgewitch_concordance", "ss_hedgewitch_control", "ss_hedgewitch_crossover", "ss_hedgewitch_defensive", "ss_hedgewitch_delight", "ss_hedgewitch_family", "ss_hedgewitch_hoard", "ss_hedgewitch_incandescent", "ss_hedgewitch_innerfury", "ss_hedgewitch_invocation", "ss_hedgewitch_magictouch", "ss_hedgewitch_portal1", "ss_hedgewitch_portal2", "ss_hedgewitch_portal3", "ss_hedgewitch_portal4", "ss_hedgewitch_powerglow", "ss_hedgewitch_sacrifice", "ss_hedgewitch_spiritswithin", "ss_hedgewitch_spiritswithout", "ss_hedgewitch_terror", "ss_hedgewitch_uncontrolled", "ss_hellfire_earrings", "ss_horde", "ss_imbuedelectricity", "ss_koalesce", "ss_luckydice", "ss_luckydice2", "ss_mindhammer", "ss_murderousintent", "ss_naturalbeauty", "ss_naturebloom", "ss_naturesblessing", "ss_naturesfury", "ss_newdawn", "ss_purpleblade", "ss_ratarmy", "ss_ratarmy2", "ss_righteousrod", "ss_ringofstone", "ss_risingdarkness", "ss_rune1", "ss_rune2", "ss_runicshackles", "ss_sanguinescroll", "ss_scroll1", "ss_scroll2", "ss_selfenchant", "ss_serpent", "ss_silverrubyring", "ss_songofthesea", "ss_spicypasta", "ss_starbody", "ss_stormblade", "ss_sunrise", "ss_sunspot", "ss_swashbucklunge", "ss_swordofflowers", "ss_thousandyardstare", "ss_triumph", "ss_unadultpern", "ss_virtuousjustice", "ss_voidstone", "ss_wand1", "ss_wand2", "ss_wand3", "ss_wand4", "ss_weatherblade", "ss_whiteflag", "ss_whiteflag2"];
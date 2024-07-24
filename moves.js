const attackPatterns = {
    front: [{x:1, y:0}],
    beam: [{x:1, y:0}, {x:2, y:0}, {x:3, y:0}, {x:4, y:0}],
    wedge: [{x:1, y:0}, {x:1, y:1}, {x:1, y:-1}, {x:2, y:0}],
    ring: [{x:1, y:0}, {x:0, y:1}, {x:-1, y:0}, {x:0, y:-1}],
    spread: [{x:1, y:0}, {x:-1, y:0}, {x:0, y:1}, {x:0, y:-1}, {x:1, y:1}, {x:1, y:-1}, {x:-1, y:1}, {x:-1, y:-1}],
}

const moveList = {
    moveTackle: {
        name:'Tackle',
        type: 'normal',
        category: 'physical',
        pattern: 'front',
        basePower: 40,
        baseAccuracy: 100,
        description: ''
    },

    moveQuickAttack: {
        name:'Quick Attack',
        type: 'normal',
        category: 'physical',
        pattern: 'front',
        basePower: 30,
        baseAccuracy: 100,
        userSecondaryEffect: function(user) {
            user.actionCounter += 5;
        },
        description: ''
    },

    moveKarateChop: {
        name:'Karate Chop',
        type: 'fighting',
        category: 'physical',
        pattern: 'front',
        basePower: 50,
        baseAccuracy: 100,
        description: ''
    },

    moveIceBeam: {
        name:'Ice Beam',
        type: 'ice',
        category: 'special',
        pattern: 'beam',
        basePower: 90,
        baseAccuracy: 100,
        targetSecondaryEffect: function(target) {
            if (Math.floor(Math.random() * 100) < 10) {
                target.inflictStatus('frostbite', 3);
            }
        },
        description: ''
    },

    moveFlamethrower: {
        name:'Flamethrower',
        type: 'fire',
        category: 'special',
        pattern: 'beam',
        basePower: 90,
        baseAccuracy: 100,
        targetSecondaryEffect: function(target) {
            if (Math.floor(Math.random() * 100) < 10) {
                target.inflictStatus('burn', 3);
            }
        },
        description: ''
    },

    moveThunderbolt: {
        name:'Thunderbolt',
        type: 'electric',
        category: 'special',
        pattern: 'beam',
        basePower: 90,
        baseAccuracy: 100,
        targetSecondaryEffect: function(target) {
            if (Math.floor(Math.random() * 100) < 10) {
                target.inflictStatus('paralysis', 3);
            }
        },
        description: ''
    },

    moveSurf: {
        name:'Surf',
        type: 'water',
        category: 'special',
        pattern: 'spread',
        basePower: 90,
        baseAccuracy: 100,
        description: ''
    },

    moveHydroPump: {
        name:'Hydro Pump',
        type: 'water',
        category: 'special',
        pattern: 'beam',
        basePower: 110,
        baseAccuracy: 85,
        description: ''
    },

    moveSludgeBomb: {
        name:'Sludge Bomb',
        type: 'poison',
        category: 'special',
        pattern: 'wedge',
        basePower: 90,
        baseAccuracy: 100,
        targetSecondaryEffect: function(target) {
            if (Math.floor(Math.random() * 100) < 30) {
                target.inflictStatus('poison', 3);
            }
        },
        description: ''
    },

    moveEarthPower: {
        name:'Earth Power',
        type: 'ground',
        category: 'special',
        pattern: 'wedge',
        basePower: 90,
        baseAccuracy: 100,
        targetSecondaryEffect: function(target) {
            if (Math.floor(Math.random() * 100) < 10) {
                target.changeStatStage('spd', -10);
            }
        },
        description: ''
    },

    moveEarthquake: {
        name:'Earthquake',
        type: 'ground',
        category: 'physical',
        pattern: 'spread',
        basePower: 100,
        baseAccuracy: 100,
        description: ''
    },

    moveDragonPulse: {
        name:'Dragon Pulse',
        type: 'dragon',
        category: 'special',
        pattern: 'beam',
        basePower: 85,
        baseAccuracy: Infinity,
        description: ''
    },

    moveAeropulse: {
        name:'Aeropulse',
        type: 'flying',
        category: 'special',
        pattern: 'beam',
        basePower: 85,
        baseAccuracy: Infinity,
        description: ''
    },

    moveAuraSphere: {
        name:'Aura Sphere',
        type: 'fighting',
        category: 'special',
        pattern: 'beam',
        basePower: 90,
        baseAccuracy: Infinity,
        description: ''
    },

    moveDarkPulse: {
        name:'Dark Pulse',
        type: 'dark',
        category: 'special',
        pattern: 'ring',
        basePower: 80,
        baseAccuracy: Infinity,
        description: ''
    },

    moveHyperBeam: {
        name:'Hyper Beam',
        type: 'normal',
        category: 'special',
        pattern: 'beam',
        basePower: 150,
        baseAccuracy: 90,
        userSecondaryEffect: function(user) {
            user.actionCounter += 5;
        },
        description: ''
    },

    moveGigaImpact: {
        name:'Giga Impact',
        type: 'normal',
        category: 'physical',
        pattern: 'wedge',
        basePower: 150,
        baseAccuracy: 90,
        userSecondaryEffect: function(user) {
            user.actionCounter += 5;
        },
        description: ''
    },

    moveSwordsDance: {
        name:'Swords Dance',
        type: 'normal',
        category: 'status',
        pattern: 'self',
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.changeStatStage('atk', 10);
        },
        description: ''
    },

    moveIronDefense: {
        name:'Iron Defense',
        type: 'steel',
        category: 'status',
        pattern: 'self',
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.changeStatStage('def', 10);
        },
        description: ''
    },

    moveRecover: {
        name:'Recover',
        type: 'normal',
        category: 'status',
        pattern: 'self',
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.heal(Math.floor(user.stat.maxHP / 2));
        },
        description: ''
    },

    moveRoost: {
        name:'Roost',
        type: 'flying',
        category: 'status',
        pattern: 'self',
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.heal(Math.floor(user.stat.maxHP / 2));
        },
        description: ''
    }
}

function onUseMove(user, move, options) { //returns true if move user succesfully executes
    console.log(`${user.name} used ${move.name}!`)
    user.applyCooldown();

    if (game.map.isHidden(user.position) || !user.isAlive()) {
        return false;
    }

    const targets = getTargets(user, move.pattern);
    const userFailed = userFailCheck(user, targets, move) 
    if (userFailed) {
        console.log(userFailed);
        return false;
    }

    const spreadModifier = !(targets.length == 0);
    let hitAny = false;
    for (const target of targets) {
        if (executeMoveOnTarget(user, target, move, spreadModifier)) {
            hitAny = true;
        };
    }
    if (hitAny && Object.hasOwn(move, 'userSecondaryEffect')) {
        move.userSecondaryEffect(user);   
    }
    return true;
}

function getTargets(user, pattern) {
    if (pattern == 'self') {
        return [user];
    } else {
        return user.getFrontSprites(attackPatterns[pattern])
    }
}

function userFailCheck(user, targets, move) {

    //1-8 status fails drowsing, full paralysis
    for (const status in user.statusEffects) {
        const st = statusList[status];
        if (Object.hasOwn(st, 'onUserFailCheck')) {
            const failed = st.onUserFailCheck(user);
            if (failed) {
                return failed;
            }
        };
    }
    return false;
}

function targetFailCheck(user, target, move) {

    //52. type immunity
    if (move.category != 'status') {
        if (typeChart.isImmune(move.type, target.types)) {
            return `It doesn't affect ${target.name}...`
        }
    }
    //66. move accuracy
    if (Math.floor(Math.random() * 100) > move.baseAccuracy) {
        return `${target.name} avoided the attack!`
    }
    return false;
}

function executeMoveOnTarget(user, target, move, spreadModifier) {
    if (game.map.isHidden(target.position)) {
        return false;
    }

    const targetFailed = targetFailCheck(user, target, move);
                
    if (targetFailed) {
        console.log(targetFailed);
        return false;
    }

    if (move.category != 'status') {
        target.damage(damageFormula(user, target, move, {spread: spreadModifier}));
    }

    if (Object.hasOwn(move, 'targetSecondaryEffect')) {
        move.targetSecondaryEffect(target);
    }
    return true;
}

function damageFormula(user, target, move, options) {
    const damageAdjust = 0.6;
    let s = '';

    let attackingStat, defendingStat;
    
    if (move.category == 'physical') {
        attackingStat = user.stat.atk + 20;
        defendingStat = target.stat.def + 20;

        attackingStat = user.modifyStat('atk', attackingStat);
        defendingStat = target.modifyStat('def', defendingStat);
    }
    if (move.category == 'special') {
        attackingStat = user.stat.spa + 20;
        defendingStat = target.stat.spd + 20;

        attackingStat = user.modifyStat('spa', attackingStat);
        defendingStat = target.modifyStat('spd', defendingStat);
    }

    let basePower = move.basePower;

    let damage = Math.floor(Math.floor(22 * damageAdjust * basePower * attackingStat / defendingStat) / 50) + 2;
    //spread modifier
    if (options.spread == true) {
        damage *= 0.75;
    }

    //critical hit modifier
    if (Math.floor(Math.random() * 24) == 0) {
        damage *= 1.5;
        s += 'Critical hit!\n'
    }

    //random modifier
    damage *= (100 - Math.floor(Math.random() * 16))/100;

    //same type attack bonus
    if (user.types.includes(move.type)) {
        damage *= 1.5;
    }

    //type effectiveness modifier
    const typeModifier = typeChart.getEffectiveModifier(move.type, target.types);
    damage *= typeModifier;
    if (typeModifier > 1) {
        s += 'It\'s super effective!\n'
    }
    if (typeModifier < 1) {
        s += 'It\'s not very effective...\n'
    }

    //status modifier (e.g. burn half physical damage)
    for (const status in user.statusEffects) {
        const st = statusList[status];
        if (Object.hasOwn(st, 'getDamageModifier')) {
            damage *= st.getDamageModifier(move);
        };
    }

    //at least 1
    damage = Math.max(Math.floor(damage), 1);

    console.log(s);
    return damage;
}




const typeChart = {
    'normal': {
        'ghost': 0,

        'rock': 1/2,
        'steel': 1/2,
    },

    'fighting': {
        'ghost': 0,

        'flying': 1/2,
        'poison': 1/2,
        'bug': 1/2,
        'psychic': 1/2,
        'fairy': 1/2,

        'normal': 2,
        'rock': 2,
        'steel': 2,
        'ice': 2,
        'dark': 2
    },

    'flying': {
        'rock': 1/2,
        'steel': 1/2,
        'electric': 1/2,

        'fighting': 2,
        'bug': 2,
        'grass': 2
        
    },

    'poison': {
        'steel': 0,

        'poison': 1/2,
        'ground': 1/2,
        'rock': 1/2,
        'ghost': 1/2,

        'grass': 2,
        'fairy': 2    
    },

    'ground': {
        'flying': 0,

        'bug': 1/2,
        'grass': 1/2,

        'poison': 2,
        'rock': 2,
        'steel': 2,
        'fire': 2,
        'electric': 2
    },

    'rock': {
        'fighting': 1/2,
        'ground': 1/2,
        'steel': 1/2,

        'flying': 2,
        'bug': 2,
        'fire': 2,
        'ice': 2
    },

    'bug': {
        'fighting': 1/2,
        'flying': 1/2,
        'poison': 1/2,
        'ghost': 1/2,
        'steel': 1/2,
        'fire': 1/2,
        'fairy': 1/2,

        'grass': 2,
        'psychic': 2,
        'dark': 2    
    },

    'ghost': {
        'normal': 0,

        'dark': 1/2,

        'ghost': 2,
        'psychic': 2
    },

    'steel': {
        'steel': 1/2,
        'fire': 1/2,
        'water': 1/2,
        'electric': 1/2,

        'rock': 2,
        'ice': 2,
        'fairy': 2    
    },

    'fire': {
        'rock': 1/2,
        'fire': 1/2,
        'water': 1/2,
        'dragon': 1/2,

        'bug': 2,
        'steel': 2,
        'grass': 2,
        'ice': 2    
    },

    'water': {
        'water': 1/2,
        'grass': 1/2,
        'dragon': 1/2,

        'ground': 2,
        'rock': 2,
        'fire': 2  
    },

    'grass': {
        'flying': 1/2,
        'poison': 1/2,
        'bug': 1/2,
        'steel': 1/2,
        'fire': 1/2,
        'grass': 1/2,
        'dragon': 1/2,

        'ground': 2,
        'rock': 2,
        'water': 2    
    },

    'electric': {
        'ground': 0,

        'grass': 1/2,
        'electric': 1/2,
        'dragon': 1/2,

        'flying': 2,
        'water': 2
    },

    'psychic': {
        'dark': 0,

        'steel': 1/2,
        'psychic': 1/2,

        'fighting': 2,
        'poison': 2   
    },

    'ice': {
        'steel': 1/2,
        'fire': 1/2,
        'water': 1/2,
        'ice': 1/2,

        'flying': 2,
        'ground': 2,
        'grass': 2,
        'dragon': 2
    },

    'dragon': {
        'fairy': 0,

        'steel': 1/2,

        'dragon': 2
    },

    'dark': {
        'fighting': 1/2,
        'dark': 1/2,
        'fairy': 1/2,
        
        'ghost': 2,
        'psychic': 2
    },

    'fairy': {
        'poison': 1/2,
        'steel': 1/2,
        'fire': 1/2,
        
        'fighting': 2,
        'dragon': 2,
        'dark': 2
    },

    isImmune: function (moveType, defendingTypes) {
        if (defendingTypes.some((defendingType)=>{
            return this[moveType][defendingType] == 0;
        })) {
            return true;
        } else {
            return false;
        }
    },
    getEffectiveModifier: function (moveType, defendingTypes) {
        return defendingTypes.filter((defendingType)=>{
            return Object.hasOwn(this[moveType], defendingType);
        }).reduce((accumulator, defendingType)=>{
            return accumulator * this[moveType][defendingType];
        }, 1);
    }
}

const moveAnimation = {
    image: new Image(),
    loaded: false,

    load: function() {
        this.image.src = `sprites/pokemon/moveEffects.png`;
        this.image.onload = () => {this.loaded = true};
    },

    fromType: {
        'normal': 1,
        'fighting': 5,
        'flying': 4,
        'poison': 6,
        'ground': 10,
        'rock': 0,
        'bug': 0,
        'ghost': 0,
        'steel': 0,
        'fire': 3,
        'water': 8,
        'grass': 0,
        'electric': 9,
        'psychic': 0,
        'ice': 2,
        'dark': 7,
        'dragon': 0,
        'fairy': 0,
    },

    draw: function (user, move, options) {
        const c = options.ctx;
        if (move.pattern != 'self') {
            attackPatterns[move.pattern].forEach((tile) => {
                const coords = screenCoords(addCoords(user.position, rotate(user.direction, tile)));
                c.drawImage(this.image, 24 * this.fromType[move.type], 0, 24, 24, coords.x, coords.y, 24, 24);
            })
        }
    }
}

moveAnimation.load();

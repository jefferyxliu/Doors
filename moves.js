const moveList = {
    moveTackle: {
        name:'Tackle',
        type: 'normal',
        category: 'physical',
        getTargets: function(user) {
            return user.getFrontSprites([{x:1, y:0}]);
        },
        basePower: 40,
        baseAccuracy: 100,
        description: ''
    },
    moveKarateChop: {
        name:'Karate Chop',
        type: 'fighting',
        category: 'physical',
        getTargets: function(user) {
            return user.getFrontSprites([{x:1, y:0}]);
        },
        basePower: 50,
        baseAccuracy: 100,
        description: ''
    },
    moveLaserBeam: {
        name:'Laser Beam',
        type: 'normal',
        category: 'special',
        getTargets: function(user) {
            return user.getFrontSprites([{x:1, y:0}, {x:2, y:0}, {x:3, y:0}]);
        },
        basePower: 50,
        baseAccuracy: 100,
        description: ''
    },
    moveHyperBeam: {
        name:'Hyper Beam',
        type: 'normal',
        category: 'special',
        getTargets: function(user) {
            return user.getFrontSprites([{x:1, y:0}, {x:2, y:0}, {x:3, y:0}]);
        },
        basePower: 150,
        baseAccuracy: 90,
        userSecondaryEffect: function(user) {
            user.actionCounter += 5;
        },
        description: ''
    },
    moveQuickAttack: {
        name:'Quick Attack',
        type: 'normal',
        category: 'physical',
        getTargets: function(user) {
            return user.getFrontSprites([{x:1, y:0}]);
        },
        basePower: 30,
        baseAccuracy: 100,
        userSecondaryEffect: function(user) {
            user.actionCounter += 5;
        },
        description: ''
    },
    moveSwordsDance: {
        name:'SwordsDance',
        type: 'normal',
        category: 'status',
        getTargets: function(user) {
            return user;
        },
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.changeStatStage('atk', 10);
        },
        description: ''
    },
    moveRecover: {
        name:'Recover',
        type: 'normal',
        category: 'status',
        getTargets: function(user) {
            return user;
        },
        baseAccuracy: Infinity,
        userSecondaryEffect: function(user) {
            user.heal(Math.floor(user.stat.maxHP / 2));
        },
        description: ''
    }
}

function onUseMove(user, move) {
    console.log(`${user.name} used ${move.name}!`)
    const targets = move.getTargets(user);
    if (!map.isHidden(user.position) && user.isAlive()) {
        let spreadModifier = false;
        if (targets.length > 1) {
            spreadModifier = true;
        }
        let hitAny = false;
        for (const target of targets) {
            if (!map.isHidden(target.position)) {
                const failed = failCheck(user, target, move);
                if (!failed) {
                    hitAny = true;
                    if (move.category != 'status') {
                        target.damage(damageFormula(user, target, move, {spread: spreadModifier}));
                    }
                    if (Object.hasOwn(move, 'targetSecondaryEffect')) {
                        move.targetSecondaryEffect(target);
                    }
                } else {
                    console.log(failed);
                }
            }
        }
        if (hitAny) {
            if (Object.hasOwn(move, 'userSecondaryEffect')) {
                move.userSecondaryEffect(user);
            }
        }
    }
    user.applyCooldown();
}

function failCheck(user, target, move) {
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

function damageFormula(user, target, move, options) {
    const damageAdjust = 1/10;
    let s = '';
    const userAtk = user.modifyStat('atk', user.stat.atk);
    const targetDef = target.modifyStat('def', target.stat.def);

    let basePower = move.basePower;

    let damage = Math.floor(damageAdjust * basePower * userAtk / targetDef);
    //spread modifier
    if (options.spread == true) {
        damage *= 0.75;
    }

    //critical hit modifier
    if (Math.floor(Math.random() * 24) == 0) {
        damage *= 1.5;
        s += 'Critical hit!'
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
        s += 'It\'s super effective!'
    }
    if (typeModifier < 1) {
        s += 'It\'s not very effective...'
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
    'ghost': {
        'normal': 0,
        'dark': 1/2,
        'ghost': 2,
        'psychic': 2,
    },
    'fighting': {
        'ghost': 0,
        'psychic': 1/2,
        'flying': 1/2,
        'fairy': 1/2,
        'poison': 1/2,
        'dark': 2,
        'rock': 2,
        'steel': 2,
        'ice': 2,
        'normal': 2,
    },
    'dark': {
        'dark': 1/2,
        'fairy': 1/2,
        'fighting': 1/2,
        'ghost': 2,
        'psychic': 2,
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

const moveList = {
    moveTackle: {
        name:'Tackle',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Tackle`);
            performDamagingAttack(user, user.getFrontSprites([{x:1, y:0}]), 5);
            return true;
        },
        description: ''
    },
    moveLaserBeam: {
        name:'Laser Beam',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Laser Beam`);
            performDamagingAttack(user, user.getFrontSprites([{x:1, y:0}, {x:2, y:0}, {x:3, y:0}]), 5);
            return true;
        },
        description: ''
    },
    moveHyperBeam: {
        name:'Hyper Beam',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Hyper Beam`);
            performDamagingAttack(
                user, 
                user.getFrontSprites([{x:1, y:0}, {x:2, y:0}, {x:3, y:0}]),
                10,
                90, 
                (target)=>{}, 
                (user)=>{user.actionCounter += 5}
            );
            return true;
        },
        description: ''
    },
    moveQuickAttack: {
        name:'Quick Attack',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Quick Attack`);
            performDamagingAttack(
                user, 
                user.getFrontSprites([{x:1, y:0}]),
                2,
                100, 
                (target)=>{}, 
                (user)=>{user.actionCounter -= 3}
            );
            return true;
        },
        description: ''
    },
    moveSwordsDance: {
        name:'SwordsDance',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Swords Dance`);
            user.changeStatStage('atk', 10);
            return true;
        },
        description: ''
    },
    moveRecover: {
        name:'Recover',
        //type: 'normal',
        onUse: (user) => {
            console.log(`${user.name} used Recover`);
            user.heal(Math.floor(user.stat.maxHP / 2));
            return true;
        },
        description: ''
    }
}

function performDamagingAttack(user, targets, basePower, baseAccuracy = 100, targetSecondaryEffect = (target)=>{}, userSecondaryEffect = (user)=>{}) {
    if (!map.isHidden(user.position) && user.isAlive()) {
        let spreadModifier = 1;
        if (targets.length > 1) {
            spreadModifier *= 0.75;
        }
        let hitAny = false;
        for (const target of targets) {
            if (!map.isHidden(target.position)) {
                if (Math.floor(Math.random() * 100) <= baseAccuracy) {
                    hitAny = true;
                    target.damage(damageFormula(user, target, basePower * spreadModifier));
                    targetSecondaryEffect(target);
                } else {
                    console.log(`${target.name} avoided the attack.`);
                }
            }
        }
        if (hitAny) {
            userSecondaryEffect(user);
        }
    }
    user.applyCooldown();
}

function damageFormula(user, target, basePower) {
    const userAtk = user.modifyStat('atk', user.stat.atk);
    const targetDef = target.modifyStat('def', target.stat.def);
    const finalAmount = Math.floor(basePower * userAtk / targetDef);
    return Math.max(finalAmount, 1);
}

const statusList = {
    atkUp: {
        category: 'atkStatModifier',
        atkStatModifier: 3/2
    },
    atkDown: {
        category: 'atkStatModifier',
        atkStatModifier: 2/3
    },
    defUp: {
        category: 'defStatModifier',
        defStatModifier: 3/2
    },
    defDown: {
        category: 'defStatModifier',
        defStatModifier: 2/3
    },
    speUp: {
        category: 'cooldownStatModifier',
        cooldownStatModifier: 1/2
    },
    speDown: {
        category: 'cooldownStatModifier',
        cooldownStatModifier: 2
    },

    frostbite: {
        category: 'non-volatile',
        getDamageModifier: function(move) {
            if (move.category == 'special') {
                return 1/2;
            } else {
                return 1;
            }
        },
        onTurnEnd: function(target) {
            target.damage(Math.floor(target.stat.maxHP / 16));
            console.log(`${target.name} was hurt by its frostbite.`);
        }
    },

    burn: {
        category: 'non-volatile',
        getDamageModifier: function(move) {
            if (move.category == 'physical') {
                return 1/2;
            } else {
                return 1;
            }
        },
        onTurnEnd: function(target) {
            target.damage(Math.floor(target.stat.maxHP / 16));
            console.log(`${target.name} was hurt by its burn.`);
        }
    },

    poison: {
        category: 'non-volatile',
        onTurnEnd: function(target) {
            target.damage(Math.floor(target.stat.maxHP / 8));
            console.log(`${target.name} was hurt by poison.`);
        }
    },

    paralysis: {
        category: 'non-volatile',
        onUserFailCheck: function(user) {
            if (Math.floor(Math.random() * 4) == 0) {
                return `${user.name} couldn\'t move because it\'s paralyzed!`;
            } else {
                return false;
            }
        },
        cooldownStatModifier: 2
    }
}
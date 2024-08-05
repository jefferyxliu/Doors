const itemList = {
    potionHeal: {
        name:'Potion of Healing',
        spriteIndex: 1,
        onUse: function(target) {
            target.heal(20);
            target.item = 'none';
            target.applyCooldown();
            return true;
        },
        description: 'Heals the user by 20 HP.'
    },
    xSpe: {
        name:'Potion of Swiftness',
        spriteIndex: 1,
        onUse: function(target) {
            target.changeStatStage('spe',10);
            target.item = 'none';
            target.applyCooldown();
            return true;
        },
        description: 'Boosts the user\'s speed for 10 turns.'
    },
    xAtk: {
        name:'Potion of Strength',
        spriteIndex: 1,
        onUse: function(target) {
            target.changeStatStage('atk',10);
            target.item = 'none';
            target.applyCooldown();
            return true;
        },
        description: 'Boosts the user\'s attack for 10 turns.'
    },

    key1: {
        name:'Key 1',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:31, y:17}) < 6) {
                game.map.tiles[17][31] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    key2: {
        name:'Key 2',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:52, y:15}) < 6) {
                game.map.tiles[15][52] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    key3: {
        name:'Key 3',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:52, y:14}) < 6) {
                game.map.tiles[14][52] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    key4: {
        name:'Key 4',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:52, y:13}) < 6) {
                game.map.tiles[13][52] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    key5: {
        name:'Key 5',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:51, y:14}) < 6) {
                game.map.tiles[13][51] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    key6: {
        name:'Key 6',
        spriteIndex: 2,
        onUse: function(target) {
            if (dist1(target.position, {x:0, y:4}) < 6) {
                game.map.tiles[4][0] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },








    esirykTowerKey1: {
        name:'Key 1',
        spriteIndex: 2,
        onUse: function(target) {
            if (game.map.name == 'esirykTower1F' && dist1(target.position, {x:26, y:26}) < 6) {
                game.map.tiles[26][26] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    esirykTowerKey2: {
        name:'Key 2',
        spriteIndex: 2,
        onUse: function(target) {
            if (game.map.name == 'esirykTower2F' && dist1(target.position, {x:18, y:26}) < 6) {
                game.map.tiles[26][18] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    esirykTowerKey3: {
        name:'Key 3',
        spriteIndex: 2,
        onUse: function(target) {
            if (game.map.name == 'esirykTower3F' && dist1(target.position, {x:18, y:18}) < 6) {
                game.map.tiles[18][18] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    esirykTowerKey4: {
        name:'Key 4',
        spriteIndex: 2,
        onUse: function(target) {
            if (game.map.name == 'esirykTower4F' && dist1(target.position, {x:26, y:18}) < 6) {
                game.map.tiles[18][26] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    esirykTowerKey5: {
        name:'Key 5',
        spriteIndex: 2,
        onUse: function(target) {
            if (game.map.name == 'esirykTower5F' && dist1(target.position, {x:22, y:24}) < 6) {
                game.map.tiles[24][22] = 1;
                print(`A door opened.`);
                target.item = 'none';
            } else {
                alert('Hint: Use the key when the door is on screen.');
                target.dropItem();
            }
        },
        cooldownStatModifier: 12/10,
        description: 'Opens a certain door.'
    },

    victoryMessage: {
        name:'Message',
        spriteIndex: 0,
        onUse: function(target) {
            alert('You Win!');
            target.dropItem();
        },
        description: ''
    },

    floatStone: {
        name:'Float Stone',
        spriteIndex: 0,
        onUse: function(target) {
            target.dropItem();
        },
        onModifySolidTiles(st) {
            return st.filter((t) => {return t != 12 && t != 13;})
        },
        description: 'Allows users to float on air.'
    },

    leftovers: {
        name: 'Leftovers',
        onUse: function(target) {
            target.dropItem();
        },
        onTurnEnd: function(target) {
            target.heal(Math.floor(target.stat.maxHP / 16));
            print(`${target.name} healed with Leftovers`);
        },
        description: 'Heals the holder a little bit at the end of every turn.'
    },
    runningShoes: {
        name:'Running Shoes',
        onUse: function(target) {
            target.dropItem();
        },
        cooldownStatModifier: 2/3,
        description: 'Makes the holder faster.'
    },
    ironBall: {
        name:'Iron Ball',
        onUse: function(target) {
            target.dropItem();
        },
        cooldownStatModifier: 3/2,
        description: 'Makes the holder slower.'
    },
}

for (const move in moveList) {
    itemList[`TM:${move}`] = {
        name:`TM: ${moveList[move].name}`,
        spriteIndex: 0,
        onUse: function(target) {
            target.learnMove(move);
        },
        description: ''
    }
}
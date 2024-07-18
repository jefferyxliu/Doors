const speciesList = {
    human: {
        stat: {
            maxHP: 10,
            atk: 10,
            def: 10,
            spa: 10,
            spd: 10,
            cooldown: 12,
            nature: 'follow team',
            solidTiles: [1,2,4,6,7],
            types: ['normal'],
            color: 'black'
        }
    },

    testDummy: {
        stat: {
            maxHP: 1000,
            atk: 10,
            def: 10,
            spa: 10,
            spd: 10,
            cooldown: 12,
            nature: 'follow team',
            solidTiles: [1,2,4,6,7],
            types: ['normal'],
            color:'black'
        }
    },

    figure: {
        stat: {
            maxHP: 50,
            atk: 25,
            def: 20,
            spa: 10,
            spd: 20,
            cooldown: 16,
            nature: 'attack',
            solidTiles: [1,2,3,4,7],
            types: ['fighting'],
            color:'brown'
        }
    },

    rush: {
        stat: {
            maxHP: 10,
            atk: 4,
            def: 15,
            spa: 4,
            spd: 15,
            cooldown: 8,
            nature: 'back and forth',
            solidTiles: [1,2,3,4,7],
            types: ['dark'],
            color:'brown'
        }
    },

    seek: {
        stat: {
            maxHP: 20,
            atk: 5,
            def: 15,
            spa: 5,
            spd: 15,
            cooldown: 11,
            nature: 'attack',
            solidTiles: [1,2,3,4,7],
            types: ['poison'],
            color:'brown'
        }
    },

    ambush: {
        stat: {
            maxHP: 15,
            atk: 3,
            def: 15,
            spa: 3,
            spd: 15,
            cooldown: 4,
            nature: 'back and forth',
            solidTiles: [1,2,3,4,7],
            types: ['ghost'],
            color:'brown',
        },
    }
}
const speciesList = {
    human: {
        stat: {
            maxHP: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            cooldown: 12,
            nature: 'follow team',
            types: ['normal'],
            color: 'black',
            sprite: 'human',
            size: 24,
            defaultMoves: ['moveTackle']
        }
    },

    testDummy: {
        stat: {
            maxHP: 1000,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            cooldown: 12,
            nature: 'follow team',
            types: ['normal'],
            color:'black',
            sprite: 'human2',
            size: 24,
            defaultMoves: ['moveTackle']
        }
    },

    figure: {
        stat: {
            maxHP: 120,
            atk: 130,
            def: 120,
            spa: 50,
            spd: 80,
            cooldown: 16,
            nature: 'attack',
            types: ['fighting'],
            color:'brown',
            sprite: 'figure',
            size: 24,
            defaultMoves: ['moveKarateChop']
        }
    },

    rush: {
        stat: {
            maxHP: 80,
            atk: 40,
            def: 80,
            spa: 40,
            spd: 80,
            cooldown: 8,
            nature: 'back and forth',
            types: ['dark'],
            color:'brown',
            sprite: 'rush',
            size: 24,
            defaultMoves: ['moveDarkPulse']
        }
    },

    seek: {
        stat: {
            maxHP: 100,
            atk: 70,
            def: 80,
            spa: 70,
            spd: 80,
            cooldown: 11,
            nature: 'attack',
            types: ['poison'],
            color:'brown',
            sprite: 'seek',
            size: 24,
            defaultMoves: ['moveSludgeBomb']
        }
    },

    ambush: {
        stat: {
            maxHP: 80,
            atk: 25,
            def: 80,
            spa: 25,
            spd: 80,
            cooldown: 4,
            nature: 'back and forth',
            types: ['ghost'],
            color:'brown',
            sprite: 'ambush',
            size: 24,
            defaultMoves: ['moveDarkPulse']
        },
    },

    albaby: {
        stat: {
            maxHP: 45,
            atk: 53,
            def: 32,
            spa: 38,
            spd: 32,
            cooldown: 12,
            nature: 'attack',
            types: ['normal','flying'],
            color:'black',
            sprite: 'pokemon/albaby',
            size: 32,
            defaultMoves: ['movePeck']
        }
    },

    albatrim: {
        stat: {
            maxHP: 65,
            atk: 68,
            def: 47,
            spa: 48,
            spd: 47,
            cooldown: 10,
            nature: 'attack',
            types: ['normal','flying'],
            color:'black',
            sprite: 'pokemon/albatrim',
            size: 32,
            defaultMoves: ['moveWingAttack']
        }
    },

    cloakritter: {
        stat: {
            maxHP: 45,
            atk: 55,
            def: 35,
            spa: 50,
            spd: 35,
            cooldown: 14,
            nature: 'attack',
            types: ['dark'],
            color:'black',
            sprite: 'pokemon/cloakritter',
            size: 32,
            defaultMoves: ['moveBite']
        }
    },

    sanfi: {
        stat: {
            maxHP: 35,
            atk: 35,
            def: 45,
            spa: 55,
            spd: 55,
            cooldown: 11,
            nature: 'attack',
            types: ['flying'],
            color:'black',
            sprite: 'pokemon/sanfi',
            size: 32,
            defaultMoves: ['moveGust']
        }
    },

    avisera: {
        stat: {
            maxHP: 55,
            atk: 55,
            def: 65,
            spa: 85,
            spd: 75,
            cooldown: 10,
            nature: 'attack',
            types: ['flying'],
            color:'black',
            sprite: 'pokemon/avisera',
            size: 32,
            defaultMoves: ['moveAirSlash']
        }
    },

    sanctuavia: {
        stat: {
            maxHP: 85,
            atk: 70,
            def: 85,
            spa: 120,
            spd: 95,
            cooldown: 8,
            nature: 'attack',
            types: ['flying'],
            color:'black',
            sprite: 'pokemon/sanctuavia',
            size: 32,
            defaultMoves: ['moveAeropulse']
        }
    }
}
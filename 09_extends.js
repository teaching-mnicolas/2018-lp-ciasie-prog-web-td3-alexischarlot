describe ("extends", function() {

    it ("allows to inherit another class", function() {
      class Character {
        constructor (hp) {
            this.hp = hp
        }

        shout () {
            return "FUS"
        }
      }

      class Warrior __ Character {
        constructor (name, damage) {
            super(150)                            // Allow to call super class' constructor
            this.name = name
            this.damage = damage
        }
      }

      toto = new Warrior(__, __)

      expect(toto.name).toEqual(__)
      expect(toto.damage).toEqual(__)
      expect(toto.hp).toEqual(__)
      expect(toto.shout()).toEqual(__)

      expect(toto instanceof __).toBeTruthy()  // toto is an instance of its constructor
      expect(toto instanceof __).toBeTruthy()  // toto is an instance of its super class
    })

    it ("can override its super class properties", function () {
      class Character {
        constructor (hp) {
            this.hp = hp
        }

        shout () {
            return "FUS"
        }
      }

      class Warrior __ Character {
        constructor (name, damage) {
            super(150)
            this.hp = 200
            this.name = name
            this.damage = damage
        }

        shout () {
          return "RO DAH"
        }
      }

      toto = new Warrior(__, __)

      expect(toto.hp).toEqual(__)
      expect(toto.shout()).toEqual(__)
    })

    it ("can access to a property of the super class using the keyword super", function () {
      class Character {
        constructor (hp) {
            this.hp = hp
        }

        shout () {
            return "FUS"
        }
      }

      class Warrior __ Character {
        constructor (name, damage) {
            super(150)
            this.name = name
            this.damage = damage
        }

        shout () {
          return __.shout() + " RO DAH"
        }
      }

      toto = new Warrior(__, __)

      expect(toto.shout()).toEqual(__)
    })
  })

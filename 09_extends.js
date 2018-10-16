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

      class Warrior extends Character {
        constructor (name, damage) {
            super(150)                            // Allow to call super class' constructor
            this.name = name
            this.damage = damage
        }
      }

      toto = new Warrior("toto", 10)

      expect(toto.name).toEqual("toto")
      expect(toto.damage).toEqual(10)
      expect(toto.hp).toEqual(150)
      expect(toto.shout()).toEqual("FUS")

      expect(toto instanceof Warrior).toBeTruthy()  // toto is an instance of its constructor
      expect(toto instanceof Character).toBeTruthy()  // toto is an instance of its super class
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

      class Warrior extends Character {
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

      toto = new Warrior("toto", 10)

      expect(toto.hp).toEqual(200)
      expect(toto.shout()).toEqual("RO DAH")
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

      class Warrior extends Character {
        constructor (name, damage) {
            super(150)
            this.name = name
            this.damage = damage
        }

        shout () {
          return Character.prototype.shout() + " RO DAH"
        }
      }

      toto = new Warrior("toto", 10)

      expect(toto.shout()).toEqual("FUS RO DAH")
    })
  })

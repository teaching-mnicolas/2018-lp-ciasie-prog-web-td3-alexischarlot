describe ("static", function() {

    it ("allows to define a static properties for a class", function() {
        class Character {

            constructor () {
            }

            static staticMethod () {
              return "This is a static method"
            }

          }

          expect(Character.staticMethod()).toEqual("This is a static method")    // we can access a static property using the class name

          const warrior = new Character()
          expect(warrior.staticMethod).toBeUndefined()   // static methods are not defined for instances of the class
        })
  })

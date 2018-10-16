describe ("static", function() {

    it ("allows to define a static properties for a class", function() {
        class Character {

            constructor () {
            }

            __ staticMethod () {
              return "This is a static method"
            }

          }

          expect(__.staticMethod()).toEqual(__)    // we can access a static property using the class name

          const warrior = new Character()
          expect(warrior.staticMethod).toBe__()   // static methods are not defined for instances of the class
        })
  })

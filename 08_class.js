describe ("Class", function() {

  it ("is defined using the class keyword", function() {
    __ Character {
    }

    const warrior = new Character()             // Has a constructor by default
    expect(warrior instanceof __).toBeTruthy()  // warrior is an instance of its constructor
  })

  it ("default constructor can be overriden by a custom one", function () {
    __ Character {
      __  (hp) {
        this.hp = hp
      }
    }

    const warrior = new Character(__)
    expect(warrior.hp).toBeDefined()
    expect(warrior.hp).toEqual(__)
    expect(warrior.hasOwnProperty("hp")).toBe__()
  })

  it ("methods are actually added to the class prototype", function () {
    __ Character {
      __  (hp) {
        this.hp = hp
      }

      shout () {
        return "FUS"
      }
    }

    const warrior = new Character(__)
    expect(warrior.shout).toBeDefined()
    expect(warrior.shout()).toEqual(__)
    expect(warrior.hasOwnProperty("shout")).toBe__()
    expect(Character.prototype.hasOwnProperty("shout")).toBe__()
  })

  it ("are just special functions", function() {
    __ Character {
      __  (hp) {
        this.hp = hp
      }

      shout () {
        return "FUS"
      }
    }

    expect(typeof Character).toEqual(__)
    expect(Character instanceof __).toBeTruthy()
  })
})

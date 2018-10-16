describe ("Prototype redefinition", function() {
  let warrior, warrior2

  beforeEach(function() {
    const Character = function() {}
    Character.prototype.hp = 100
    Character.prototype.armor = 10

    warrior = new Character()

    Character.prototype = {
      hp: 150,
      shout: function () {
        return "FUS RO DAH !"
      }
    }

    warrior2 = new Character()
  })

  it ("Redefining the prototype does NOT modify existing instances", function() {
    expect(warrior.hp).toBeDefined()
    expect(warrior.hp).toBeEquals(__)
    expect(warrior.armor).toBe__()
    expect(warrior.shout).toBe__()
  })

  it ("Redefining the prototype does modify future instances", function() {
    expect(warrior2.hp).toBeDefined()
    expect(warrior2.hp).toBeEquals(__)
    expect(warrior2.armor).toBe__()
    expect(warrior2.shout).toBe__()
  })

})

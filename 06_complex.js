describe ("Chain of prototypes", function() {
  let warrior, toto, Character, Warrior;

  beforeEach(function() {
    Character = function() {};
    warrior = new Character();

    Warrior = function() {};
    Warrior.prototype = warrior;
    toto = new Warrior();
  });

  it ("constructor of toto is Character, not Warrior", function() {
    expect(toto.constructor).not.toBe(__);
    expect(toto.constructor).toBe(__);
  });

  it ("__proto__ of toto is Warrior.prototype", function() {
    expect(toto.__proto__).toBe(__);
    expect(toto.__proto__).toBe(__);    // there is another name for this object
  });

  it ("Character is the constructor of toto.__proto__", function() {
    expect(toto.__proto__.constructor).toBe(__);
    expect(warrior.constructor).toBe(__);
  });

  it ("toto.__proto__.__proto__ is NOT warrior", function() {
    expect(toto.__proto__.__proto__).not.toBe(__);
     expect(warrior.__proto__).not.toBe(__);
  });

  it ("Character is the constructor of toto.__proto__.__proto__", function() {
    expect(toto.__proto__.__proto__.constructor).toBe(__);
  });

  it ("Character is the constructor of warrior.__proto__", function() {
    expect(warrior.__proto__.constructor).toBe(__);
  });

});

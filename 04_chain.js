describe ("Chain of prototypes", function() {
  let toto, Character, Warrior;

  beforeEach(function() {
    Character = function() {};
    Character.prototype.hp = 100;

    const warrior = new Character();
    warrior.damage = 42;

    Warrior = function() {};
    Warrior.prototype = warrior;

    toto = new Warrior();
    toto.name = "toto";
  });

  describe ("Properties access", function() {
    it ("object has access to its own property", function() {
      expect(toto.name).toBeDefined();
      expect(toto.name).toEqual(__);
    });

    it ("object has access to property of its prototype", function() {
      expect(toto.damage).toBeDefined();
      expect(toto.damage).toEqual(__);
    });

    it ("object has access to property of its prototype's prototype", function() {
      expect(toto.hp).toBeDefined();
      expect(toto.hp).toEqual(__);
    });

    it ("Prototype modification is propagated for prototype's prototype too", function() {
      expect(toto.mp).toBeUndefined();
      Character.__.mp = 50;                 // add a property to toto prototype's prototype
      expect(toto.mp).toBeDefined();
      expect(toto.mp).toEqual(__);
    });
  });

  describe ("instanceof", function() {
    it ("object is instance of its constructor", function() {
      expect(toto instanceof __).toBeTruthy();  // its constructor
    });

    it ("object is instance of its constructor's constructor", function() {
      expect(toto instanceof __).toBeTruthy();  // its constructor's constructor
    });
  });

  describe ("object", function() {
    it ("every object is instance of Object", function() {
      expect(toto instanceof __).toBeTruthy(); // check that toto is also an instance of object
    });

    it ("every object has access to properties of object", function() {
      expect(toto.toString).toBeDefined();
      expect(toto.__).toEqual("[object Object]"); // call the method toString()
    });
  });

});

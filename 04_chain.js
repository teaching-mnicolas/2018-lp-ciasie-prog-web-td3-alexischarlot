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
      expect(toto.name).toEqual("toto");
    });

    it ("object has access to property of its prototype", function() {
      expect(toto.damage).toBeDefined();
      expect(toto.damage).toEqual(42);
    });

    it ("object has access to property of its prototype's prototype", function() {
      expect(toto.hp).toBeDefined();
      expect(toto.hp).toEqual(100);
    });

    it ("Prototype modification is propagated for prototype's prototype too", function() {
      expect(toto.mp).toBeUndefined();
      Character.prototype.mp = 50;                 // add a property to toto prototype's prototype
      expect(toto.mp).toBeDefined();
      expect(toto.mp).toEqual(50);
    });
  });

  describe ("instanceof", function() {
    it ("object is instance of its constructor", function() {
      expect(toto instanceof Warrior).toBeTruthy();  // its constructor
    });

    it ("object is instance of its constructor's constructor", function() {
      expect(toto instanceof Character).toBeTruthy();  // its constructor's constructor
    });
  });

  describe ("object", function() {
    it ("every object is instance of Object", function() {
      expect(toto instanceof Object).toBeTruthy(); // check that toto is also an instance of object
    });

    it ("every object has access to properties of object", function() {
      expect(toto.toString).toBeDefined();
      expect(toto.toString()).toEqual("[object Object]"); // call the method toString()
    });
  });

});

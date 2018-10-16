describe ("Inheritance", function() {

  it ("object has a constructor object", function() {
    const Character = function() {};
    const warrior = new Character();
    expect(warrior.constructor).toBe(Character);
  });

  it ("function has a prototype object", function() {
    const Character = function() {};
    expect(Character.prototype).toBeDefined();   // check the prototype property
  });

  it ("function prototype has a constructor that is itself", function() {
    const Character = function() {};
    expect(Character.prototype.constructor).toBeDefined();
    expect(Character.prototype.constructor).toBe(Character);
  });

  it ("object is instance of its constructor", function() {
    const Character = function() {};
    const warrior = new Character();
    expect(warrior instanceof Character).toBeTruthy();   // warrior is instance of its constructor
  });

});

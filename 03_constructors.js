describe ("Constructors", function() {

  it ("Object is constructor of {}", function() {
    expect({}.constructor).toBe(Object);
  });

  it ("Array is constructor of []", function() {
    expect([].constructor).toBe(Array);
  });

  it ("String is constructor of ''", function() {
    expect("".constructor).toBe(String);
  });

  it ("Number is constructor of 1", function() {
    expect((1).constructor).toBe(Number);
  });

  it ("Boolean is constructor of true", function() {
    expect(true.constructor).toBe(Boolean);
  });

  it ("RegExp is constructor of /aaa/", function() {
    expect(/aaa/.constructor).toBe(RegExp);
  });

  it ("Function is constructor of a function", function() {
    const f = function() {};
    expect(f.constructor).toBe(Function);
  });
});

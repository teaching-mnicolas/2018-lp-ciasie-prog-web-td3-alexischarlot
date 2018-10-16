describe ("Strangeness", function() {

  describe ("Mutables", function() {
    it ("{} is of type Object", function() {
      expect(({}) instanceof Object).toBe__();      // true or false
    });

    it ("[] is of type Array", function() {
      expect([] instanceof Array).toBe__();       // true or false
    });

    it ("[] is of type Object also", function() {
      expect([] instanceof Object).toBe__();      // true or false
    });

    it ("/aaa/ is of type RegExp", function() {
      expect(/aaa/ instanceof RegExp).toBe__();   // true or false
    });

    it ("/aaa/ is of type Object also", function() {
      expect(/aaa/ instanceof Object).toBe__();   // true or false
    });

    it ("f is of type Function", function() {
      const f = function() {};
      expect(f instanceof Function).toBe__();     // true or false
    });

    it ("f is of type Object also", function() {
      const f = function() {};
      expect(f instanceof Object).toBe__();       // true or false
    });
  });


  describe ("Immutables", function() {

    describe ("Number", function() {
      it ("1 is of type Number", function() {
        expect(typeof 1).toEqual("number");
      });

      it ("1 is NOT instance of Number", function() {
        expect(1 instanceof Number).toBe__();     // true or false
      });

      it ("1 is NOT instance of Object", function() {
        expect(1 instanceof Object).toBe__();     // true or false
      });

      it ("but new Number is a Number", function() {
        const n = new Number();
        expect(n instanceof Number).toBe__();     // true or false
      });
    });

    describe ("String", function() {
      it ("'' is of type String", function() {
        expect(typeof '').toEqual("string");
      });

      it ("'' is NOT instance of String", function() {
        expect('' instanceof String).toBe__();    // true or false
      });

      it ("'' is NOT instance of Object", function() {
        expect('' instanceof Object).toBe__();    // true or false
      });

      it ("but new String is a String", function() {
        const s = new String();
        expect(s instanceof String).toBe__();     // true or false
      });
    });

    describe ("Boolean", function() {
      it ("true is of type Boolean", function() {
        expect(typeof true).toEqual("boolean");
      });

      it ("true is NOT instance of Boolean", function() {
        expect(true instanceof Boolean).toBe__();   // true or false
      });

      it ("true is NOT instance of Object", function() {
        expect(true instanceof Object).toBe__();    // true or false
      });

      it ("but new Boolean is a Boolean", function() {
        const b = new Boolean();
        expect(b instanceof Boolean).toBe__();      // true or false
      });
    });

  });

  describe ("Specials", function() {

    describe ("Infinity", function() {
      it ("Infinity is of type Number", function() {
        expect(typeof Infinity).toEqual("number");
      });

      it ("Infinity is NOT instance of Number", function() {
        expect(Infinity instanceof Number).toBe__();      // true or false
      });

      it ("Infinity is NOT instance of Object", function() {
        expect(Infinity instanceof Object).toBe__();      // true or false
      });
    });

    describe ("NaN", function() {
      it ("NaN is of type Number", function() {
        expect(typeof NaN).toEqual("number");
      });

      it ("NaN is NOT instance of Number", function() {
        expect(NaN instanceof Number).toBe__();         // true or false
      });

      it ("NaN is NOT instance of Object", function() {
        expect(NaN instanceof Object).toBe__();         // true or false
      });
    });

    describe ("undefined", function() {
      it ("undefined is of type undefined", function() {
        expect(typeof undefined).toEqual("undefined");
      });

      it ("undefined is NOT instance of Object", function() {
        expect(undefined instanceof Object).toBe__();   // true or false
      });
    });

    describe ("null", function() {
      it ("null is of type Object", function() {
        expect(typeof null).toEqual("object");
      });

      it ("null is NOT instance of Object", function() {
        expect(null instanceof Object).toBe__();        // true or false
      });
    });

  });

});

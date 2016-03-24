describe("es6", function() {
  describe("for expression", function() {
    it("should get item from an array", function () {
      let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var sum = 0;
      for (let i of l) {
        sum += i;
      }
      expect(sum).toBe(55);
    });

    it("should get char from a string", function () {
      var sum = 0;
      for (let s of "123456789") {
        sum += parseInt(s);
      }
      expect(sum).toBe(45);
    });

    it("should get item from an Map", function () {
      let m = new Map();
      m.set("heaton", 18);
      m.set("jason", 20);
      var sum = 0;
      for (let [, age] of m) {
        sum += age;
      }
      expect(sum).toBe(38);
    });
  });

  describe("generators", function() {
    it("should yield several times of a function", function() {
      function* quips(start) {
        yield start;
        yield start + 1;
        yield start + 2;
      }
      let f = quips(1);
      expect(f.next()).toEqual({value:1, done:false});
      expect(f.next()).toEqual({value:2, done:false});
      expect(f.next()).toEqual({value:3, done:false});
      expect(f.next()).toEqual({value:undefined, done:true});
    });
  });

  describe("Template strings", function() {
    it("should inject variables and execute functions in a string", function() {
      let user = {name: "Heaton", age: 18};
      expect(`My name is ${user.name}, I'm ${user.age} years old.`).toEqual("My name is Heaton, I'm 18 years old.");
      function add(a, b) {
        return a + b;
      }
      expect(`1+2=${add(1, 2)}`).toEqual("1+2=3");
    });

    it("can be used in multiple lines", function() {
      expect(`Be careful!
      There is a bear`).toContain("\n");
    });
  });

  describe("arguments", function() {
    it("can be set by a default value", function() {
      function increase(x, s=1) {
        return x + s;
      }
      expect(increase(1)).toBe(2);
      expect(increase(1, 2)).toBe(3);
    });

    it("can be used as rest arguments", function() {
      function containsAll(haystack, ...needles) {
        for (let needle of needles) {
          if (haystack.indexOf(needle) === -1) {
            return false;
          }
        }
        return true;
      }
      expect(containsAll("heaton", "h", "ton")).toBeTruthy();
      expect(containsAll("heaton")).toBeTruthy();
      expect(containsAll("heaton", "b", "ton")).toBeFalsy();
    });

    it("can be passed in a spread way", function() {
      function increase(x, y, z) {
        return x + y + z;
      }
      let ar = [9, 8 ,7];
      expect(increase(...[1, 2, 3])).toBe(6);
      expect(increase(...ar)).toBe(24);
    });
  });

  describe("Destructuring", function() {
    it("should assign multiple variables from array in one time", function() {
      let [x, [y], z] = [1, [2], 3];
      expect(x).toBe(1);
      expect(y).toBe(2);
      expect(z).toBe(3);
      let [,,third] = ["not care", "not care either", "care"];
      expect(third).toBe("care");
      let [head, ...tail] = [1, 2, 3, 4];
      expect(head).toBe(1);
      expect(tail).toEqual([2, 3, 4]);
    });

    it("should assign multiple variables from an object in one time", function() {
      var {foo, bar} = { foo: "lorem", bar: "ipsum" };
      expect(foo).toEqual("lorem");
      expect(bar).toEqual("ipsum");
    });

    //it("can be used in generators", function() {
    //  function* fibs() {
    //    var a = b = 1;
    //    while (true) {
    //      yield a;
    //      [a, b] = [b, a + b];
    //    }
    //  }
    //  var [first, s, t, f, fifth, sixth] = fibs();
    //  expect(first).toBe(1);
    //  expect(sixth).toBe(5);
    //});

    it("can set a default value", function () {
      let [missing = true] = [];
      expect(missing).toBeTruthy();
      var {message: msg = "Something went wrong"} = {};
      expect(msg).toEqual("Something went wrong");
      var {x = 3} = {};
      expect(x).toBe(3);
    });
  });

  describe("Arrow Functions", function() {
    it("should be a function", function () {
      let l = [1, 5, 10].filter(i => i > 2).map(i => i * 2);
      expect(l).toEqual([10, 20]);
    });

    it("can build a function", function () {
      let cat = {
        say(word) {
          return `miao, ${word}`;
        }
      };
      expect(cat.say("heaton")).toEqual("miao, heaton");
    });
  });

  describe("Symbol", function () {
    it("should create a symbol", function () {
      let s = Symbol(); // unique
      let obj = {};
      obj[s] = "some string";
      expect(obj[s]).toBe("some string");
      expect(typeof s).toBe("symbol");
      expect(s).not.toBe(Symbol());
    });
    
    it("should create a symbol with a description", function () {
      let s = Symbol("hello");
      expect(s.toString()).toBe("Symbol(hello)");
    });

    it("should get a symbol from a registry with for", function () {
      let s = Symbol.for("hello");
      expect(s.toString()).toBe("Symbol(hello)");
      expect(s).toBe(Symbol.for("hello"));
    });
  });

  describe("Collections", function () {
    it("Map", function () {
      let m = new Map();
      m.set("name", "heaton");
      m.set("age", 18);
      expect(m.size).toBe(2);
    });

    it("Set", function () {
      let s = new Set();
      s.add("sandwich");
      s.add("burger");
      s.add("burger");
      expect(s.size).toBe(2);
    });
  });
});

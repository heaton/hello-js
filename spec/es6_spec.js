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

    //it("should get item from an Map", function () {
    //  let l = {heaton: 18, jason: 20};
    //  var sum = 0;
    //  for (let [name, age] of l) {
    //    sum += age;
    //  }
    //  expect(sum).toBe(38);
    //});
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

  describe("enhance string with `", function() {
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
        for (var needle of needles) {
          if (haystack.indexOf(needle) === -1) {
            return false;
          } }
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

});

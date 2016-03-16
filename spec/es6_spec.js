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
});

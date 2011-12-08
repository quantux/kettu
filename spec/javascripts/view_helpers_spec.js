describe("ViewHelpers", function() {
  var view_helpers = kettu.ViewHelpers;

  describe("sanitizeNumber'", function() {
    it("should return 0 if ratio is 0", function() {
      expect(view_helpers.sanitizeNumber(0)).toEqual(0);
    });
    
    it("should return the number if ratio is bigger than 0", function() {
      expect(view_helpers.sanitizeNumber(2.2)).toEqual(2.2);
    });
    
    it("should return N/A if ratio is -1", function() {
      expect(view_helpers.sanitizeNumber(-1)).toEqual('N/A');
    });
    
    it("should return Infinity if ratio is -2", function() {
      expect(view_helpers.sanitizeNumber(-2)).toEqual('Infinity');
    });
  });
});
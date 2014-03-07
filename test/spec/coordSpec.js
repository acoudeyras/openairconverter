(function() {
  define(['coord'], function(Coord) {
    describe('parse', function() {
      return it('should parse a coord', function() {
        var coord;
        coord = Coord.parse('44:02:56 N');
        expect(coord.degre).to.equal(44);
        expect(coord.minute).to.equal(2);
        expect(coord.second).to.equal(56);
        return expect(coord.orientation).to.equal('N');
      });
    });
    return describe('equals', function() {
      it('should be true if same coord', function() {
        var coord;
        coord = Coord.parse('44:02:56 N');
        return expect(coord.equals(coord)).to.be["true"];
      });
      it('should be true if same coords', function() {
        var coord, coord1;
        coord = Coord.parse('44:02:56 N');
        coord1 = Coord.parse('44:02:56 N');
        return expect(coord.equals(coord1)).to.be["true"];
      });
      return it('should be false if different coords', function() {
        var coord;
        coord = Coord.parse('44:02:56 N');
        expect(coord.equals(Coord.parse('43:02:56 N'))).to.be["false"];
        expect(coord.equals(Coord.parse('44:12:56 N'))).to.be["false"];
        expect(coord.equals(Coord.parse('44:02:57 N'))).to.be["false"];
        return expect(coord.equals(Coord.parse('44:02:56 E'))).to.be["false"];
      });
    });
  });

}).call(this);

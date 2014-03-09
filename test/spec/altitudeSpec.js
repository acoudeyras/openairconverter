(function() {
  define(['altitude'], function(Altitude) {
    'use strict';
    return describe('parse', function() {
      it('should parse an altitude in feet', function() {
        var altitude;
        altitude = Altitude.parse('4000FT AMSL');
        expect(altitude.feet).to.equal(4000);
        return expect(altitude.desc).to.equal('4000FT AMSL');
      });
      it('should parse an altitude with SFC', function() {
        var altitude;
        altitude = Altitude.parse('SFC');
        expect(altitude.feet).to.equal(0);
        return expect(altitude.desc).to.equal('SFC');
      });
      return xit('should parse an altitude in flight level', function() {
        var altitude;
        altitude = Altitude.parse('FL115');
        expect(altitude.desc).to.equal('FL115');
        return expect(altitude.feet).to.equal(4000);
      });
    });
  });

}).call(this);

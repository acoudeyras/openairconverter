// Generated by CoffeeScript 1.7.1
define(['zone', 'memory-reader', 'text!../data/small-french.txt'], function(Zone, Reader, data) {
  'use strict';
  return describe('parse', function() {
    var zone;
    zone = Zone.parse(new Reader(data));
    it('should parse a zone', function() {
      return expect(zone).to.exist;
    });
    it('should parse the zone name', function() {
      return expect(zone.name).to.equal('P36 Fessenheim');
    });
    it('should parse the zone class', function() {
      expect(zone["class"].code).to.equal('P');
      return expect(zone["class"].name).to.equal('prohibited');
    });
    it('should parse the zone ceiling', function() {
      return expect(zone.ceiling.feet).to.equal(4000);
    });
    it('should parse the zone floor', function() {
      return expect(zone.floor.feet).to.equal(0);
    });
    return it('should parse the zone shapes', function() {
      expect(zone.shapes).to.exist;
      return expect(zone.shapes).to.have.length(10);
    });
  });
});

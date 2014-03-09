(function() {
  define(['zone', 'memory-reader', 'shapes/point', 'text!../data/small-french.txt'], function(Zone, Reader, Point, data) {
    'use strict';
    var isPoint;
    isPoint = function(shape, pointStr) {
      var point;
      point = Point.parse(pointStr);
      return expect(shape.equals(point)).to.be["true"];
    };
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
      it('should parse the zone shapes', function() {
        expect(zone.shapes).to.exist;
        return expect(zone.shapes).to.have.length(6);
      });
      return describe('shapes', function() {
        it('should parse each zone points in correct order', function() {
          isPoint(zone.shapes[0], '47:51:30 N 007:33:35 E');
          isPoint(zone.shapes[2], '47:56:42 N 007:35:40 E');
          isPoint(zone.shapes[3], '47:56:00 N 007:35:06 E');
          isPoint(zone.shapes[4], '47:55:24 N 007:34:51 E');
          return isPoint(zone.shapes[5], '47:54:15 N 007:34:59 E');
        });
        return it('should parse each zone arc in correct order', function() {
          var arc;
          arc = zone.shapes[1];
          isPoint(arc.center, '47:54:15 N 007:33:48 E');
          isPoint(arc.coord1, '47:51:30 N 007:33:35 E');
          return isPoint(arc.coord2, '47:56:42 N 007:35:40 E');
        });
      });
    });
  });

}).call(this);

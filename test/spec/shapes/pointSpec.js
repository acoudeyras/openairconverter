(function() {
  define(['shapes/point', 'coord'], function(Point, Coord) {
    'use strict';
    describe('parse', function() {
      return it('should parse a point', function() {
        var coord, point;
        point = Point.parse('45:48:40 N 000:11:48 E');
        coord = Coord.parse('45:48:40 N');
        expect(point.lat.equals(coord)).to.be["true"];
        coord = Coord.parse('000:11:48 E');
        return expect(point.lng.equals(coord)).to.be["true"];
      });
    });
    return describe('equals', function() {
      it('should be true if same lat and lng', function() {
        var point1, point2;
        point1 = Point.parse('45:48:40 N 000:11:48 E');
        point2 = Point.parse('45:48:40 N 000:11:48 E');
        return expect(point1.equals(point2)).to.be["true"];
      });
      it('should be true if same point', function() {
        var point1;
        point1 = Point.parse('45:48:40 N 000:11:48 E');
        return expect(point1.equals(point1)).to.be["true"];
      });
      it('should be false if different lat', function() {
        var point1, point2;
        point1 = Point.parse('45:48:40 N 000:11:48 E');
        point2 = Point.parse('45:48:41 N 000:11:48 E');
        return expect(point1.equals(point2)).to.be["false"];
      });
      return it('should be false if different lng', function() {
        var point1, point2;
        point1 = Point.parse('45:48:40 N 000:11:48 E');
        point2 = Point.parse('45:48:40 N 000:12:48 E');
        return expect(point1.equals(point2)).to.be["false"];
      });
    });
  });

}).call(this);

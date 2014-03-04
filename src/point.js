// Generated by CoffeeScript 1.7.1
define(function() {
  var Arc, Circle, Coord, Point;
  Coord = (function() {
    function Coord(degre, minute, second, orientation) {
      this.degre = degre;
      this.minute = minute;
      this.second = second;
      this.orientation = orientation;
    }

    Coord.fromString = function(str) {
      var coord, degre, minute, orientation, second, _ref, _ref1;
      _ref = str.split(' '), coord = _ref[0], orientation = _ref[1];
      _ref1 = coord.split(':'), degre = _ref1[0], minute = _ref1[1], second = _ref1[2];
      return new Coord(degre, minute, second, orientation);
    };

    return Coord;

  })();
  Point = (function() {
    function Point(lat, lng) {
      this.lat = lat;
      this.lng = lng;
    }

    Point.prototype.discretize = function() {
      return [this];
    };

    Point.fromString = function(str) {
      var lat, latCoord, latOrientation, lng, lngCoord, lngOrientation, _ref;
      _ref = str.split(' '), latCoord = _ref[0], latOrientation = _ref[1], lngCoord = _ref[2], lngOrientation = _ref[3];
      lat = Coord.fromString(latCoord + ' ' + latOrientation);
      lng = Coord.fromString(lngCoord + ' ' + lngOrientation);
      return new Point(lat, lng);
    };

    return Point;

  })();
  Arc = (function() {
    function Arc(center, coord1, coord2) {
      this.center = center;
      this.coord1 = coord1;
      this.coord2 = coord2;
    }

    Arc.prototype.discretize = function() {
      return [this];
    };

    Arc.fromString = function(center, str) {
      this.center = center;
    };

    return Arc;

  })();
  return Circle = (function() {
    function Circle(center, radius) {
      this.center = center;
      this.radius = radius;
    }

    Circle.prototype.discretize = function() {
      return [this];
    };

    return Circle;

  })();
});

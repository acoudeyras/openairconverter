(function() {
  define(['../coord'], function(Coord) {
    'use strict';
    var Point;
    return Point = (function() {
      function Point(lat, lng) {
        this.lat = lat;
        this.lng = lng;
      }

      Point.prototype.equals = function(_arg) {
        var lat, lng;
        lat = _arg.lat, lng = _arg.lng;
        return lat.equals(this.lat) && lng.equals(this.lng);
      };

      Point.prototype.discretize = function() {
        return [this];
      };

      Point.parse = function(str) {
        var lat, latCoord, latOrientation, lng, lngCoord, lngOrientation, _ref;
        _ref = str.split(' '), latCoord = _ref[0], latOrientation = _ref[1], lngCoord = _ref[2], lngOrientation = _ref[3];
        lat = Coord.parse(latCoord + ' ' + latOrientation);
        lng = Coord.parse(lngCoord + ' ' + lngOrientation);
        return new Point(lat, lng);
      };

      return Point;

    })();
  });

}).call(this);

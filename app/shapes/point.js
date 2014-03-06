(function() {
  define(['../coord'], function(Coord) {
    var Point;
    return Point = (function() {
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
  });

}).call(this);

(function() {
  define(function() {
    'use strict';
    var Coord;
    return Coord = (function() {
      function Coord(degre, minute, second, orientation) {
        this.degre = degre;
        this.minute = minute;
        this.second = second;
        this.orientation = orientation;
      }

      Coord.prototype.equals = function(_arg) {
        var degre, minute, orientation, second;
        degre = _arg.degre, minute = _arg.minute, second = _arg.second, orientation = _arg.orientation;
        return degre === this.degre && minute === this.minute && second === this.second && orientation === this.orientation;
      };

      Coord.parse = function(str) {
        var coord, degre, minute, orientation, second, _ref, _ref1;
        _ref = str.split(' '), coord = _ref[0], orientation = _ref[1];
        _ref1 = coord.split(':').map(function(val) {
          return parseInt(val, 10);
        }), degre = _ref1[0], minute = _ref1[1], second = _ref1[2];
        return new Coord(degre, minute, second, orientation);
      };

      return Coord;

    })();
  });

}).call(this);

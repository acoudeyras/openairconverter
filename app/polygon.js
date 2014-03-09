(function() {
  define(function() {
    'use strict';
    var Polygon;
    return Polygon = (function() {
      function Polygon() {
        this.paths = [];
      }

      Polygon.prototype.discretize = function() {
        var path, points, _i, _len, _ref;
        points = [];
        _ref = this.paths;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          path = _ref[_i];
          points = points.concat(path.discretize());
        }
        return points;
      };

      return Polygon;

    })();
  });

}).call(this);

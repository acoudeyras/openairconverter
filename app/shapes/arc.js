(function() {
  define(['./point'], function(Point) {
    var Arc;
    return Arc = (function() {
      function Arc(center, coord1, coord2) {
        this.center = center;
        this.coord1 = coord1;
        this.coord2 = coord2;
      }

      Arc.prototype.discretize = function() {
        return [this];
      };

      Arc.fromString = function(center, str) {
        var coord1, coord2, _ref;
        _ref = str.split(',').map(Point.fromString), coord1 = _ref[0], coord2 = _ref[1];
        return new Arc(center, coord1, coord2);
      };

      return Arc;

    })();
  });

}).call(this);

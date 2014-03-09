(function() {
  define(['./point', '../check-helpers'], function(Point, _arg) {
    var Arc, isMandatory;
    isMandatory = _arg.isMandatory;
    'use strict';
    return Arc = (function() {
      function Arc(center, coord1, coord2) {
        this.center = center;
        this.coord1 = coord1;
        this.coord2 = coord2;
        isMandatory(this.center, 'center is mandatory');
      }

      Arc.prototype.discretize = function() {
        return [this];
      };

      Arc.parse = function(center, str) {
        var coord1, coord2, _ref;
        _ref = str.split(',').map(Point.parse), coord1 = _ref[0], coord2 = _ref[1];
        return new Arc(center, coord1, coord2);
      };

      return Arc;

    })();
  });

}).call(this);

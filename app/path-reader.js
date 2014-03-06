(function() {
  define(['./shapes/point', './shapes/circle', './shapes/arc'], function(Point, Circle, Arc) {
    var PathReader;
    return PathReader = (function() {
      function PathReader() {
        this.center = null;
      }

      PathReader.prototype.readLine = function(str) {
        var code, rest;
        code = str.substring(0, 3);
        rest = str.substring(2, str.length);
        if (code === 'DP ') {
          return Point.fromString(rest);
        }
        if (code === 'DB ') {
          return Arc.fromString(this.center, rest);
        }
        if (code === 'DC ') {
          return Circle.fromString(this.center, rest);
        }
        if (code === 'V X') {
          rest = rest.substring(1, str.length);
          this.center = Point.fromString(rest);
          return null;
        }
        throw {
          message: "Code " + code + " is not supported"
        };
      };

      return PathReader;

    })();
  });

}).call(this);

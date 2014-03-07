(function() {
  define(function() {
    var Circle;
    return Circle = (function() {
      function Circle(center, radius) {
        this.center = center;
        this.radius = radius;
      }

      Circle.prototype.discretize = function() {
        return [this];
      };

      Circle.parse = function(center, str) {
        var radius;
        radius = parseFloat(str, 10);
        return new Circle(center, radius);
      };

      return Circle;

    })();
  });

}).call(this);

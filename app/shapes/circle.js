// Generated by CoffeeScript 1.7.1
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

    Circle.fromString = function(center, str) {
      var radius;
      radius = parseFloat(str, 10);
      return new Circle(center, radius);
    };

    return Circle;

  })();
});

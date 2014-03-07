(function() {
  define(['./point', './circle', './arc'], function(Point, Circle, Arc) {
    var ShapeParser;
    return ShapeParser = (function() {
      function ShapeParser(reader) {
        this.reader = reader;
      }

      ShapeParser.prototype.parseNext = function(center) {
        var code, line, rest, shape;
        if (!this.reader.hasNext()) {
          return null;
        }
        line = this.reader.line();
        code = line.substring(0, 3);
        rest = line.substring(2, line.length);
        rest = rest.trim();
        shape = (function() {
          switch (code.trim()) {
            case 'DP':
              return Point.parse(rest);
            case 'V X':
              center = Point.parse(rest);
              this.reader.moveNext();
              return this.parseNext(center);
            case 'DB':
              return Arc.parse(center, rest);
            case 'DC':
              return Circle.parse(center, rest);
            default:
              return null;
          }
        }).call(this);
        if (shape != null) {
          this.reader.moveNext();
        }
        return shape;
      };

      ShapeParser.prototype.hasNext = function() {
        return this.parseNext() != null;
      };

      return ShapeParser;

    })();
  });

}).call(this);

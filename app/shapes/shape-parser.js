(function() {
  define(['./point', './circle', './arc'], function(Point, Circle, Arc) {
    'use strict';
    var ShapeParser;
    return ShapeParser = (function() {
      function ShapeParser(reader) {
        this.reader = reader;
      }

      ShapeParser.prototype.parseNext = function(consume, center) {
        var arc, code, line, rest, shape;
        if (consume == null) {
          consume = true;
        }
        if (!this.reader.hasNext()) {
          return null;
        }
        line = this.reader.line().trim();
        code = line.substring(0, 3);
        rest = line.substring(2, line.length);
        rest = rest.trim();
        shape = (function() {
          switch (code.trim()) {
            case 'DP':
              return Point.parse(rest);
            case 'V X':
              rest = rest.substring(2, rest.length);
              center = Point.parse(rest);
              if (!consume) {
                return true;
              } else {
                this.reader.moveNext();
                arc = this.parseNext(consume, center);
                consume = false;
                return arc;
              }
              break;
            case 'DB':
              return Arc.parse(center, rest);
            case 'DC':
              return Circle.parse(center, rest);
            default:
              return null;
          }
        }).call(this);
        if ((shape != null) && consume) {
          this.reader.moveNext();
        }
        return shape;
      };

      ShapeParser.prototype.canParse = function() {
        return this.parseNext(false) != null;
      };

      return ShapeParser;

    })();
  });

}).call(this);

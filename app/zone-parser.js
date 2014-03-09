(function() {
  define(['./shapes/shape-parser', './altitude', './comment', './class'], function(ShapeParser, Altitude, Comment, Class) {
    'use strict';
    var ZoneParser;
    return ZoneParser = (function() {
      function ZoneParser(reader) {
        this.reader = reader;
        this.shapeParser = new ShapeParser(this.reader);
      }

      ZoneParser.prototype.parse = function() {
        var code, line, rest, shape, stillInZone, zone;
        stillInZone = true;
        zone = {
          shapes: []
        };
        while (this.reader.hasNext() && stillInZone) {
          line = this.reader.line().trim();
          code = line.substring(0, 3);
          rest = line.substring(2, line.length);
          rest = rest.trim();
          switch (code.trim()) {
            case 'AC':
              zone["class"] = Class.parse(rest);
              break;
            case 'AN':
              zone.name = rest;
              break;
            case 'AH':
              zone.ceiling = Altitude.parse(rest);
              break;
            case 'AL':
              zone.floor = Altitude.parse(rest);
              break;
            case '**':
              Comment.parse(rest);
              break;
            default:
              while (this.shapeParser.canParse()) {
                shape = this.shapeParser.parseNext();
                zone.shapes.push(shape);
              }
          }
          if (line.trim() === '') {
            stillInZone = false;
          }
          this.reader.moveNext();
        }
        return zone;
      };

      return ZoneParser;

    })();
  });

}).call(this);

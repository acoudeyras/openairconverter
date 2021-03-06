(function() {
  define(['memory-reader', 'shapes/shape-parser'], function(Reader, ShapeParser) {
    'use strict';
    return {
      newParser: function(str) {
        var reader;
        reader = new Reader(str);
        return new ShapeParser(reader);
      },
      parse: function(str) {
        return this.newParser(str).parseNext();
      },
      parseAndSkip: function(str, skip) {
        var i, parser, reader, _i;
        reader = new Reader(str);
        parser = new ShapeParser(reader);
        for (i = _i = 1; 1 <= skip ? _i <= skip : _i >= skip; i = 1 <= skip ? ++_i : --_i) {
          reader.moveNext();
        }
        return parser;
      },
      parseAt: function(str, lineNum) {
        var parser;
        parser = this.parseAndSkip(str, lineNum);
        return parser.parseNext();
      }
    };
  });

}).call(this);

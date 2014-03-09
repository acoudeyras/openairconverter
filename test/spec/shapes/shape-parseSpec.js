(function() {
  define(['shapes/point', './parser-helpers.js', 'text!../../data/small-french.txt'], function(Point, parserHelpers, data) {
    'use strict';
    describe('parseNext', function() {
      it('should parse a point', function() {
        var point;
        point = parserHelpers.parse('DP 45:48:40 N 000:11:48 E');
        return expect(point.equals(Point.parse('45:48:40 N 000:11:48 E'))).to.be["true"];
      });
      it('should skip a comment', function() {
        return expect(parserHelpers.parse(data)).to.be["null"];
      });
      it('should use reader current state', function() {
        var expected, parser, point;
        parser = parserHelpers.parseAndSkip(data, 5);
        point = parser.parseNext();
        expected = Point.parse('47:51:30 N 007:33:35 E');
        return expect(point.equals(expected)).to.be["true"];
      });
      return it('should not move next if it cant understand line', function() {});
    });
    return describe('hasNext', function() {
      return it('should return false when comment', function() {
        var parser;
        parser = parserHelpers.newParser(data);
        return expect(parser.canParse()).to.be["false"];
      });
    });
  });

}).call(this);

(function() {
  define(['shapes/point', './parser-helpers.js', 'text!../../data/small-french.txt'], function(Point, parserHelpers, data) {
    'use strict';
    return describe('parse', function() {
      return it('should parse an arc', function() {
        var arc, center, coord1, coord2;
        arc = parserHelpers.parseAt(data, 6);
        center = Point.parse('47:54:15 N 007:33:48 E');
        expect(arc.center.equals(center)).to.be["true"];
        coord1 = Point.parse('47:51:30 N 007:33:35 E');
        expect(arc.coord1.equals(coord1)).to.be["true"];
        coord2 = Point.parse('47:56:42 N 007:35:40 E');
        return expect(arc.coord2.equals(coord2)).to.be["true"];
      });
    });
  });

}).call(this);

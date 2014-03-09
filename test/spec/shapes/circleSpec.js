(function() {
  define(['shapes/point', './parser-helpers.js', 'text!../../data/small-french.txt'], function(Point, parserHelpers, data) {
    'use strict';
    return describe('parse', function() {
      return it('should parse a circle', function() {
        var center, circle;
        circle = parserHelpers.parseAt(data, 20);
        center = Point.parse('47:35:00 N 004:53:00 E');
        expect(circle.center.equals(center)).to.be["true"];
        return expect(circle.radius).to.equal(2.7);
      });
    });
  });

}).call(this);

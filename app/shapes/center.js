(function() {
  define(function() {
    'use strict';
    var Center;
    return Center = (function() {
      function Center() {}

      Center.parse = function(str) {
        var center, rest;
        rest = rest.substring(2, rest.length);
        center = Point.parse(rest);
        this.reader.moveNext();
        return this.parseNext(center);
      };

      return Center;

    })();
  });

}).call(this);

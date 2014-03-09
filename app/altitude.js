(function() {
  define(function() {
    'use strict';
    var Altitude;
    return Altitude = (function() {
      function Altitude(feet, desc) {
        this.feet = feet;
        this.desc = desc;
      }

      Altitude.parse = function(str) {
        var feet, level;
        str = str.trim();
        if (str === 'SFC') {
          return new Altitude(0, str);
        }
        if (str.substring(0, 2) === 'FL') {
          level = parseInt(str.substring(2, str.length, 10));
          return new Altitude(level * 100, str);
        } else {
          feet = str.split('FT')[0];
          return new Altitude(parseInt(feet, 10), str);
        }
      };

      return Altitude;

    })();
  });

}).call(this);

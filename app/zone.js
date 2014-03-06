(function() {
  define(['./path-reader'], function(PathReader) {
    var Altitude, Zone;
    Altitude = (function() {
      function Altitude(feet, desc) {
        this.feet = feet;
        this.desc = desc;
      }

      Altitude.fromString = function(str) {
        var feet, level;
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
    return Zone = (function() {
      function Zone(_arg) {
        this.name = _arg.name, this["class"] = _arg["class"], this.description = _arg.description, this.floor = _arg.floor, this.ceiling = _arg.ceiling, this.polygon = _arg.polygon;
      }

      return Zone;

    })();
  });

}).call(this);

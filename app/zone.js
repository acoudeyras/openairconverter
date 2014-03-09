(function() {
  define(['./zone-parser'], function(ZoneParser) {
    'use strict';
    var Zone;
    return Zone = (function() {
      function Zone(_arg) {
        this.name = _arg.name, this["class"] = _arg["class"], this.description = _arg.description, this.floor = _arg.floor, this.ceiling = _arg.ceiling, this.shapes = _arg.shapes;
      }

      Zone.parse = function(reader) {
        var parser, zone;
        parser = new ZoneParser(reader);
        zone = parser.parse();
        return new Zone(zone);
      };

      return Zone;

    })();
  });

}).call(this);

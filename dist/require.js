/*! openairconverter - v0.0.0 - 2014-03-06
* Copyright (c) 2014 Author Name; Licensed MIT */
(function() {
  define('app/coord',[],function() {
    var Coord;
    return Coord = (function() {
      function Coord(degre, minute, second, orientation) {
        this.degre = degre;
        this.minute = minute;
        this.second = second;
        this.orientation = orientation;
      }

      Coord.fromString = function(str) {
        var coord, degre, minute, orientation, second, _ref, _ref1;
        _ref = str.split(' '), coord = _ref[0], orientation = _ref[1];
        _ref1 = coord.split(':'), degre = _ref1[0], minute = _ref1[1], second = _ref1[2];
        return new Coord(degre, minute, second, orientation);
      };

      return Coord;

    })();
  });

}).call(this);

(function() {
  define('app/shapes/point',['../coord'], function(Coord) {
    var Point;
    return Point = (function() {
      function Point(lat, lng) {
        this.lat = lat;
        this.lng = lng;
      }

      Point.prototype.discretize = function() {
        return [this];
      };

      Point.fromString = function(str) {
        var lat, latCoord, latOrientation, lng, lngCoord, lngOrientation, _ref;
        _ref = str.split(' '), latCoord = _ref[0], latOrientation = _ref[1], lngCoord = _ref[2], lngOrientation = _ref[3];
        lat = Coord.fromString(latCoord + ' ' + latOrientation);
        lng = Coord.fromString(lngCoord + ' ' + lngOrientation);
        return new Point(lat, lng);
      };

      return Point;

    })();
  });

}).call(this);

(function() {
  define('app/shapes/circle',[],function() {
    var Circle;
    return Circle = (function() {
      function Circle(center, radius) {
        this.center = center;
        this.radius = radius;
      }

      Circle.prototype.discretize = function() {
        return [this];
      };

      Circle.fromString = function(center, str) {
        var radius;
        radius = parseFloat(str, 10);
        return new Circle(center, radius);
      };

      return Circle;

    })();
  });

}).call(this);

(function() {
  define('app/shapes/arc',['./point'], function(Point) {
    var Arc;
    return Arc = (function() {
      function Arc(center, coord1, coord2) {
        this.center = center;
        this.coord1 = coord1;
        this.coord2 = coord2;
      }

      Arc.prototype.discretize = function() {
        return [this];
      };

      Arc.fromString = function(center, str) {
        var coord1, coord2, _ref;
        _ref = str.split(',').map(Point.fromString), coord1 = _ref[0], coord2 = _ref[1];
        return new Arc(center, coord1, coord2);
      };

      return Arc;

    })();
  });

}).call(this);

(function() {
  define('app/path-reader',['./shapes/point', './shapes/circle', './shapes/arc'], function(Point, Circle, Arc) {
    var PathReader;
    return PathReader = (function() {
      function PathReader() {
        this.center = null;
      }

      PathReader.prototype.readLine = function(str) {
        var code, rest;
        code = str.substring(0, 3);
        rest = str.substring(2, str.length);
        if (code === 'DP ') {
          return Point.fromString(rest);
        }
        if (code === 'DB ') {
          return Arc.fromString(this.center, rest);
        }
        if (code === 'DC ') {
          return Circle.fromString(this.center, rest);
        }
        if (code === 'V X') {
          rest = rest.substring(1, str.length);
          this.center = Point.fromString(rest);
          return null;
        }
        throw {
          message: "Code " + code + " is not supported"
        };
      };

      return PathReader;

    })();
  });

}).call(this);

(function() {
  define('app/zone',['./path-reader'], function(PathReader) {
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

(function() {
  define('app/reader',['./zone'], function(Zone) {
    var Reader;
    return Reader = (function() {
      function Reader() {}

      Reader.prototype.readLine = function() {};

      Reader.prototype.readNext = function() {};

      return Reader;

    })();
  });

}).call(this);

(function() {
  define('app/main',['./reader'], function(Reader) {
    return Reader;
  });

}).call(this);


// Generated by CoffeeScript 1.7.1
define(['converters/geojson/geojson-convert', '../../test-helpers.js'], function(Converter, _arg) {
  var airSpaceWithSimpleZone;
  airSpaceWithSimpleZone = _arg.airSpaceWithSimpleZone;
  'use strict';
  return describe('toGeoJson', function() {
    return describe('with a simple zone', function() {
      return it('should parse an altitude in feet', function() {
        var result;
        result = new Converter().toGeoJson(airSpaceWithSimpleZone);
        return console.log(result);
      });
    });
  });
});

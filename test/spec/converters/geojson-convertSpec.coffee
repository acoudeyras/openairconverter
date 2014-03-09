define ['converters/geojson/geojson-convert', '../../test-helpers.js'], (Converter, {airSpaceWithSimpleZone}) ->
  'use strict'
  
  describe 'toGeoJson', ->

    describe 'with a simple zone', ->

      it 'should parse an altitude in feet', ->
        result = new Converter().toGeoJson airSpaceWithSimpleZone
        console.log result
      #TODO
      
define ['converters/geojson/geojson-convert', '../../test-helpers.js'], (Converter, {airSpaceWithSimpleZone}) ->
  'use strict'
  
  describe 'toGeoJson', ->

    describe 'with an airspace with one zone', ->

      geojson = new Converter().toGeoJson airSpaceWithSimpleZone
      asString = JSON.stringify geojson
      console.log asString

      it 'should return a json object', ->
        expect(geojson).to.exist
        expect(geojson).to.be.an 'object'

      it 'should return one feature collection', ->
        expect(geojson.type).to.equal 'FeatureCollection'
      
      it 'should return one feature in the collection', ->
        expect(geojson.features).to.have.length 1

      describe 'zone feature', ->

        zone = geojson.features[0]

        describe 'geometry', ->

          it 'should be a polygon', ->
            expect(zone.geometry.type).to.equal 'Polygon'

          it 'coordinates', ->
            #TODO


        describe 'properties', ->

          it 'should have a name', ->
            expect(zone.properties.name).to.equal 'P36 Fessenheim'

          it 'should have a classCode', ->
            expect(zone.properties.classCode).to.equal 'P'

          it 'should have a className', ->
            expect(zone.properties.className).to.equal 'prohibited'

          it 'should have a floorFeet', ->
            expect(zone.properties.floorFeet).to.equal 0

          it 'should have a floorDesc', ->
            expect(zone.properties.floorDesc).to.equal 'SFC'

          it 'should have a ceilingFeet', ->
            expect(zone.properties.ceilingFeet).to.equal 4000

          it 'should have a ceilingDesc', ->
            expect(zone.properties.ceilingDesc).to.equal '4000FT AMSL'

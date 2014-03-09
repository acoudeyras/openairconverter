define ['zone', 'memory-reader', 'text!../data/small-french.txt'], (Zone, Reader, data) ->
  'use strict'
  
  describe 'parse', ->

    zone = Zone.parse new Reader(data)

    it 'should parse a zone', ->
      expect(zone).to.exist

    it 'should parse the zone name', ->
      expect(zone.name).to.equal 'P36 Fessenheim'

    it 'should parse the zone class', ->
      expect(zone.class.code).to.equal 'P'
      expect(zone.class.name).to.equal 'prohibited'

    it 'should parse the zone ceiling', ->
      expect(zone.ceiling.feet).to.equal 4000

    it 'should parse the zone floor', ->
      expect(zone.floor.feet).to.equal 0

    it 'should parse the zone shapes', ->
      expect(zone.shapes).to.exist
      expect(zone.shapes).to.have.length 10
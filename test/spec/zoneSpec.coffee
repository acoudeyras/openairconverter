define ['zone', 'memory-reader', 'shapes/point', 'text!../data/small-french.txt'], (Zone, Reader, Point, data) ->
  'use strict'

  isPoint = (shape, pointStr) ->
    point = Point.parse pointStr
    expect(shape.equals point).to.be.true
  
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
      expect(zone.shapes).to.have.length 6

    describe 'shapes', ->

      it 'should parse each zone points in correct order', ->
        isPoint zone.shapes[0], '47:51:30 N 007:33:35 E'
        isPoint zone.shapes[2], '47:56:42 N 007:35:40 E'
        isPoint zone.shapes[3], '47:56:00 N 007:35:06 E'
        isPoint zone.shapes[4], '47:55:24 N 007:34:51 E'
        isPoint zone.shapes[5], '47:54:15 N 007:34:59 E'


      it 'should parse each zone arc in correct order', ->
        arc = zone.shapes[1]
        isPoint arc.center, '47:54:15 N 007:33:48 E'
        isPoint arc.coord1, '47:51:30 N 007:33:35 E'
        isPoint arc.coord2, '47:56:42 N 007:35:40 E'

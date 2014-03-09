define ['coord'], (Coord) ->
  'use strict'
    
  describe 'parse', ->

    it 'should parse a coord', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.degres).to.equal 44
      expect(coord.minutes).to.equal 2
      expect(coord.seconds).to.equal 56
      expect(coord.orientation).to.equal 'N'

  describe 'equals', ->

    it 'should be true if same coord', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.equals coord).to.be.true

    it 'should be true if same coords', ->
      coord = Coord.parse '44:02:56 N'
      coord1 = Coord.parse '44:02:56 N'
      expect(coord.equals coord1).to.be.true

    it 'should be false if different coords', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.equals Coord.parse '43:02:56 N').to.be.false
      expect(coord.equals Coord.parse '44:12:56 N').to.be.false
      expect(coord.equals Coord.parse '44:02:57 N').to.be.false
      expect(coord.equals Coord.parse '44:02:56 E').to.be.false

  describe 'decimalDegrees', ->

    it 'should make a correct latitude conversion', ->
      coord = Coord.parse '43:02:24 N'
      expect(coord.decimalDegrees).to.equal 43.04

    it 'should return south latitude with negative value', ->
      coord = Coord.parse '43:02:24 S'
      expect(coord.decimalDegrees).to.equal -43.04

    it 'should make a correct longitude conversion', ->
      coord = Coord.parse '12:55:12 E'
      expect(coord.decimalDegrees).to.equal 12.92

    it 'should return west longitude with negative value', ->
      coord = Coord.parse '12:55:12 W'
      expect(coord.decimalDegrees).to.equal -12.92
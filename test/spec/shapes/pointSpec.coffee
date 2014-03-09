define ['shapes/point', 'coord'], (Point, Coord) ->
  'use strict'
    
  describe 'parse', ->

    it 'should parse a point', ->
      point = Point.parse '45:48:40 N 000:11:48 E'
      coord = Coord.parse '45:48:40 N'
      expect(point.lat.equals coord).to.be.true
      coord = Coord.parse '000:11:48 E'
      expect(point.lng.equals coord).to.be.true

  describe 'equals', ->

    it 'should be true if same lat and lng', ->
      point1 = Point.parse '45:48:40 N 000:11:48 E'
      point2 = Point.parse '45:48:40 N 000:11:48 E'
      expect(point1.equals point2).to.be.true

    it 'should be true if same point', ->
      point1 = Point.parse '45:48:40 N 000:11:48 E'
      expect(point1.equals point1).to.be.true

    it 'should be false if different lat', ->
      point1 = Point.parse '45:48:40 N 000:11:48 E'
      point2 = Point.parse '45:48:41 N 000:11:48 E'
      expect(point1.equals point2).to.be.false

    it 'should be false if different lng', ->
      point1 = Point.parse '45:48:40 N 000:11:48 E'
      point2 = Point.parse '45:48:40 N 000:12:48 E'
      expect(point1.equals point2).to.be.false
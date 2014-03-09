define ['shapes/point', './parser-helpers.js', 'text!../../data/small-french.txt'], (Point, parserHelpers, data) ->
  'use strict'
  
  describe 'parse', ->

    it 'should parse a circle', ->
      circle = parserHelpers.parseAt(data, 24)
      center = Point.parse '47:35:00 N 004:53:00 E'
      expect(circle.center.equals center).to.be.true
      expect(circle.radius).to.equal 2.7
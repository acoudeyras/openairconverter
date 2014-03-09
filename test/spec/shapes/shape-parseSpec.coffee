define ['shapes/point', './parser-helpers.js', 'text!../../data/small-french.txt'], (Point, parserHelpers, data) ->
  'use strict'
  
  describe 'parseNext', ->

    it 'should parse a point', ->
      point = parserHelpers.parse('DP 45:48:40 N 000:11:48 E')
      expect(point.equals Point.parse('45:48:40 N 000:11:48 E')).to.be.true

    it 'should skip a comment', ->
      expect(parserHelpers.parse data).to.be.null 

    it 'should use reader current state', ->
      parser = parserHelpers.parseAndSkip data, 5
      point = parser.parseNext()
      expected = Point.parse '47:51:30 N 007:33:35 E'
      expect(point.equals expected).to.be.true

    it 'should not move next if it cant understand line', ->
      #TODO

  describe 'hasNext', ->

    it 'should return false when comment', ->
      parser = parserHelpers.newParser data
      expect(parser.canParse()).to.be.false

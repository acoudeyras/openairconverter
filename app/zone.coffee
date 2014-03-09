define ['./zone-parser', './helpers'], (ZoneParser) ->
  'use strict'
  
  class Zone
    constructor: ({@name, @class, @description, @floor, @ceiling, @shapes}) ->
    @lazyval 'polygon', ->
      coordinates = []
      for shape in @shapes
        shapeCoords = shape.discretize()
        coordinates = coordinates.concat shapeCoords
      coordinates
    @parse: (reader) ->
      parser = new ZoneParser reader
      zone = parser.parse()
      new Zone zone

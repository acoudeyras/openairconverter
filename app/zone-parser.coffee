define ['./shapes/shape-parser', './altitude', './comment', './class'], (ShapeParser, Altitude, Comment, Class) ->
  'use strict'

  class ZoneParser
    constructor: (@reader) ->
      @shapeParser = new ShapeParser @reader
    parse: ->
      stillInZone = true
      zone =
        shapes: []
      while @reader.hasNext() and stillInZone
        line = @reader.line().trim()
        code = line.substring 0, 3
        rest = line.substring 2, line.length
        rest = rest.trim()
        switch code.trim()
          when 'AC'
            zone.class = Class.parse rest
          when 'AN'
            zone.name = rest
          when 'AH'
            zone.ceiling = Altitude.parse rest
          when 'AL'
            zone.floor = Altitude.parse rest
          when '**' then Comment.parse rest
          else
            while @shapeParser.canParse()
              shape = @shapeParser.parseNext()
              zone.shapes.push shape
        if line.trim() is '' then stillInZone = false
        
        @reader.moveNext()
      zone
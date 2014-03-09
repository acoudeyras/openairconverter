define ['./point', './circle', './arc'], (Point, Circle, Arc) ->
  'use strict'
  
  class ShapeParser
    constructor: (@reader) ->

    #`parseNext` Return undefined if nothing to read, null if can't proceed
    parseNext: (center) ->
      return null if not @reader.hasNext()
      line = @reader.line().trim()
      code = line.substring 0, 3
      rest = line.substring 2, line.length
      rest = rest.trim()
      shape = switch code.trim()
        when 'DP' then Point.parse rest
        when 'V X'
          rest = rest.substring 2, rest.length
          center = Point.parse rest
          @reader.moveNext()
          @parseNext center
        when 'DB' then Arc.parse center, rest
        when 'DC' then Circle.parse center, rest
        else null
      if shape? then @reader.moveNext()
      shape
    canParse: ->
      @parseNext()?
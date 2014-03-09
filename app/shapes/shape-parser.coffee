define ['./point', './circle', './arc'], (Point, Circle, Arc) ->
  'use strict'
  
  class ShapeParser
    constructor: (@reader) ->
    parseNext: (consume = true, center) ->
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
          if not consume
            true #We assume we have a valid shape, don't try children
          else
            @reader.moveNext()
            arc = @parseNext consume, center
            consume = false #To avoid consuming it twice
            arc
        when 'DB'
          Arc.parse center, rest
        when 'DC' then Circle.parse center, rest
        else null
      if shape? and consume then @reader.moveNext()
      shape
    canParse: ->
      @parseNext(false)?
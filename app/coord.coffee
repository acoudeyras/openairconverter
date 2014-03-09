define ['./helpers'], ->
  'use strict'

  negativePositions = ['W', 'S']
  
  class Coord
    constructor: (@degres, @minutes, @seconds, @orientation) ->
    equals: ({degres, minutes, seconds, orientation}) ->
      degres is @degres and minutes is @minutes and seconds is @seconds and orientation is @orientation
    @lazyval 'decimalDegrees', ->
      val = @degres + @minutes / 60 + @seconds / 3600
      if @orientation in negativePositions then -val
      else val
    @parse: (str) ->
      [coord, orientation]  = str.split ' '
      [degres, minutes, seconds] = coord.split ':'
        .map (val) -> parseInt(val, 10)
      new Coord degres, minutes, seconds, orientation
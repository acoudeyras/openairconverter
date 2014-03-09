define ->
  'use strict'
  
  class Coord
    constructor: (@degre, @minute, @second, @orientation) ->
    equals: ({degre, minute, second, orientation}) ->
      degre is @degre and minute is @minute and second is @second and orientation is @orientation
    @parse: (str) ->
      [coord, orientation]  = str.split ' '
      [degre, minute, second] = coord.split ':'
        .map (val) -> parseInt(val, 10)
      new Coord degre, minute, second, orientation
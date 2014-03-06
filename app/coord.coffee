define ->

  class Coord
    constructor: (@degre, @minute, @second, @orientation) ->
    @fromString: (str) ->
      [coord, orientation]  = str.split ' '
      [degre, minute, second] = coord.split ':'
      new Coord degre, minute, second, orientation
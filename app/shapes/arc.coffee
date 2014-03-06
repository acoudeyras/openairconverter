define ['./point'], (Point) ->

  class Arc
    constructor: (@center, @coord1, @coord2) ->
    discretize: -> [@]
    @fromString: (center, str) ->
      [coord1, coord2] = str.split ','
        .map Point.fromString
      new Arc center, coord1, coord2

define ['./point'], (Point) ->
  'use strict'
  
  class Arc
    constructor: (@center, @coord1, @coord2) ->
    discretize: -> [@]
    @parse: (center, str) ->
      [coord1, coord2] = str.split ','
        .map Point.parse
      new Arc center, coord1, coord2

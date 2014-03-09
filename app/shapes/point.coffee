define ['../coord'], (Coord) ->
  'use strict'
  
  class Point
    constructor: (@lat, @lng) ->
    equals: ({lat, lng}) ->
      lat.equals(@lat) and lng.equals @lng
    discretize: -> [@]
    @parse: (str) ->
      [latCoord, latOrientation, lngCoord, lngOrientation] = str.split ' '
      lat = Coord.parse latCoord + ' ' + latOrientation
      lng = Coord.parse lngCoord + ' ' + lngOrientation
      new Point lat, lng

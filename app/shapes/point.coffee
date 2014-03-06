define ['../coord'], (Coord) ->

  class Point
    constructor: (@lat, @lng) ->
    discretize: -> [@]
    @fromString: (str) ->
      [latCoord, latOrientation, lngCoord, lngOrientation] = str.split ' '
      lat = Coord.fromString latCoord + ' ' + latOrientation
      lng = Coord.fromString lngCoord + ' ' + lngOrientation
      new Point lat, lng

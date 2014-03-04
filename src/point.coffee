define ->

  class Coord
    constructor: (@degre, @minute, @second, @orientation) ->
    @fromString : (str) ->
      [coord, orientation]  = str.split ' '
      [degre, minute, second] = coord.split ':'
      new Coord degre, minute, second, orientation

  class Point
    constructor: (@lat, @lng) ->
    discretize: -> [@]
    @fromString: (str) ->
      [latCoord, latOrientation, lngCoord, lngOrientation] = str.split ' '
      lat = Coord.fromString latCoord + ' ' + latOrientation
      lng = Coord.fromString lngCoord + ' ' + lngOrientation
      new Point lat, lng

  #DB
  class Arc
    constructor: (@center, @coord1, @coord2) ->
    discretize: -> [@]
    @fromString: (@center, str) ->
      #DB 48:21:50 N 007:22:38 E,48:41:27 N 007:29:58 E

  class Circle
    constructor: (@center, @radius) ->
    discretize: -> [@]
    @fromString (@center, str) ->
      #DC 0.4

  class PathReader
    @fromString : (str) ->
      code = str.substring 0, 3
      rest = str.substring 2, str.length
      if code is 'DP '
        return Point.fromString rest
      if code is 'V X'
        #V X=
        #Mettre de côté la valeur de X
      if code is 'DB '
        #réutiliser la 

define ['./shapes/point', './shapes/circle', './shapes/arc'], (Point, Circle, Arc) ->
  
  #à inverser c'est le path reader qui prend le line reader en param
  #il renvoie un path et le line reader est avancé d'autant
  #Implique que la zone aussi sait utiliser le line reader et va
  # déléguer au path reader ce qu'il faut
  #

  class PathReader
    constructor: ->
      @center = null
    readLine : (str) ->
      code = str.substring 0, 3
      rest = str.substring 2, str.length
      if code is 'DP '
        return Point.fromString rest
      if code is 'DB '
        return Arc.fromString @center, rest
      if code is 'DC '
        return Circle.fromString @center, rest
      if code is 'V X'
        rest = rest.substring 1, str.length
        @center = Point.fromString rest
        return null
      throw
        message: "Code #{code} is not supported"

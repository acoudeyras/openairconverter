define ->
  class Polygon
    constructor: ->
      @paths = []
    discretize: ->
      points = []
      for path in @paths
        points = points.concat path.discretize()
      points
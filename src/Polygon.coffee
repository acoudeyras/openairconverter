define ->
  class Polygon
    constructor: ->
      @points = []
    addPath: (path) ->
      @points = points.concat path.discretize()

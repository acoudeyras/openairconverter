define ->

  class Circle
    constructor: (@center, @radius) ->
    discretize: -> [@]
    @fromString: (center, str) ->
      radius = parseFloat str, 10
      new Circle center, radius
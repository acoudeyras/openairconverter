define ->

  class Circle
    constructor: (@center, @radius) ->
    discretize: -> [@]
    @parse: (center, str) ->
      radius = parseFloat str, 10
      new Circle center, radius
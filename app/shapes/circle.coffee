define ->
  'use strict'
  
  class Circle
    constructor: (@center, @radius) ->
    discretize: -> [@center]
    @parse: (center, str) ->
      radius = parseFloat str, 10
      new Circle center, radius
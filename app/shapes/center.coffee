define ->
  'use strict'
  
  class Center
    @parse: (str) ->
      rest = rest.substring 2, rest.length
      center = Point.parse rest
      @reader.moveNext()
      @parseNext center
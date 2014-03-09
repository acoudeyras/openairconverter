define ->
  'use strict'
  
  class MemoryReader
    constructor: (data) ->
      @data = data.split '\n'
      @idx = 0
    line: -> @data[@idx]
    nextLine : -> @data[@idx + 1]
    hasNext: -> @idx < @data.length
    moveNext: ->
      @idx = @idx + 1
      @


define ->
  'use strict'

  class Class
    constructor: (@code, @name) ->
    @parse: (str) ->
      str = str.trim()
      found = classes[str]
      throw new Error("Class #{str} not handled") if not found?
      found

  classes = {}
  addClass = (code, name) ->
    klass = new Class(code, name)
    classes[klass.code] = klass

  addClass 'R', 'restricted'
  addClass 'Q', 'danger'
  addClass 'P', 'prohibited'
  addClass 'A', 'Class A'
  addClass 'B', 'Class B'
  addClass 'C', 'Class C'
  addClass 'D', 'Class D'
  addClass 'CTR', 'CTR'
  
  Class

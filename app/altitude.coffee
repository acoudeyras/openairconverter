define ->
  'use strict'
  
  class Altitude
    constructor: (@feet, @desc) ->
    @parse: (str) ->
      str = str.trim()
      return new Altitude(0, str) if str is 'SFC'
      if str.substring(0, 2) is 'FL'
        level = parseInt(str.substring 2, str.length, 10)
        new Altitude level * 100, str
      else
        [feet] = str.split 'FT'
        new Altitude parseInt(feet, 10), str

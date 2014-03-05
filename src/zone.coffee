define ->

  class Altitude
    constructor: (@feet, @desc) ->
    @fromString: (str) ->
      if str.substring(0, 2) is 'FL'
        level = parseInt(str.substring 2, str.length, 10)
        new Altitude level * 100, str
      else
        [feet] = str.split 'FT'
        new Altitude parseInt(feet, 10), str

  class Zone
    constructor: ({@name, @class, @description, @floor, @ceiling, @polygon}) ->
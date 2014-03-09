define ['./zone-parser'], (ZoneParser) ->
  'use strict'
  
  class Zone
    constructor: ({@name, @class, @description, @floor, @ceiling, @shapes}) ->
    @parse: (reader) ->
      parser = new ZoneParser reader
      zone = parser.parse()
      new Zone zone

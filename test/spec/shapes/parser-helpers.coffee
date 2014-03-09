define ['memory-reader', 'shapes/shape-parser'], (Reader, ShapeParser) ->
  'use strict'
  
  newParser: (str) ->
    reader = new Reader(str)
    new ShapeParser reader

  parse: (str) ->
    @newParser(str).parseNext()

  parseAndSkip: (str, skip) ->
    reader = new Reader(str)
    parser = new ShapeParser reader
    for i in [1..skip]
      reader.moveNext()
    parser

  parseAt: (str, lineNum) ->
    parser = @parseAndSkip str, lineNum
    parser.parseNext()
define ['shapes/shape-parser', 'memory-reader', 'shapes/point'], (ShapeParser, Reader, Point) ->
  
  parse = (str) ->
    reader = new Reader(str)
    parser = new ShapeParser reader
    parser.parseNext()

  describe 'parseNext', ->

    it 'should parse a point', ->
      point = parse('DP 45:48:40 N 000:11:48 E')
      expect(point.equals Point.parse('45:48:40 N 000:11:48 E')).to.be.true

    it 'should parse a point', ->
      reader = new Reader('DP 45:48:40 N 000:11:48 E')
      parser = new ShapeParser reader
      parser.parseNext()
      parser.parseNext()
      expect(true).to.be.true

  describe 'hasNext', ->

    it 'should parse a point', ->
      reader = new Reader('DP 45:48:40 N 000:11:48 E')
      parser = new ShapeParser reader
      parser.parseNext()
      parser.parseNext()
      expect(true).to.be.true
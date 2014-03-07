define ['coord'], (Coord) ->
  
  describe 'parse', ->

    it 'should parse a coord', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.degre).to.equal 44
      expect(coord.minute).to.equal 2
      expect(coord.second).to.equal 56
      expect(coord.orientation).to.equal 'N'

  describe 'equals', ->

    it 'should be true if same coord', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.equals coord).to.be.true

    it 'should be true if same coords', ->
      coord = Coord.parse '44:02:56 N'
      coord1 = Coord.parse '44:02:56 N'
      expect(coord.equals coord1).to.be.true

    it 'should be false if different coords', ->
      coord = Coord.parse '44:02:56 N'
      expect(coord.equals Coord.parse '43:02:56 N').to.be.false
      expect(coord.equals Coord.parse '44:12:56 N').to.be.false
      expect(coord.equals Coord.parse '44:02:57 N').to.be.false
      expect(coord.equals Coord.parse '44:02:56 E').to.be.false
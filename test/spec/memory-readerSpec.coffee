define ['memory-reader', 'text!../data/small-french.txt'], (Reader, data) ->
  'use strict'
  
  describe 'hasNext and moveNext', ->

    describe 'with a single line', ->

      it 'should be true', ->
        reader = new Reader 'DP 45:48:40 N 000:11:48 E'
        expect(reader.hasNext()).to.be.true

      it 'should be false, when moved next', ->
        reader = new Reader 'DP 45:48:40 N 000:11:48 E'
        reader.moveNext()
        expect(reader.hasNext()).to.be.false


    describe 'with multiple lines', ->
      reader = new Reader data
      count = 0
      while reader.hasNext()
        count = count + 1
        reader.moveNext()
      expect(count).to.equal reader.data.length


  describe 'line', ->

    it 'should the first line', ->
      reader = new Reader data
      expect(reader.line()).to.equal '** P 36 FESSENHEIM (08 APR 2010) **'

    it 'when moved next, should return the second line', ->
      reader = new Reader data
      reader.moveNext()
      expect(reader.line()).to.equal 'AC P'

  describe 'nextLine', ->

    it 'should return the second line', ->
      reader = new Reader data
      expect(reader.nextLine()).to.equal 'AC P'

    it 'when moved next, should return the third line', ->
      reader = new Reader data
      reader.moveNext()
      expect(reader.nextLine()).to.equal 'AN P36 Fessenheim'
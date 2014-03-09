define ['comment'], (Comment) ->
  'use strict'
    
  describe 'parse', ->

    it 'should parse a comment', ->
      comment = Comment.parse 'P 36 FESSENHEIM (08 APR 2010) **'
      expect(comment).to.equal 'P 36 FESSENHEIM (08 APR 2010)'

define ['class'], (Class) ->
  'use strict'

  describe 'parse', ->

    it 'should parse a class', ->
      klass = Class.parse 'R'
      expect(klass.code).to.equal 'R'
      expect(klass.name).to.equal 'restricted'

    it 'should throw an exception if the class is not known', ->
      expect(-> Class.parse 'ZZZ').to.throw(Error)

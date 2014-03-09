define ['altitude'], (Altitude) ->
  'use strict'
    
  describe 'parse', ->

    it 'should parse an altitude in feet', ->
      altitude = Altitude.parse '4000FT AMSL'
      expect(altitude.feet).to.equal 4000
      expect(altitude.desc).to.equal '4000FT AMSL'

    it 'should parse an altitude with SFC', ->
      altitude = Altitude.parse 'SFC'
      expect(altitude.feet).to.equal 0
      expect(altitude.desc).to.equal 'SFC'

    xit 'should parse an altitude in flight level', ->
      altitude = Altitude.parse 'FL115'
      expect(altitude.desc).to.equal 'FL115'
      expect(altitude.feet).to.equal 4000
      #TODO
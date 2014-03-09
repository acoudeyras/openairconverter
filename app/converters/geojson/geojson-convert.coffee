define ->
  'use strict'

  convertPoint = (point) ->
    [point.lng.decimalDegrees, point.lat.decimalDegrees]

  convertZone = (zone) ->
    type: 'Feature'
    geometry:
      type: 'Polygon'
      coordinates: [zone.polygon.map convertPoint]
    properties:
      name: zone.name
      classCode: zone.class.code
      className: zone.class.name
      description: zone.description
      floorFeet: zone.floor.feet
      floorDesc: zone.floor.desc
      ceilingFeet: zone.ceiling.feet
      ceilingDesc: zone.ceiling.desc

  class Converter
    constructor: ->
    toGeoJson: (airspace) ->
      type: 'FeatureCollection'
      features: airspace.zones.map convertZone

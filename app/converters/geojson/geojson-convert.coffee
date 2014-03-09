define ->
  'use strict'

  convertPoint = (point) ->
    [point.lat.decimalDegrees, point.lng.decimalDegrees]

  convertZone = (zone) ->
    type: 'Feature'
    geometry:
      type: 'Polygon'
      coordinates: zone.polygon.map convertPoint
    properties:
      name: zone.name
      class: zone.class
      description: zone.description
      floor: zone.floor
      ceiling: zone.ceiling

  class Converter
    constructor: ->
    toGeoJson: (airspace) ->
      type: 'FeatureCollection'
      features: airspace.zones.map convertZone

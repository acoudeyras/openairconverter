define ->
  'use strict'

  isMandatory: (value, message='is mandatory') ->
    throw new Error(message) if not value?

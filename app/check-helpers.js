// Generated by CoffeeScript 1.7.1
define(function() {
  'use strict';
  return {
    isMandatory: function(value, message) {
      if (message == null) {
        message = 'is mandatory';
      }
      if (value == null) {
        throw new Error(message);
      }
    }
  };
});
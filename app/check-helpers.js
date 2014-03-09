(function() {
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

}).call(this);

(function() {
  define(function() {
    'use strict';
    var Class, addClass, classes;
    Class = (function() {
      function Class(code, name) {
        this.code = code;
        this.name = name;
      }

      Class.parse = function(str) {
        var found;
        str = str.trim();
        found = classes[str];
        if (found == null) {
          throw new Error("Class " + str + " not handled");
        }
        return found;
      };

      return Class;

    })();
    classes = {};
    addClass = function(code, name) {
      var klass;
      klass = new Class(code, name);
      return classes[klass.code] = klass;
    };
    addClass('R', 'restricted');
    addClass('Q', 'danger');
    addClass('P', 'prohibited');
    addClass('A', 'Class A');
    addClass('B', 'Class B');
    addClass('C', 'Class C');
    addClass('D', 'Class D');
    addClass('CTR', 'CTR');
    return Class;
  });

}).call(this);

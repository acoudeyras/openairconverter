(function() {
  define(['class'], function(Class) {
    'use strict';
    return describe('parse', function() {
      it('should parse a class', function() {
        var klass;
        klass = Class.parse('R');
        expect(klass.code).to.equal('R');
        return expect(klass.name).to.equal('restricted');
      });
      return it('should throw an exception if the class is not known', function() {
        return expect(function() {
          return Class.parse('ZZZ');
        }).to["throw"](Error);
      });
    });
  });

}).call(this);

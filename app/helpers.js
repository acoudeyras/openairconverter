// Generated by CoffeeScript 1.7.1
define(function() {
  'use stric';
  return Function.prototype.lazyval = function(prop, getter) {
    return Object.defineProperty(this.prototype, prop, {
      get: function() {
        var privateProp;
        privateProp = '__' + prop;
        if (this[privateProp] != null) {
          return this[privateProp];
        }
        return this[privateProp] = getter.apply(this);
      }
    });
  };
});

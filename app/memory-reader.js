(function() {
  define(function() {
    'use strict';
    var MemoryReader;
    return MemoryReader = (function() {
      function MemoryReader(data) {
        this.data = data.split('\n');
        this.idx = 0;
      }

      MemoryReader.prototype.line = function() {
        return this.data[this.idx];
      };

      MemoryReader.prototype.nextLine = function() {
        return this.data[this.idx + 1];
      };

      MemoryReader.prototype.hasNext = function() {
        return this.idx < this.data.length;
      };

      MemoryReader.prototype.moveNext = function() {
        this.idx = this.idx + 1;
        return this;
      };

      return MemoryReader;

    })();
  });

}).call(this);

(function() {
  define(['path-reader', 'text!../data/french.txt'], function(PathReader, data) {
    return describe('Path reader', function() {
      return it('should', function() {
        return expect(true).to.equal(true);
      });
    });
  });

}).call(this);

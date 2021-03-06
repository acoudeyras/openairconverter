(function() {
  define(['comment'], function(Comment) {
    'use strict';
    return describe('parse', function() {
      return it('should parse a comment', function() {
        var comment;
        comment = Comment.parse('P 36 FESSENHEIM (08 APR 2010) **');
        return expect(comment).to.equal('P 36 FESSENHEIM (08 APR 2010)');
      });
    });
  });

}).call(this);

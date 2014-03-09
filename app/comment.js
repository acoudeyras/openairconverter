(function() {
  define(function() {
    'use strict';
    var Comment;
    return Comment = (function() {
      function Comment() {}

      Comment.parse = function(str) {
        var comment;
        comment = str.split('**')[0];
        return comment.trim();
      };

      return Comment;

    })();
  });

}).call(this);

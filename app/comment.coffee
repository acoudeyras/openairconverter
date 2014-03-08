define ->

  class Comment
    @parse: (str) ->
      [comment] = str.split '**'
      comment.trim()
define ->
  'use stric'

  Function::lazyval = (prop, getter) ->
    Object.defineProperty @prototype, prop,
      get: ->
        privateProp =  '__' + prop
        return @[privateProp] if @[privateProp]?
        @[privateProp] = getter.apply(@)  
define ['zone', 'memory-reader', 'airspace', 'text!./data/small-french.txt'], (Zone, Reader, Airspace, data)->
  
  simpleZone = Zone.parse new Reader(data)

  simpleZone: simpleZone
  airSpaceWithSimpleZone: new Airspace [simpleZone]
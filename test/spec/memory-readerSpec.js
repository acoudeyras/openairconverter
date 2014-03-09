(function() {
  define(['memory-reader', 'text!../data/small-french.txt'], function(Reader, data) {
    'use strict';
    describe('hasNext and moveNext', function() {
      describe('with a single line', function() {
        it('should be true', function() {
          var reader;
          reader = new Reader('DP 45:48:40 N 000:11:48 E');
          return expect(reader.hasNext()).to.be["true"];
        });
        return it('should be false, when moved next', function() {
          var reader;
          reader = new Reader('DP 45:48:40 N 000:11:48 E');
          reader.moveNext();
          return expect(reader.hasNext()).to.be["false"];
        });
      });
      return describe('with multiple lines', function() {
        var count, reader;
        reader = new Reader(data);
        count = 0;
        while (reader.hasNext()) {
          count = count + 1;
          reader.moveNext();
        }
        return expect(count).to.equal(reader.data.length);
      });
    });
    describe('line', function() {
      it('should the first line', function() {
        var reader;
        reader = new Reader(data);
        return expect(reader.line()).to.equal('** P 36 FESSENHEIM (08 APR 2010) **');
      });
      return it('when moved next, should return the second line', function() {
        var reader;
        reader = new Reader(data);
        reader.moveNext();
        return expect(reader.line()).to.equal('AC P');
      });
    });
    return describe('nextLine', function() {
      it('should return the second line', function() {
        var reader;
        reader = new Reader(data);
        return expect(reader.nextLine()).to.equal('AC P');
      });
      return it('when moved next, should return the third line', function() {
        var reader;
        reader = new Reader(data);
        reader.moveNext();
        return expect(reader.nextLine()).to.equal('AN P36 Fessenheim');
      });
    });
  });

}).call(this);

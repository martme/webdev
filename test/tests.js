var should = require('should');
describe('Array', function() {
    describe('#filter()', function() {
        it('should return empty result when no elements match', function() {
            [1, 2, 3]
                .filter(function (x) { return x === 4; })
                .should.deepEqual([]);
        });
        it('should return matching elements as array', function() {
            [1, 2, 3]
                .filter(function (x) { return x === 2; })
                .should.deepEqual([2]);
        });
    });

    describe('indexOf()', function () {
        it('should return index of element', function() {
            [1,2,3].indexOf(2).should.equal(1);
        });
        it('should return -1 if index is not within in array bounds', function() {
            [1,2,3].indexOf(4).should.equal(-1);
        });
    });
});

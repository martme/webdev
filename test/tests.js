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
});


describe('Quirks', function () {
    describe('== vs ===', function () {
        it('is not intuitive; always use ===', function () {
            (null == undefined).should.equal(true);
            (null === undefined).should.equal(false);
        });
    });
    describe('falsy chaining', function () {
        it('should keep evaluating until the value is no longer falsy', function () {
            (0 || null || undefined || "" || "0" || "nah").should.equal("0");
        });
    });
    describe('hoisting', function () {
        it('should hoist functions but not variables', function () {
            func1.should.be.type('function');
            should(func2).equal(undefined);

            function func1() {};
            var func2 = function () {};
        });
        it('should serve as motivation to always declare functions as variables', function () {

            func().should.equal(3);
            var func = function () { return 1; };
            func().should.equal(1);
            func = function () { return 2; };
            func().should.equal(2);
            function func() { return 3; };
            // NB:
            func().should.equal(2);
        })
    });
});

var assert = require('assert');
var sut = require('../app.js');
require('better-objects');

suite('Array#reorder', function () {
    test('should return an array', function () {
        assert(Array.isArray(sut.reorder(['a', 'b'], {0: 1, 1: 0})));
    });
    test('[a,b],{0:1,1:0} should return [b,a]', function () {
        var result = sut.reorder(['a', 'b'], {0: 1, 1: 0});
        assert(['b', 'a'].equals(result));
    });
    test('[a,b,c],{0:1,1:0} should return [b,a]', function () {
        var result = sut.reorder(['a', 'b', 'c'], {0: 1, 1: 0});
        assert(['b', 'a'].equals(result));
    });
    test('[a,b,c],{0:2,1:1,3:0} should return [,b,a]', function () {
        var result = sut.reorder(['a', 'b'], {0: 2, 1: 1,3:0});
        assert([, 'b', 'a'].equals(result));
    });
    test('[a,b],{0:2,1:1} should return [,b,a]', function () {
        var result = sut.reorder(['a', 'b'], {0: 2, 1: 1});
        assert([,'b', 'a'].equals(result));
    });
    test('[a,b],{} should return []', function () {
        var result = sut.reorder(['a', 'b'], {});
        assert([].equals(result));
    });
    test('[a,b],undefinde should return []', function () {
        var result = sut.reorder(['a', 'b']);
        assert([].equals(result));
    });
})
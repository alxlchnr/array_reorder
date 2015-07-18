'use strict';

var exports = module.exports = {};
exports.reorder = function (array, newOrder) {
    if (array && newOrder) {
        var resultArray = new Array(Object.keys(newOrder).length);
        for (var index = 0; index < array.length; index++) {
            var newIndex = newOrder[index + ''];
            if (newIndex || newIndex == 0) {
                resultArray[newIndex]=array[index];
            }
        }
        return resultArray;
    }
    return []
};
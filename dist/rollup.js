'use strict';

exports = module.exports = main;

Object.defineProperty(exports, '__esModule', { value: true });

var Provider = function(text) {
    return "" + text + "Provider";
};

var Another = function(text) {
    return "" + text + "Another";
};

function index(text) {
    return "default" + text;
}

exports.Another = Another;
exports.Provider = Provider;
exports.default = index;

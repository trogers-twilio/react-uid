'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useUIDSeed =
  exports.useUID =
  exports.UIDFork =
  exports.UIDReset =
  exports.UIDConsumer =
  exports.UID =
  exports.uid =
  exports.generateUID =
    void 0;
var Control_1 = require('./Control');
Object.defineProperty(exports, 'UIDReset', {
  enumerable: true,
  get: function () {
    return Control_1.UIDReset;
  },
});
Object.defineProperty(exports, 'UIDConsumer', {
  enumerable: true,
  get: function () {
    return Control_1.UIDConsumer;
  },
});
Object.defineProperty(exports, 'UIDFork', {
  enumerable: true,
  get: function () {
    return Control_1.UIDFork;
  },
});
var UIDComponent_1 = require('./UIDComponent');
Object.defineProperty(exports, 'UID', {
  enumerable: true,
  get: function () {
    return UIDComponent_1.UID;
  },
});
var hooks_1 = require('./hooks');
Object.defineProperty(exports, 'useUID', {
  enumerable: true,
  get: function () {
    return hooks_1.useUID;
  },
});
Object.defineProperty(exports, 'useUIDSeed', {
  enumerable: true,
  get: function () {
    return hooks_1.useUIDSeed;
  },
});
var uid_1 = require('./uid');
Object.defineProperty(exports, 'generateUID', {
  enumerable: true,
  get: function () {
    return uid_1.generateUID;
  },
});
Object.defineProperty(exports, 'uid', {
  enumerable: true,
  get: function () {
    return uid_1.uid;
  },
});

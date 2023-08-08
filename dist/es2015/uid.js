/**
 * generates a UID factory
 * @internal
 * @example
 * const uid = generateUID();
 * uid(object) = 1;
 * uid(object) = 1;
 * uid(anotherObject) = 2;
 */
export var generateUID = function () {
  var counter = 1;
  var map = new WeakMap();
  /**
   * @borrows {uid}
   */
  var uid = function (item, index) {
    if (typeof item === 'number' || typeof item === 'string') {
      return index ? 'idx-'.concat(index) : 'val-'.concat(item);
    }
    if (!map.has(item)) {
      map.set(item, counter++);
      return uid(item);
    }
    return 'uid' + map.get(item);
  };
  return uid;
};
/**
 * @name uid
 * returns an UID associated with {item}
 * @param {Object} item - object to generate UID for
 * @param {Number} index, a fallback index
 * @example
 * uid(object) == 1;
 * uid(object) == 1;
 * uid(anotherObject) == 2;
 * uid("not object", 42) == 42
 *
 * @see {@link useUID}
 */
export var uid = generateUID();

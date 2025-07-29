//****Cache With Time Limit****/

/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
 */

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
/** 
 * @param {number} key
 * @return {number} value associated with key
 */
/** 
 * @return {number} count of non-expired keys
 */

var TimeLimitedCache = function () {
    this.cache = new Map();
    this.expirationTimes = new Map();
};
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const expirationTime = now + duration;

    const exists = this.cache.has(key);
    this.cache.set(key, value);
    this.expirationTimes.set(key, expirationTime);

    // Clean up expired keys
    this.cleanupExpiredKeys();

    return exists;
};
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();
    if (this.cache.has(key) && this.expirationTimes.get(key) > now) {
        return this.cache.get(key);
    }
    return -1;
};
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;
    for (const [key, expirationTime] of this.expirationTimes) {
        if (expirationTime > now) {
            count++;
        }
    }
    return count;
};
TimeLimitedCache.prototype.cleanupExpiredKeys = function () {
    const now = Date.now();
    for (const key of this.expirationTimes.keys()) {
        if (this.expirationTimes.get(key) <= now) {
            this.cache.delete(key);
            this.expirationTimes.delete(key);
        }
    }
};

// time complexity: O(1) for set, get, and count operations
// space complexity: O(n) where n is the number of keys stored in the cache
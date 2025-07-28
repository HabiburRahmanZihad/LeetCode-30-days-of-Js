//****Interval Cancellation ****/
/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */


const cancellable = function (fn, args, t) {
    let intervalId;
    const cancelFn = () => {
        clearInterval(intervalId);
    };
    fn(...args);
    intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return cancelFn;
};

//time complexity: O(1) for setting the interval and clearing it
//space complexity: O(1) for the interval ID storage
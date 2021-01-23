
exports.min = function min(array) {
    if (arguments.length == 0 || array.length == 0) return 0;
    let ans = Math.min(array[0]);
    for (let i = 1; i < array.length; i++)
        ans = Math.min(ans, array[i]);
    return ans;
}

exports.max = function max(array) {
    if (arguments.length == 0 || array.length == 0) return 0;
    let ans = Math.max(array[0]);
    for (let i = 1; i < array.length; i++)
        ans = Math.max(ans, array[i]);
    return ans;
}

exports.avg = function avg(array) {
    if (arguments.length == 0 || array.length == 0) return 0;
    return array.reduce((acc, cur) => cur + acc) / array.length;
}

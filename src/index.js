exports.min = function min (array) {
    let minimum = 0;
    if (array && array.length > 0){
        minimum = Math.min(...array);
    }
    return minimum;
}

exports.max = function max (array) {
    let maximum = 0;
    if (array && array.length > 0){
        maximum = Math.max(...array);
    }
    return maximum;
}

exports.avg = function avg (array) {
    let sum = 0;
    if (array && array.length > 0){
        for(i = 0; i < array.length; i++){
            sum = sum + array[i];
        }
    }
    let avgfun = 0;
    if (sum !== 0){
        avgfun = sum / array.length;
    }
    return avgfun;
}

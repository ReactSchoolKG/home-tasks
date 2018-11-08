var arr = [1, [2, 3, -1], [[2,5], [[8], 9]], -3];

var max = -Infinity;
var lOfMax = 0;
function calculate(array, l = -1) {
    if(Array.isArray(array)) {
        for(var i = 0; i < array.length; i++) {
            calculate(array[i], lOfMax + 1);
        }
        if(array>max) {
            max
        }
    }
}

arrLevel(arr);


title: ...;
done: false;
id: 1;

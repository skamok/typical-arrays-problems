
exports.min = function min (array) {
  if (Array.isArray(array)) {
  if (array.length === 0) {return 0};  
  let minNumber = array[0];
  array.forEach(element => {
    if (element < minNumber) { minNumber = element};
  });
  return minNumber;
} else
 {return 0};
}

exports.max = function max (array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {return 0};
  let maxNumber = array[0];
  array.forEach(element => {
    if (element > maxNumber) { maxNumber = element};
  });
  return maxNumber;
} else
{return 0};
}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {return 0};
  let summ = 0;
  array.forEach(element => {
    summ += element;
  });
  return summ/(array.length);
} else
{return 0};
}

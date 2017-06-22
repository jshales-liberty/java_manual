var arr = [7, 3, 10, 3, 42, 87, 42, 999]
var set = [3, 42, 87, 100, 200]
var filteredArray = arr.filter(f => set.includes(f));

console.log(filteredArray);

function filterContained(arr, set) {
  return arr.filter(ele => set.includes(ele));
}

var result = filterContained(arr, set);
console.log(result);

// console.log('Fear is the mind killer.');

// SECTION Exercise #2: Create a function that takes the 'people' array (below) that takes an array as a first argument and a name as a second argument. If the function finds the name in the provided array, it should immediately return the name as well as the index position/s.

let people = ["Albert","Anna","Ben","Carmen Sandiego","Dora","Eric","Francis","Gary","Helen","Ira","Jake","Jane","John","kate","Louis","Mike","Nancy","Oscar","Paula","QuIncy","Regina","Sabrina","trevor","Unice","Victoria","Winston","Waldo","Xavier","Yancy","Zack"]

// const findName = (arr, name) => {
//   if (arr.includes(name)) {
//     return name + ' - Index #' + arr.indexOf(name);
//   }
//   return false;
// }
// console.log(findName(people, 'Oscar'));
// console.log(findName(people, 'Albert'));
// console.log(findName(people, 'Waldo'));
// console.log(findName(people, 'Jonathan'));


// SECTION Exercise #3: 
// Create new, empty array
// loop through 'people' array, each element should be to lowercase and then pushed into new array
// two parameters, array (first) and name as a string (second)
// convert name to lowercase and arr.includes

const checkNameCaseInsensitive = (arr, name) => {
  const lowercaseArray = [];
  for (let i= 0; i < arr.length; i++) {
    lowercaseArray.push(arr[i].toLowerCase());
  }
  if (lowercaseArray.includes(name.toLowerCase())) {
    return name + ' - index #' + lowercaseArray.indexOf(name.toLowerCase());
  }
  return false;
}
console.log(checkNameCaseInsensitive(people, 'WaLdo'));
console.log(checkNameCaseInsensitive(people, 'TREVOR'));
console.log(checkNameCaseInsensitive(people, 'TrEVor'));
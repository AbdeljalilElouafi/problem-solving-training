function findLongestString(array) {
  let longString = ''; 
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longString.length) {
      longString = array[i];
    }
  }

  return longString; 
}

let strings = ["aa", "a", "a", "aaaa", "3zwaaa"];
console.log(findLongestString(strings)); 

function findLongestString(array) {
  return array.reduce(function(longest, current) {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }, '');
}

console.log(findLongestString(strings));

function sumArraysByIndex(array1, array2) {
  const length = Math.max(array1.length, array2.length);
  let result = [];
  
  for (let i = 0; i < length; i++) {
    let val1 = 0;
    let val2 = 0;

    if (i < array1.length) {
      val1 = array1[i];
    }
    if (i < array2.length) {
      val2 = array2[i];
    }
    
    result.push(val1 + val2); 
  }

  return result;
}

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
console.log(sumArraysByIndex(array1, array2));

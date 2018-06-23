
function testNum (num) {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`)
  } else {
    return Promise.reject(Error(`${num} is less than 10, error!`));    
  }
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))

function makeAllCaps (arr) {
  let caps = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
      let cap = arr[i].toUpperCase();
      caps.push(cap)
    } else {
      return Promise.reject(Error(`No, the array you passed in contained an element that was not a string!`));    
    }
}
  return Promise.resolve(caps)
}

function sortWords (arr) {
  const sortedArr = arr.sort()
  return Promise.resolve(sortedArr)
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
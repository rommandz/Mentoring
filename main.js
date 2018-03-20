(function(){
//Task 1
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatenned = arrays.reduce((prev, current) => prev.concat(current), []);
console.log(flatenned);

//Task 2
const loop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  };
};

loop(3, n => n > 0, n => n - 1, console.log);

//Task 3
const every = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  };
  
  return true;
};

const everyBasedOnSome = (array, test) => !array.some(el => !test(el));

console.log(every([1, 3, 5], n => n < 10));
console.log(everyBasedOnSome([1, 3, 5], n => n < 10));

//Task 4, 5, 6
class myLodash {

  map(data, callback, context) {
    if (!(data instanceof Array)) {
      throw new Error(`${data} is not an array`);
      return;
    }

    const res = [];

    for (let i = 0; i < data.length; i++) {
      res.push(callback(data[i], i));
    }

    return res;
  }

  filter(data, callback, context) {
    if (!(data instanceof Array)) {
      throw new Error(`${data} is not an array`);
      return;
    }

    const res = [];

    for (let i = 0; i < data.length; i++) {
      if (callback(data[i], i)) {
        res.push(data[i]);
      }
    }

    return res;
  }

  find(data, callback, context) {
    if (!(data instanceof Array)) {
      throw new Error(`${data} is not an array`);
      return;
    }

    for (let i = 0; i < data.length; i++) {
      if (callback(data[i], i)) {
        return data[i];
      }
    }

    return undefined;
  }
}

window._ = new myLodash();

const testData = [1, 2, 3, 4, 5];
const testDataSecond = [
  {
    name: 'Roman',
    age: 24
  },
  {
    name: 'Andrij',
    age: 22
  },
  {
    name: 'Katy',
    age: 22
  }
]


console.log(_.map(testData, el => el*2));
console.log(_.filter(testData, el => el > 2));
console.log(_.find(testDataSecond, el => el.age === 22));

})();
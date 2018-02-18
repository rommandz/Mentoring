//Task 1
const promiseTimeout = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), num);
  });
}

promiseTimeout(2000).then(() => {
  console.log('done from promiseTimeout');
});

//Task 2
const div = document.querySelector('div');

const income = [
  {
    direction: 'top',
    elem: div,
    px: 100,
    delay: 1000
  }, {
    direction: 'left',
    elem: div,
    px: 200,
    delay: 2000
  }, {
    direction: 'left',
    elem: div,
    px: -200,
    delay: 500
  }, {
    direction: 'top',
    elem: div,
    px: -100,
    delay: 1200
  }
];


const move = (arr) => {
  console.log('start');

  let chaining = Promise.resolve();
  const promises = arr
    .map(({
      direction,
      elem,
      px,
      delay
    }) => {
      return function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Move ${direction} for ${px} px, whith ${delay} delay`);
            elem.style[direction] = px.toString() + 'px';
            resolve();
          }, delay);
        });
      }
    })
    .forEach(f => {
      chaining = chaining.then(f);
    });

  return chaining;
};

move(income).then(() => {
  div.style.background = 'rgb(70, 117, 69)';
  console.log('done from move');
});

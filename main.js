// Module
const Module = (function () {
  let count = 0;
  
  return {
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    },
    reset() {
      count = 0;
    }
  }
})();

//Singleton
const Singleton = (function () {
  let instance;

  const initInstance = () => ({
    name: 'Roman',
    age: 23
  });

  return {
    getInstance() {
      if (!instance) {
        instance = initInstance();  
      }

      return instance;
    }
  };
})();

//Facade
const showSpinner = () => console.log('show spinner');
const loadData = () => console.log('load data');
const hideSpinner = () => console.log('hide spinner');
const updateContent = () => console.log('update content');
const setLog = () => console.log('set log');


const Facade = {
  update() {
      showSpinner();
      loadData();
      hideSpinner();
      updateContent();
      setLog();
  },
  doSmthElse() {
      // a lot of methods
  }
};

//Decotator
class Dinner {
  constructor() {
    this.secondDish = 'meat whith potatos';  
  }
  menu() { 
    return 'meat whith potatos';
  } 
}

const salad = (dinner) => {
  menu = dinner.menu();
  dinner.menu = () => menu + ', cezar'; 
}

const beer = (dinner) => {
  menu = dinner.menu();
  dinner.menu = () => menu + ', Bud'; 
}

const dinner = new Dinner();
salad(dinner);
beer(dinner);

//Factory
class Car {
  constructor() {
      this.color = 'black';
      this.doors = 4;
  }
  setColor(newColor) {
      this.color = newColor;
  }
}

class Sedan extends Car {
  constructor() {
      super();
      this.doors = 4;
  }
}
class Coupe extends Car {
  constructor() {
      super();
      this.doors = 2;
  }
}

class CarFactory {

  createCar(settings) {
    let car;

    switch(settings.type) {
      case 'sedan':
        car = new Sedan();
        break;
      case 'coupe':
        car = new Coupe();
        break;
      default:
        car = new Car();
        break;  
    }
    car.setColor(settings.color);

    return car;
  }
}

const carFactory = new CarFactory();
const firstCar = carFactory.createCar({type: 'sedan', color: 'blue'});
const secondCar = carFactory.createCar({type: 'coupe', color: 'red'});

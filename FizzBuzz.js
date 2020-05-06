console.log("Time to go:");

let _ = {
  clamp(num, low, high) {
    return Math.max(Math.min(num, high), low);
  },
  inRange(num, start, end) {
    if (!end) {
      end = start;
      start = 0;
    } else if ( start > end ) {
      const swap = end;
      end = start;
      start = swap;
    };
    const high = end-1;
    if (this.clamp(num, start, high) === num) {
      return true;
    } else {
      return false;
    };
  },
  words(str) {
    return str.split(' ');
  }
};

console.log(_.clamp(15, 10, 20));



// Do not write or modify code below this line.
module.exports = _;








/* const menu = {
    _courses:{
      appetizers: [],
      mains: [],
      desserts: [],
      
    } ,
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers.push(appetizerIn);
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
      this._courses.mains.push(mainIn);
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertsIn) {
      this._courses.desserts.push(dessertsIn);
    },
    get courses() {
      return this._courses;
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName, 
        price: dishPrice
      }; 
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      //console.log(dishes);
      let rIndex = Math.floor((Math.random()*dishes.length));
      //console.log(rIndex);
      return dishes[rIndex];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      //console.log(appetizer);
      let main = this.getRandomDishFromCourse('mains');
      //console.log(main);
      let dessert = this.getRandomDishFromCourse('desserts');
      //console.log(dessert);
      let fullPrice = dessert.price + main.price + appetizer.price;
      //console.log(fullPrice);
      let summary = `Your meal begins with ${appetizer.name}, the main dish is ${main.name}, and dessert will be ${dessert.name}. Total cost is $${fullPrice}. Enjoy!`;
      return summary;
    }
  };
  
  
  menu.addDishToCourse('mains', 'Beef', 40);
  menu.addDishToCourse('mains', 'chicken', 30);
  menu.addDishToCourse('mains', 'salmon', 35);
  menu.addDishToCourse('appetizers', 'chicken', 15);
  menu.addDishToCourse('appetizers', 'pot stickers', 31);
  menu.addDishToCourse('desserts', 'cake', 37);
  menu.addDishToCourse('desserts', 'chorizo', 35);
  //console.log(menu.courses);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
*/

/* const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am a ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo());
*/

/*countBeans

const countBs = str => {
    let n = 0;
    for (i=0; i < str.length; i++) {
        if(str[i] === 'B') {
            n++;
        };
    };
    return n;
};

console.log(countBs('Big Boys Beat Breakers before breakfast'));

const countChar = (str, char) => {
    let n = 0;
    for (i=0; i < str.length; i++) {
        if(str[i] === char) {
            n++;
        };
    };
    return n;
};
console.log(countChar('Big Boys Beat Breakers before breakfast', 'e'));
*/

/* isEven
const isEven = n => {
    const reduce = x => {
            while (x > 2) {
                x -= 2;
            }
            return x;
    }
    n = Math.abs(n)
    if (reduce(n) === 2) {
        return true;
    } else {
        return false;
    };
};
console.log(isEven(-90));
*/

/* FIZZBUZZ IS HERE:
 const getOutput = num => {
    let outPut = num;
    if (num % 3 === 0 && num % 5 === 0) {
        outPut = 'FizzBuzz'
    }
    else if (num % 3 === 0) {
        outPut = 'Fizz'
    } 
    else if (num % 5 === 0) {
        outPut = 'Buzz'
    } 
    else {outPut = num};
    return outPut;
}

for (let count = 1; count < 101; count++) {
    console.log(getOutput(count));
};


*/
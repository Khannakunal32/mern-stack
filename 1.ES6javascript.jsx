// run the below code on jsbin.com and change it to es6/babel from javascript

var j= "javascript"  

const r= "react"

function print(name) {         //js
  console.log(name);
}

print(j);

  let printReact = (name) => {   //react
  console.log(name);
}

printReact(r);

let printReact2 = name => { 
  console.log(name);
}

printReact2(r);


let printReact3 = () => {
  console.log('without parameter');
}

printReact3();

let printReact4 = name => console.log("single line syntax " + name )

printReact4(r);

let printReact5 = (name1, name2) => console.log(name1 + " " + name2);    //must use brackets in parameter when using more then one parameter

printReact5(j, r);


let printReact6 = n => { return n * 2; }

console.log(printReact6(5));

let printReact7 = n => n * 2

console.log(printReact7(5));




// concept of classes 

// concept of classes

// old javascript class concept
// note this whole code will compile as ES6/Babel not for javascript so change acc in jsbin
class Human {
  constructor() {
    this.gender = 'male';
  }
  
  printGender(){
    console.log(this.gender);
  }
}


class Person extends Human {
  constructor() {
    
    super();   // to show that this is the main constructor in which inheritance has been done
    this.name= 'javascript';
    this.gender= 'female';        //this gender is taken while console as this is the super constructor
  }
  
  printName(){
    console.log(this.name);
  }
}

const pers = new Person();     // declaring constant to for class calling

pers.printName();
pers.printGender();



// new javascript es6/babel concept
class ReactHuman {
  
  gender = 'male';  // made directly no need to make constructor in ES6/babel

  printGender = () => console.log(this.gender);
}

class ReactPerson extends ReactHuman {
  
  name = 'react';
  gender = 'trans';

  printName = () => console.log(this.name);
}

const persReact = new ReactPerson();

persReact.printName();
persReact.printGender();











// Spread & Rest operator

const Number = [1, 2, 3];

const newNumber = [...Number, 4, 5];

const newNumber2 = [Number, 4, 5];   // without spread operator


console.log(newNumber);          //  o/p [1, 2, 3, 4, 5]    using spread operator it becomes part of array
console.log(newNumber2);         //  o/p [[1, 2, 3], 4, 5]  array inside array

const obj = { x: 'kunal' ,
              y: 'khanna' };

const newObj = { ...obj,
                 p: 10 };

const newObj2 = { obj,
                  p: 10 };
                      
console.log(newObj);          // o/p  [object Object] {
                              //         p: 10,
                              //         x: "kunal",
                              //         y: "khanna"
                              //       }
  
console.log(newObj2);        // o/p   [object Object] {
                                //       obj: [object Object] {
                                //         x: "kunal",
                                //         y: "khanna"
                                //       },
                                //       p: 10
                                //     }
                              
const filter = (...args) => {        // rest operator usage in function
  
  return args.filter( el => el === 1 || el === 5);
}

console.log( filter(1, 2, 3, 4, 5));    // o/p [1, 5]






// Destructuring
const Number = [1, 2, 3];

[a, , c] = [...Number];

console.log(a, c);    //    o/p 1  3




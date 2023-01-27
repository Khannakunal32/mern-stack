// 1st case using call by reference
const person = {
    name: 'kunal',
     last: 'khanna'
 }
 
 const newPerson = person;       // copied as reference ( objects and arrays are reference types once copied they are copied as pointers not values to overcome this copy thier properties using spread operator)
 
 person.name = 'xyz';            
 
 console.log(newPerson);
 
 
 // 2nd case using call by value
     person.name = 'kunal';   // changing name back to kunal
     
 const newPerson2 = {
   ...person                    // copied value of object with spread operator
 };
 
 person.name = 'xyz';
 
 console.log(newPerson2);


 //funciton of array

 const arr = [1, 2, 3];

const doubleArr = arr.map( (num) => { return num * 2; });

console.log(arr);
console.log(doubleArr); 



const newArray = [1,3,4,5,6];

const manipulateArray = (num) => {
  console.log(num);
}
const showArr = arr.map( manipulateArray(num) );

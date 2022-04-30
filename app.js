/* 
const season = require('./var')
const greetings = require('./funct');
require('./standalone')
 */
// greetings('wala')
// greetings(season.day)
// greetings(season.night) 
 
// const path = require('path');
// console.log(path.basename());

/* const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/text2.txt', 'utf8');
// console.log(first, second);

writeFileSync('./content/raw.text', `yes man : ${first },
 ${second}: wala`, {flag: 'a'}) */

// const {readFileSync, writeFileSync} = require('fs')

// writeFileSync('./content/myTryF.txt', 'jkdjkdjkd,dffiofjojfj.fiofhfhfjkd', {flag: 'a'})
//  const dam = [
// { name: 'damilola', salary : 23000},
//   {  name: 'Bukola' , salary : 20000}
    
// ]

/* const bob = { name: 'oladejo', age: 23, sex: 'male' , siblings: {brother:'kole',sister: 'sogo'}}
 */
 
        /* DESTRUCTIONING PRINCIPLES */
/* const studentInfo = [
    { name: 'oladejo', age: 23, sex: 'male', price: 400, amount:3},
    { name: 'bola', age: 25, sex: 'female',price: 500, amount:6 },
    { name: 'hanny', age: 30, sex: 'male', price: 600, amount:1},
    { name: 'hanny', age: 30, sex: 'male', price: 600, amount:1}
]
  let {totalItems,CartItems} = studentInfo.reduce(
     (acc,result)=>{
        const {price,amount} = result;
        acc.CartItems += amount;
        acc.totalItems += amount * price;
        return acc 

 },{totalItems:0,
    CartItems:0})
 
 let CartT = CartItems * 8; 
 
 
 console.log(totalItems);
 console.log(CartItems);
 console.log(CartT);
 */

/*  let studentInfo = [
    { name: 'oladejo', age: 23, sex: 'male', price: 400, amount:3},
    { name: 'bola', age: 25, sex: 'female',price: 500, amount:6 },
    { name: 'hanny', age: 30, sex: 'male', price: 600, amount:1},
    { name: 'hanny', age: 30, sex: 'male', price: 600, amount:1}
]
 
 let values = [40,60,20] */
/*  function ave(arr) {
     let sum = 0;
     arr.forEach(items => { sum+=items
      let average = sum/arr.length
           
     console.log(Math.floor(average) );
     });
 
 } */
//  ave(values)
 

/*  const findAve = values.reduce((acc, result)=>{
    acc+=result
return  acc
 }, 0 )/values.length

 console.log(Math.floor(findAve)); */

/*  function getAverage(name,...value) {
     console.log(name);
     console.log(value);
     const average = value.reduce((acc,result)=>{acc+=result
         return acc
     },0)/value.length
     console.log(average);
 }
 getAverage(bob.name,  ...values) */

/* const variab = require('./var')
const add  = require('./funct')
const {num1,num2} = variab
add(num1,num2) */

// const operatingSys = require('os')
 
/* Sychronous filesystem */
/* const {readFileSync,writeFileSync} = require('fs')
// const num1 = readFileSync('./content/raw.text','utf-8')
const num2 = writeFileSync(
    './content/raw2.text',
 ' I am the best programmer ever' ,
 {flag: 'a'}
 )
console.log(num2);
  */

/* Asychronous file system( Call back hell!!!) */

const {readFile,writeFile} = require('fs');
 const first = readFile('./content/raw.text','utf-8',((err,result)=>{
        if (err) {
            console.log(err);
            return
        }
        const first = result
        console.log(first);
    writeFile(
        './content/async-method',
         `wawu ${first}`, 
         ((err,result)=>{
             if (err) {
                 console.log(err);
             }
             console.log(result);
         })
         )
        

 })
 )
 console.log(first);


/* const os = require('os')
const systemInfo = {    
    name : os.hostname(),
    freeMem: os.freemem(),
    direc: os.homedir(),
}
 
console.log(systemInfo); */
// const { rejects } = require("assert");
// const { resolve } = require("path");
 
// const { log } = require("console");
 


 
// const recipes = {
//     fruits: ['orange', 'banana', 'pawpaw'],
//     machine: ['grater','sqeezer'],
//     style: ['takeaway, plates, order']
// }
 /*  let is_shop_open = true;

 function time(ms) {
     return new Promise((resolve,rejects)=>{
         if (is_shop_open) {
             setTimeout(resolve, ms);
            
         } else {rejects()
        console.log("error oooo")}  
     })
 
 }
  
 async function kitchen() {
        try{
       await time(2000);
       console.log("production will start soon");
       await time(3000)
       console.log(`${recipes.fruits[0]} will be processed now`);
        }
        catch(error){
            console.log(error,"invalid entries");

        }
        finally{
            console.log("good day");
        }

 }
 kitchen() */
 
/* Promises */
         const  age = 2
          const random =Math.floor(Math.random()*3) 
const promise = new Promise((resolve,rejects)=>{
    (age ===random)?resolve('yesss!'):rejects('nope!')
})
promise.then((data)=> (console.log(data))).catch((err)=> (console.log(err)))
console.log(promise);
 
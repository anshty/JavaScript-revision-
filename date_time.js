// dates


console.log('myDate');
 
// setInterval(() => {
//     let myDate=new Date()
//    console.log( myDate.toLocaleTimeString())
    
// }, 1000);

let myDate=new Date() //is an object 

// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())

let timestem=Date.now()
console.log(timestem);
console.log(Math.round(myDate.getTime()/100))
console.log(myDate.getFullYear());
console.log(myDate.getTime());
console.log(myDate.toLocaleDateString('default',{
    
}));

console.log(myDate.getMonth());
setInterval(()=>{
    let myDate=new Date()
    // console.log(myDate.toLocaleTimeString());
},1000)

console.log(myDate.getMonth()+1);
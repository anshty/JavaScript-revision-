const name_value="ankit verma"
const string_type=20

console.log(name_value+string_type+"data");

const name_data= new String("ankit verma")
console.log(typeof name_data);

console.log(name_data.__proto__);

console.log(name_data.length);
console.log(name_data.toUpperCase());
console.log(name_data.toLowerCase());
console.log(name_data.indexOf('t'));
console.log(name_data.charAt(5));

const newString=name_data.substring(1,3)
// const newstro=name_data.trimEnd()
console.log(newString);


console.log(name_data.substring(0,3));
console.log(name_data.trimStart(" "));

console.log("+++new start+++");
let searchValue;

console.log(name_data.replace("a","b"));

// console.log(name_data.hasOwnProperty());

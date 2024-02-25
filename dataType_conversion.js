const num_value="54.5";
// console.log(typeof num_value);

let num_type=Number(num_value);

// console.log(typeof num_type);

let string_type=String(num_type);
// console.log(typeof string_type);

let bool_type=Boolean(num_type);
// console.log(typeof bool_type);

// let floot_type=Float32Array(num_type)//=error
// console.log(floot_type);

// let floot_type=parseFloat(num_type) can't convert into float value
// console.log(typeof floot_type);


// +++++++ using of symbols to make same id deferent 

let instaUser_hitesh001=Symbol('ak123')
let instaUser_hitesh002=Symbol('ak123')

console.log(instaUser_hitesh001===instaUser_hitesh002);//false
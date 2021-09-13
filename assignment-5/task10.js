/*
10)From Object:
	 const detail = {name: "ram", address: "kathmandu", age: 15, email: "ram@gmail.com"}
   Create an array:
         [['name', 'address', 'age', 'email'],['ram', 'kathmandu', 15, 'ram@gmail.com']]
 */

const detail = {name: "ram", address: "kathmandu", age: 15, email: "ram@gmail.com"};
let keyArry = [];
let valueArry  = [];

for(let key in detail){
    keyArry.push(key);
    valueArry.push(detail[key]);
}

console.log([keyArry, valueArry]);
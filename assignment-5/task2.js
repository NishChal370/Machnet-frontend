/*2) Write a program to display: 
  hello!
  hello
  hell
  hel
  he
  h
 */
let value = "hello!";
for(let i=value.length; i>=0; i--){
    console.log(value.slice(0, i));
}
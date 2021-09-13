/*1) Write a program to display:
  h
  he
  hel
  hell
  hello
  hello!
  */
 
let value = "hello!";
for(let i=0; i<=value.length; i++){
    console.log(value.slice(0, i));
}

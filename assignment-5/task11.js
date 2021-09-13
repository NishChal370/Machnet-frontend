/*Extra task:

11) From the given string:
  const sentence = "the carrots on the table and the bananas on the table has dissappeared"
  create a function that takes sentence as a single argument to return 
  { the: 4, carrots,1 on: 2, table:2, and:1, bananas:1, has: 1, dissappeared:1}
 */

const sentence = "the carrots on the table and the bananas on the table has dissappeared";

let ans={};

sentence.split(" ").forEach((value)=>{
  if(!ans.hasOwnProperty(value)){
    ans[value] = 1;
  }
  else{
    ans[value] += 1;
  }
  // else if(Object.keys(ans).length !== 0){ //  this also give same result by removing else
  //   ans[value] += 1;
  // }
});

console.log(ans);


/*9)From array:
  	const number = [1,2,3,4,5,6]
  	create an array were even numbers are multiplied by 3 as shown in the following array:
  	[1,6,3,12,5,18]
 */

const number = [1,2,3,4,5,6];
const evenNumber = [];
number.forEach((num)=>{
    (num%2 == 0)
        ? evenNumber.push(num*3)
        : evenNumber.push(num)
    
});

console.log(evenNumber);
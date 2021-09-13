/*6)From array:
	const details = [
  	 { name: 'Ram', age: 15 },
  	 { name: 'Shyam', age: 21 },
  	 { name: 'Hari', age: 12 },
  	 { name: 'Bharat', age: 18 },
  	 { name: 'Sita', age: 24 },
	];
  obtain array of adults whose age is greater than 18 */

  
const details = [
    { name: 'Ram', age: 15 },
    { name: 'Shyam', age: 21 },
    { name: 'Hari', age: 12 },
    { name: 'Bharat', age: 18 },
    { name: 'Sita', age: 24 },
];

const findAdults =( personDetail)=>{
    let adults = [];

    personDetail.forEach((person)=>{
        if(person.age > 18){
            adults.push(person);
        }
    });

    return adults;
 
}

console.log(findAdults(details));

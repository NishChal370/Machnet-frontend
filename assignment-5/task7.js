
// 7)Sort the array given in no 6) by age in ascending as well as descending order

const details = [
    { name: 'Ram', age: 15 },
    { name: 'Shyam', age: 21 },
    { name: 'Hari', age: 12 },
    { name: 'Bharat', age: 18 },
    { name: 'Sita', age: 24 },
 ];

let max;
let temp;
for(let i=0; i<details.length; i++){
    max=i;
    for(let j=i+1; j< details.length; j++){
        if(details[j].age >  details[max].age){
            max = j;
        }

        temp = details[i];
        details[i]= details[max];
        details[max] = temp;

    }
}

console.log(details);
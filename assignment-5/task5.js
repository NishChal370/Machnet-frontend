/*5) Write a program to manipulate following data
  const personalInforamtion = [
   { name: 'Ram', address: 'Kathmandu' },
   { name: 'Gita', address: 'Lalitpur' },
   { name: 'Sita', address: 'Kathmandu' },
  ];
  Create a function that takes personalInforamtion as a single argument to return {kathmanudu: [Ram, Sita], Lalitpur: [Gita]}  */


const personalInforamtion = [
    { name: 'Ram', address: 'Kathmandu' },
    { name: 'Gita', address: 'Lalitpur' },
    { name: 'Sita', address: 'Kathmandu' },
];

let city=[];
let ans={};

personalInforamtion.forEach((i)=>{
    if(!city.includes(i.address)){
        city.push(i.address);
        ans[i.address] = [i.name];
    } 
    else{
        ans[i.address].push(i.name);
    }
    // else if(city.length !== 0){ //  this also give same reult by removing else
    //     ans[i.address].push(i.name);
    // }
});


console.log(ans);

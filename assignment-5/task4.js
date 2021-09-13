//4) Create a function to display nth number in fibbonacci series (use of recursion is not allowed)

const fab =(n)=>{
    let data = [0,1];
    for(let i=2; i<=n; i++){
        data.push(data[i-2]+ data[i-1]);
    }
    return(data);
}

console.log(fab(7));
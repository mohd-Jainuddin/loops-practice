
// WRITE A PROGRAM TO CHECK WETHER A NUMBER IS PRIME OR NOT USING FOR LOOP?

let n = parseInt(process.argv[2])
let i = 2
for(i;i<=n-1;i++)
{
    if(n%i==0){
    break}
}
if(n==i){
    console.log("Prime Number")
}
else{
    console.log("Not Prime Number")
}
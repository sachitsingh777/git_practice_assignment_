function isPrime(num){
factor=0;
 for(let x=1;x<=num;x++){
 if(num%x==0){
factor++;
}
}
if(factor==2){
return true;
}else{
return false;
}}
 let ans=isPrime(17);
if(ans==true){
console.log("Prime Number");
}else{
console.log("Not a Prime Number");
}
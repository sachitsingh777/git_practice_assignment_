function isPrime(num){
 for(let x=1;x<=num;x++){
 if(num%x){
factor++;
}
}
if(factor>2){
return true;
}else{
return false;
}}
 let ans=isPrime(17);
if(ans==true){
console.log("true");
}else{
console.log("false");
}
function isPrime(num){

let factors=0;
 for(let x=1;x<=num;x++){
 if(num%x==0){
factors++;
}
}
if(factors==2){
=======
return true;
}else{
return false;
}}
 let answer=isPrime(17);
if(answer==true){
console.log("Prime number");
}else{
console.log("Not a prime number");
}
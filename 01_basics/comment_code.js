//Returning a single value
function Product(a,b){
    return a*b;
};
console.log(Product(6,10));
//Returning multiple value using an object
function language(){
let first='HTML',
second='css',
third='javaScript'
return{
    first,second,third
}
}
let {first,second,third}= language();
console.log(first);
console.log(second);
console.log(third);





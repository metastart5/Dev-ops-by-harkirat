
 function greet(name) {
     return "Hello, " + name;
 }

   
  let message = greet("John");  "Hello, John"
  console.log(message);  


  function add(a, b) {
      let totalsum = a + b;
      return totalsum;

      } 
  console.log(add(5, 10));  15
  console.log(add("akshat","raj"));  15


  function canvote(age){
      if(age>=18){
          return "true";
      }
      else{
          return "false";
      }
  }


  console.log(canvote(20)); 
  console.log(canvote(16)); 

  let number=5;
  if (number%2==0){
      console.log("even");
  }
  else{
      console.log("odd");
  }


let number1 = 10;
let sum=0;
for(let i=1;i<=number1;i++){
    sum=sum+i;
}
console.log(sum);

 
// Ques:-Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Soln:-


let  text = "loonbalxballpoon";

function maxNumberOfBalloons(text) {
    let obj={a:0,b:0,l:0,n:0,o:0};
 for(let i=0;i<text.length;i++){
     if(obj[text[i]] || obj[text[i]]===0){
         obj[text[i]]++;
     }
 }
 
 
 let min=Infinity;
 
 for(let key in obj){
   if(key==="l" || key==="o"){
     obj[key]=Math.floor(obj[key]/2);
   }
 }
 
 for(let key in obj){
   if(obj[key]<min){
       min=obj[key];
   }
 }
     return min;
 };


 console.log(maxNumberOfBalloons(text))
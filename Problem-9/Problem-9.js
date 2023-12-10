// Ques:-The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Soln:-


let s = "PAYPALISHIRING";
let numRows = 4;

function convert(s, numRows) {
    if (numRows === 1) {
       return s;
   }
   let str="";
   let n=(2*numRows)-2;
   for(let i=0;i<numRows;i++){
       for(let j=0;j+i<s.length;j+=n){
         if(i==0 || i==numRows-1){
           str+=s[j+i]
         }
         else{
           if(j+i<s.length){
             str+=s[j+i];
             
           }
           if(j+n-i<s.length){
             str+=s[j+n-i];
           }
         }
       }
   }
 return str;
};

console.log(convert(s, numRows))
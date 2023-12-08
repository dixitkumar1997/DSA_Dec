// Ques:-Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

// Soln:-


let text = "alice is a good girl she is a good student";
let first = "a";
let second = "good";

function findOcurrences (text, first, second) {
    let arr=text.split(" ");
    let result=[];
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]===first){
            if(arr[i+1]===second){
result.push(arr[i+2])
            }
        }
    }
    return result
};

console.log(findOcurrences(text, first, second) )
// Ques:-You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Soln:-


let words = ["leet","code"];
let x = "e";


function findWordsContaining(words, x) {
    let out=[]
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(x===words[i][j]){
out.push(i);
break;
            }
        }
    }
    return out
};

console.log(findWordsContaining(words, x));
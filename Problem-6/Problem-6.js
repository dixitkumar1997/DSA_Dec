// Ques:-Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Soln:-


let s = "anagram";
let t = "nagaram";

function isAnagram(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let obj={};
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1
        }else{
            obj[s[i]]++;
        }
    }
    for(let i=0;i<t.length;i++){
if(obj[t[i]]==undefined|| obj[t[i]]==0){
return false;
    }
    else{
    obj[t[i]]--
}
    }
    return true;
};

console.log(isAnagram(s, t))
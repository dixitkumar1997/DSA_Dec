// Ques:-You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.

// Soln:-


let pref = [5,2,0,3,1];

function findArray(pref) {
    let arr = [pref[0]];
   for (let i=0;i<pref.length-1;i++) {
       arr.push(pref[i]^pref[i+1]);
   }
   return arr;
};

console.log(findArray(pref))
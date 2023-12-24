// Ques:-The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.


// Soln:-


let nums1 = [4,1,2];
let nums2 = [1,3,4,2];

function nextGreaterElement(nums1, nums2) {
    let arr=[]
    for(let i=0;i<nums1.length;i++){

        let val=nums1[i]
        let ind=0
        let flag=true;
       for(let j=0;j<nums2.length;j++){
if(nums2[j]===val){
    ind=j;
}
       }
for(let k=ind+1;k<nums2.length;k++){
    if(nums2[k]>val){
        arr.push(nums2[k]);
        flag=false;
        break;
    }
}
if(flag==true){
    arr.push(-1)
}
       }
    return arr
};


console.log(nextGreaterElement(nums1, nums2))
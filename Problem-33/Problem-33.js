// Ques:-Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
 


// Soln:-


let nums = [13,25,83,77];


function separateDigits(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let str=nums[i]+"";
        for(let j=0;j<str.length;j++){
            arr.push(str[j])
        }
    }
    return arr
};


console.log(separateDigits(nums))
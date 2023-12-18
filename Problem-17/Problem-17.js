// Ques:-Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// Soln:-


let nums = [-6,2,5,-2,-7,-1,3];
let target = -2;


function countPairs(nums, target) {
    let count = 0;

    for(let i=0; i<nums.length;i++){

        for(let j=i+1; j<nums.length; j++){

            if(nums[i]+nums[j]<target){

                count++

            }

        }

    }

    return count
};


console.log(countPairs(nums, target))
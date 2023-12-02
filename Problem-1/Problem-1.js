// Ques:-You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

// Soln:- 

let nums = [3,2,3,2,2,2];

function divideArray(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1;
        }
        else{
            obj[nums[i]]+=1;
        }
    }
    for(let key in obj){
        if(obj[key]%2==1){
            return false
        }
        }
        return true
    };

    console.log(divideArray(nums))
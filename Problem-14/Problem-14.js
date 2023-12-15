// Ques:-Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Soln:-


let nums = [9,6,4,2,3,5,7,0,1];

function missingNumber(nums) {
    let obj={};
    
    for(let i=0;i<=nums.length;i++){
        obj[i]=1;
    }
    let res=0;
    for(let j=0;j<nums.length;j++){
        if(obj[nums[j]]){
            obj[nums[j]]--;
        }
        }
    for(let key in obj){
        if(obj[key]===1){
            res=+key
        }
    }
    return res
};

console.log(missingNumber(nums))
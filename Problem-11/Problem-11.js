// Ques:-Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Soln:-


let arr = [2,2,2,3,3];

function findLucky(arr) {
    let obj={};
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]+=1
        }
    }
    for(let key in obj){
        if(+key === obj[key]){
         res.push(key)
        }
    }
    let max=-1;
    for(let j=0;j<res.length;j++){
        if(+res[j]>max){
            max=res[j];
        }
    }
    return max
};

console.log(findLucky(arr))
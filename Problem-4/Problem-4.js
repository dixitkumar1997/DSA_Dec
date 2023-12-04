// Ques:-Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Soln:-



let arr = [1,2,2,1,1,3];

 function uniqueOccurrences(arr) {
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]+=1;
        }
    }

    for(let i=0;i<arr.length;i++){
        if(arr[0]!=arr[i] && obj[arr[0]]===obj[arr[i]]){
            return false;
        }
    }
    return true;
};

console.log(uniqueOccurrences(arr))


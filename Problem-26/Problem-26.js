// Ques:-There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.


// Soln:-


let gain = [-5,1,5,0,-7];


function largestAltitude(gain) {
    let arr=[0];
    let max=0;
    for(let i=0;i<gain.length;i++){
        arr.push(arr[i]+gain[i]);
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
};


console.log(largestAltitude(gain))
// Ques:- first letter to be capitalized.

// Soln:-

let input = "in_progress"

let lower="abcdefghijklmnopqrstuvwxyz";
let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arr=s.split("_")
let new_arr=[]
for(let i=0;i<arr.length;i++){
let bag="";
  for(let j=1;j<arr[i].length;j++){
    for(let k=0;k<26;k++){
      if(bag==="" && arr[i][0]===lower[k]){
        bag+=upper[k]
      }
    }
    bag+=arr[i][j]
  }
  new_arr.push(bag)
}
console.log(new_arr.join(" "))
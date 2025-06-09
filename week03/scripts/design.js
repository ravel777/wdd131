
//let firstArray = ["Good", "Cracker", "Hokey-Dokey", 5, "My goodness", 7];
let firstArray = [2,9,"Cracker",14,"My goodness"];
firstArray.push("Sweetie");



firstArray.forEach (function(frstArr) {
    console.log(frstArr.lastIndex);
});

const message = document.querySelector('#message');
const entered = document.querySelector('#favchap');
const but = document.querySelector('button');
const li = document.querySelector('li');


let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}
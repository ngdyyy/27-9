const nums = [1,2,,2,4,2,5,3,3,2]

const so1 = nums.filter(n => n === 1);
let count1 = 0;
nums.forEach(n => {
    if (n === 1) {
        count1++;
    }
});
console.log("số 1 có" + " " + count1 + " " + "lần" );

const so2 = nums.filter(n => n === 2);
let count2 = 0;
nums.forEach(n => {
    if (n === 2) {
        count2++;
    }
});
console.log("số 2 có" + " " + count2 + " " + "lần");

const so3 = nums.filter(n => n === 3);
let count3 = 0;
nums.forEach(n => {
    if (n === 3) {
        count3++;
    }
});
console.log("số 3 có" + " " + count3 + " " + "lần" )

const so4 = nums.filter(n => n === 4);
let count4 = 0;
nums.forEach(n => {
    if (n === 4) {
        count4++;
    }
});
console.log("số 4 có" + " " + count4 + " " + "lần" )

const so5 = nums.filter(n => n === 4);
let count5 = 0;
nums.forEach(n => {
    if (n === 5) {
        count5++;
    }
});
console.log("số 5 có" + " " + count5 + " " + "lần" )
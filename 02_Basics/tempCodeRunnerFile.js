//****************Arrays****************

const myArr = [0,1,2,3,4,5]
const myArr1 = [4,7,8,9,5,12,3,1,2,6,10,11]
console.log(myArr);
console.log(typeof myArr);
console.log(myArr[3]);
console.log(myArr.length);
console.log("*********Convert In String:***********")
console.log(myArr.toLocaleString());
console.log(myArr.toString());
console.log("*************myArr1***********");
console.log(myArr1.toLocaleString());
console.log(myArr1.toString());

console.log("*********In Sorted Order***********")
console.log(myArr.toSorted());
console.log("********myArr1***********");
console.log(myArr1.toSorted());
console.log(typeof myArr);
console.log(typeof myArr1);

console.log(myArr.findLast())
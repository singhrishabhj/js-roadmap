console.log("js class - 2")

/**
 * Arrays
 * arrasy dont' have hesctict size you can add remove elemnt from it
 */

let arr=[1,2,3,4];
 let arr2 = [];
 //print
console.log(arr);
console.log(arr2);
//iterate
for (let i = 0 ;i <=arr.length;i++){
    console.log(i, arr[i]);
}

/******************Important Methods************************ */
/**
 * 1. add last -> push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * remove first -> shift
 */



//1. push - add elemnt at the end of the arrays
arr.push(50);
console.log("After push ",arr);

//2. pop - remove elelmtn fromt the last or end of the array
arr.pop()
console.log("After pop ",arr);

//3. unshift() - add elemnt at the start of the arrray
arr.unshift(99000);
console.log("After unshift ",arr);

//4.shift() - remove the first element or starting of the elemnt
arr.shift();
console.log("after shit", arr);

//slic , start to ending index , creatae a new copies and give ypu a new arrays
let slicedarr=arr.slice(1,4);
console.log("sliced array", slicedarr); //it wont change the original array juts picked a copy fomr it 

//delete , remove the third element in that array
arr.splice(3,1); //remove one thing from third elemnt
console.log("after dleet ,", arr);
arr.splice(3,1); //remove 3 and 4 


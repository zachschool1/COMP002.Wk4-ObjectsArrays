// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function range(start,end) {
    let answer = [];
    //could probably do a while loop where while start <= end console.log i and i++ but i like for loop
    for(let i = start; i <= end; i++) {
        //console.log(i);
        answer.push(i);
    }
    return answer;
}

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
console.log(sum(range(1, 10))); // returns 55
function sum(array){
    let total = 0;
        for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.

// Example output for reverseArray:
console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];

//this one was tricky...for some reason doing i < array.length didnt give the last letter, but creating the variable len helped...not entirely sure why.
function reverseArray(array){
    let newArray = [];
    let len = array.length

    for(let i = 0; i < len; i++){
        let popNum = array.pop();
        newArray.push(popNum);
    }
    return newArray;
}

// Example output for reverseArrayInPlace:
let arrayValue = [1, 2, 3, 4, 5];

//ive done something like this before, but i dont remember. basically use a temp variable to swap first and last, then on next iteration of loop, do it for 2nd and 4th digit. my instinct is to set a left variable, a right variable, and a temp variable. then do like left is array[0] right is array[array.length-1] and it will increment left but decrement right and if left == right it means its in the middle? maybe? im not sure how that would work for even number of ints in array

function reverseArrayInPlace(array) {
    //since im working from outside in and doing 2 things per iteration i only need to do half of the array
    for(let i = 0; i <= array.length / 2; i++){
        let left = i;
        let right = array.length - 1 - i;
        
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;


    }

}

reverseArrayInPlace(arrayValue);
console.log(arrayValue); // outputs [5, 4, 3, 2, 1]



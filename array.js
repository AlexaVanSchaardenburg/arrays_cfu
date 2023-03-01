var friends = ["Colin", "Noah", "Frankie", "Jordan", "Mandee"];
var numbers = [10, 11, 12, 13, 14, 15];
var isHungry = [true, false, true, true, false];
//This pop method will remove the last element of the array, so for one repetition the friend 'Mandee' will be removed
friends.pop();
console.log(friends);
//This push method will add one element to the array at the end of the array, so the number 16 will be added to the end of the array
numbers.push(16);
console.log(numbers);
//This slice method will cut out a part of the array and display only that part, this method must be used in the `console.log` command as it does not alter the actual array like the other methods shown here do
console.log(isHungry.slice(1,4));
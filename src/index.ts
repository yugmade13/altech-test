import printSpecialNumbers from './tasks/printSpecialNumbers';
import CustomSort from './tasks/CutomSort';
import isPalindrome from './tasks/isPalindrome';

// Task 1
const task1 = printSpecialNumbers(30);
console.log(task1);

// Task 2
const numbers = [1, 2, 3, 4, 5, 6, 7];

const task2 = new CustomSort();
console.log('ASC : ' + task2.sortAscending(numbers));
console.log('DESC : ' + task2.sortDescending(numbers));

// Task 3
console.log(isPalindrome('Javascript'));
console.log(isPalindrome('Katak'));

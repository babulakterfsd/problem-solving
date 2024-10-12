"use strict";
/* 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */
// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
// const people: Person[] = [
//   { name: 'Babul', age: 25, gender: 'male' },
//   {
//     name: ' Awal',
//     age: 30,
//     gender: 'male',
//   },
//   {
//     name: 'Sheuly',
//     age: 35,
//     gender: 'female',
//   },
//   {
//     name: 'Belayet',
//     age: 40,
//     gender: 'male',
//   },
//   {
//     name: 'Lima',
//     age: 45,
//     gender: 'female',
//   },
// ];
// const malePeopleNames = (people: Person[]): string[] => {
//   return people
//     .filter((person: Person) => person.gender !== 'female')
//     .map((person: Person) => person.name);
// };
// console.log(`Output of problem 1 is : `, malePeopleNames(people));
/* 2. Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */
// interface Book {
//   title: string;
//   author: string;
//   year: number;
// }
// const books: Book[] = [
//   { title: 'Himur haate nil poddo', author: 'Humayun Ahmed', year: 1987 },
//   { title: 'ami misir Ali', author: 'Humayun Ahmed', year: 1996 },
//   { title: 'Hello Bangladesh', author: 'Babul Akter', year: 2024 },
//   { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
//   { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
// ];
// const getBookTitles = (books: Book[]): string[] => {
//   return books.map((book: Book) => book.title);
// };
// console.log(`Output of problem 2 is : `, getBookTitles(books));
/* 3. Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */
// square a number
// const square = (num: number): number => {
//   return num * num;
// };
// //double a number
// const double = (num: number): number => {
//   return num * 2;
// };
// //add 5 to a number
// const addFive = (num: number): number => {
//   return num + 5;
// };
// // Composed function
// const composedFunction = (num: number): number => {
//   const squared = square(num);
//   const doubled = double(squared);
//   return addFive(doubled);
// };
// console.log(`Output of problem 3 is : `, composedFunction(5));
/* 4. Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */
// interface Car {
//   make: string;
//   model: string;
//   year: number;
// }
// const cars: Car[] = [
//   { make: 'Toyota', model: 'Corolla', year: 2020 },
//   { make: 'Ford', model: 'Mustang', year: 2018 },
//   { make: 'Honda', model: 'Civic', year: 2019 },
//   { make: 'Chevrolet', model: 'Malibu', year: 2021 },
//   { make: 'Tesla', model: 'Model 3', year: 2022 },
// ];
// const sortCarsByYear = (cars: Car[]): Car[] => {
//   return cars.sort((a, b) => a.year - b.year);
// };
// console.log(`Output of problem 4 is:`, sortCarsByYear(cars));
/* 5. Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */
// interface Person5 {
//   name: string;
//   age: number;
//   gender: string;
// }
// const people5: Person5[] = [
//   { name: 'Babul', age: 25, gender: 'male' },
//   {
//     name: ' Awal',
//     age: 30,
//     gender: 'male',
//   },
//   {
//     name: 'Sheuly',
//     age: 35,
//     gender: 'female',
//   },
//   {
//     name: 'Belayet',
//     age: 40,
//     gender: 'male',
//   },
//   {
//     name: 'Lima',
//     age: 45,
//     gender: 'female',
//   },
// ];
// const updateAgeByName = (
//   people: Person5[],
//   name: string,
//   newAge: number
// ): Person5[] => {
//   return people.map((person: Person5) => {
//     if (person.name === name) {
//       return { ...person, age: newAge };
//     }
//     return person;
//   });
// };
// console.log(`Output of problem 5 is:`, updateAgeByName(people5, 'Babul', 30));
/* 6. Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumOfEvenNumbers = (numbers: number[]): number | string => {
//   const result = numbers.reduce((sum, current) => {
//     if (current % 2 === 0) {
//       return sum + current;
//     } else {
//       return sum;
//     }
//   }, 0);
//   if (result === 0) {
//     return `No even number found in the array`;
//   } else {
//     return result;
//   }
// };
// console.log(`Output of problem 6 is : `, sumOfEvenNumbers(numbers));
/* 7. Write a function that determines whether a given year is a leap year.*/
// const isLeapYear = (year: number): string => {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return `${year} is a leap year`;
//       }
//       return `${year} is not a leap year`;
//     }
//     return `${year} is a leap year`;
//   }
//   return `${year} is not a leap year`;
// };
// console.log(`Output of problem 7 is : `, isLeapYear(2020));
/* 8. Write a function that counts the number of vowels in a given string.
Example: Happy New Year */
// const countVowels = (input: string): number => {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (const char of input) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(`Output of problem 8 is : `, countVowels('Happy New Year'));
/* 9. Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.*/
// const numbers9: number[] = [1, 2, 3, 4, 2, 5, 1, 6, 3, 7];
// const getUniqueNumbers = (numbers: number[]): number[] =>
//   Array.from(new Set(numbers));
// console.log(`Output of problem 9 is : `, getUniqueNumbers(numbers9));
// /* 10. Write a function that takes an array of numbers and returns the maximum value. */
// const numbers10: number[] = [1, 2, 3, 4, 2, 25, 5, 1, 6, 3, 7];
// const findMaxValue = (numbers: number[]): number | string => {
//   if (numbers.length === 0) {
//     return `Array is empty or not valid`;
//   }
//   return Math.max(...numbers);
// };
// console.log(`Output of problem 10 is : `, findMaxValue(numbers10));
/* 11. Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.*/
// interface Student {
//   name: string;
//   grades: number[];
// }
// const students: Student[] = [
//   { name: 'Abul', grades: [85, 92, 78] },
//   { name: 'Babul', grades: [90, 88, 95] },
//   { name: 'Habul', grades: [70, 75, 80] },
//   { name: 'Kabul', grades: [95, 97, 93] },
// ];
// const calculateAverage = (grades: number[]): number => {
//   const total = grades.reduce((sum, grade) => sum + grade, 0);
//   return total / grades.length;
// };
// const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
//   const sortedInDescending = students.sort((a, b) => {
//     const avgA = calculateAverage(a.grades);
//     const avgB = calculateAverage(b.grades);
//     return avgB - avgA;
//   });
//   // add a property named average to each student object
//   return sortedInDescending.map((student) => {
//     return {
//       ...student,
//       average: calculateAverage(student.grades),
//     };
//   });
// };
// console.log(`Output of problem 11 is : `, sortStudentsByAverageGrade(students));
/* 12. Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */
// interface Product {
//   quantity: number;
//   price: number;
// }
// const products: Product[] = [
//   { quantity: 2, price: 10 },
//   { quantity: 3, price: 15 },
//   { quantity: 4, price: 20 },
// ];
// const calculateTotalValue = (products: Product[]): number => {
//   return products.reduce((total, product) => {
//     return total + product.quantity * product.price;
//   }, 0);
// };
// console.log(`Output of problem 12 is : `, calculateTotalValue(products));
/* 13.  Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.*/
// const array1: number[] = [1, 2, 3, 4, 5];
// const array2: number[] = [3, 4, 5, 6, 7];
// const getCommonElements = (arr1: number[], arr2: number[]): number[] => {
//   return arr1.filter((element) => arr2.includes(element));
// };
// console.log(`Output of problem 13 is : `, getCommonElements(array1, array2));
/* 14. Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases. */
// interface Customer {
//   name: string;
//   purchases: number;
//   loyaltyPoints: number;
// }
// const customers: Customer[] = [
//   { name: 'Abul', purchases: 3, loyaltyPoints: 50 },
//   { name: 'Babul', purchases: 6, loyaltyPoints: 100 },
//   { name: 'Kabul', purchases: 8, loyaltyPoints: 150 },
//   { name: 'Habul', purchases: 4, loyaltyPoints: 75 },
// ];
// const doubleLoyaltyPoints = (customers: Customer[]): Customer[] => {
//   return customers.map((customer) => {
//     if (customer.purchases > 5) {
//       return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
//     }
//     return customer;
//   });
// };
// console.log(`Output of problem 14 is : `, doubleLoyaltyPoints(customers));
/* 15. Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */
// const memoize = (fn: Function): Function => {
//   const cache = new Map();
//   return (...args: any[]) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };
// const expensiveFunction = (num: number): number => {
//   console.log('Calculating...');
//   return num * 2;
// };
// const memoizedFunction = memoize(expensiveFunction);
// console.log(`Output of problem 15 is : `, memoizedFunction(5));
// console.log(`Output of problem 15 is : `, memoizedFunction(5));
// console.log(`Output of problem 15 is : `, memoizedFunction(12));
// console.log(`Output of problem 15 is : `, memoizedFunction(10));
// console.log(`Output of problem 15 is : `, memoizedFunction(12));
/* 16. Two Sum : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */
function twoSum(nums, target) {
    if (nums.length < 2) {
        return [];
    }
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    return [];
}
console.log(`Output of problem 16 is : `, twoSum([12, 6, 7, 2, 6], 9));
/* 17. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

 */
function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b); // Sort the array
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates for the current element
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1])
                    left++;
                while (left < right && nums[right] === nums[right - 1])
                    right--;
                // Move both pointers inward after finding a valid triplet
                left++;
                right--;
            }
            else if (sum < 0) {
                left++; // We need a larger sum, move the left pointer
            }
            else {
                right--; // We need a smaller sum, move the right pointer
            }
        }
    }
    return res;
}
console.log(`Output of problem 17 is : `, threeSum([-1, 0, 1, 2, -1, -4]));
/* 18. Remove Duplicates From Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
 */
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(`Output of problem 18 is : `, removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/* 19. Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

 */
function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1);
}
function reverse(nums, start) {
    let left = start, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
const nums = [1, 2, 3];
nextPermutation(nums);
console.log(`Output of problem 19 is : `, nums);
/* 20. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}
console.log(`Output of problem 20 is : `, searchInsert([1, 3, 5, 6], 5));
console.log(`Output of problem 20 is : `, searchInsert([1, 3, 5, 6], 2));

"use strict";
/* 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */
const people = [
    { name: 'Babul', age: 25, gender: 'male' },
    {
        name: ' Awal',
        age: 30,
        gender: 'male',
    },
    {
        name: 'Sheuly',
        age: 35,
        gender: 'female',
    },
    {
        name: 'Belayet',
        age: 40,
        gender: 'male',
    },
    {
        name: 'Lima',
        age: 45,
        gender: 'female',
    },
];
const malePeopleNames = (people) => {
    return people
        .filter((person) => person.gender !== 'female')
        .map((person) => person.name);
};
console.log(`Output of problem 1 is : `, malePeopleNames(people));
const books = [
    { title: 'Himur haate nil poddo', author: 'Humayun Ahmed', year: 1987 },
    { title: 'ami misir Ali', author: 'Humayun Ahmed', year: 1996 },
    { title: 'Hello Bangladesh', author: 'Babul Akter', year: 2024 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
];
const getBookTitles = (books) => {
    return books.map((book) => book.title);
};
console.log(`Output of problem 2 is : `, getBookTitles(books));
/* 3. Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */
// square a number
const square = (num) => {
    return num * num;
};
//double a number
const double = (num) => {
    return num * 2;
};
//add 5 to a number
const addFive = (num) => {
    return num + 5;
};
// Composed function
const composedFunction = (num) => {
    const squared = square(num);
    const doubled = double(squared);
    return addFive(doubled);
};
console.log(`Output of problem 3 is : `, composedFunction(5));
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
    { make: 'Honda', model: 'Civic', year: 2019 },
    { make: 'Chevrolet', model: 'Malibu', year: 2021 },
    { make: 'Tesla', model: 'Model 3', year: 2022 },
];
const sortCarsByYear = (cars) => {
    return cars.sort((a, b) => a.year - b.year);
};
console.log(`Output of problem 4 is:`, sortCarsByYear(cars));
const people5 = [
    { name: 'Babul', age: 25, gender: 'male' },
    {
        name: ' Awal',
        age: 30,
        gender: 'male',
    },
    {
        name: 'Sheuly',
        age: 35,
        gender: 'female',
    },
    {
        name: 'Belayet',
        age: 40,
        gender: 'male',
    },
    {
        name: 'Lima',
        age: 45,
        gender: 'female',
    },
];
const updateAgeByName = (people, name, newAge) => {
    return people.map((person) => {
        if (person.name === name) {
            return Object.assign(Object.assign({}, person), { age: newAge });
        }
        return person;
    });
};
console.log(`Output of problem 5 is:`, updateAgeByName(people5, 'Babul', 30));
/* 6. Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvenNumbers = (numbers) => {
    const result = numbers.reduce((sum, current) => {
        if (current % 2 === 0) {
            return sum + current;
        }
        else {
            return sum;
        }
    }, 0);
    if (result === 0) {
        return `No even number found in the array`;
    }
    else {
        return result;
    }
};
console.log(`Output of problem 6 is : `, sumOfEvenNumbers(numbers));
/* 7. Write a function that determines whether a given year is a leap year.*/
const isLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year`;
            }
            return `${year} is not a leap year`;
        }
        return `${year} is a leap year`;
    }
    return `${year} is not a leap year`;
};
console.log(`Output of problem 7 is : `, isLeapYear(2020));
/* 8. Write a function that counts the number of vowels in a given string.
Example: Happy New Year */
const countVowels = (input) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};
console.log(`Output of problem 8 is : `, countVowels('Happy New Year'));
/* 9. Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.*/
const numbers9 = [1, 2, 3, 4, 2, 5, 1, 6, 3, 7];
const getUniqueNumbers = (numbers) => Array.from(new Set(numbers));
console.log(`Output of problem 9 is : `, getUniqueNumbers(numbers9));
/* 10. Write a function that takes an array of numbers and returns the maximum value. */
const numbers10 = [1, 2, 3, 4, 2, 25, 5, 1, 6, 3, 7];
const findMaxValue = (numbers) => {
    if (numbers.length === 0) {
        return `Array is empty or not valid`;
    }
    return Math.max(...numbers);
};
console.log(`Output of problem 10 is : `, findMaxValue(numbers10));
const students = [
    { name: 'Abul', grades: [85, 92, 78] },
    { name: 'Babul', grades: [90, 88, 95] },
    { name: 'Habul', grades: [70, 75, 80] },
    { name: 'Kabul', grades: [95, 97, 93] },
];
const calculateAverage = (grades) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
};
const sortStudentsByAverageGrade = (students) => {
    const sortedInDescending = students.sort((a, b) => {
        const avgA = calculateAverage(a.grades);
        const avgB = calculateAverage(b.grades);
        return avgB - avgA;
    });
    // add a property named average to each student object
    return sortedInDescending.map((student) => {
        return Object.assign(Object.assign({}, student), { average: calculateAverage(student.grades) });
    });
};
console.log(`Output of problem 11 is : `, sortStudentsByAverageGrade(students));
const products = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 15 },
    { quantity: 4, price: 20 },
];
const calculateTotalValue = (products) => {
    return products.reduce((total, product) => {
        return total + product.quantity * product.price;
    }, 0);
};
console.log(`Output of problem 12 is : `, calculateTotalValue(products));
/* 13.  Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.*/
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const getCommonElements = (arr1, arr2) => {
    return arr1.filter((element) => arr2.includes(element));
};
console.log(`Output of problem 13 is : `, getCommonElements(array1, array2));
const customers = [
    { name: 'Abul', purchases: 3, loyaltyPoints: 50 },
    { name: 'Babul', purchases: 6, loyaltyPoints: 100 },
    { name: 'Kabul', purchases: 8, loyaltyPoints: 150 },
    { name: 'Habul', purchases: 4, loyaltyPoints: 75 },
];
const doubleLoyaltyPoints = (customers) => {
    return customers.map((customer) => {
        if (customer.purchases > 5) {
            return Object.assign(Object.assign({}, customer), { loyaltyPoints: customer.loyaltyPoints * 2 });
        }
        return customer;
    });
};
console.log(`Output of problem 14 is : `, doubleLoyaltyPoints(customers));
/* 15. Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */
const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};
const expensiveFunction = (num) => {
    console.log('Calculating...');
    return num * 2;
};
const memoizedFunction = memoize(expensiveFunction);
console.log(`Output of problem 15 is : `, memoizedFunction(5));
console.log(`Output of problem 15 is : `, memoizedFunction(5));
console.log(`Output of problem 15 is : `, memoizedFunction(12));
console.log(`Output of problem 15 is : `, memoizedFunction(10));
console.log(`Output of problem 15 is : `, memoizedFunction(12));

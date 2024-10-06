/* 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

interface Person {
  name: string;
  age: number;
  gender: string;
}

const people: Person[] = [
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

const malePeopleNames = (people: Person[]): string[] => {
  return people
    .filter((person: Person) => person.gender !== 'female')
    .map((person: Person) => person.name);
};

console.log(`Output of problem 1 is : `, malePeopleNames(people));

/* 2. Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: 'Himur haate nil poddo', author: 'Humayun Ahmed', year: 1987 },
  { title: 'ami misir Ali', author: 'Humayun Ahmed', year: 1996 },
  { title: 'Hello Bangladesh', author: 'Babul Akter', year: 2024 },
  { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
];

const getBookTitles = (books: Book[]): string[] => {
  return books.map((book: Book) => book.title);
};

console.log(`Output of problem 2 is : `, getBookTitles(books));

/* 3. Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

// square a number
const square = (num: number): number => {
  return num * num;
};

//double a number
const double = (num: number): number => {
  return num * 2;
};

//add 5 to a number
const addFive = (num: number): number => {
  return num + 5;
};

// Composed function
const composedFunction = (num: number): number => {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
};

console.log(`Output of problem 3 is : `, composedFunction(5));

/* 4. Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
  { make: 'Toyota', model: 'Corolla', year: 2020 },
  { make: 'Ford', model: 'Mustang', year: 2018 },
  { make: 'Honda', model: 'Civic', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2021 },
  { make: 'Tesla', model: 'Model 3', year: 2022 },
];

const sortCarsByYear = (cars: Car[]): Car[] => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(`Output of problem 4 is:`, sortCarsByYear(cars));

/* 5. Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

interface Person5 {
  name: string;
  age: number;
  gender: string;
}

const people5: Person5[] = [
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

const updateAgeByName = (
  people: Person5[],
  name: string,
  newAge: number
): Person5[] => {
  return people.map((person: Person5) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });
};

console.log(`Output of problem 5 is:`, updateAgeByName(people5, 'Babul', 30));

/* 6. Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (numbers: number[]): number | string => {
  const result = numbers.reduce((sum, current) => {
    if (current % 2 === 0) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);

  if (result === 0) {
    return `No even number found in the array`;
  } else {
    return result;
  }
};

console.log(`Output of problem 6 is : `, sumOfEvenNumbers(numbers));

/* 7. Write a function that determines whether a given year is a leap year.*/

const isLeapYear = (year: number): string => {
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

const countVowels = (input: string): number => {
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

const numbers9: number[] = [1, 2, 3, 4, 2, 5, 1, 6, 3, 7];

const getUniqueNumbers = (numbers: number[]): number[] =>
  Array.from(new Set(numbers));

console.log(`Output of problem 9 is : `, getUniqueNumbers(numbers9));

/* 10. Write a function that takes an array of numbers and returns the maximum value. */

const numbers10: number[] = [1, 2, 3, 4, 2, 25, 5, 1, 6, 3, 7];

const findMaxValue = (numbers: number[]): number | string => {
  if (numbers.length === 0) {
    return `Array is empty or not valid`;
  }
  return Math.max(...numbers);
};

console.log(`Output of problem 10 is : `, findMaxValue(numbers10));

/* 11. Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.*/

interface Student {
  name: string;
  grades: number[];
}

const students: Student[] = [
  { name: 'Abul', grades: [85, 92, 78] },
  { name: 'Babul', grades: [90, 88, 95] },
  { name: 'Habul', grades: [70, 75, 80] },
  { name: 'Kabul', grades: [95, 97, 93] },
];

const calculateAverage = (grades: number[]): number => {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
};

const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
  const sortedInDescending = students.sort((a, b) => {
    const avgA = calculateAverage(a.grades);
    const avgB = calculateAverage(b.grades);
    return avgB - avgA;
  });

  // add a property named average to each student object
  return sortedInDescending.map((student) => {
    return {
      ...student,
      average: calculateAverage(student.grades),
    };
  });
};

console.log(`Output of problem 11 is : `, sortStudentsByAverageGrade(students));

/* 12. Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */

interface Product {
  quantity: number;
  price: number;
}

const products: Product[] = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 4, price: 20 },
];

const calculateTotalValue = (products: Product[]): number => {
  return products.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
};

console.log(`Output of problem 12 is : `, calculateTotalValue(products));

/* 13.  Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.*/

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [3, 4, 5, 6, 7];

const getCommonElements = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((element) => arr2.includes(element));
};

console.log(`Output of problem 13 is : `, getCommonElements(array1, array2));

/* 14. Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases. */

interface Customer {
  name: string;
  purchases: number;
  loyaltyPoints: number;
}

const customers: Customer[] = [
  { name: 'Abul', purchases: 3, loyaltyPoints: 50 },
  { name: 'Babul', purchases: 6, loyaltyPoints: 100 },
  { name: 'Kabul', purchases: 8, loyaltyPoints: 150 },
  { name: 'Habul', purchases: 4, loyaltyPoints: 75 },
];

const doubleLoyaltyPoints = (customers: Customer[]): Customer[] => {
  return customers.map((customer) => {
    if (customer.purchases > 5) {
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    }
    return customer;
  });
};

console.log(`Output of problem 14 is : `, doubleLoyaltyPoints(customers));

/* 15. Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */

const memoize = (fn: Function): Function => {
  const cache = new Map();

  return (...args: any[]) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const expensiveFunction = (num: number): number => {
  console.log('Calculating...');
  return num * 2;
};

const memoizedFunction = memoize(expensiveFunction);

console.log(`Output of problem 15 is : `, memoizedFunction(5));
console.log(`Output of problem 15 is : `, memoizedFunction(5));
console.log(`Output of problem 15 is : `, memoizedFunction(12));
console.log(`Output of problem 15 is : `, memoizedFunction(10));
console.log(`Output of problem 15 is : `, memoizedFunction(12));

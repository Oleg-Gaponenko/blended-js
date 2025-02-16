// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// console.log(styles);

// function logItems(array) {
// for (i = 0; i < array.length; i++){   
//     console.log(`${i + 1}: ${array[i]}`);
// }
// }

// console.log(logItems(styles));

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     let userName = prompt(`Введіть ім'я`);
//     console.log(userName);
    
//     for(login of logins) {
//         if(userName === login) {
//             alert(`Welcome, ${userName}`);
//         } else {
//             alert(`User not found`);
//         }
//     }
// }

// console.log(checkLogin(logins));


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     let totalArgs = 0;
//     for(argument of args) {
//         if (Number.isInteger(argument)){
//         totalArgs += argument;
//     }
//     }
//     return totalArgs / arguments.length;
// }


// console.log(caclculateAverage(2, 4, 5, 8));
// console.log(caclculateAverage(2, '2', 4, '6'));



// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function calculateBorderNumbers(initialArray) {
    const newArray = [];
    for(let i = 0; i < initialArray.length - 1; i++) {
        newArray.push(initialArray[i] + initialArray[i + 1]);
    }
    return newArray;
}

console.log(calculateBorderNumbers(someArr));


// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (Array.isArray(numbers) === true) {
        return Math.min(...numbers);
    } else {
        return `Sory, it is not an array!`;
    }
}

console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber('Some text'));

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
    const newArray = string.split(' ');
    let longestWord = newArray[0];
    for(const item of newArray){
        if(item.length > longestWord.length){
            longestWord = item;
        }
    }
    return longestWord;
}

console.log(findLongestWord("London is the capital of Great Britain"))

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };


user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

function workWithUser(user){
    const userData = Object.keys(user);

    for(key of userData) {
        console.log(`${key}: ${user[key]}`);
    }
}

console.log(user);


// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };

function totalSalaries(allSalaries) {
    let totalSum = 0;
    const salaryArray = Object.values(allSalaries);
    for(const salary of salaryArray){
        totalSum += salary;
    }

    if(totalSum !== 0) {
    return totalSum;
 } else {
    return 0;
 } 
}

console.log(totalSalaries(salaries));
console.log(totalSalaries({
    Mango: 0,
    Poly: 0,
    Ajax: 0,
  }));


// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {

    read(a, b) {
       this.push(a);
       this.push(b);
    }
};

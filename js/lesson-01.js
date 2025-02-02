// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// Math.floor(Math.random()∗(max−min+1)+min)

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Введіть число від 1 до 4');
// let result;

// function compareNumberToSeason(){
// const normalizedNumber = Number(num);
//     switch (normalizedNumber) {
//         case 1:
//             result = `Зима`;
//             return result;
//         case 2:
//             result = `Літо`;
//             return result;
//         case 3:
//             result = `Осінь`;
//             return result;
//         case 4:
//             result = `Весна`;
//             return result;
//         default:
//             result = `Вибачте, але ви маєте ввести значення від 1 до 4 включно`;
//     }

// }

// compareNumberToSeason();
// alert(result);
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;


// const minute = prompt('Введіть число')

// function getProperTime() {

// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers (min, max) {
    let sumOfEvenNumbers = 0;
    
    for (let i = max; i >= min; i--){
        console.log(i);

        if(i % 2 === 0) {
            sumOfEvenNumbers += i;
        }
    }
    return sumOfEvenNumbers;
}

getNumbers();
console.log(getNumbers(5,12));

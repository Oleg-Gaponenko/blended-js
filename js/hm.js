function isNumberInRange(start, end, number) {
    if (number >= start && number <= end){
      return true;
    } else {
      return false;
    }
  }

function checkAccess(subType) {
    if (subType === "pro" || subType === "vip") {
    return true;
  } else {
    return false;}
  }

  checkAccess ();

  console.log(checkAccess("pro"));
  console.log(checkAccess("vip"));
  console.log(checkAccess("starter"));
  console.log(checkAccess("free"));
  
function toggleModalVisibility(isVisible) {
  if (isVisible !== false) {
    return false;
  } else {
    return true;
  }
}

toggleModalVisibility ();

console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));

// function getSubstring(string, length) {
//     return string.slice (0, length);
// }

// getSubstring ();

// чомусь не розпізнається метод slice

function normalizeInput(input, to) {
    if (to === "upper") {
      return input.toUpperCase();
    } else if (to === "lower") {
      return input.toLowerCase();
    }
  }

  normalizeInput ();

  console.log(normalizeInput("This ISN'T SpaM", "lower"));
  console.log(normalizeInput("This ISN'T SpaM", "upper"));
  console.log(normalizeInput("Big SALE", "lower"));
  console.log(normalizeInput("Big SALE", "upper"));
  console.log(normalizeInput("Stay Awhile and Listen", "lower"));
  console.log(normalizeInput("Stay Awhile and Listen", "upper"));

//   function checkForName(fullName, firstName) {
//     if (fullName.toLowerCase && firstName.toLowerCase(fullName.includes(firstName))) {
//       return true;
//     } else {
//       return false;
//     }
// }

// function checkForName(fullName, firstName) {
//     const userFullName = fullName.toLowerCase();
//     const userFirstName = firstName.toLowerCase();
//       if (userFullName.includes(userFirstName)) {
//         return true
//       } else {
//         return false;
//       }
//   }

//   checkForName ();

//   console.log(checkForName("JaCob mERCer", "JACob"));

//   function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//       return `File extension matches`;
//     } else {
//       return `File extension does not match`;
//     }
//   }

//   checkFileExtension ();


function getFileName(file) {
    if (file.includes(".")) {
      return file.slice(0, file.indexOf("."));
    } else {
      return file.slice(0);
    }
}

getFileName ("index.html");

console.log (getFileName("index.html"));
console.log (getFileName("javascr.js"));
console.log(getFileName("styles.scss"));


function createFileName(name, ext) {
    const trimmedName = name.trim();
    const trimmedExt = ext.trim();
    return trimmedName + "." + trimmedExt;
  }

// createFileName("main", "txt");

console.log(createFileName("java", "js"));
console.log(createFileName("index", "html"));
console.log(createFileName("icon", "svg"));

function calculateTotal(number) {
  let count = 0;
  let totalSum = 0;
  while (count <= number) {
    totalSum = totalSum + count;
    count +=1;
  }
  return totalSum;
}
console.log(calculateTotal(18));

function calculateTotal2(number) {
  let totalSum = 0;

  for (let i = 0; i <= number; i += 1) {
    totalSum += i;
  }
  return totalSum;
}

console.log(calculateTotal2(18));

function calculateEvenTotal(number) {
  let evenTotalSum = 0;
  
  for (let i = 0; i <= number; i += 2) {
    evenTotalSum = evenTotalSum + i;
  }
  return evenTotalSum;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));


// const start = 6;
// const end = 17;
// let number;

// for (number = start; number <= end; number++) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }  
// }


// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }  
// }

 
// function findNumber(start, end, divisor) {
//   let number = 0;
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }

// console.log(findNumber(7, 67, 3));


// function calculateTotal3(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal3(1));

const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

function getOrderQuantity(order) {
  return order.length;
}

getOrderQuantity(["apple", "peach", "pear", "banana"]);
getOrderQuantity(["apple", "banana"]);
getOrderQuantity(["apple", "banana", "pear"]);
getOrderQuantity([]);


function getLastElementMeta(array) {
  let lastElementIndex = array.length - 1;
  let lastElementName = array[lastElementIndex];
  return [lastElementIndex, lastElementName];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
console.log(getLastElementMeta(["apple", "peach", "pear"]));
console.log(getLastElementMeta(["apple", "peach"]));
console.log(getLastElementMeta(["apple"]));

function getExtremeElements(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}

console.log(getExtremeElements(['Earth', 'Venus', 'Mars', 'Uranus']));

function getLength(array) {
  const string = array.join('');
  return string.length;
}

function calculateEngravingPrice(message, pricePerWord) {
  const wordCount = message.split(' ');
  const totalPrice = wordCount.length * pricePerWord;
  return totalPrice;
}

calculateEngravingPrice('', 0);
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));


function getSlice(array, value) {
  const valueIndex = array.indexOf(value);
  if (valueIndex !== -1) {
    return array.slice(0, valueIndex + 1);
  } else {
    return [];
  }
}

getSlice([],'');
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

function getSlice2(array, value) {
  const valueIndex = array.indexOf(value);
return valueIndex !== -1 ? array.slice(0, valueIndex + 1): [];
}

getSlice2([],'');
console.log(getSlice2(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice2(["Mango", "Poly", "Ajax"], "Ajax"));
console.log(getSlice2(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice2(["Mango", "Poly", "Ajax"], "Jacob"));
console.log(getSlice2(["Mango", "Poly", "Ajax"], "Casey"));


// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push


// function createArrayOfNumbers(min, max) {
//   let array = [];
// for (let i = min; i <= max; i++) {
// array.push(i);
// }
// return array;
// }

// createArrayOfNumbers(3, 7);
// console.log(createArrayOfNumbers(2, 22));
// console.log(createArrayOfNumbers(7, 12));
// console.log(createArrayOfNumbers(9, 18));
// console.log(createArrayOfNumbers(45, 52));


// function calculateTotalPrice(order) {
//   let totalSum = 0;
//   for (let i = 0; i < order.length; i++) {
//     totalSum += order[i];
//   }
//   return totalSum;
// }

// calculateTotalPrice([]);
// console.log(calculateTotalPrice([2, 5, 8, 33, 64]));


// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
// let array = [];
// for (let i = start; i <= end; i++) {
 
//  if (i % 2 === 0) {
//   array.push(i); 
//  } 
// }
// return array;
// }
// getEvenNumbers(5, 8);
// console.log(getEvenNumbers(5, 22));

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// Оголошена функція checkStorage(storage, item)
// Виклик checkStorage(["apple", "plum", "pear"], "plum") повертає "plum is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
// Виклик checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
// Виклик checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"

// function checkStorage(storage, item) {
// let normalizedItem = item.toLowerCase();
// if (storage.includes(normalizedItem)) {
//   return `${normalizedItem} is available to order!`;
// } else {
//   return `Sorry! We are out of stock!`;
// }
// }

// checkStorage([], '');
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));

function checkStorage2(storage, item) {  
let normalizedItem = item.toLowerCase();
storage.includes(normalizedItem) ? `${normalizedItem} is available to order!`: `Sorry! We are out of stock!`;

}

checkStorage2([], '');
console.log(checkStorage2(["apple", "plum", "pear"], "plum"));
console.log(checkStorage2(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage2(["apple", "plum", "pear"], "pear"));
console.log(checkStorage2(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage2(["apple", "plum", "pear"], "orange"));
console.log(checkStorage2(["apple", "plum", "pear"], "carrot"));

//WHY UNDEFINED? CANT GET IT!

// function getCommonElements(array1, array2) {
//   let allArrays = [];
//   for (let i = 0; i < array1.length; i++)
//     if (array2.includes(array1[i])) {
//       allArrays.push(array1[i]);
//     }
//   return allArrays;
// }

// getCommonElements([], []);
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (const price of order) {
//     totalPrice += price;
//   }
//   return totalPrice;
// }

// function createReversedArray() {
//   const reversedArray = Array.from(arguments);
// return reversedArray.toReversed();  
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(412, 371, 94, 63, 176));

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys){
  values.push(apartment[key])
}


function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  return propCount = keys.length;
}


function countTotalSalary(salaries) {
  let totalSalary = 0;
  const wages = Object.values(salaries);
  for (const wage of wages){
    totalSalary += wage;
  }
  return totalSalary;
}

countTotalSalary({});

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


function fillArray(min, max){
  let arr = [];
  for (let i = min; i <= max; i += 2){
    return arr.push(i);
  }
}

console.log(fillArray(2, 10));
console.log(fillArray(0, 5));
console.log(fillArray(33, 116));


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
 
 for (const color of colors){
   hexColors.push(color.hex);
   rgbColors.push(color.rgb);
 } 
 

 console.log(hexColors, rgbColors);
 
 
//  Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

//  Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products
//  і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
 
function getProductPrice(productName) {
  const products2 = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products2){
    if (product.name === productName){   
      return product.price;
    }
  }
  return null;
}

getProductPrice('');

console.log(getProductPrice("Radar")); //1300.
console.log(getProductPrice("Grip")); // 1200.
console.log(getProductPrice("Scanner")); // 2700.
console.log(getProductPrice("Droid")); //400.
console.log(getProductPrice("Engine")); //повертає null


// function searchBook(authorName){
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// // const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorName) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }
// }

// searchBook('Robert Sheckley');


//Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let values = [];
  for (const product of products){
    if (product[propName] !== undefined)
   values.push(product[propName]);
    }
    return values;
  }

getAllPropValues('');
console.log(getAllPropValues("name"));//["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity"));// [4, 3, 7, 9]
console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
console.log(getAllPropValues("category"));// []


// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" ,
// де <productName> — це ім'я товару.

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products){
    if (product.name === productName){
      return product.price * product.quantity;;
    }
  }
  return `Product ${productName} not found!`
}

calculateTotalPrice ('');

console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Droid")); // 2800
console.log(calculateTotalPrice("Grip")); // 10800
console.log(calculateTotalPrice("Scanner")); // 8100


// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю.
// Програма має додавати, видаляти, шукати та оновлювати зілля.
// Оголоси об'єкт atTheOldToad з наступними властивостями:
// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potions: [],
//   getPotions(){
//     return `List of all available potions`;
//   },
//   addPotion(potionName){
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions()); //"List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); //"Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); //"Adding Power potion"


// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility")); // ["Speed potion", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.addPotion("Power potion")); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPotionPrice = 0;
    for (const potion of this.potions){
      totalPotionPrice += potion.price;
    }
    return totalPotionPrice;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions){
      if (potion.name === oldName){
        potion.name = newName;
      }        
    }
  },
};


atTheOldToad.getPotions();
atTheOldToad.updatePotionName('Speed potion', 'Superspeed potion')

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.getTotalPrice());
console.log(atTheOldToad.getPotions());


// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
// щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

function add(...args){
  let totalArgs = 0;
  for (const arg of args){
    totalArgs += arg;
  }
  return totalArgs;
}

console.log(add(15, 27)); //42
console.log(add(12, 4, 11, 48)); //75
console.log(add(32, 6, 13, 19, 8)); //78


// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число.
// Це число завжди буде передано першим аргументом.

function addOverNum(value, ...args){
  let totalSumOfOverNum = 0;
  for (const arg of args){
    if (arg > value){
      totalSumOfOverNum += arg;
    }
  }
  return totalSumOfOverNum;
}

addOverNum();

console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218


// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

function getExtremeScores(scores){
return {
  best: Math.max(...scores),
  worst: Math.min(...scores),
}
}

getExtremeScores([]);

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //{ best: 81, worst: 4 }


function getExtremeScores2(scores2){
    const best = Math.max(...scores2);
    const worst = Math.min(...scores2);
    return {best, worst};
  }
  
  getExtremeScores2([]);
  
  console.log(getExtremeScores2([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
  console.log(getExtremeScores2([19, 7, 4, 17, 81, 24])); //{ best: 81, worst: 4 }


  const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  
  // const finalSettings = {...defaultSettings, ...overrideSettings};

  // console.log(finalSettings);
  

  // function makePizza() {
  //   return "Your pizza is being prepared, please wait.";
  // }
  
  // const result = makePizza();
  // const pointer = makePizza;


  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }

const transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// ----------------------------------------------------------------------------------
// createTransaction (amount, type) {
//   return obj
// }

// deposit(amount)
//  {
//   this.balance += amount;
//   const transaction = this.createTransaction(amount, transaction);
  
//  }

//  wothdraw(amount) {
//   if(this.balance < amount) {

//   }
//  }

//  getBalance() {
//   return this.balance;
//  }
  
//  getTransactionDetails(id) {
//   for(const item of this.transactions) {
//     if(this.id === id) {
//       return
//     }
//   }
//  }

//  getTransactionTotal (type) {
//   let res = 0;

//  }

//  --------------------------------------------------------------------------
 
 function calculateTotalPrice3(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function callback(orderedItems) {
 totalPrice += orderedItems;   
  });

  return totalPrice;
}

console.log(calculateTotalPrice3([12, 85, 37, 4]));

function filterArray2(numbers, value) {
  let newArr = [];
  // numbers.forEach(function callback(number, values) {
  //   if(number > values) {
  //     newArr.push(number);
  //   }
  // });
  for(const number of numbers) {
    if(number > value) {
      newArr.push(number);
    }
  }
  return newArr;
}

console.log(filterArray2([1, 2, 3, 4, 5], 3));
console.log(filterArray2([1, 2, 3, 4, 5], 4) );
console.log(filterArray2([1, 2, 3, 4, 5], 5));
console.log(filterArray2([12, 24, 8, 41, 76], 38));
console.log(filterArray2([12, 24, 8, 41, 76], 20));

function filterArray(numbers, value) {
  let newArr = [];
  numbers.forEach(function callback(number) {
    if(number > value) {
      newArr.push(number);
    }
  });

  return newArr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4) );
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

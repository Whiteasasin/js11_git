///task 1
// условие из задания c моего дз 
// let tempC = prompt("Indicate degrees in Celsius")
// let tempF = tempC * 1.8 + 32 ;
// alert ("temp in F is " + tempF) 

// function convertator( tempInCel) {
//    const tempFareng = tempInCel * 1.8 + 32;
//    return tempFareng ;
// }

// const tempInCel = 40;
// const tempFareng = convertator( tempInCel) ;
// alert ("this is your temperature " + tempFareng );

///task 2 
// условие из задания c моего дз 
// const red = Number(prompt("input color in 10 system")).toString(16);
// const green = Number(prompt("input color in 10 system")).toString(16);
// const blue = Number(prompt("input color in 10 system")).toString(16);
// alert("your css color is #" + red + green + blue);

// function sixRGB (r, g , b) {
//   const red =  r.toString(16).padStart(2, "0");
//   const green = g.toString(16).padStart(2, "0");
//   const blue = b.toString(16).padStart(2, "0");
//   return red + green + blue ;
// }

// const r = Number (prompt("input color in 10 system"));
// const g = Number (prompt("input color in 10 system"));
// const b = Number (prompt("input color in 10 system"));
// const result = sixRGB (r, g , b) ;
// alert("your css color is #" + result );

// task 3

//let poverhi = prompt("vvedi kolichestvo poverhiv");//9
// let apartment = prompt("vvedi kolichestvo kvartir na poverhe");//4
// let numKvart = prompt("vvedi nomer kvartiry");//118
// let podyezd = Math.ceil( numKvart / apartment  / poverhi) ;
// let etag = Math.ceil (numKvart / apartment) % poverhi ;
// alert ("vash podyezd " + podyezd + " i vash etag " + etag);

// function findApartmentLocation(numKvart, apartmentPerFloor, floorsPerBuilding) {
//   let podyezd = Math.ceil(numKvart / (apartmentPerFloor * floorsPerBuilding));
//   let etag = Math.ceil(numKvart / apartmentPerFloor) % floorsPerBuilding;
//   return {podyezd: podyezd, etag: etag};
//   }

// const floorsPerBuilding = prompt("vvedi kolichestvo poverhiv")
// const apartmentPerFloor = prompt("vvedi kolichestvo kvartir na poverhe");
// const numKvart = prompt("vvedi nomer kvartiry");

// let apartmentLocation = findApartmentLocation(numKvart, apartmentPerFloor, floorsPerBuilding)
// console.log(`Ваш падик ${apartmentLocation.podyezd},  ваш поверх ${apartmentLocation.etag}`);

/// task 4

// let firstName = (prompt("what is your name ?").trim());
// let secondName = (prompt("what is your surname?").trim());
// let thirdName = (prompt("what is your otchestvo?").trim());

// thirdName = thirdName.charAt(0).toUpperCase() + thirdName.slice(1).toLowerCase();
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
// secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1).toLowerCase();

// let FullName =` ${firstName}  ${secondName}  ${thirdName}`;
// alert(`hellow  ${FullName}`);

// function FullNameUser() {
//   let name = prompt("Введіть ваше ім'я:");
//   let surname = prompt("Введіть ваше прізвище:");
//   let fatherName = prompt("Введіть ваше по батькові:");

//   name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
//   fatherName = fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLowerCase();

//   let fullName = `${name} ${surname} ${fatherName}`;
//   alert(`Привіт, ${fullName}!`);

//   return { name, surname, fatherName, fullName };
// }


// const result = FullNameUser();
// console.log(result);

///task 5 
// let  inputString = prompt('Введіть рядок, дозволяється використовувати \\n для нового рядка:');
// let multiLineString = inputString.split('\\n').join('\n');
// console.log(multiLineString);


// function StringOchka(inputString) {
//   let multiLineString = inputString.split('\\n').join('\n');
//   return multiLineString;
// }


// const inputString = prompt('Введіть рядок, дозволяється використовувати \\n для нового рядка:');
// const multiLineString = StringOchka(inputString);
// console.log(multiLineString);
 
///task 6 

// let firstName = prompt("what is your name ?") || "Ivan" ;
// let secondName = prompt("what is your surname?") || "Ivanov";
// let thirdName = prompt("what is your otchestvo?") || "Ivanovich";


// let FullName =` ${firstName}  ${secondName}  ${thirdName}`;
// alert(`hellow  ${FullName}`);

// function sayHello(firstName, secondName, thirdName) {
//   firstName = firstName || "Ivan";
//   secondName = secondName || "Ivanov";
//   thirdName = thirdName || "Ivanovich";

//   let fullName = `${firstName} ${secondName} ${thirdName}`;
//   alert(`Привіт, ${fullName}!`);

//   return fullName;
// }


// const result = sayHello(prompt("Введіть ваше ім'я:"), prompt("Введіть ваше прізвище:"), prompt("Введіть ваше по батькові:"));
// console.log(result);

///task 7 
/// let loginUser = prompt ("input your login ");
// let paswordUser = prompt ("input your password");
// if(loginUser === "admin" , paswordUser === "qwerty"){
//   alert ("hi my friend");
// } else {
//   alert ("hyilo vvedi validnue dannie");
// }

///
///
/// way 1

// function LoginForm(loginUser, paswordUser){

//   if(loginUser === "admin" , paswordUser === "qwerty"){
//       alert ("hi my friend");
//     } else {
//       alert ("hyilo vvedi validnue dannie");
//     }

// }

/// let loginUser = prompt ("input your login ");
// let paswordUser = prompt ("input your password");


///way 2
// function checkLoginCredentials() {
//   const loginUser = prompt("Введіть свій логін:");
//   const passwordUser = prompt("Введіть свій пароль:");

//   if (loginUser === "admin" && passwordUser === "qwerty") {
//     alert("Привіт, мій друг!");
//   } else {
//     alert("Ви ввели недійсні дані!");
//   }
// }


// checkLoginCredentials();

/// task 8

// document.write("<table>");
// for (let i = 0; i <= 5; i++) {
//   document.write("<tr class='" + (i % 2 === 0 ? "even" : "odd") + "'>");
//   for (let j = 0; j <= 5; j++) {
//     document.write("<td>" + (i * j) + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

// function generateMultiplicationTable() {
//   const tableStart = "<table>";
//   const tableEnd = "</table>";
//   let tableContent = "";

//   for (let i = 0; i <= 5; i++) {
//     tableContent += "<tr class='" + (i % 2 === 0 ? "even" : "odd") + "'>";
//     for (let j = 0; j <= 5; j++) {
//       tableContent += "<td>" + (i * j) + "</td>";
//     }
//     tableContent += "</tr>";
//   }

//   document.write(tableStart + tableContent + tableEnd);
// }


// generateMultiplicationTable();

/// task 9 
//const forbiddenWords = ['bad', 'word', 'not_allowed'];
// const inputString = prompt('Введіть рядок слів, розділених пробілами:');
// const wordsArray = inputString.split(' ');

// function checkWord(word) {
//     return !forbiddenWords.includes(word);
// }
// const filteredArray = wordsArray.filter(checkWord);
// const resultString = filteredArray.join(' ');
// alert(resultString);

// function filterWords() {
//   const forbiddenWords = ['bad', 'word', 'not_allowed'];
//   const inputString = prompt('Введіть рядок слів, розділених пробілами:');
//   const wordsArray = inputString.split(' ');

//   function checkWord(word) {
//       return !forbiddenWords.includes(word);
//   }
//   const filteredArray = wordsArray.filter(checkWord);
//   const resultString = filteredArray.join(' ');
//   alert(resultString);
// }


// filterWords();

/// task 9 

// const car = {
//   "Name": "chevrolet chevelle malibu",
//   "Cylinders": 8,
//   "Displacement": 307,
//   "Horsepower": 130,
//   "Weight_in_lbs": 3504,
//   "Origin": "USA",
//   "in_production": false
// };

// createCarForm(car);

// function createCarForm(car) {
//   const form = document.createElement('form');
  
//   for (const key in car) {
//     const label = document.createElement('label');
//     const input = document.createElement('input');
//     label.textContent = key + ': ';
//     input.type = typeof car[key] === 'boolean' ? 'checkbox' : typeof car[key];
//     input.name = key.toLowerCase();
//     input.value = car[key];
//     input.checked = car[key];
//     label.appendChild(input);
//     form.appendChild(label);
//   }

//   document.body.appendChild(form);
// }


//task 10 

// function sortArray(array, field, ascending = true) {
//   if (field === undefined) {
//     throw new Error('Field is not defined');
//   }

//   const direction = ascending ? 1 : -1;
//   return array.sort((a, b) => {
//     const compareA = a[field];
//     const compareB = b[field];

//     if (typeof compareA === 'string' && typeof compareB === 'string') {
//       return compareA.localeCompare(compareB) * direction;
//     } else {
//       return (compareA - compareB) * direction;
//     }
//   });
// }

///task 11

// <input type='number' id="firstNumber" />
// <input type='number' id="secondNumber" />
// <div id="divisionResult">
//     текст у div
// </div>
// <script>
//     const calcResult = () => {
//         const firstNum = document.getElementById('firstNumber').value;
//         const secondNum = document.getElementById('secondNumber').value;
//         const divisionResult = document.getElementById('divisionResult');
        
//         if (secondNum !== '0') {
//             divisionResult.innerHTML = "Результат ділення: " + (firstNum / secondNum);
//         } else {
//             divisionResult.innerHTML = "Ділення на нуль неможливе!";
//         }
//     }
    
//     firstNumber.oninput = secondNumber.oninput = calcResult
// </script>

///task 12

// let firstDay = 3836; //первый день шаги за 8 часов
// alert("Вы прошли за первый день " + firstDay + " шагов");
// let secondDay= 5467; //второй день шаги за 8 часов
// alert("Вы прошли за второй день " + secondDay + " шагов");
// let KolStepsDayOneHalf= firstDay /8; //количество шагов в час
// alert("Кол-во шагов в час за первый день " + KolStepsDayOneHalf);
// let KolStepsDayTwoHalf = secondDay /8; //количество шагов в час
// alert("Кол-во шагов в час за второй день " + KolStepsDayTwoHalf);
// let resultStepsDay = firstDay + secondDay; //кол-во шагов за два дня 
// alert("Ты прошляпил за 2 дня " + resultStepsDay + " шагов");

// const dayOneSteps = + prompt("первый день шаги за 8 часов");
// const dayTwoSteps = + prompt("второй день шаги за 8 часов");

// function countSteps(firstDay, secondDay) {
//   alert("Вы прошли за первый день " + firstDay + " шагов");
//   alert("Вы прошли за второй день " + secondDay + " шагов");
//   let KolStepsDayOneHalf= firstDay /8; 
//   alert("Кол-во шагов в час за первый день " + KolStepsDayOneHalf);
//   let KolStepsDayTwoHalf = secondDay /8; 
//   alert("Кол-во шагов в час за второй день " + KolStepsDayTwoHalf);

//   let resultStepsDay = firstDay + secondDay; 
//   alert("Ты прошляпил за 2 дня " + resultStepsDay + " шагов"); 
// }

// const result =countSteps(dayOneSteps, dayTwoSteps);



/// task 1

// let a = 10
// {
//     let b = 20
//     {
//         let c = 30
        //які тут будуть значення змінних a, b, c, d
        
//         b++
//         a *= 10
//     }
//     {
//         let c = 50
        //які тут будуть значення змінних a, b, c, d
//         b += 500
//     }
//     {
//         const a = 100500
//         const d = "value"
        //які тут будуть значення змінних a, b, c, d
//         {
//             let a = -50
//             b     = 1000
            //які тут будуть значення змінних a, b, c, d
//         }
        //які тут будуть значення змінних a, b, c, d
//     }
    //які тут будуть значення змінних a, b, c, d
// }
//які тут будуть значення змінних a, b, c, d




// Після виконання коду у блоку, де змінна c має значення 30:
// a = 100
// b = 21 (бо було збільшено на 1 рядком b++)
// c = 30
// d не існує в цьому блоку
// Після виконання коду у блоку, де змінна c має значення 50:
// a = 100
// b = 520 (бо було додано 500 рядком b += 500)
// c = 50
// d не існує в цьому блоку
// Після виконання коду у блоку, де змінна a має значення 100500, а змінна d має значення "value":
// a = 100500
// b = 21 (бо змінна b була змінена в попередньому блоку)
// c не існує в цьому блоку
// d = "value"
// Після виконання коду у внутрішньому блоку, де змінна a має значення -50, а змінна b має значення 1000:
// a = -50
// b = 1000
// c = 30 (бо змінна c була створена в зовнішньому блоку, де було присвоєно значення 30)
// d = "value" (бо змінна d була створена в зовнішньому блоку, де було присвоєно значення "value")
// Після виконання всього коду, значення змінних будуть наступними:
// a = 100500
// b = 21 (бо змінна b була змінена в попередньому блоку)
// c не існує в цьому блоку
// d не існує в цьому блоку

/// task 2 
// var age = + prompt ("Скільки вам років?", "");
// if (age < 18) {
//     alert("школяр");
// }
// else if (age > 18 && age < 30){
//     alert("молодь");
// }
// else if (age > 30 && age < 45){
//     alert("зрілість");
// }
// else if (age > 45 && age < 60){
//     alert("захід сонця");
// }
// else if (age > 60) {
//     alert("як пенсія?");
// }
// else {
//     alert("чи кіборг, чи KERNESS");
// }


// var age = +prompt("Скільки вам років?", "");
// if (age < 0) {
//   alert("Ви ввели недопустиме значення");
// }
// else if (age < 18) {
//   alert("школяр");
// }
// else if (age < 30) {
//   alert("молодь");
// }
// else if (age < 45) {
//   alert("зрілість");
// }
// else if (age < 60) {
//   alert("захід сонця");
// }
// else {
//   alert("як пенсія?");
// }


/// task 3 

// let NumSize = prompt("Какой размер брюк подходит вам в Италии?");
// NumSize = parseInt(NumSize);

// if (NumSize <= 38) {
//     alert("You Size USA  XS");
// }
// else if (NumSize >= 39 && NumSize <= 40) {
//     alert("You Size USA  S");
// }
// else if (NumSize >= 41 && NumSize <= 42) {
//     alert("You Size USA  M");
// }
// else if (NumSize >= 43 && NumSize <= 44) {
//     alert("You Size USA  L");
// }
// else if (NumSize >= 45 && NumSize <= 46) {
//     alert("You Size USA  XL");
// }
// else if (NumSize >= 47 && NumSize <= 48) {
//     alert("You Size USA  XXL");
// }
// else {
//     alert("You Size USA  XXXL");
// }


// let NumSize = prompt("Какой размер брюк подходит вам в Италии?");
// NumSize = parseInt(NumSize);

// switch (true) {
//   case NumSize <= 38:
//     alert("You Size USA  XS");
//     break;
//   case NumSize >= 39 && NumSize <= 40:
//     alert("You Size USA  S");
//     break;
//   case NumSize >= 41 && NumSize <= 42:
//     alert("You Size USA  M");
//     break;
//   case NumSize >= 43 && NumSize <= 44:
//     alert("You Size USA  L");
//     break;
//   case NumSize >= 45 && NumSize <= 46:
//     alert("You Size USA  XL");
//     break;
//   case NumSize >= 47 && NumSize <= 48:
//     alert("You Size USA  XXL");
//     break;
//   default:
//     alert("You Size USA  XXXL");
// }

/// task 4

// let color = prompt("Введіть колір","");
// switch (color) {
//      case "red": document.write("<div style='background-color: red;'>червоний</div>");
//      case "black": document.write("<div style='background-color: black; color: white;'>чорний</div>");
//                  break;
//      case "blue": document.write("<div style='background-color: blue;'>синій</div>");
//      case "green": document.write("<div style='background-color: green;'>зелений</div>");
//                  break;
//      default: document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

// let color = prompt("Введіть колір","");

// if (color === "red"){
//   document.write("<div style='background-color: red;'>червоний</div>");
// } else if (color === "black"){
//   document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue"){
//   document.write("<div style='background-color: blue;'>синій</div>");
// } else if (color === "green"){
//   document.write("<div style='background-color: green;'>зелений</div>");
// } else if (color){
//   document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

/// task 5

// const noSwitch = (key, cases, defaultKey='default') => {
  //перевірка наявності key в cases
  //якщо є - дістати значення по ключу. це буде функція. Запустити її
  //якщо немає - витягти з об'єкта cases значення по ключу, ім'я якого лежить у змінній defaultKey. Запустити
  //Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок
// }



// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//   воду: () => console.log('Найздоровіший вибір!'),
//   чай(){
//       console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//   },
//   "пиво": () => console.log('Добре влітку, та в міру'),
//   віскі: function(){
//       console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//   },
//   default(){
//       console.log('шото я не зрозумів')
//   }
// })

// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай(){
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function(){
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default(){
//         console.log('шото я не зрозумів')
//     }
// })

/// task 6 

// fetch('https://open.er-api.com/v6/latest/USD')
//   .then(res => res.json())
//   .then(data => {
   
//     const rates = data.rates;
//     const container = document.getElementById('currency-buttons-container'); 
//     for (const currency in rates) { 
//       const button = document.createElement('button'); 
//       button.innerText = currency; 
//       button.onclick = () => { 
//         const amount = prompt(`Enter amount in ${currency}`); 
//         const usdAmount = Number(amount) / rates[currency]; 
//         alert(`The amount in USD is ${usdAmount.toFixed(2)}`); 
//       };
//       container.appendChild(button); 
//     }
//   });

/// task 7 

// const from = document.querySelector('#from');
// const to = document.querySelector('#to');
// const rate = document.querySelector('#rate');
// const amount = document.querySelector('#amount');
// const result = document.querySelector('#result');


// const url = 'https://open.er-api.com/v6/latest/USD';


// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     const currencies = Object.keys(data.rates);
//     for (let i = 0; i < currencies.length; i++) {
//       const option1 = document.createElement('option');
//       const option2 = document.createElement('option');
//       option1.innerText = currencies[i];
//       option2.innerText = currencies[i];
//       from.append(option1);
//       to.append(option2);
//     }
//   });


// from.onchange = calculateExchange;
// to.onchange = calculateExchange;
// amount.oninput = calculateExchange;

// // тут обчисления делаю 
// function calculateExchange() {

//   const fromValue = from.value;
//   const toValue = to.value;
//   const amountValue = amount.value;

//  // тут получаю курси валюток 
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       const rateValue = data.rates[toValue] / data.rates[fromValue];
//       rate.innerText = `1 ${fromValue} = ${rateValue.toFixed(4)} ${toValue}`;
//       result.innerText = (amountValue * rateValue).toFixed(2);
//     });
// }

/// task 8 

// const countriesSelect = document.getElementById("countries");
//       const citiesSelect = document.getElementById("cities");

      
//       fetch(
//         "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
//       )
//         .then((res) => res.json())
//         .then((data) => {
         
//           for (const country of Object.keys(data)) {
//             const option = document.createElement("option");
//             option.text = country;
//             countriesSelect.add(option);
//           }

          
//           countriesSelect.onchange = () => {
            
//             citiesSelect.innerHTML = "";

            
//             const selectedCountry = countriesSelect.value;
//             for (const city of data[selectedCountry]) {
//               const option = document.createElement("option");
//               option.text = city;
//               citiesSelect.add(option);
//             }
//           };
//         });
//task 1
// let input = prompt("Введіть число:");
// const num = parseInt(input);

// if (isNaN(num)) {
//   alert("Помилка: введене значення не є числом.");
// } else {
//   if (num % 2 === 0) {
//     alert(num + " є парним числом.");
//   } else {
//     alert(num + " не є парним числом.");
//   }
// }

// task2
// let text = prompt("Введіть текст:").toLowerCase();
// let badWords = ["поганий", "нехороший", "брудний" , "хуй" , "член" , "хуило"];

// let foundBadWord = false;

// for (let i = 0; i < badWords.length; i++) {
//   if (text.indexOf(badWords[i]) !== -1) {
//     foundBadWord = true;
//     break;
//   }
// }

// if (foundBadWord) {
//   alert("Текст містить некоректне слово.");
// } else {
//   alert("Текст не містить некоректних слів.");
// }

//task 3 

// let que1 = confirm (" Рандом вопрос . Понял ?") && "где тяги бархатные?" || "ля ты крыса" ; 
// alert (que1);


//task 4 

// let useransw = confirm ("Вилкой в глаз или в жепу раз ?");

// if (useransw) {
//   alert ("а чего глаза 2 ?");

// }else{
//   alert ("Ну и пидорок )))");

// };

// task 5 

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

//task 6 
// let male = confirm ("you are a man ?") ? "man " : "women" ;
// alert (male);

// task 9 

// let age = prompt("how old are you ?") && "thx for the answer" || "error 14 88" ; 
// alert (age);

//task 10
// let robot = confirm("shopping?") && "go to hell" || "ti baka" 
// alert (robot);

//task 11 
// let robot = confirm ("shoping?");
// if(robot) {
//   alert("go shoping");
// } else {
//   alert("ti baka");

// }

//task 12

// let name = prompt("what is your name?") || "Ivan";
// let surName = prompt("what is you surname?") || "Ivanov";
// let familary = prompt("what is your familarity ?") || "Ivanovich" ;

// let fullName = alert (` ${ name} `);

// let firstName = prompt("what is your name ?") || "Ivan" ;
// let secondName = prompt("what is your surname?") || "Ivanov";
// let thirdName = prompt("what is your otchestvo?") || "Ivanovich";


// let FullName =` ${firstName}  ${secondName}  ${thirdName}`;
// alert(`hellow  ${FullName}`);

// task 13 

// let firstName = prompt("Введіть ім'я:");
// if (!firstName) {
//   firstName = "Іван";
// }

// let lastName = prompt("Введіть прізвище:");
// if (!lastName) {
//   lastName = "Іванов";
// }

// let whirdName = prompt("Введіть прізвище:");
// if (!whirdName) {
//   whirdName = "Іванович";
// }

// let fullName = `${firstName} ${lastName} ${whirdName}`;
// alert (fullName);

//task 14

// let loginUser = prompt ("input your login ");
// let paswordUser = prompt ("input your password");
// if(loginUser === "admin" , paswordUser === "qwerty"){
//   alert ("hi my friend");
// } else {
//   alert ("hyilo vvedi validnue dannie");
// }

// task 15 

// let valute = (prompt ("input what are you want to buy/sell in USD, EUR,PLN").toLowerCase());
// let buorsel = confirm ("you want buy it press ok ,if sell click on cancel");
// let rate;

// if(valute === "usd"){
//   rate = buorsel ? 40 : 41;
// } else if (valute === "eur"){
//   rate = buorsel ? 42 : 43;
// } else if(valute === "pln"){
//   rate = buorsel ? 7 : 8;
// } else {
//   alert(" pizdui na runok menat )))");
// }

// let operation = parseFloat(prompt("skolko hochesh pomenyat ?"));
// if (!isNaN(operation)){
//   let money = buorsel ? operation * rate : operation / rate ;
//   alert (`ti poluchish ${money.toFixed(2)} ${buorsel ? "UAH" : valute} `);
// } else {
//   alert ("ne tu summu vvel");
// }

// task 16 

// const userChoice = prompt("Виберіть: камінь, ножиці або папір.");


// const computerChoice = Math.random();
// let computerChoiceText;
// if (computerChoice < 0.34) {
//   computerChoiceText = "камінь";
// } else if (computerChoice <= 0.67) {
//   computerChoiceText = "ножиці";
// } else {
//   computerChoiceText = "папір";
// }


// alert("Ви вибрали " + userChoice + ", а комп'ютер вибрав " + computerChoiceText + ".");


// let result;
// if (userChoice === computerChoiceText) {
//   result = "Нічия!";
// } else if (userChoice === "камінь") {
//   if (computerChoiceText === "ножиці") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// } else if (userChoice === "ножиці") {
//   if (computerChoiceText === "папір") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// } else if (userChoice === "папір") {
//   if (computerChoiceText === "камінь") {
//     result = "Ви перемогли!";
//   } else {
//     result = "Комп'ютер переміг!";
//   }
// }


// alert(result);

//task 1
// function createPerson(name, surname) {
//   return {
//     name: name,
//     surname: surname,
//     getFullName: function() {
//       return this.name + ' ' + (this.fatherName || '') + ' ' + this.surname;
//     }
//   };
// }

// const a = createPerson("Вася", "Пупкін");
// const b = createPerson("Ганна", "Іванова");
// const c = createPerson("Єлизавета", "Петрова");

// console.log(a.getFullName()); // "Вася Пупкін"
// a.fatherName = 'Іванович';    
// console.log(a.getFullName()); // "Вася Іванович Пупкін"

// console.log(b.getFullName()); // "Ганна Іванова"

//task 2
// function createPersonClosure(name, surname) {
//   let fatherName;
//   let age;

//   function checkName(str) {
//     if (typeof str === 'string' && /^[A-ZА-Я][a-zа-я]+$/.test(str)) {
//       return str;
//     }
//     return null;
//   }

//   function checkAge(num) {
//     if (typeof num === 'number' && num >= 0 && num <= 100) {
//       return num;
//     }
//     return null;
//   }

//   function getName() {
//     return name;
//   }

//   function getSurname() {
//     return surname;
//   }

//   function getFatherName() {
//     return fatherName;
//   }

//   function getAge() {
//     return age;
//   }

//   function getFullName() {
//     let fullName = surname + ' ' + name;
//     if (fatherName) {
//       fullName += ' ' + fatherName;
//     }
//     return fullName;
//   }

//   function setName(newName) {
//     const checkedName = checkName(newName);
//     if (checkedName) {
//       name = checkedName;
//     }
//     return name;
//   }

//   function setSurname(newSurname) {
//     const checkedSurname = checkName(newSurname);
//     if (checkedSurname) {
//       surname = checkedSurname;
//     }
//     return surname;
//   }

//   function setFatherName(newFatherName) {
//     const checkedFatherName = checkName(newFatherName);
//     if (checkedFatherName) {
//       fatherName = checkedFatherName;
//     }
//     return fatherName;
//   }

//   function setAge(newAge) {
//     const checkedAge = checkAge(newAge);
//     if (checkedAge) {
//       age = checkedAge;
//     }
//     return age;
//   }

//   function setFullName(newFullName) {
//     const parts = newFullName.split(' ');
//     if (parts.length >= 2) {
//       const checkedSurname = checkName(parts[0]);
//       const checkedName = checkName(parts[1]);
//       if (checkedSurname && checkedName) {
//         surname = checkedSurname;
//         name = checkedName;
//         fatherName = checkName(parts[2]) || fatherName;
//       }
//     }
//     return getFullName();
//   }

//   return {
//     getName,
//     getSurname,
//     getFatherName,
//     getAge,
//     getFullName,
//     setName,
//     setSurname,
//     setFatherName,
//     setAge,
//     setFullName,
//   };
// }

// const a = createPersonClosure('Вася', 'Пупкін');
// const b = createPersonClosure('Ганна', 'Іванова');

// console.log(a.getName());
// a.setAge(15);
// console.log(a.getAge());
// console.log(a.getAge());

// b.setFullName('Петрова Ганна Миколаївна');
// console.log(b.getFatherName());

/// task 3 
// function createPersonClosureDestruct({name, surname, fatherName = '', age = 0} = {}) {
//   let ageVal = age;
//   let fatherNameVal = fatherName;
//   let nameVal = name;
//   let surnameVal = surname;

//   function getName() {
//     return nameVal;
//   }

//   function getSurname() {
//     return surnameVal;
//   }

//   function getFatherName() {
//     return fatherNameVal;
//   }

//   function getAge() {
//     return ageVal;
//   }

//   function getFullName() {
//     return `${surnameVal} ${nameVal} ${fatherNameVal}`;
//   }

//   function setName(newName) {
//     if (typeof newName !== 'string' || newName.trim() === '' || !/^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']*$/.test(newName)) {
//       return nameVal;
//     }
//     nameVal = newName.trim();
//     return nameVal;
//   }

//   function setSurname(newSurname) {
//     if (typeof newSurname !== 'string' || newSurname.trim() === '' || !/^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']*$/.test(newSurname)) {
//       return surnameVal;
//     }
//     surnameVal = newSurname.trim();
//     return surnameVal;
//   }

//   function setFatherName(newFatherName) {
//     if (typeof newFatherName !== 'string' || newFatherName.trim() === '' || !/^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']*$/.test(newFatherName)) {
//       return fatherNameVal;
//     }
//     fatherNameVal = newFatherName.trim();
//     return fatherNameVal;
//   }

//   function setAge(newAge) {
//     if (typeof newAge !== 'number' || newAge < 0 || newAge > 100) {
//       return ageVal;
//     }
//     ageVal = newAge;
//     return ageVal;
//   }

//   function setFullName(fullName) {
//     const nameParts = fullName.trim().split(' ');
//     if (nameParts.length !== 3) {
//       return `${surnameVal} ${nameVal} ${fatherNameVal}`;
//     }
//     const [newSurname, newName, newFatherName] = nameParts;
//     const validSurname = setSurname(newSurname);
//     const validName = setName(newName);
//     const validFatherName = setFatherName(newFatherName);
//     return `${validSurname} ${validName} ${validFatherName}`;
//   }

//   return {
//     getName,
//     getSurname,
//     getFatherName,
//     getAge,
//     getFullName,
//     setName,
//     setSurname,
//     setFatherName,
//     setAge,
//     setFullName
//   };
// }

// function createPersonClosureDestruct({name, surname, fatherName = '', age = 0} = {}) { ... };

/// task 4

// function isSorted(...args) {

//   if (!args.every((arg) => typeof arg === "number")) {
//     return false;
//   }

  
//   for (let i = 1; i < args.length; i++) {
//     if (args[i] <= args[i - 1]) {
//       return false;
//     }
//   }


//   return true;
// }

///task 5
// function personForm(parent, person) {
//   const inputName = document.createElement('input');
//   const inputSurname = document.createElement('input');
//   const inputPatronymic = document.createElement('input');
//   const inputAge = document.createElement('input');
//   const inputFullName = document.createElement('input');

//   inputName.value = person.getName();
//   inputSurname.value = person.getSurname();
//   inputPatronymic.value = person.getPatronymic();
//   inputAge.value = person.getAge();
//   inputFullName.value = person.getFullName();

//   inputName.oninput = () => {
//     const value = inputName.value;
//     person.setName(value);
//     inputName.value = person.getName();
//     inputFullName.value = person.getFullName();
//   };

//   inputSurname.oninput = () => {
//     const value = inputSurname.value;
//     person.setSurname(value);
//     inputSurname.value = person.getSurname();
//     inputFullName.value = person.getFullName();
//   };

//   inputPatronymic.oninput = () => {
//     const value = inputPatronymic.value;
//     person.setPatronymic(value);
//     inputPatronymic.value = person.getPatronymic();
//     inputFullName.value = person.getFullName();
//   };

//   inputAge.oninput = () => {
//     const value = inputAge.value;
//     person.setAge(value);
//     inputAge.value = person.getAge();
//   };

//   inputFullName.oninput = () => {
//     const value = inputFullName.value;
//     person.setFullName(value);
//     inputFullName.value = person.getFullName();
//     inputName.value = person.getName();
//     inputSurname.value = person.getSurname();
//     inputPatronymic.value = person.getPatronymic();
//   };

//   parent.appendChild(inputName);
//   parent.appendChild(inputSurname);
//   parent.appendChild(inputPatronymic);
//   parent.appendChild(inputAge);
//   parent.appendChild(inputFullName);
// }

//task 6 
// function createInputsForObject(obj) {
//   const inputs = {};
//   for (const [key, value] of Object.entries(obj)) {
//     const propName = key.replace(/^(get|set)/, '');
//     if (!inputs[propName]) {
//       const input = document.createElement('input');
//       input.type = getType(value);
//       input.placeholder = propName;
//       input.disabled = !value.set;
//       input.addEventListener('input', (event) => {
//         value.set(event.target.value);
//       });
//       inputs[propName] = input;
//     }
//     const inputValue = value.get();
//     if (inputs[propName].value !== inputValue) {
//       inputs[propName].value = inputValue;
//     }
//   }
//   return inputs;
// }

// function getType(value) {
//   if (typeof value.get() === 'string') {
//     return 'text';
//   } else if (typeof value.get() === 'number') {
//     return 'number';
//   } else if (typeof value.get() === 'boolean') {
//     return 'checkbox';
//   }
// }

///task 7 
function getSetForm(parent, getSet){
  const inputs = {} //реєстр
  
  const updateInputs = () => { //функція оновлення полів введення відповідно до будь-яких get....
      for (const key in inputs) {
          const input = inputs[key];
          const prop = key.charAt(0).toLowerCase() + key.slice(1); // видаляємо першу букву, щоб отримати назву властивості вхідного об'єкту
          if (prop in getSet) { // перевіряємо, що така властивість існує у вхідному об'єкті
              const value = getSet[prop](); // отримуємо значення за допомогою методу get
              input.value = value; // оновлюємо значення в полі введення
          }
      }
  }
  
  for (const getSetName in getSet){
      const getOrSet = getSetName.slice(0, 3); 
      const fieldName = getSetName.slice(3); 
      const setKey    = `set` + fieldName;
      const getKey    = `get` + fieldName;
      
      if (getOrSet === "get") {
          inputs[fieldName] = document.createElement("input"); 
          inputs[fieldName].addEventListener("input", (event) => {
              const value = event.target.value;
              if (fieldName in getSet) { 
                  getSet[setKey](value); 
                  updateInputs(); 
              }
          });
          parent.appendChild(inputs[fieldName]); 
      }
  }
  
  updateInputs(); 
}

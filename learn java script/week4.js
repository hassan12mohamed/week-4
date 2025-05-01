// start task from 57 to 63
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// ===================================================
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined) {
    console.log(firstNum + secondNum);
  } else {
    let result =
      operation === "add"
        ? firstNum + secondNum
        : operation === "subtract"
        ? firstNum - secondNum
        : operation === "multiply"
        ? firstNum * secondNum
        : "un known";
    console.log(result);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
// ======================================================
function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
    return;
  }
  let months = theAge * 12;
  let weeks = theAge * 52;
  let days = theAge * 365;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;

  console.log(`Your age in months: ${months} months`);
  console.log(`Your age in weeks: ${weeks} weeks`);
  console.log(`Your age in days: ${days} days`);
  console.log(`Your age in hours: ${hours} hours`);
  console.log(`Your age in minutes: ${minutes} minutes`);
  console.log(`Your age in seconds: ${seconds} seconds`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// ========================================================
function checkStatus(a, b, c) {
  if (
    typeof a === "string" &&
    typeof b === "number" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof b === "string" &&
    typeof a === "number" &&
    typeof c === "boolean"
  ) {
    if (c === true) {
      console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof c === "string" &&
    typeof b === "number" &&
    typeof a === "boolean"
  ) {
    if (a === true) {
      console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`
      );
    }
  } else if (
    typeof b === "string" &&
    typeof c === "number" &&
    typeof a === "boolean"
  ) {
    if (a === true) {
      console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
    } else {
      console.log(
        `Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`
      );
    }
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ===================================================
function createSelectBox(startYear, endYear) {
  document.write(`<selsct>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value= ${i}> ${i} </option>`);
  }

  document.write(`</selsct>`);
}
createSelectBox(2000, 2021);
// ================================================
function multiply(...para) {
  let result = 1;
  for (let num of para) {
    if (typeof num === "string") {
      continue;
    }
    if (typeof num === "number") {
      num = Math.floor(num);
      result *= num;
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

// end task from 57 to 63
// start task from 64 to 70
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let x = zName.substring(0, 7);
    return x.toUpperCase();
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let it = parseInt(zAge);
    return `Your Age Is ${it}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    let coun = zCountry.substring(0, 2);
    return `You Live In ${coun.toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// ================================================================
function itsMe() {
  return `Iam A Normal Function`;
}
let print = () => `Iam A Arrow Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(print()); // Iam A Normal Function
// ============================================================
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let pri = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(pri("https", "elzero", "org")); // https://www.elzero.org
// ================================================================================
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let fun = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(fun("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(fun("Ahmed")("Not Available")()); // Iam Not Avaialble
// ==============================================================================
function specialMix(...data) {
  let result = 0;
  for (let item of data) {
    let num = parseInt(item);
    if (!isNaN(num)) {
      result += num;
    }
  }
  return result === 0 ? "All Is Strings" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// end task from 64 to 70
// start task from 71 to 78
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let m = mix
  .map(function (ele) {
    return typeof ele === "string" ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(m); //Elzero
// ==================================================
let myString = "EElllzzzzzzzeroo";

let ss = myString
  .split("")
  .filter(function (ele, index, arr) {
    console.log(`index=> ${index - 1}`);
    return ele !== arr[index - 1];
  })
  .join("");
console.log(ss); //Elzero
// =================================================
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let ar = myArray.reduce(function (acc, cur) {
  console.log(Array.isArray(cur));
  return acc + (Array.isArray(cur) ? cur.join("") : cur);
}, "");

console.log(ar); // Elzero
// ==============================================
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nuum = numsAndStrings
  .filter(function (ele) {
    return typeof ele === "number";
  })
  .map(function (ele) {
    return -ele;
  });
console.log(nuum); // [-1, -10, 10, 20, -5, -3]
// =======================================================
let nums = [2, 12, 11, 5, 10, 1, 99];
let nuums = nums.reduce(function (acc, cur) {
  return cur % 2 !== 0 ? acc + cur : acc * cur;
}, 1);
console.log(nuums); // 500

// end task from 71 to 78
// start task from 79 to 85

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${member.name},  My Age Is ${member.age}, I Live in ${member.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
// ============================================================
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = Object.create({
  property: "Method Two",
});

console.log(objMethodTwo.property); // "Method Two"
let objMethodThree = Object.assign({
  property: "Method Three",
});

console.log(objMethodThree.property); // "Method Three"
let objMethodFour = new Object();
objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"
// ===================================================================
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a: a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// ===========================================================
// The Object To Work With
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");

// end task from 79 to 85

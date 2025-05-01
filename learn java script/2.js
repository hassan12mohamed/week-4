window.onload = function () {
  let heading = document.querySelector("h1");
  heading.style.color = "blue";
  heading.style.fontSize = "80px";
  heading.style.fontWeight = "bold";
  heading.style.textAlign = "center";
  heading.style.fontFamily = "Arial";
};
console.log(
  "%cElzero %c Web %cScool",
  "color: red;font-size:40px;",
  "color: green;font-size:40px;font-weight:bold;",
  "color: blue;font-size:40px;"
);
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.table(["Elzero", "Ahmed", "Hassan", "Sameh", "gamal"]);
(function () {
  return;
  console.log("Iam In Console");
  document.write("Iam In Page");
})();
let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);
window.onload = function () {
  console.log(elzero.innerHTML); // object
  console.log(typeof elzero); // object
};
console.log(
  '`I\'m In \n \
\\\\  \n \
Love \\\\ """ \'\'\' \n\
++ With ++ \n\
\\"""\\""" \n\
""JavaScript""``'
);
let a = 21;
let b = 20;

console.log(`_${a}_${b + "" + a}_${b + "" + a}_${b + "" + a}_${b}_`); // _21_2021_2021_2021_20_
// Replace ? With Arithmetic Operators
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(Math.pow(3, 3) / (3 * 3) + 3); // 6

// Soultion Four
console.log(num ** num / (num * num) + num); // 6

// Solution Five
console.log(num * (true + true)); // 6
// Solution Six
console.log(Math.pow(num, true + true) - num); // 6
let aa = "10";

// Solution One
console.log(+aa + +aa); // 20

// Solution Two
console.log(aa * (true + true)); // 20

// Solution Three
console.log(parseInt(aa) + parseInt(aa)); // 20

// Solution Four
console.log(Number(aa) + Number(aa)); // 20
let points = 10;

// Write Your Code Here
points += !!true + !!true + !!true;

console.log(points); // 13

// Write Your Code Here
points -= true + true + true + true + true;

console.log(points); // 8;

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 * 10_000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.pow(10, 6) / 10); // 100000
console.log(50_000 + 50_000); // 100000
console.log(1000_000 / 10); // 100000
console.log(2 * 50_000); // 100000
console.log(parseInt(100_000)); // 100000
console.log(Number(100_000)); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log((Number.MAX_SAFE_INTEGER >> 53) + 17);

let myVar = "100.56789 Views";

console.log(Math.floor(parseInt(myVar))); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let bb = 10;

console.log(Number(Number.isInteger(bb) + Number.isInteger(bb))); // 2

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt | 0); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log(num1 !== num2); // true
console.log(!(num1 > num2)); // true
console.log(num2 > num1); // true

let a1 = 20;
let b1 = 30;
let c1 = 10;

console.log((a1 < b1 && a1 > c1) || a1 != b1); // true
console.log(a1 < b1 || a1 > c1); // true
console.log(!(a1 == b1) && !(a1 == b1) && !(a1 == c1) && !(a1 == c1)); // true

// Test Case 1
let num11 = 9; // "009"

// Test Case 2
num11 = 20; // "020"

// Test Case 3
num11 = 110; // "110"

if (num11 < 10) {
  console.log("009");
} else if (num11 > 10 && num11 < 100) {
  console.log("020");
} else if (num11 > 100) {
  console.log("110");
} else {
  console.log("not known");
}
let num111 = 9;
let str = "9";
let str2 = "20";
num111 == str
  ? console.log("{num1} Is The Same Value As {str}")
  : console.log("not exist");
num111 == str && typeof num111 != typeof str
  ? console.log("{num1} Is The Same Value As {str} But Not The Same Type")
  : console.log("not exist");
num111 !== str2 && typeof num111 != typeof str2
  ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
  : console.log("not exist");
str !== str2 && typeof str === typeof str2
  ? console.log("{str} Is The Same Type As {str2} But Not The Same Value")
  : console.log("not exist");

let l1 = 10;
let l2 = 30;
let l3 = "30";

if (
  (l3 > l1 && typeof l3 !== typeof l2) ||
  (l3 > l1 && l3 == l2 && typeof l3 !== typeof l2) ||
  (l3 !== l1 && typeof l3 !== typeof l1 && typeof l3 !== typeof l2)
) {
  if (l3 > l1 && typeof l3 !== typeof l2) {
    console.log(
      `${l3} Is Larger Than ${l1} And Type ${typeof l3} Not The Same Type As ${typeof l1}`
    );
  }

  if (l3 > l1 && l3 == l2 && typeof l3 !== typeof l2) {
    console.log(
      `${l3} Is Larger Than ${l1} And Value Is The Same As ${l2} And Type ${typeof l3} Not The Same Type As ${typeof l2}`
    );
  }

  if (l3 !== l1 && typeof l3 !== typeof l1 && typeof l3 !== typeof l2) {
    console.log(
      `${l3} Value And Type Is Not The Same As ${l1} And Type Is Not The Same As ${l2}`
    );
  }
}

// Edit What You Want Here

let num12 = 10;
let num22 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num12 == num22) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num12 == num22 && num12 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num12 == num22 && num12 !== num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num12 + num22 == num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num12 + num3 !== num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num12 + num22 + num3 !== num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num12 + num3) + num22 !== 21) {
  console.log("True");
} else {
  console.log("False");
}

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
console.log(day.trim().slice(0, 1).toUpperCase(1) + day.trim().slice(1));

day = "Friday";
day = "Saturday";
day = "Sunday";
// Output => "No Appointments Available"

day = "Monday";
day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
day = "World";
// Output => "Its Not A Valid Day"
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    if (day) {
      console.log("Its Not A Valid Day");
    }
}

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let w = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(0, 3)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo);
finalArr.sort();

console.log(finalArr.reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes("JS")) {
  console.log("Found");
  if (haystack.indexOf("JS")) {
    console.log("Found");
    if (haystack.lastIndexOf("JS")) {
      console.log("Found");
    }
  }
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2);
allArrs.sort();
allArrs.splice(0, 4);
console.log(allArrs.join("").toLowerCase()); // fxy

let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i = i + start) {
  if (i == exclude) continue;
  console.log(i);
}

let start1 = 10;
let end1 = 0;
let stop1 = 3;

// Output
for (let i = start1; i > end1; i--) {
  if (i == stop1) {
    break;
  }
  if (i == start1) console.log(i);
  else if (i < start1) {
    console.log(`${end1}${i}`);
  }
}

let start2 = 1;
let end2 = 6;
let breaker = 2;

// Output
for (i = start2; i <= end2; i++) {
  console.log(i);
  console.log(`-- ${breaker} \n-- ${end2 - breaker}`);
}

let index = 10;
let jump = 2;
let y = 1;

// Output
for (;;) {
  if (index == jump) break; // Break when i reaches jump
  console.log(index);
  index -= jump;
}

let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
for (let i = 0; i < friends1.length; i++) {
  if (friends1[i][0].toUpperCase() === letter.toUpperCase()) continue;
  console.log(`${y++} =>${friends1[i]}`);
}
let start3 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start3; i < swappedName.length; i++) {
  let char = swappedName[i];
  result +=
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(result); // "ELzERo"

let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start4; i < mix.length; i++) {
  if (typeof mix[i] === "number" && mix[i] !== 1) {
    console.log(mix[i]);
  }
}

let friends11 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
i = index1;
let x = 1;

while (i < friends11.length) {
  if (typeof friends11[i] === "number") {
    i++;
    continue;
  }
  if (friends11[i][0].toUpperCase() !== "A") {
    console.log(`${x++} => ${friends11[i]}`);
  }
  i++;
}

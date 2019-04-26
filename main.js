// C is for Cookie
const cookies = [
  "Oatmeal Raisin",
  "Chocolate Chip",
  "Sugar",
  "Peanut Butter",
  "Snickerdoodle",
  "Ginger"
];
let y = 1;

for (let x = 0; x < cookies.length; x++) {
  const currentCookie = cookies[x];
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

// Conjunction Function

let conjoinedWord;
const conjunction = function(firstWord, secondWord) {
  conjoinedWord = `${firstWord} ${secondWord}`;
};

conjunction("Master", "Card");
console.log(conjoinedWord);

// Mod Squad

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;
{
  const ModSquad = {
    members: [
      "Pete Cochran",
      "Linc Hayes",
      "Julie Barnes",
      "Capt. Adam Greer",
      "Chief Barney Metcalf"
    ],
    series: {
      start: "1968",
      end: "1973"
    }
  };

  ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`;
  });
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation;

// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];
let numInvalid = 0;
for (let i = 0; i < locations.length; i++) {
  const currentLocation = locations[i];

  if (currentLocation[0] >= 2) {
    const invalidLocation = true;
    numInvalid++;
    if (invalidLocation) {
      console.log("This location is invalid");
    }
  }
}

console.log(`There were ${numInvalid} invalid locations`);

// Advanced Challenge: Lambda Llama
// Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

// Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

const llamaNamer = function() {
  const possibleNames = [
    "Larry",
    "Leon",
    "Leona",
    "Les",
    "Laura",
    "Lemony",
    "Lars",
    "Lekisha"
  ];
  const randomizer = Math.floor(Math.random() * 7);
  const suffix = " the Llama";
  let name;
  const namer = function() {
    name = possibleNames[randomizer];
    return name + suffix;
  };

  return namer;
};

let nameMaker = llamaNamer();
console.log(nameMaker());

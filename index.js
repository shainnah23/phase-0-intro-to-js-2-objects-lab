
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
  cats.push(name);
  
}



function destructivelyPrependCat(name) {
  cats.unshift(name);
  
}


function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}


function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}


///object practice

const address = {
  street: {
    line1: "11 Broadway",
    line2: "2nd Floor",
  },
  city: "New York",
  state: "NY",
  zipCode: "10004"
};

console.log(address)

///

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

Object.keys(wednesdayMenu);

console.log(wednesdayMenu);
const cheesePlate=wednesdayMenu.cheesePlate;
console.log(cheesePlate);

Object.values(wednesdayMenu);
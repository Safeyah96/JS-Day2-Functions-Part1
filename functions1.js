function printName() {
  console.log("Safeyah AlQabandi");
}
printName();

function printAge(year) {
  console.log(2024 - year);
}
printAge(1996);

function printAgeAndName(year, name) {
  console.log(`Hello ${name} you are ${year} years old`);
}
printAgeAndName(2024 - 1996, "Safeyah");

function printHello(name, language) {
  if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  }
  if (language == "tr") {
    console.log(`Merhaba ${name}`);
  }
}

printHello("Safeyah", "fr");

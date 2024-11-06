let asterisco = "";

for (let i = 1; i <= 13; i++) {
  for (let j = 0; j < i; j++) {
    asterisco += "* ";
  }
  asterisco += "\n";
}

console.log(asterisco);

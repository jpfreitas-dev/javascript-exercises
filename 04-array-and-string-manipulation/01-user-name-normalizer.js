const messyInput = "  jaMIle fREItas  ";

function normalizeUserName(input) {
     return input
        .trim() // => "jaMIle fREItas"
        .toLowerCase() // => "jamile freitas"
        .split(" ") // => ["jamile", "freitas"]
        .map(name => name.charAt(0).toUpperCase() + name.slice(1)) // => ["Jamile", "Freitas"]
        .join(" "); // => "Jamile Freitas"
}

console.log(normalizeUserName(messyInput)); // Output: "Jamile Freitas"
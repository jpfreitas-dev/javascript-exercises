function censorContent(content, bannedWords) {
  // Split the content into words
  const words = content.split(' ');
  
  // Iterate through each word and check if it's banned
  for (let i = 0; i < words.length; i++) {
    if (bannedWords.includes(words[i])) {
      words[i] = '*'.repeat(words[i].length);
    }
  }
  
  // Join the words back into a string
  return words.join(' ');
}


// Example:
const content = "This is a sample content with some bad words.";
const bannedWords = ["bad", "words"];

console.log(censorContent(content, bannedWords)); 
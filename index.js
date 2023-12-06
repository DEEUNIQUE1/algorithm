function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      // Increment length counter for each character
      lengthCounter++;
  
      // Check if the character is a letter and not a space
      if (char.match(/[a-zA-Z]/)) {
        // Increment word counter when a new word starts
        if (lengthCounter === 1 || sentence[i - 1] === ' ') {
          wordCounter++;
        }
  
        // Check if the character is a vowel
        if ('aeiouAEIOU'.includes(char)) {
          vowelCounter++;
        }
      }
    }
  
    // Output the results
    console.log(`Length of the sentence: ${lengthCounter}`);
    console.log(`Number of words in the sentence: ${wordCounter}`);
    console.log(`Number of vowels in the sentence: ${vowelCounter}`);
  }
  
  // Example usage:
  const sentence = "This is an example sentence.";
  analyzeSentence(sentence);
  
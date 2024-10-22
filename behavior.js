{
      description: "Level 1: Write an if-else statement to check if a number is positive.",
      solution: "let number = 5; if (number > 0) { result = 'positive'; } else { result = 'negative'; }",
      hint: "Use 'if' to check if the number is greater than 0.",
      secondHint: "let number = 5; if (number ___ 0) { result = 'positive'; } ___ { result = '___'; }"
  },
  {
      description: "Level 2: Write an if-else-if-else statement to check if a number is positive, negative, or zero.",
      solution: "let number = 0; if (number > 0) { result = 'positive'; } else if (number < 0) { result = 'negative'; } else { result = 'zero'; }",
      hint: "You'll need two conditions: one for positive and one for negative.",
      secondHint: "let number = 0; if (number ___ 0) { result = 'positive'; } ___ (number ___ 0) { result = 'negative'; } else { result = '___'; }"
  },
  {
      description: "Level 3: Write a switch statement to handle different cases based on a grade (A, B, C, D, F).",
      solution: "let grade = 'A'; switch (grade) { case 'A': result = 'Excellent'; break; case 'B': result = 'Good'; break; case 'C': result = 'Average'; break; case 'D': result = 'Poor'; break; case 'F': result = 'Fail'; break; default: result = 'Invalid grade'; }",
      hint: "Use 'switch' to handle different grades.",
      secondHint: "let grade = 'A'; switch (grade) { ___ 'A': result = 'Excellent'; ___; case 'B': result = 'Good'; break; case 'C': ___ = 'Average'; break; ___ 'D': result = 'Poor'; break; case 'F': result ___ 'Fail'; break; default: result = '___'; }"
  },
  {
    description: "Level 4: Reverse the string formed by a sequence of numbers.",
    solution: "let number = '12345'; result = number.split('').reverse().join('');",
    hint: "Use the 'split', 'reverse', and 'join' methods on the string.",
    secondHint: "let number = '12345'; number.split('').___().___('');"
  },
  {
    description: "Level 5: Use a loop to increment a number by 5 starting from the input number.",
    solution: "let number = parseInt('10'); for (let i = 0; i < 5; i++) { number += 5; } result = number;",
    hint: "Use a for loop that runs 5 times and increments the number by 5 each time.",
    secondHint: "let number = parseInt('10'); for (let i = 0; i < ___; i++) { number += ___; } result = number;"
  }
];

let currentLevel = 0;
const levelInfo = document.getElementById("level-info");
const challengeElement = document.getElementById("challenge");
const userInput = document.getElementById("user-input");
const feedbackElement = document.getElementById("feedback");
const submitButton = document.getElementById("submit-answer");
const hintButton = document.getElementById("hint-button");
const secondHintButton = document.getElementById("second-hint-button");
const hintElement = document.getElementById("hint");
const secondHintElement = document.getElementById("second-hint");
const completionMessage = document.getElementById("completion-message");
const levelCompletionMessage = document.getElementById("level-completion-message"); // New level completion message

// Function to load the next challenge
function loadChallenge() {
  if (currentLevel < challenges.length) {
      const challenge = challenges[currentLevel];
      levelInfo.textContent = `Level: ${currentLevel + 1}`;
      challengeElement.textContent = challenge.description;
      userInput.value = "";
      feedbackElement.textContent = "";
      hintElement.textContent = ""; 
      secondHintElement.textContent = ""; 
      levelCompletionMessage.style.display = "none"; // Hide level completion message
  } else {
      document.getElementById("game").style.display = "none";
      completionMessage.style.display = "block";
  }
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = userInput.value.trim();

  // Initialize the expectedOutput and userOutput to undefined for each check
  let expectedOutput, userOutput;

  try {
      expectedOutput = new Function("let result; " + challenges[currentLevel].solution + " return result;")();
  } catch (error) {
      feedbackElement.textContent = "Error in the expected solution.";
      return;
  }

  try {
      userOutput = new Function("let result; " + userAnswer + " return result;")();
  } catch (error) {
      feedbackElement.textContent = "There seems to be an error in your code. Try again!";
      return;
  }

  // Compare the outputs after both are successfully executed
  if (userOutput === expectedOutput) {
      feedbackElement.textContent = "Correct! Well done!";
      levelCompletionMessage.style.display = "block"; // Show level completion message
      currentLevel++;
      setTimeout(() => {
          loadChallenge();
      }, 2000); // Load next level after 2 seconds
  } else {
      feedbackElement.textContent = "Incorrect, try again!";
      levelCompletionMessage.style.display = "none"; // Hide level completion message if incorrect
  }
}

// Function to handle showing hints
function showHint() {
  hintElement.textContent = challenges[currentLevel].hint;
}

// Function to handle showing the second hint
function showSecondHint() {
  secondHintElement.textContent = challenges[currentLevel].secondHint;
}

// Function to handle enter key in the textarea
function handleEnter(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      checkAnswer();
  }
}

// Event listeners for buttons
submitButton.addEventListener("click", checkAnswer);
hintButton.addEventListener("click", showHint);
secondHintButton.addEventListener("click", showSecondHint);

// Load the first challenge
loadChallenge();

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

userInput.addEventListener("keydown", handleEnter); // Add this line to bind the event listener

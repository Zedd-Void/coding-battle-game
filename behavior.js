const challenges = [
  {
    description: "Level 1: Write an if-else statement to check if a number is positive.",
    solution: `if (number > 0) {  console.log('positive');} else {  console.log('negative');}`
  },
  {
    description: "Level 2: Write an if-else-if-else statement to check if a number is positive, negative, or zero.",
    solution: `if (number > 0) {\n  console.log('positive');\n} else if (number < 0) {\n  console.log('negative');\n} else {\n  console.log('zero');\n}`
  },
  {
    description: "Level 3: Write a switch statement to handle different cases based on a grade (A, B, C, D, F).",
    solution: `switch (grade) {\n  case 'A':\n    console.log('Excellent');\n    break;\n  case 'B':\n    console.log('Good');\n    break;\n  case 'C':\n    console.log('Average');\n    break;\n  case 'D':\n    console.log('Poor');\n    break;\n  case 'F':\n    console.log('Fail');\n    break;\n  default:\n    console.log('Invalid grade');\n}`
  },
  {
    description: "Level 4: Use a while loop to print numbers from 1 to 5.",
    solution: `let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`
  },
  {
    description: "Level 5: Use a do-while loop to print numbers from 1 to 5.",
    solution: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);`
  },
  {
    description: "Level 6: Use a for loop to iterate over an array and print each element.",
    solution: `const array = [1, 2, 3];\nfor (let i = 0; i < array.length; i++) {\n  console.log(array[i]);\n}`
  },
  {
    description: "Level 7: Concatenate two strings together.",
    solution: `const string1 = 'Hello';\nconst string2 = 'World';\nconst result = string1 + ' ' + string2;\nconsole.log(result);`
  },
  {
    description: "Level 8: Find the length of a string.",
    solution: `const string = 'Hello World';\nconst length = string.length;\nconsole.log(length);`
  },
  {
    description: "Level 9: Convert a string to uppercase.",
    solution: `const string = 'Hello World';\nconst uppercased = string.toUpperCase();\nconsole.log(uppercased);`
  },
  {
    description: "Level 10: Reverse a string.",
    solution: `const string = 'Hello World';\nconst reversed = string.split('').reverse().join('');\nconsole.log(reversed);`
  },
];

// Initialize game state
let currentLevel = 0;
const levelInfo = document.getElementById("level-info");
const challengeDescription = document.getElementById("challenge-description");
const challengeElement = document.getElementById("challenge");
const userInput = document.getElementById("user-input");
const feedbackElement = document.getElementById("feedback");
const submitButton = document.getElementById("submit-answer");
const completionMessage = document.getElementById("completion-message");

// Function to load the next challenge
function loadChallenge() {
  if (currentLevel < challenges.length) {
    const challenge = challenges[currentLevel];
    levelInfo.textContent = `Level: ${currentLevel + 1}`;
    challengeElement.textContent = challenge.description;
    userInput.value = "";
    feedbackElement.textContent = "";
  } else {
    document.getElementById("game").style.display = "none";
    completionMessage.style.display = "block";
  }
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = userInput.value.trim().toLowerCase();
  const correctAnswer = challenges[currentLevel].solution.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Moving to the next level...";
    currentLevel++;
    setTimeout(loadChallenge, 1000);
  } else {
    feedbackElement.textContent = "Incorrect, try again!";
  }
}

// Event listener for the submit button
submitButton.addEventListener("click", checkAnswer);


loadChallenge();

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Function to handle Enter key in the textarea
function handleEnter(event) {
  if (event.key === "Enter") {
    // Allow the default behavior (adding a new line)
    event.preventDefault(); // This prevents any form submission or other default actions, but the new line is added by default.
    const textarea = event.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Insert a new line at the cursor position
    textarea.value = textarea.value.substring(0, start) + "\n" + textarea.value.substring(end);

    // Move the cursor to the next line
    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
}

// Event listener for the submit button
submitButton.addEventListener("click", checkAnswer);

// Load the first challenge when the page loads
loadChallenge();

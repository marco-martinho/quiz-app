const questionForm = document.querySelector("#question-form");
const submittedQuestions = document.querySelector("#submitted-questions");

// Character counters

// Connect each text field to its character counter
const textFields = [
  {
    input: document.querySelector("#question-input"),
    counter: document.querySelector("#question-count"),
  },
  {
    input: document.querySelector("#answer-input"),
    counter: document.querySelector("#answer-count"),
  },
];

// Update the remaining character count whenever the user types
textFields.forEach(({ input, counter }) => {
  input.addEventListener("input", () => {
    counter.textContent = `${input.maxLength - input.value.length} characters left`;
  });
});

// Form submission

// Listen for the user submitting the form
questionForm.addEventListener("submit", (event) => {
  // Prevent the browser from reloading the page
  event.preventDefault();

  // Get the question and answer entered by the user
  const question = document.querySelector("#question-input").value;
  const answer = document.querySelector("#answer-input").value;

  // Get the language tag, remove surrounding spaces and convert it to uppercase
  const tag = document.querySelector("#tag-input").value.trim().toUpperCase();

  // Check whether the language tag is valid
  const validTags = ["PT", "ES", "FR", "EN", "DE", "?"];

  // Stop the submission if the language tag is not in the allowed list
  if (!validTags.includes(tag)) {
    alert("Please enter PT, ES, FR, EN, DE or ?");
    return;
  }

  // Create a new question card
  const questionCard = document.createElement("article");
  questionCard.classList.add("question-card");

  // Create the question title and insert the user's question
  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-title");
  questionTitle.textContent = question;

  // Create a paragraph for the answer
  const answerText = document.createElement("p");
  answerText.textContent = answer;

  // Create the language square and insert the validated tag
  const languageTag = document.createElement("span");
  languageTag.classList.add("language-marker");
  languageTag.textContent = tag;

  // Add the language square, question and answer to the card
  questionCard.append(languageTag, questionTitle, answerText);

  // Display the new card on the page
  submittedQuestions.append(questionCard);

  // Clear the form after successful submission
  questionForm.reset();

  // Reset both character counters to their initial values
  textFields.forEach(({ input, counter }) => {
    counter.textContent = `${input.maxLength} characters left`;
  });
});

const questionForm = document.querySelector("#question-form");
const submittedQuestions = document.querySelector("#submitted-questions");

// Character counters

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

textFields.forEach(({ input, counter }) => {
  input.addEventListener("input", () => {
    counter.textContent = `${input.maxLength - input.value.length} characters left`;
  });
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.querySelector("#question-input").value;
  const answer = document.querySelector("#answer-input").value;
  const tag = document.querySelector("#tag-input").value;

  const questionCard = document.createElement("article");
  questionCard.classList.add("question-card");

  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-title");
  questionTitle.textContent = question;

  const answerText = document.createElement("p");
  answerText.textContent = answer;

  const languageTag = document.createElement("span");
  languageTag.classList.add("language-marker");
  languageTag.textContent = tag;

  questionCard.append(languageTag, questionTitle, answerText);

  submittedQuestions.append(questionCard);

  questionForm.reset();
});

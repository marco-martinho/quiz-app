// Bookmark functionality

// Find all question cards on the Bookmarks page
const questionCards = document.querySelectorAll(".question-card");

// Show and hide answer explanations in each card
questionCards.forEach((questionCard) => {
  // Find the answer buttons inside the current card
  const answerButtons = questionCard.querySelectorAll(".answer-toggle");

  answerButtons.forEach((button) => {
    // Listen for clicks on the answer button
    button.addEventListener("click", () => {
      // Find the feedback section containing the clicked button
      const feedback = button.closest(".answer-feedback");

      // Find the explanation inside that feedback section
      const answer = feedback.querySelector(".answer-feedback__answer");

      // Show or hide the explanation
      const isHidden = answer.classList.toggle("hidden");

      // Update the button text
      button.textContent = isHidden ? "show answer" : "hide answer";

      // Update the accessibility state
      button.setAttribute("aria-expanded", !isHidden);
    });
  });
});

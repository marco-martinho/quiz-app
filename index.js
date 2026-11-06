// Bookmark functionality

// Find all question cards on the Home page
const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((questionCard) => {
  // Find the bookmark button inside the current card
  const bookmarkButton = questionCard.querySelector(".bookmark-button");

  // Check that the card has a bookmark button
  if (bookmarkButton) {
    // Listen for clicks on the bookmark button
    bookmarkButton.addEventListener("click", () => {
      // Toggle the "is-bookmarked" class
      // This changes the bookmark's appearance in CSS
      const isBookmarked = bookmarkButton.classList.toggle("is-bookmarked");

      // Update the button state for accessibility
      bookmarkButton.setAttribute("aria-pressed", isBookmarked);
    });
  }

  // Show and hide answer explanations

  // Find the answer buttons inside the current card
  const answerButtons = questionCard.querySelectorAll(".answer-toggle");

  answerButtons.forEach((button) => {
    // Listen for clicks on the answer button
    button.addEventListener("click", () => {
      // Find the feedback section containing the clicked button
      const feedback = button.closest(".answer-feedback");

      // Find the explanation paragraph inside that section
      const answer = feedback.querySelector(".answer-feedback__answer");

      // Toggle the "hidden" class to show or hide the explanation
      const isHidden = answer.classList.toggle("hidden");

      // Change the button text depending on the answer's visibility
      button.textContent = isHidden ? "show answer" : "hide answer";

      // Update the accessibility state
      button.setAttribute("aria-expanded", !isHidden);
    });
  });
});

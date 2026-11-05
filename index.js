// Bookmark functionality

const questionCards = document.querySelectorAll(".question-card");

const savedBookmarks = JSON.parse(
  localStorage.getItem("bookmarkedQuestions") || "[]",
);

questionCards.forEach((questionCard) => {
  const bookmarkButton = questionCard.querySelector(".bookmark-button");

  if (bookmarkButton) {
    const isBookmarked = savedBookmarks.includes(questionCard.id);

    bookmarkButton.classList.toggle("is-bookmarked", isBookmarked);
    bookmarkButton.setAttribute("aria-pressed", isBookmarked);

    bookmarkButton.addEventListener("click", () => {
      const isBookmarked = bookmarkButton.classList.toggle("is-bookmarked");

      bookmarkButton.setAttribute("aria-pressed", isBookmarked);

      const updatedBookmarks = questionCards
        .filter((card) =>
          card
            .querySelector(".bookmark-button")
            .classList.contains("is-bookmarked"),
        )
        .map((card) => card.id);

      localStorage.setItem(
        "bookmarkedQuestions",
        JSON.stringify(updatedBookmarks),
      );
    });
  }

  // Show and hide answer explanations

  const answerButtons = questionCard.querySelectorAll(".answer-toggle");

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const feedback = button.closest(".answer-feedback");
      const answer = feedback.querySelector(".answer-feedback__answer");
      const isHidden = answer.classList.toggle("hidden");

      button.textContent = isHidden ? "show answer" : "hide answer";
      button.setAttribute("aria-expanded", !isHidden);
    });
  });
});

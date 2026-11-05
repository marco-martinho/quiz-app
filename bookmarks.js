// Bookmark functionality

const questionList = document.querySelector(".bookmark-list");

const savedBookmarks = JSON.parse(
  localStorage.getItem("bookmarkedQuestions") || "[]",
);

fetch("index.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const homeDocument = parser.parseFromString(html, "text/html");

    const homeCards = homeDocument.querySelectorAll(".question-card");

    homeCards.forEach((questionCard) => {
      if (savedBookmarks.includes(questionCard.id)) {
        questionList.appendChild(questionCard);
      }
    });

    if (questionList.children.length === 0) {
      questionList.innerHTML =
        "<p>No bookmarks yet. Save a question from Home!</p>";
    }
  })
  .catch((error) => {
    console.error("Could not load bookmarked questions:", error);
  });

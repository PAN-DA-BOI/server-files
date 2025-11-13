// Function to mark a lesson as done
function markLessonAsDone(lessonId) {
  const progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};
  progress[lessonId] = true;
  localStorage.setItem("lessonProgress", JSON.stringify(progress));

  // Update UI: change button style
  const button = document.querySelector(`.done-button[data-lesson="${lessonId}"]`);
  if (button) {
    button.textContent = "Done!";
    button.style.backgroundColor = "#4CAF50"; // Green
    button.disabled = true;
  }

  // Unlock the next lesson
  const nextLesson = getNextLesson(lessonId);
  if (nextLesson) {
    const nextLessonElement = document.querySelector(`.lesson[data-lesson="${nextLesson}"]`);
    if (nextLessonElement) {
      nextLessonElement.classList.add("unlocked");
    }
  }
}

// Helper: Get next lesson
function getNextLesson(lessonId) {
  const [section, lesson] = lessonId.split("-");
  const nextLesson = `${section}-${parseInt(lesson) + 1}`;
  return lessons[nextLesson] ? nextLesson : null;
}

// Add event listeners to all "Done" buttons
document.querySelectorAll(".done-button").forEach(button => {
  button.addEventListener("click", function() {
    const lessonId = this.getAttribute("data-lesson");
    markLessonAsDone(lessonId);
  });
});

// Load progress on page load
function loadProgress() {
  const progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};
  Object.keys(progress).forEach(lesson => {
    if (progress[lesson]) {
      const button = document.querySelector(`.done-button[data-lesson="${lesson}"]`);
      if (button) {
        button.textContent = "Done!";
        button.style.backgroundColor = "#4CAF50";
        button.disabled = true;
      }
      const nextLesson = getNextLesson(lesson);
      if (nextLesson) {
        const nextLessonElement = document.querySelector(`.lesson[data-lesson="${nextLesson}"]`);
        if (nextLessonElement) {
          nextLessonElement.classList.add("unlocked");
        }
      }
    }
  });
}

// Call loadProgress when the page loads
document.addEventListener("DOMContentLoaded", loadProgress);

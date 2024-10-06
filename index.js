const correctAnswer = ["C", "B", "D", "B"]
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
  event.preventDefault();

  const userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value];

  let score = 0;
  userAnswers.forEach((userAns, index) => {
    if (userAns === correctAnswer[index]) {
      score += 1;
      questions[index].classList.add("correct")
    } else {
      questions[index].classList.add("wrong")

    }
  });

  console.log(`Score: ${score}`);

  scrollTo(0, 0);
  result.querySelector("p").textContent = `Your score is ${score}/4`;

  result.classList.remove("hide");
});
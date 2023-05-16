const choiceArray = document.querySelectorAll(".choice");

choiceArray.forEach((card) => {
  card.addEventListener("click", () => {
    choiceArray.forEach((element) => {
      element.classList.remove("expand", "expand-height", "unset");
      element.classList.add("small");
    });
    card.classList.remove("small");
    card.classList.add("expand", "expand-height");
  });
});

const chips = document.querySelectorAll(".axis-chip");
const cards = document.querySelectorAll("[data-axis]");

function setAxis(axis) {
  chips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.axis === axis);
  });

  cards.forEach((card) => {
    const axes = card.dataset.axis.split(" ");
    const match = axis === "all" || axes.includes(axis);
    card.classList.toggle("dimmed", !match);
    card.classList.toggle("highlighted", match && axis !== "all");
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setAxis(chip.dataset.axis));
});

setAxis("all");

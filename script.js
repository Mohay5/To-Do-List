const moreLinks = document.querySelectorAll(".more-link");

for (let i = 0; i < moreLinks.length; i++) {
  moreLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const details = this.parentNode;
    if (details.style.display === "none") {
      details.style.display = "block";
      this.innerHTML = "Show less";
    } else {
      details.style.display = "none";
      this.innerHTML = "Show more";
    }
  });
}

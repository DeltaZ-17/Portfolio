document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".portfolio-filters a");
  const portfolioItems = document.querySelectorAll(".portfolio-item .col-sm-4");

  // Gère le clic sur un filtre
  filters.forEach((filter) => {
    filter.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche le lien de changer de page

      const selectedCategory = this.getAttribute("data-group");

      // Parcourt les projets du portefeuille
      portfolioItems.forEach((item) => {
        const itemCategories = item.getAttribute("data-groups").split(" ");
        const shouldDisplay =
          selectedCategory === "all" ||
          itemCategories.includes(selectedCategory);

        // Affiche ou masque le projet en fonction de la catégorie sélectionnée
        item.style.display = shouldDisplay ? "block" : "none";
      });

      // Met en surbrillance le filtre sélectionné
      filters.forEach((f) => {
        f.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

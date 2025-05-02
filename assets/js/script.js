const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    // Fecha todos os outros
    document.querySelectorAll(".accordion__items").forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    // Alterna o clicado
    accordionItem.classList.toggle("active");
  });
});

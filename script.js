const filter = document.querySelector(".filter");
const filterContent = document.querySelector(".filter-content");

function openFilter() {
    if (filterContent.style.display === "none") {
      filterContent.style.display = "block";
    } else {
      filterContent.style.display = "none";
    }
  };




filter.addEventListener("click", openFilter);
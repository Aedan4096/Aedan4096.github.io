const filter = document.querySelector(".filter");
const filterContent = document.querySelector(".filter-content");
const toggleBtn = document.getElementById("theme-toggle");
const themeSheet = document.getElementById("theme-sheet");

function openFilter() {
    if (filterContent.style.display === "none") {
      filterContent.style.display = "block";
    } else {
      filterContent.style.display = "none";
    }
  };

function themeToggle() {
if (themeSheet.getAttribute("href") === "style.css") {
        themeSheet.setAttribute("href", "darkmode.css");
    } else {
        themeSheet.setAttribute("href", "style.css");
    }
};


filter.addEventListener("click", openFilter);
toggleBtn.addEventListener("click", themeToggle);
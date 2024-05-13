document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-button");
    const destinations = document.querySelectorAll(".destination");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filterValue = button.getAttribute("data-filter");
  
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
  
        destinations.forEach(function (destination) {
          if (filterValue === "all") {
            destination.classList.remove("hidden");
          } else if (destination.classList.contains(filterValue)) {
            destination.classList.remove("hidden");
          } else {
            destination.classList.add("hidden");
          }
        });
      });
    });
  });
  
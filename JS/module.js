

  document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.getElementsByClassName("accordion-item");
  
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function() {
        var isActive = this.classList.contains("active");
        closeAllAccordionItems();
  
        if (!isActive) {
          this.classList.add("active");
          var content = this.querySelector(".accordion-content");
          content.style.display = "block";
          this.style.borderBottom = "1px solid black"; // Remove bottom border
          content.style.border = "none"; // Add border to content
        }
      });
    }
  
    function closeAllAccordionItems() {
      for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove("active");
        var content = accordions[i].querySelector(".accordion-content");
        content.style.display = "none";
        accordions[i].style.borderBottom = "1px solid black"; // Add bottom border
        content.style.borderBottom = "none"; // Remove border from content
      }
    }
  });
  
  
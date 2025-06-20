"use strict";
{
  const menuItems = document.querySelectorAll(".menu li a");
  const contentItems = document.querySelectorAll(".content");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      clickedItem.classList.add("active");

      contentItems.forEach((item) => {
        item.classList.remove("active");
      });

      document.getElementById(clickedItem.dataset.id).classList.add("active");
    });
  });
}

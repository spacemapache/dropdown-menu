// get all dropdowns from the document
const dropdowns = document.querySelectorAll(".dropdown");

// loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  // get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    // add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    // add the rotate styles to the caret element
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // loop through all option elements
  options.forEach((option) => {
    option.addEventListener("click", () => {
      // change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((opt) => {
        opt.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

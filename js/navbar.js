(() => {
  const navbar = document.querySelector(".navbar");
  const navbarItemHasDropdown = navbar.querySelector(
    ".navbar-item.has-dropdown"
  );
  const dropdownButton = navbarItemHasDropdown.querySelector(
    ".dropdown-button"
  );
  const dropdown = navbarItemHasDropdown.querySelector(".dropdown");

  dropdownButton.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("is-active");
    navbarItemHasDropdown.classList.toggle("is-active");
  });

  dropdown.addEventListener("click", (event) => {
    dropdownButton.classList.toggle("is-active");
    navbarItemHasDropdown.classList.toggle("is-active");
  });
})();


//Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Show the current year
show_date = document.getElementById("currentyear");
full_date = new Date();
date_year = full_date.getFullYear();
show_date.textContent = date_year;

//show the last modification
show_last_modified = document.getElementById("lastedit");
last_modified = new Date(document.lastModified);
show_last_modified.textContent = last_modified;
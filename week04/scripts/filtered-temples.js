//Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Temple objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Colorado Springs COlorado Temple",
    location: "Flying Horse Club Drive and Barossa Valley Road, Colorado",
    dedicated: "Not, completed, yet",
    area: 45000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/colorado-springs-colorado-temple/colorado-springs-colorado-temple-59991-main.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "57 Independence Ave North Ridge",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Lubumbashi Democratic Republic of the Congo Temple",
    location: "Av. Kashobwe, Lubumbashi",
    dedicated: "Not, completed, yet",
    area: 16700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lubumbashi-democratic-republic-of-the-congo-temple/lubumbashi-democratic-republic-of-the-congo-temple-26994-main.jpg"
  },
];


//Filtering through the navigation menu
let old = document.querySelector("#old");
let theNew = document.querySelector("#new");
let large = document.querySelector("#large");
let small = document.querySelector("#small");
let home = document.querySelector("#home");

if (showHome(temples)){
  showHome(temples);
}
else if (showOld(temples)) {
  showOld(temples);
}
else {
temples.forEach((temple) => {
    //Displaying figures
    const myFigs = document.querySelector(".figs");
    const fig = document.createElement("figure");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const span = document.createElement("span");
    const span1 = p1.appendChild(span);
    const span2 = p2.appendChild(span);
    const span3 = p3.appendChild(span);
    const img = document.createElement("img");
    myFigs.appendChild(fig);
    fig.appendChild(h2);
    fig.appendChild(p1);
    fig.appendChild(p2);
    fig.appendChild(p3);
    fig.appendChild(img);
    console.log(temple.templeName);
    h2.innerHTML = temple["templeName"];
    p1.innerHTML = "Location: " + temple.location;
    p2.innerHTML = "Dedicated: " + temple.dedicated;
    p3.innerHTML = "Size: " + temple.area + "sq ft";
    img.src = temple.imageUrl;
    img.loading = "lazy";
    //Style
    myFigs.style.display = "grid";
    img.style.width = "200px";
    fig.style.textAlign = "center";
    fig.style.border = "solid 1px #CCC";
    fig.style.background = "#EEE";
    fig.style.padding = "1rem 1rem";
    img.style.boxShadow = "0px 0px 4px 4px #555";
    img.style.width = "100%";

    //MediaQuery
    const mediaQ2 = window.matchMedia("(min-width: 1100px)");
    if (mediaQ2.matches) {
      console.log("Great! It's working.");
      myFigs.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    else {
      const mediaQ = window.matchMedia("(min-width: 800px)");
      if (mediaQ.matches) {
        console.log("Great! It's working.");
        myFigs.style.gridTemplateColumns = "repeat(2, 1fr)";
      }
      else {
        console.log("Sorry!");
        myFigs.style.gridTemplateColumns = "repeat(1, 1fr)";    
      }
    }
  }); 
}

function showHome(x) {
  home.addEventListener("click", () => {
    x.forEach((temple) => {
    //Displaying figures
    const myFigs = document.querySelector(".figs");
    const fig = document.createElement("figure");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const span = document.createElement("span");
    const span1 = p1.appendChild(span);
    const span2 = p2.appendChild(span);
    const span3 = p3.appendChild(span);
    const img = document.createElement("img");
    myFigs.appendChild(fig);
    fig.appendChild(h2);
    fig.appendChild(p1);
    fig.appendChild(p2);
    fig.appendChild(p3);
    fig.appendChild(img);
    console.log(temple.templeName);
    h2.innerHTML = temple["templeName"];
    p1.innerHTML = "Location: " + temple.location;
    p2.innerHTML = "Dedicated: " + temple.dedicated;
    p3.innerHTML = "Size: " + temple.area + "sq ft";
    img.src = temple.imageUrl;
    img.loading = "lazy";
    //Style
    myFigs.style.display = "grid";
    img.style.width = "200px";
    fig.style.textAlign = "center";
    fig.style.border = "solid 1px #CCC";
    fig.style.background = "#EEE";
    fig.style.padding = "1rem 1rem";
    img.style.boxShadow = "0px 0px 4px 4px #555";
    img.style.width = "100%";

    //MediaQuery
    const mediaQ2 = window.matchMedia("(min-width: 1100px)");
    if (mediaQ2.matches) {
      console.log("Great! It's working.");
      myFigs.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    else {
      const mediaQ = window.matchMedia("(min-width: 800px)");
      if (mediaQ.matches) {
        console.log("Great! It's working.");
        myFigs.style.gridTemplateColumns = "repeat(2, 1fr)";
      }
      else {
        console.log("Sorry!");
        myFigs.style.gridTemplateColumns = "repeat(1, 1fr)";    
      }
    }
  });
  });
}
function showOld(x) {
  old.addEventListener("click", () => {
    x.filter((temple) => {
    if (temple.dedicated[0] < 1900){
    //Displaying figures
      const myFigs = document.querySelector(".figs");
      const fig = document.createElement("figure");
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const span = document.createElement("span");
      const span1 = p1.appendChild(span);
      const span2 = p2.appendChild(span);
      const span3 = p3.appendChild(span);
      const img = document.createElement("img");
      myFigs.appendChild(fig);
      fig.appendChild(h2);
      fig.appendChild(p1);
      fig.appendChild(p2);
      fig.appendChild(p3);
      fig.appendChild(img);
      console.log(temple.templeName);
      h2.innerHTML = temple["templeName"];
      p1.innerHTML = "Location: " + temple.location;
      p2.innerHTML = "Dedicated: " + temple.dedicated;
      p3.innerHTML = "Size: " + temple.area + "sq ft";
      img.src = temple.imageUrl;
      img.loading = "lazy";
      //Style
      myFigs.style.display = "grid";
      img.style.width = "200px";
      fig.style.textAlign = "center";
      fig.style.border = "solid 1px #CCC";
      fig.style.background = "#EEE";
      fig.style.padding = "1rem 1rem";
      img.style.boxShadow = "0px 0px 4px 4px #555";
      img.style.width = "100%";

      //MediaQuery
      const mediaQ2 = window.matchMedia("(min-width: 1100px)");
      if (mediaQ2.matches) {
        console.log("Great! It's working.");
        myFigs.style.gridTemplateColumns = "repeat(3, 1fr)";
      }
      else {
        const mediaQ = window.matchMedia("(min-width: 800px)");
        if (mediaQ.matches) {
          console.log("Great! It's working.");
          myFigs.style.gridTemplateColumns = "repeat(2, 1fr)";
        }
        else {
          console.log("Sorry!");
          myFigs.style.gridTemplateColumns = "repeat(1, 1fr)";    
        }
      }
    }
    });
  });
}


//Show the current year
show_date = document.getElementById("currentyear");
full_date = new Date();
date_year = full_date.getFullYear();
show_date.textContent = date_year;

//show the last modification
show_last_modified = document.getElementById("lastedit");
last_modified = new Date(document.lastModified);
show_last_modified.textContent = last_modified;

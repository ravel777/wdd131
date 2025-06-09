//Wind-Chill
var t = 35; //In Fahrenheit
s = 5; //In miles per hour

console.log(`WindChill is: ${windChill(t, s)}`);

tmpt = document.querySelector(".temperature")
cond = document.querySelector(".conditions")
spd = document.querySelector(".wind")
windchill = document.querySelector(".wind-chill")

tmpt.textContent = t + "°F";
spd.textContent = s + " mph";
cond.textContent = "Normal";
windchill.innerHTML = windChill(t, s) + "°F";

function windChill(temp, speed) {
    if (temp > 50 || speed < 3) {
        return "Sorry! The Wind-chill is not applicable for these conditions.\nMake sure that the Temperature is <= to 50 F and the Speed is >= to 3 mph.";
    }
    else {
        windC = 35.74 + 0.6215*temp - 35.75*Math.pow(speed, 0.16) + 0.4275*temp*Math.pow(speed, 0.16);
    }
    return windC.toFixed(2);
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
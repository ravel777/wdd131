let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {section: "5", enrolled: "Yes", instructor: "Ravel.B"},
        {section: "7", enrolled: "Not yet", instructor: "Severin.B"}
    ],
    other: () => console.log(`code: ${aCourse.code}, credit: ${aCourse.credits}`)
}
function showResult(val){ 
    const main = document.querySelector("main");
    const myh1 = document.createElement("h1");
    show = main.appendChild(myh1);
    give = `the course is: ${val.title}, the section is: ${val.sections[0].section}`;
    return give;
}

document.querySelector("main").innerHTML = inTable(aCourse);
//Output in a table
function inTable(val) {
    val.sections.forEach(function(sect) {
        return `
            <tr>
                <td>${sect.section}</td>
                <td>${sect.enrolled}</td>
                <td>${sect.instructor}</td>
            </tr>
        `
    });
}


const h2 = document.createElement("h2");
document.querySelector("main").appendChild(h2);

h2.innerHTML = aCourse.other();

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
console.log(countriesLong)
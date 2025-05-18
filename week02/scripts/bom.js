//The input, button and list variables
var myInput = document.querySelector("#favchap");
var myButton = document.querySelector("button");
var myUl = document.querySelector("#list");

//Creating li which are children for ul
myLi = document.createElement("li");
myUl.appendChild(myLi);

//Styles for li
myLi.style.border = "solid 1px #BBB";
myLi.style.width = "100%";
myLi.style.float = "right";

//Creating the delete btn
delButton = document.createElement("button");

//Styles for the btn
delButton.style.backgroundColor = "#DD0000";
delButton.style.color = "#FFF";
delButton.style.fontWeight = "bold";
delButton.style.padding = "6px 10px";

//On click
//If input is empty, displaying a message in the h2 tag
myMsg = document.querySelector("#msg");

myButton.addEventListener("click", function() {
    if(myInput.value.trim() !== ""){
        myMsg.innerHTML = "";
        myMsg.style = "none";
        
        for(i=0; i<10; i++) {
            myLi.innerHTML = myInput.value;
            delButton.textContent = "X";
            myLi.appendChild(delButton);

        }
        myInput.value = "";
        myInput.focus();
    }
    else {
        myMsg.innerHTML = "The input is empty. Please, enter at least one Chapter";
        myMsg.style.backgroundColor = "#DD0000";
        myMsg.style.color = "#FFF";
        myMsg.style.marginTop = "10px";
        myMsg.style.padding = "5px 5px";
        myMsg.style.textAlign = "center";

    }
});

//Remove a Chapter
delButton.addEventListener("click", function() {
    myUl.removeChild(myLi);
    location.reload();
    myInput.focus();
});
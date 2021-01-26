console.log("You have entered the dragon's den (the Developer Tools). Please tread carefully.");

let year_element = document.getElementById('year');
let year = new Date().getFullYear();

function write_year(text) {
    return document.createTextNode(text);
}

year_element.appendChild(write_year(year));

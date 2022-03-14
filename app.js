window.onscroll = function() {
    myFunction()
};

console.log("scrollign caling");
var navbar = document.getElementById("navbarID");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


//Data tables js
async function myFunc(){
    let container = document.getElementsByClassName('Data-table');
    console.log(container);

    let Dtable = document.querySelector('table');
    let thead = document.querySelector('thead');
    let tbody = document.querySelector('tbody');
    console.log(data);
    const headings = Object.keys(data[0]);
    console.log(headings);

    thead.innerHTML = "<tr></tr>";
    tbody.innerHTML = ""

    for(let i=0; i<headings.length; i++){
        const heading = document.createElement("th");
        heading.textContent = headings[i];
        thead.querySelector("tr").appendChild(heading);
    }

    for(let i=0; i<50; i++){
        const row = document.createElement("tr");
        console.log(data[i]);
        let rowId = Object.keys(data[i])
        for(let j=0; j<rowId.length; j++){
            
            console.log("in", rowId[j]);
            const celldata = document.createElement("td")
            celldata.textContent = data[i][rowId[j]];
            console.log(data[i]);
            row.appendChild(celldata)
        }
        tbody.appendChild(row);
    }
}

(async function (node){
    let table = document.querySelector('Data-table')
    let thead = document.getElementsByClassName()

})
// data.js
let planet_data = [{
        "No": "1.",
        "Name": "Alderaan",
        "Diameter": "12500",
        "Climate": "temperate",
        "Population": "2000000000"
    },
    {
        "No": "2.",
        "Name": "Yavin IV",
        "Diameter": "10200",
        "Climate": "temperate, tropical",
        "Population": "1000"
    },
    {
        "No": "3.",
        "Name": "Hoth",
        "Diameter": "7200",
        "Climate": "frozen",
        "Population": "unknown"
    },
    {
        "No": "4.",
        "Name": "Dagobah",
        "Diameter": "8900",
        "Climate": "murky",
        "Population": "unknown"
    },
    {
        "No": "5.",
        "Name": "Bespin",
        "Diameter": "118000",
        "Climate": "temperate",
        "Population": "6000000",
    },
    {
        "No": "6.",
        "Name": "Endor",
        "Diameter": "4900",
        "Climate": "temperate",
        "Population": "30000000"
    },
    {
        "No": "7.",
        "Name": "Naboo",
        "Diameter": "12120",
        "Climate": "temperate",
        "Population": "4500000000"
    },
    {
        "No": "8.",
        "Name": "Coruscant",
        "Diameter": "12240",
        "Climate": "temperate",
        "Population": "1000000000000",
    },
    {
        "No": "9.",
        "Name": "Kamino",
        "Diameter": "19720",
        "Climate": "temperate",
        "Population": "1000000000",
    },
    {
        "No": "10.",
        "Name": "Geonosis",
        "Diameter": "11370",
        "Climate": "temperate, arid",
        "Population": "100000000000"
    }
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(planet_data[0]);
  generateTableHead(table, data);
  generateTable(table, planet_data);

  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

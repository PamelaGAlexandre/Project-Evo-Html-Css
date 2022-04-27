const addValuesToTable = (object) => {
  const initialTable = document.querySelector(".initial-table");
  object.forEach((i) => {
    let tr = document.createElement("tr");

    const cell1 = tr.insertCell(0);
    const cell2 = tr.insertCell(1);
    const cell3 = tr.insertCell(2);
    const cell4 = tr.insertCell(3);

    cell1.innerHTML = i.taste;
    cell2.innerHTML = `R$${i.sixParts}`;
    cell3.innerHTML = `R$${i.eightParts}`;
    cell4.innerHTML = `${i.validDays}`;

    initialTable.appendChild(tr);
  });
};

let initialValues = [
  {
    taste: "Mussarela",
    sixParts: "29,99",
    eightParts: "38,99",
    validDays: "Seg a Dom",
  },
  {
    taste: "Calabresa",
    sixParts: "29,99",
    eightParts: "38,99",
    validDays: "Ter a Dom",
  },
  {
    taste: "Portuguesa",
    sixParts: "29,99",
    eightParts: "38,99",
    validDays: "Ter a Dom",
  },
  {
    taste: "Marguerita",
    sixParts: "31,99",
    eightParts: "39,99",
    validDays: "Seg a Dom",
  },
];

(function () {
  const initialTable = document.querySelector(".initial-table");
  let tr = document.createElement("tr");

  const cell1 = tr.insertCell(0);
  const cell2 = tr.insertCell(1);
  const cell3 = tr.insertCell(2);
  const cell4 = tr.insertCell(3);

  cell1.innerHTML = "Sabor";
  cell2.innerHTML = "6 pedaços";
  cell3.innerHTML = "8 pedaços";
  cell4.innerHTML = "Dias válidos";

  initialTable.appendChild(tr);

  addValuesToTable(initialValues);
})();

(function () {
  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taste = document.querySelector("#taste").value;
    const sixParts = document.querySelector("#six-parts").value;
    const eightParts = document.querySelector("#eight-parts").value;
    const validDays = document.querySelector("#valid-days").value;

    addValuesToTable([{ taste, sixParts, eightParts, validDays }]);
  });
})();

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

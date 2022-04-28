const addValuesToTable = (object) => { //adiciona o objeto na tabela
  const initialTable = document.querySelector(".initial-table");
  object.forEach((i) => {
    let tr = document.createElement("tr"); //crio o elemento TR

    const cell1 = tr.insertCell(0); //adiciono 4 células dentro do elemento tr
    const cell2 = tr.insertCell(1);
    const cell3 = tr.insertCell(2);
    const cell4 = tr.insertCell(3);

    cell1.innerHTML = i.taste; // adiciono nas células os valores de dentro do objeto
    cell2.innerHTML = `R$${i.sixParts}`;
    cell3.innerHTML = `R$${i.eightParts}`;
    cell4.innerHTML = `${i.validDays}`;

    initialTable.appendChild(tr);
  });
};

(function () {
  const fixedValues = [
    {
    taste: "Sabor",
    sixParts: "6 pedaços",
    eightParts: "8 pedaços",
    validDays: "Dias válidos",
    }
  ];

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

  addValuesToTable(fixedValues);
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
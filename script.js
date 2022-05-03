let cont = 1;

const addValuesToTable = (object) => { //funcao que adiciona valores na tabela
  const initialTable = document.querySelector(".table-values"); //pega o tbody do html 
  object.forEach((i) => { 
    let tr = document.createElement("tr"); //cria um elemento do tipo html

    const cell1 = tr.insertCell(0); //adiciona 4 células (colunas)
    const cell2 = tr.insertCell(1);
    const cell3 = tr.insertCell(2);
    const cell4 = tr.insertCell(3);

    cell1.innerHTML = cont; //adiciona na primeira célula o id
    cell2.innerHTML = `${i.taste}`; //na segunda célula o sabor
    cell3.innerHTML = `R$${Number(i.value).toFixed(2)}`; // na terceira célula o preço
    cell4.innerHTML = `${i.ingredients}`; //na quarta célula os ingredientes

    initialTable.appendChild(tr); 
    cont++;
  });
};

(function () {
  let fidexValues = [ //valores fixos
    {
      taste: "Mussarela",
      value: 29.99,
      ingredients: "queijo, azeitona, oregano, molho de tomate",
    },
    {
      taste: "Calabresa",
      value: 29.99,
      ingredients: "calabresa, azeitona, oregano, cebola, molho de tomate",
    },
    {
      taste: "Bauru",
      value: 29.99,
      ingredients: "mussarela, azeitona, oregano, presunto, tomate, molho tomate",
    },
  ];

  addValuesToTable(fidexValues); //adiciono os valores fixos
})();

(function () { //funcao que adiciona valores dinamicos na tabela
  const submitBtn = document.querySelector(".btn.btn-primary"); //pego o botão  de submit
  submitBtn.addEventListener("click", (e) => { // crio um event listener pro botão de tipo click
    e.preventDefault(); //impede que ao clicar no botão de submit, ele resete a página
    const taste = document.querySelector(".taste-type").value; //pega os valores dos inputs
    let value = document.querySelector(".value-type").value;
    const ingredients = document.querySelector(".ingredients-type").value;

    if(!taste || !value || !ingredients){ //verifica se faltou algum valor dos inputs
      window.alert("Faltou algum campo!");
      return;
    }

    if(isNaN(value)) { //verfica se o input de valor é do tipo número
      window.alert("Digite um valor válido no campo 'valor'!");
      document.querySelector(".value-type").value = '';
      return;
    }
  
   value = Number(value) //transformar o input de valor em numero
   addValuesToTable([{ taste, value, ingredients }]); //chama a função de adicionar valores na tabela 

   document.querySelector(".taste-type").value = ''; //esvazia os campos dos inputs após serem adicionados na tabela
   document.querySelector(".value-type").value = '';
   document.querySelector(".ingredients-type").value = '';
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

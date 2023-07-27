function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.classList.add('overlay');
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-450px";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.classList.remove('overlay');
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("fa-minus");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.body.classList.add('overlay');
  }

  function closeNav() {
    document.getElementById("mySidenav").style.left = "-450px";
    document.body.classList.remove('overlay');
  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("fa-minus");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }


// Remova a função getJson() do arquivo main.js

// Atualize o trecho do código $(document).ready(async () => { ... })
// para verificar se os dados foram carregados antes de usar a variável dataRadio

$(document).ready(async () => {
  // Verifica se os dados foram carregados corretamente antes de prosseguir
  if (!dataRadio) {
    console.log('Data not loaded!'); // Exibe uma mensagem de erro no console caso os dados não tenham sido carregados corretamente
    return;
  }

  let actualRadio = dataRadio[0]; // Inicializa actualRadio com o primeiro item do array dataRadio

  // Restante do código para renderizar os elementos e adicionar eventos, conforme necessário
  // ...
});
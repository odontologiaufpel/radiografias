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

async function getJson() {
  try {
    const response = await fetch('assets/content/data.json');
    const json = await response.json();
    return json;
  } catch (e) {
    console.log('Error!', e);
  }
}

async function renderItem({
  number,
  name,
  description,
  baseImage,
  printImage
}) {
  try {
    $('.title').text(name);
    $('.number-text').text(name);
    $('.container-image img').attr('src', baseImage);
    $('.description').text(description);
    $('#fullscreen').css('backgroundImage', `url(${baseImage})`);
  } catch (e) {
    console.log('Error!', e);
  }
}

async function renderList(arr) {
  arr.map(({
    number,
    name
  }) => {
    $('.modal-list').append(`<li class="radio-item">
      <a href="#"> <span class="number-radio">${number} - </span>${name}</a>
    </li>`);
  });
}

$(document).ready(async () => {
  const dataRadio = await getJson();
  let actualRadio = dataRadio[0]; // initializing the first area on home

  await renderItem(actualRadio);
  await renderList(dataRadio);

  // next button action
  $('.next').click(async () => {
    actualRadio = dataRadio[actualRadio.number % dataRadio.length];
    await renderItem(actualRadio);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  // previous button action
  $('.previous').click(async () => {
    actualRadio.number - 2 < 0 ? actualRadio = dataRadio[(dataRadio.length - 1) % dataRadio.length] : actualRadio = dataRadio[(actualRadio.number - 2) % dataRadio.length];
    await renderItem(actualRadio);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  // opening modal
  $('header .ham_menu').click(() => {
    $('.modal').toggle();
    $('.ham_menu').toggleClass('active');
  });

  // closing fullscreen
  $('#fullscreen .ham_menu').click(() => {
    $('#fullscreen').fadeOut();
    $('body').css('position', 'static');
  });

  // showing fullscreen
  $('.container-image').click(() => {
    $('#fullscreen').fadeIn();
    $('body').css('position', 'fixed');
  });

  // print image
  $('.print-areas').click(() => {
    $('#fullscreen').css('background-image', `url(${actualRadio.printImage})`);
    $('.print-areas').hide();
    $('.remove-areas').show();
  });

  // remove areas
  $('.remove-areas').click(() => {
    $('#fullscreen').css('background-image', `url(${actualRadio.baseImage})`);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  $('.modal-list').on('click', 'a', async e => {
    let number = $(e.currentTarget).children().text().split(' - ');
    number = number[0] - 1;
    actualRadio = dataRadio[number];
    await renderItem(actualRadio);
    $('.modal').toggle();
    $('.ham_menu').toggleClass('active');
  });

  // voice recognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  // caso não suporte esta API DE VOZ
  if (window.SpeechRecognition === null) {
    $('.voice-recognition').hide();
  } else {
    const recognizer = new window.SpeechRecognition();
    let radio_Struc;
    recognizer.continuous = false;

    recognizer.onresult = async event => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        radio_Struc = '';

        if (event.results[i].isFinal) {
          radio_Struc = event.results[i][0].transcript;
          dataRadio.forEach(spokeRadio => {
            const upper_name = spokeRadio.name.toUpperCase();

            if (upper_name.includes(radio_Struc.toUpperCase())) {
              console.log(spokeRadio.name + radio_Struc);
              actualRadio = spokeRadio;
            }
          });
        } else {
          radio_Struc += event.results[i][0].transcript;
        }
      }

      await renderItem(actualRadio);
      $('.voice-recognition i').css('color', '#ebcbad');
    };

    $('.voice-recognition i').click(() => {
      try {
        recognizer.start();
        $('.voice-recognition i').css('color', '#a4a4a4');
      } catch (ex) {
        alert(`error: ${ex.message}`);
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
});

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

// Evento de clique no link "Localização"
document.getElementById("opcao-localizacao").addEventListener("click", function (event) {
  event.preventDefault(); // Impede que o link recarregue a página (caso ele tenha um "#" no href)

  // Aqui você fará a requisição para obter o JSON e, em seguida, exibir a imagem no elemento img
  fetch('assets/content/data.json') // Substitua "data.json" pelo caminho correto para o arquivo JSON
    .then(response => response.json())
    .then(data => {
      // Aqui você pode manipular os dados do JSON conforme necessário
      const imagemLocalizacao = document.getElementById('imagem-localizacao');
      imagemLocalizacao.src = data.baseImage; // Define a imagem do JSON como src do elemento img
    })
    .catch(error => console.error('Erro ao obter dados do JSON:', error));
});
$(document).ready(async () => {
  const e = await getJson();

  // Ajustando a renderização inicial do menu
  await renderList(e);
  $(".submenu li:first-child a").addClass("active");
  const initialData = e.find(item => item.number === "1");
  await renderItem(initialData);

  // Evento de clique nos itens do submenu
  $(".submenu li a").click(async function () {
    const number = $(this).data("number");
    const data = e.find(item => item.number === number);

    $(".submenu li a").removeClass("active");
    $(this).addClass("active");

    await renderItem(data);
  });

  // Evento de clique para exibir/ocultar o submenu
  $(".dropdown-btn").click(function () {
    $(this).toggleClass("fa-plus fa-minus");
    $(this).siblings(".dropdown-container").toggle();
  });

  // Outros eventos específicos do seu menu podem ser adicionados aqui
});

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



async function getJson() {
  try {
    const e = await fetch("assets/content/data.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}

async function renderItem({
  number: e,
  name: n,
  description: t,
  baseImage: a,
  printImage: r
}) {
  try {
    $(".title").text(n),
      $(".number-text").text(n),
      $(".container-image img").attr("src", a),
      $(".description").text(t),
      $("#fullscreen").css("backgroundImage", `url(${a})`);
  } catch (e) {
    console.log("Error!", e);
  }
}

async function renderList(e) {
  e.map(({ number: e, name: n }) => {
    $(".fa fa-plus dropdown-btn").append(`<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
}

$(document).ready(async () => {
  const e = await getJson();
  let n = e[0];
  if (
    (await renderItem(n),
    await renderList(e),
    $(".next").click(async () => {
      (n = e[n.number % e.length]),
        await renderItem(n),
        $(".remove-areas").hide(),
        $(".print-areas").show();
    }),
    $(".previous").click(async () => {
      (n =
        n.number - 2 < 0
          ? e[(e.length - 1) % e.length]
          : e[(n.number - 2) % e.length]),
        await renderItem(n),
        $(".remove-areas").hide(),
        $(".print-areas").show();
    }),
    
    $("#fullscreen .ham_menu").click(() => {
      $("#fullscreen").fadeOut(), $("body").css("position", "static");
    }),
    $(".container-image").click(() => {
      $("#fullscreen").fadeIn(), $("body").css("position", "fixed");
    }),
    $(".print-areas").click(() => {
      $("#fullscreen").css("background-image", `url(${n.printImage})`),
        $(".print-areas").hide(),
        $(".remove-areas").show();
    }),
    $(".remove-areas").click(() => {
      $("#fullscreen").css("background-image", `url(${n.baseImage})`),
        $(".remove-areas").hide(),
        $(".print-areas").show();
    }),
    $(".modal-list").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),
    (window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition || null),
    null === window.SpeechRecognition)
  )
    $(".voice-recognition").hide();
  else {
    const t = new window.SpeechRecognition();
    let a;
    (t.continuous = !1),
      (t.onresult = async t => {
        for (let r = t.resultIndex; r < t.results.length; r++)
          (a = ""),
            t.results[r].isFinal
              ? ((a = t.results[r][0].transcript),
                e.forEach(e => {
                  e.name.toUpperCase().includes(a.toUpperCase()) &&
                    (console.log(e.name + a), (n = e));
                }))
              : (a += t.results[r][0].transcript);

        await renderItem(n), $(".voice-recognition i").css("color", "#ebcbad");
      }),
      $(".voice-recognition i").click(() => {
        try {
          t.start(), $(".voice-recognition i").css("color", "#a4a4a4");
        } catch (e) {
          alert(`error: ${e.message}`);
        }
      });
  }


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

});

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


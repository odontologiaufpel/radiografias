
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
});

    
  
$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});






const getJson2 = async () => {
  try {
    const e = await fetch("assets/content/data2.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}

const getJson3 = async () => {
  try {
    const e = await fetch("assets/content/data3.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}

const getJson4 = async () => {
  try {
    const e = await fetch("assets/content/data4.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}
async function getJson5() {
  try {
    const e = await fetch("assets/content/data5.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}
async function getJson6() {
  try {
    const e = await fetch("assets/content/data6.json");
    return await e.json();
  } catch (e) {
    console.log("Error!", e);
  }
}
async function getJson7() {
  try {
    const e = await fetch("assets/content/data7.json");
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

async function renderItem2({
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

async function renderItem3({
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
async function renderItem4({
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
async function renderItem5({
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
async function renderItem6({
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

async function renderItem6({
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



async function renderItem7({
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


// até aqui foi feita a substituição 

// Lógica para renderizar os itens da lista 1 no HTML modal-list daté modal-list6

async function renderList(e) {
  e.map(({ number: e, name: n }) => {
    $(".modal-list").append(
      `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
}



  async function renderList2(e) {
    e.map(({ number: e, name: n }) => {
      $(".modal-list2").append(
        `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
      );
    });
  }
  
  async function renderList3(e) {
    e.map(({ number: e, name: n }) => {
      $(".modal-list3").append(
        `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
      );
    });
  }
  
  async function renderList4(e) {
    e.map(({ number: e, name: n }) => {
      $(".modal-list4").append(
        `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
      );
    });
  }
   
    async function renderList5(e) {
  e.map(({ number: e, name: n }) => {
    $(".modal-list5").append(
      `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
    }
      
    async function renderList6(e) {
      e.map(({ number: e, name: n }) => {
        $(".modal-list6").append(
          `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
        );
      });
        }
       
        async function renderList7(e) {
          e.map(({ number: e, name: n }) => {
            $(".modal-list7").append(
              `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
            );
          });
            }






    


$(document).ready(async () => {

  const e = await getJson();
  const e2 = await getJson2();
  const e3 = await getJson3();
  const e4 = await getJson4();
  const e5 = await getJson5();

  const e6 = await getJson6();
  const e7 = await getJson7();
  


  
  
    let n = e[0];
    let n2 =e2[0];
    let n3 = e3[0];
    let n4 = e4[0];
    let n5= e5[0];
    let n6= e6[0];
    let n7 = e7[0];
    

  if (
    (await renderItem(n),

    await renderList(e),
    await renderList2(e2),
    await renderList3(e3),
    await renderList4(e4),
    await renderList5(e5),

  
    await renderList6(e6),
    await renderList7(e7),

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
    $("header .ham_menu").click(() => {
      $(".modal").toggle(), $(".ham_menu").toggleClass("active");
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
   
    $(".modal-list2").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e2[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),
    $(".modal-list3").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e3[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),
    $(".modal-list4").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e4[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),
    $(".modal-list5").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e5[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),
    
    $(".modal-list6").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e6[a]),
        await renderItem(n),
        $(".modal").toggle(),
        $(".ham_menu").toggleClass("active");
    }),

    $(".modal-list7").on("click", "a", async t => {
      let a = $(t.currentTarget)
        .children()
        .text()
        .split(" - ");
      (a = a[0] - 1),
        (n = e7[a]),
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
});

// Função para buscar o JSON de um arquivo
async function getJson(file) {
  try {
    const response = await fetch(file);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log('Error!', e);
  }
}

// Função para renderizar o item atual na tela
async function renderItem({ number, name, description, baseImage, printImage }) {
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

// Função para renderizar a lista de itens no modal
async function renderList(arr, modalClass) {
  arr.map(({ number, name }) => {
    $(`.${modalClass}`).append(`<li class="radio-item">
      <a href="#"> <span class="number-radio">${number} - </span>${name}</a>
    </li>`);
  });
}

$(document).ready(async () => {
  const dataRadio = await getJson('assets/content/data.json');
  const data2 = await getJson('assets/content/data2.json');
  const data3 = await getJson('assets/content/data3.json');
  const data4 = await getJson('assets/content/data4.json');
  const data5 = await getJson('assets/content/data5.json');
  const data6 = await getJson('assets/content/data6.json');
  const data7 = await getJson('assets/content/data7.json');

  let actualRadio = dataRadio[0]; // Inicializa com o primeiro item

  await renderItem(actualRadio);
  await renderList(dataRadio, 'modal-list');
  await renderList(data2, 'modal-list2');
  await renderList(data3, 'modal-list3');
  await renderList(data4, 'modal-list4');
  await renderList(data5, 'modal-list5');
  await renderList(data6, 'modal-list6');
  await renderList(data7, 'modal-list7');

  // Botão próximo
  $('.next').click(async () => {
    actualRadio = dataRadio[actualRadio.number % dataRadio.length];
    await renderItem(actualRadio);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  // Botão anterior
  $('.previous').click(async () => {
    actualRadio.number - 2 < 0
      ? (actualRadio = dataRadio[(dataRadio.length - 1) % dataRadio.length])
      : (actualRadio = dataRadio[(actualRadio.number - 2) % dataRadio.length]);
    await renderItem(actualRadio);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  // Abrir modal
  $('header .ham_menu').click(() => {
    $('.modal').toggle();
    $('.ham_menu').toggleClass('active');
  });

  // Fechar fullscreen
  $('#fullscreen .ham_menu').click(() => {
    $('#fullscreen').fadeOut();
    $('body').css('position', 'static');
  });

  // Mostrar fullscreen
  $('.container-image').click(() => {
    $('#fullscreen').fadeIn();
    $('body').css('position', 'fixed');
  });

  // Clicar para mostrar imagem de impressão
  $('.print-areas').click(() => {
    $('#fullscreen').css('background-image', `url(${actualRadio.printImage})`);
    $('.print-areas').hide();
    $('.remove-areas').show();
  });

  // Clicar para remover áreas
  $('.remove-areas').click(() => {
    $('#fullscreen').css('background-image', `url(${actualRadio.baseImage})`);
    $('.remove-areas').hide();
    $('.print-areas').show();
  });

  // Clicar em um item da lista para selecioná-lo
  $('.modal-list').on('click', 'a', async (event) => {
    let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
    actualRadio = dataRadio[number];
    await renderItem(actualRadio);
    $('.modal').toggle();
    $('.ham_menu').toggleClass('active');
  });
  // Função para tratar o clique em um item da lista modal-list2
$('.modal-list2').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data2[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});

// Função para tratar o clique em um item da lista modal-list3
$('.modal-list3').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data3[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});

// Função para tratar o clique em um item da lista modal-list4
$('.modal-list4').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data4[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});

// Função para tratar o clique em um item da lista modal-list5
$('.modal-list5').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data5[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});

// Função para tratar o clique em um item da lista modal-list6
$('.modal-list6').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data6[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});

// Função para tratar o clique em um item da lista modal-list7
$('.modal-list7').on('click', 'a', async (event) => {
  let number = $(event.currentTarget).children().text().split(' - ')[0] - 1;
  actualRadio = data7[number];
  await renderItem(actualRadio);
  $('.modal').toggle();
  $('.ham_menu').toggleClass('active');
});


  // Reconhecimento de voz
  if (window.SpeechRecognition === null) {
    $('.voice-recognition').hide();
  } else {
    const recognizer = new window.SpeechRecognition();
    recognizer.continuous = false;
    let radioStruc;

    recognizer.onresult = async (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        radioStruc = '';

        if (event.results[i].isFinal) {
          radioStruc = event.results[i][0].transcript;
          dataRadio.forEach((spokeRadio) => {
            const upperName = spokeRadio.name.toUpperCase();

            if (upperName.includes(radioStruc.toUpperCase())) {
              console.log(spokeRadio.name + radioStruc);
              actualRadio = spokeRadio;
            }
          });
        } else {
          radioStruc += event.results[i][0].transcript;
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
        alert(`Error: ${ex.message}`);
      }
    });
  }
});





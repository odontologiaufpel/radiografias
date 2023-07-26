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
        $(".modal-list5").append(
          `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
        );
      });
        }
 


      
/*async function renderList5(e5) {
  e5.map(({ number: e, name: n }) => {
    $(".modal-list5").append(
      `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
}async function renderList6(e6) {
  e6.map(({ number: e, name: n }) => {
    $(".modal-list6").append(
      `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
}async function renderList7(e7) {
  e7.map(({ number: e, name: n }) => {
    $(".modal-list7").append(
      `<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`
    );
  });
}*/




    


$(document).ready(async () => {
  const e = await getJson();
  const e2 = await getJson2();
  const e3 = await getJson3();
  const e4 = await getJson4();
  const e5 = await getJson5();

  const e6 = await getJson6();
  


  
  
    let n = e[0];
    let n2 =e2[0];
    let n3 = e3[0];
    let n4 = e4[0];
    let n5= e5[0];
    let n6= e6[0];
    

  if (
    (await renderItem(n),
    await renderList(e),
    await renderList2(e2),
    await renderList3(e3),
    await renderList4(e4),
    await renderList5(e5),
    await renderList6(e6),

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

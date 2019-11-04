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
    $(".title").text(n), $(".number-text").text(n), $(".container-image img").attr("src", a), $(".description").text(t), $("#fullscreen").css("backgroundImage", `url(${a})`);
  } catch (e) {
    console.log("Error!", e);
  }
}

async function renderList(e) {
  e.map(({
    number: e,
    name: n
  }) => {
    $(".modal-list").append(`<li class="radio-item">\n    <a href="#"> <span class="number-radio">${e} - </span>${n}</a>\n  </li>`);
  });
}

$(document).ready(async () => {
  const e = await getJson();
  let n = e[0];
  if (await renderItem(n), await renderList(e), $(".next").click(async () => {
    n = e[n.number % e.length], await renderItem(n), $(".remove-areas").hide(), $(".print-areas").show();
  }), $(".previous").click(async () => {
    n = n.number - 2 < 0 ? e[(e.length - 1) % e.length] : e[(n.number - 2) % e.length], await renderItem(n), $(".remove-areas").hide(), $(".print-areas").show();
  }), $("header .ham_menu").click(() => {
    $(".modal").toggle(), $(".ham_menu").toggleClass("active");
  }), $("#fullscreen .ham_menu").click(() => {
    $("#fullscreen").fadeOut(), $("body").css("position", "static");
  }), $(".container-image").click(() => {
    $("#fullscreen").fadeIn(), $("body").css("position", "fixed");
  }), $(".print-areas").click(() => {
    $("#fullscreen").css("background-image", `url(${n.printImage})`), $(".print-areas").hide(), $(".remove-areas").show();
  }), $(".remove-areas").click(() => {
    $("#fullscreen").css("background-image", `url(${n.baseImage})`), $(".remove-areas").hide(), $(".print-areas").show();
  }), $(".modal-list").on("click", "a", async t => {
    let a = $(t.currentTarget).children().text().split(" - ");
    a = a[0] - 1, n = e[a], await renderItem(n), $(".modal").toggle(), $(".ham_menu").toggleClass("active");
  }), window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null, null === window.SpeechRecognition) $(".voice-recognition").hide();else {
    const t = new window.SpeechRecognition();
    let a;
    t.continuous = !1, t.onresult = async t => {
      for (let r = t.resultIndex; r < t.results.length; r++) a = "", t.results[r].isFinal ? (a = t.results[r][0].transcript, e.forEach(e => {
        e.name.toUpperCase().includes(a.toUpperCase()) && (console.log(e.name + a), n = e);
      })) : a += t.results[r][0].transcript;

      await renderItem(n), $(".voice-recognition i").css("color", "#ebcbad");
    }, $(".voice-recognition i").click(() => {
      try {
        t.start(), $(".voice-recognition i").css("color", "#a4a4a4");
      } catch (e) {
        alert(`error: ${e.message}`);
      }
    });
  }
});
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "navy";
// ctx.fillRect(0, 0, width, height);

// const imgCampas = new Image();
// imgCampas.src = "campas.svg";
// imgCampas.addEventListener("load", () => {
//   ctx.drawImage(
//     imgCampas,
//     (width -
//       (imgCampas.naturalWidth / imgCampas.naturalHeight) * height * 0.8) /
//       2.2,
//     height * 0.08,
//     (imgCampas.naturalWidth / imgCampas.naturalHeight) * height * 0.8,
//     height * 0.8
//   );
// });

// const bdPaldal = document.querySelector("#bw");
// bdPaldal.addEventListener("load", () => {
//   ctx.drawImage(bdPaldal, 50, 50);
//   console.log("tq");
// });

// const image = document.querySelector("img");
// image.addEventListener("click", () => {
//   modal.showModal();
// });

const buildings = document.querySelectorAll(".building");
const dialogs = document.querySelectorAll(".information");
const closeButtons = document.querySelectorAll(".close");

buildings[0].addEventListener("click", () => {
  dialogs[0].showModal();
});
closeButtons[0].addEventListener("click", () => {
  dialogs[0].close();
});

buildings[1].addEventListener("click", () => {
  dialogs[1].showModal();
});
closeButtons[1].addEventListener("click", () => {
  dialogs[1].close();
});

buildings[2].addEventListener("click", () => {
  dialogs[2].showModal();
});
closeButtons[2].addEventListener("click", () => {
  dialogs[2].close();
});

buildings[3].addEventListener("click", () => {
  dialogs[3].showModal();
});
closeButtons[3].addEventListener("click", () => {
  dialogs[3].close();
});

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);

  canvas.style.transform = `scale(${scale})`;
}

let scale = 1;
canvas.onwheel = zoom;

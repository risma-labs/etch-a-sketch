const newGridButton = document.querySelector("#new-grid-button");

newGridButton.addEventListener("click", () => {
  newWindow(document.querySelector("#grid-size-input").value);
});

function newWindow(gridSize) {

  if (gridSize > 64 || gridSize < 16) { return alert("Pick a number between 16-64") };

  const sketchWindow = document.querySelector("#sketch-window");
  sketchWindow.innerHTML = "";

  for (i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    sketchWindow.appendChild(cell);
  };

  sketchWindow.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr)`;
  sketchWindow.childNodes.forEach(cell => cell.style.backgroundColor = "hsla(85,90%,85%,1)");
  sketchWindow.childNodes.forEach(cell => cell.addEventListener("mouseenter", (e) => {
    const isRainbow = document.querySelector("#rainbow").checked;
    const isTint = document.querySelector("#tint").checked;

    if (isRainbow) {
      e.target.style.backgroundColor = `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`;
    } else if (isTint) {
      let currentBGColor = e.target.style.backgroundColor;
      e.target.style.backgroundColor = `${darkenColor(currentBGColor)}`;
    } else {
      e.target.style.backgroundColor = "black";
    };
  }));
};

function darkenColor(color) {
  let colors = color.split(",").map( ele => {
    let removedPre = ele.replace("rgb(", "");
    return removedPre.replace(")", "");
  });
  darkenedColor = colors.map(rgb => rgb * 0.8);
  return `rgb(${darkenedColor})`;
};

function randRGB () {
  return Math.floor(Math.random() * 256);
};


newWindow(16);




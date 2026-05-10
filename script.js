window.addEventListener("load", () => {

  const player = document.querySelector("#player");
  const popup = document.querySelector("#winPopup");
  const startButton = document.getElementById("startButton");

  let rotationY = 0;
  let posX = 0.3;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") posX -= 0.02;
    if (e.key === "ArrowRight") posX += 0.02;
    if (e.key === "a") rotationY -= 5;
    if (e.key === "d") rotationY += 5;

    player.setAttribute("position", `${posX} 0 0`);
    player.setAttribute("rotation", `0 ${rotationY} 0`);

    checkWin();
  });

  function checkWin() {
    const targetX = 0;
    const targetRot = 0;

    if (
      Math.abs(posX - targetX) < 0.05 &&
      Math.abs(rotationY - targetRot) <= 5
    ) {
      player.setAttribute("material", "color: green");
      popup.style.display = "block";
    }
  }

  startButton.addEventListener("click", () => {
  const scene = document.querySelector("a-scene");

  const start = () => {
    scene.systems["mindar-image-system"].start();
    startButton.style.display = "none";
  };

  if (scene.hasLoaded) {
    start();
  } else {
    scene.addEventListener("loaded", start);
  }
});

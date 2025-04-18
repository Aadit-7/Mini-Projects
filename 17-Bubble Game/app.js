let ranNum = 0;
let timmer = 60;
let score = 0;

let lowerPannel = document.querySelector(".lowerPannel");
lowerPannel.addEventListener("click", (event) => {
  let clickedBubble = Number(event.target.textContent);
  if (clickedBubble === ranNum) {
    increaseScore();
    createBubble();
    changeHit();
  }
});

function increaseScore() {
  score += 10;
  document.querySelector(".score").innerHTML = score;
}

function changeHit() {
  ranNum = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = ranNum;
}

function changeTimmer() {
  let finishGame = setInterval(function () {
    if (timmer > 0) {
      timmer--;
      document.querySelector(".timmer").innerHTML = timmer;
    } else {
      clearInterval(finishGame);
      displayScore();
    }
  }, 1000);
}

function createBubble() {
  let bubble = "";
  for (let i = 1; i <= 216; i++) {
    let num = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${num}</div>`;
  }
  document.querySelector(".lowerPannel").innerHTML = bubble;
}

function displayScore() {
  let score1 = document.querySelector(".lowerPannel");

  if (score1 >= 500) {
    score1.innerHTML = `<h1>Game Over --  "You Hacker 😱😱 !"<h1/>`;
  } else if (score1 >= 320) {
    score1.innerHTML = `<h1>Game Over -- "Congratulation !!! You win 🥳🥳"<h1/>`;
  } else if (score1 > 250) {
    score1.innerHTML = `<h1>Game Over --  "You are very close chapm ! 🔥🔥"<h1/>`;
  } else if (score1 > 150) {
    score1.innerHTML = `<h1>Game Over --  "You try yout best Budddy !👍👍 "<h1/>`;
  } else {
    score1.innerHTML = `<h1>Game Over --  "You are a bot looser ! 💩💩"<h1/>`;
  }
}

changeTimmer();
createBubble();
changeHit();

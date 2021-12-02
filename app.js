const player1 = {
  score: 0,
  button: document.querySelector("#playerOneBtn"),
  display: document.querySelector("#player1"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#playerTwoBtn"),
  display: document.querySelector("#player2"),
};

let winningScore = Number(document.querySelector("select").value);
let isGameOver = false;

const selector = document.querySelector("select");
selector.addEventListener("change", function () {
  winningScore = Number(document.querySelector("select").value);
  reset();
});

function scoreUpdater(player, opponent) {
  if (!isGameOver) {
    player.score++;
    player.display.innerHTML = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
    }
  }
}

function reset() {
  isGameOver = false;
  player1.score = 0;
  player2.score = 0;
  player1.button.disabled = false;
  player2.button.disabled = false;
  player1.display.innerHTML = 0;
  player2.display.innerHTML = 0;
  player1.display.classList.remove("has-text-success", "has-text-danger");
  player2.display.classList.remove("has-text-success", "has-text-danger");
}

playerOneBtn.addEventListener("click", () => {
  scoreUpdater(player1, player2);
});
playerTwoBtn.addEventListener("click", () => {
  scoreUpdater(player2, player1);
});
resetBtn.addEventListener("click", reset);

// const reset = () => {
//     isGameOver = false;

//     playerOneScore = 0;
//     playerTwoScore = 0;

//     playerOneBtn.disabled = false;
//     playerTwoBtn.disabled = false;

//     player1.innerHTML = playerOneScore;
//     player2.innerHTML = playerTwoScore;
//     player1.classList.remove("has-text-success", "has-text-danger");
//     player2.classList.remove("has-text-success", "has-text-danger");
//   };
//   let playerOneScore = 0;
//   let playerTwoScore = 0;
//   let winningScore = document.querySelector("select").value;
//   let isGameOver = false;

//   const selector = document.querySelector("select");
//   const player1 = document.querySelector("#player1");
//   const player2 = document.querySelector("#player2");

//   selector.addEventListener("change", function () {
//     winningScore = document.querySelector("select").value;
//     reset();
//   });

//   playerOneBtn.addEventListener("click", function (e) {
//     if (!isGameOver) {
//       playerOneScore++;
//       player1.innerHTML = playerOneScore;

//       if (playerOneScore == winningScore) {
//         player1.classList.add("has-text-success");
//         player2.classList.add("has-text-danger");
//         isGameOver = true;
//         playerOneBtn.disabled = !playerOneBtn.disabled;
//         playerTwoBtn.disabled = !playerTwoBtn.disabled;
//       }
//     }
//   });
//   playerTwoBtn.addEventListener("click", function (e) {
//     if (!isGameOver) {
//       playerTwoScore++;
//       player2.innerHTML = playerTwoScore;

//       if (playerTwoScore == winningScore) {
//         player2.classList.add("has-text-success");
//         player1.classList.add("has-text-danger");
//         isGameOver = true;
//         playerOneBtn.disabled = !playerOneBtn.disabled;
//         playerTwoBtn.disabled = !playerTwoBtn.disabled;
//       }
//     }
//   });

//   resetBtn.addEventListener("click", reset);

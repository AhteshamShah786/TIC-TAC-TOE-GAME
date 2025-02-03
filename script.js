<script>
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector(".reset-btn");
    let newGameBtn = document.querySelector(".new-game-btn");

    let turn0 = true;

    const winnerPattern = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    const disableBoxes = () => {
      for (let box of boxes) {
        box.disabled = true;
      }
    };

    const enableBoxes = () => {
      for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
      turn0 = true;
      clearWinnerMessage();
    };

    const clearWinnerMessage = () => {
      let winnerPara = document.querySelector(".winner-para");
      if (winnerPara) winnerPara.remove();
    };

    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (turn0 === true) {
          box.innerText = "O";
          turn0 = false;
        } else {
          box.innerText = "X";
          turn0 = true;
        }
        box.disabled = true;
        checkWinner();
      });
    });

    let showWinner = (winner) => {
      let winnerPara = document.createElement("p");
      document.querySelector("body").append(winnerPara);
      winnerPara.classList.add("winner-para");
      winnerPara.innerText = `Congratulations! Winner is ${winner}`;
      disableBoxes();
    };

    const checkWinner = () => {
      for (let pattern of winnerPattern) {
        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;

        if (position1Value !== "" && position2Value !== "" && position3Value !== "") {
          if (position1Value === position2Value && position2Value === position3Value) {
            showWinner(position1Value);
            return;
          }
        }
      }
    };

    resetBtn.addEventListener("click", enableBoxes);
    newGameBtn.addEventListener("click", enableBoxes);
  </script>
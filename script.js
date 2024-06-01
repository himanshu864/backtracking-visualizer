import { runDK } from "./snake.js";

const cells = document.querySelectorAll(".cell");
const startButton = document.getElementById("start");
const instruction = document.querySelector("p");

const handleClick = (event) => event.target.classList.toggle("yamete");

cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
});

startButton.addEventListener("click", async () => {
    startButton.classList.add("hide");
    instruction.classList.add("hide");
    cells.forEach((cell) => cell.removeEventListener("click", handleClick));

    const success = await runDK();

    if (!success) {
        cells.forEach((cell) => cell.classList.add("blinking"));
    }
});
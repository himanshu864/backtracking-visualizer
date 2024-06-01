const cells = document.querySelectorAll(".cell");

let grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];

cells.forEach((cell, index) => {
    if (cell.innerHTML == "X")
        grid[Math.floor(index / 4)][index % 4] = 0
})

console.log(grid);

// backtracking algorithm to find path from {0,0} to {3,3} and active it


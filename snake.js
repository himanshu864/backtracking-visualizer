const cells = document.querySelectorAll(".cell");
const delay = (timer) => new Promise((resolve) => setTimeout(() => resolve(), timer))
const isValid = (r, c) => (r >= 0 && r < 6 && c >= 0 && c < 6);

let path = [];
let visited = Array.from({ length: 6 }, () => Array(6).fill(0));
let grid = Array.from({ length: 6 }, () => Array(6).fill(1));

function backtracking(r, c) {
    if (!isValid(r, c) || visited[r][c] || !grid[r][c])
        return false;

    if (r == 5 && c == 5) {
        path.push(6 * r + c);
        return true;
    }

    visited[r][c] = 1;
    path.push(6 * r + c);

    if (backtracking(r, c + 1) || backtracking(r - 1, c) || backtracking(r + 1, c) || backtracking(r, c - 1))
        return true;

    visited[r][c] = 0;
    path.push(6 * r + c);

    return false;
}

export const runDK = async () => {

    path = [];
    visited = Array.from({ length: 6 }, () => Array(6).fill(0));
    grid = Array.from({ length: 6 }, () => Array(6).fill(1));

    cells.forEach((cell, index) => {
        if (cell.classList.contains("yamete"))
            grid[Math.floor(index / 6)][index % 6] = 0
    })

    let success = backtracking(0, 0);
    for (const index of path) {
        await delay(50);
        cells[index].classList.toggle("active");
    }
    return success;
}
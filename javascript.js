let bigContainer = document.createElement('div');
const container = document.querySelector('body');
container.appendChild(bigContainer);
bigContainer.classList.add("bigContainer");



// const body = document.querySelector('body');
// body.addEventListener('click',() => {
//     console.log("removing");
//     bigContainer.remove();
// });

const body = document.querySelector('body');
let removeEverything = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
        square.remove();
    });
}
// (insert element here).addEventListener("click",removeEverything);

let addSquares = (num) => {
    for (let i = 0; i < num; i++) {
        let newContainer = document.createElement('div');
        bigContainer.append(newContainer);
        newContainer.classList.add('rows');
        for (let j = 0; j < num; j++) {
            let squareContainer = document.createElement('div');
            newContainer.append(squareContainer);
            squareContainer.classList.add('square');
            squareContainer.textContent="";
            squareContainer.addEventListener('mouseover', () => {
                squareContainer.style.backgroundColor = "red";
            });
        }
    }
}

addSquares(50);
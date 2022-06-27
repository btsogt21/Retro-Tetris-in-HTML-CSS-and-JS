document.addEventListener('DOMContentLoaded', ()=>{
    var htmlElements = "";
        for (var i = 0; i<200;i++){
            htmlElements+='<div class = "grid"></div>';
        }
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;
    const grid = document.querySelector('.grid')
    let cells = document.querySelectorAll('.grid div')
    console.log(cells)
    const ScoreDisplay = document.querySelector('#score')
    const Startbtn = document.querySelector('#startbutton')
    const width = 10


    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width,width+1, width+2, width*2+2],
        [width*2, width*2+1, width+1, 1],
        [width, width*2, width*2+1, width*2+2]
    ]
    const jTetromino = [
        [0, 1, width+1, width*2+1, ],
        [width*2, width, width+1, width+2],
        [1, width+1, width*2+1, width*2+2],
        [width*2, width*2+1, width*2+2, width+2]
    ]
    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    const sTetromino = [
        [0, width, width+1, width*2+1],
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1],
        [width*2, width+1, width*2+1, width+2]
    ]
    const zTetromino = [
        [width*2, width, width+1, 2],
        [width, width+1, width*2+1, width*2+2],
        [width*2, width, width+1, 2],
        [width, width+1, width*2+1, width*2+2]
    ]
    const tTetromino = [
        [width, width+2, width+1, width*2+1],
        [width, width+1, 1, width*2+1],
        [width*2, width*2+1, width*2+2, width+1],
        [1, width+1, width*2+1, width+2]
    ] 
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    const Tetrominoes = [lTetromino, jTetromino, iTetromino, oTetromino, zTetromino, sTetromino, tTetromino]
})

// function populateDivs(){
//     var htmlElements = "";
//         for (var i = 0; i<200;i++){
//             htmlElements+='<div></div>';
//         }
//         var container = document.getElementById("container");
//         container.innerHTML = htmlElements;
// }
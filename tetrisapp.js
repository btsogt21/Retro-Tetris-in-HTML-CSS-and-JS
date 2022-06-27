document.addEventListener('DOMContentLoaded', ()=>{
    var htmlElements = "";
        for (let i = 0; i<210;i++){
            if(i<200){
                htmlElements+='<div class = "grid"></div>';
            } else{
                htmlElements+='<div class = "taken"></div>';
            }
        }
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;
    
    const grid = document.querySelector('.grid')
    let cells = document.querySelectorAll('.grid div')
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
        [width*2, width, width+1, 1],
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



    let random = Math.floor(Math.random()*Tetrominoes.length)
    let currentPosition = 4
    let currentRotation = 0
    let currentTetromino = Tetrominoes[random][currentRotation]

    function draw(){
        currentTetromino.forEach(index => {
            cells[currentPosition + index].classList.add('tetromino')
        });
    }
    function undraw(){
        currentTetromino.forEach(index => {
            cells[currentPosition + index].classList.remove('tetromino')
        })
    }
    timerId = setInterval(moveDown, 200)

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        stop()

    }
    function stop(){
        if(currentTetromino.some(index => cells[currentPosition + index + width].classList.contains('taken'))){
            currentTetromino.forEach(index => cells[currentPosition + index].classList.add('taken'))
            random = Math.floor(Math.random()*Tetrominoes.length)
            currentTetromino = Tetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
})


// function populateDivs(){
//     var htmlElements = "";
//         for (var i = 0; i<200;i++){
//             htmlElements+='<div></div>';
//         }
//         var container = document.getElementById("container");
//         container.innerHTML = htmlElements;
// }
document.addEventListener('DOMContentLoaded', ()=>{
    var htmlElements = "";
        for (let i = 0; i<250;i++){
            if(i<40){
                htmlElements+='<div class = "hidden"></div>';
            }
            else if(i<240){
                htmlElements+='<div class = "grid"></div>';
            }
            else{
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
    const check = [0, 1, 2]


    const lTetromino = [
        [width, width*2+1, width*3+1, width+1],
        [width*2, width*2+1, width*2+2, width+2],
        [width+1, width*2+1, width*3+1, width*3+2],
        [width*2, width*2+1, width*2+2, width*3]
    ]
    const jTetromino = [
        [width + 1, width + 2, width*2+1, width*3+1],
        [width*2, width*2+1, width*2+2, width*3+2],
        [width+1, width*2+1, width*3+1, width*3],
        [width, width*2, width*2+1, width*2+2]
    ]
    const oTetromino = [
        [width*2, width*2+1, width*3, width*3+1],
        [width*2, width*2+1, width*3, width*3+1],
        [width*2, width*2+1, width*3, width*3+1],
        [width*2, width*2+1, width*3, width*3+1]
    ]
    const sTetromino = [
        [width, width*2, width*2+1, width*3+1],
        [width*3, width*3+1, width*2+1, width*2+2],
        [width, width*2, width*2+1, width*3+1],
        [width*3, width*3+1, width*2+1, width*2+2]
    ]
    const zTetromino = [
        [width+1, width*2+1, width*2, width*3],
        [width*2, width*2+1, width*3+1, width*3+2],
        [width+1, width*2+1, width*2, width*3],
        [width*2, width*2+1, width*3+1, width*3+2]
    ]
    const tTetromino = [
        [width*2, width*2+1, width*2+2, width*3+1],
        [width*3, width*3+1, width*3+2, width*2+1],
        [width+1, width*2+1, width*3+1, width*2+2],
        [width+1, width*2, width*2+1, width*3+1]
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
    timerId = setInterval(moveDown, 100)
    let gameOver = false;
    function moveDown() {
        if (gameOver){
            return
        }
        undraw()
        currentPosition += width
        draw()
        stop()
    }

    //
    // train of thought where I left off at 12:51 AM, July 24th, 2023:
    // Need another if statement after selection of next Tetromino and setting of currentPosition back to 4.
    // This if statement should check whether or not any of the cells immediately below those cells which are 
    // assigned 'tetromino' by the draw() call are 'taken'. If they are, then the game is over.
    // However, this necessarily brings up the issue of when a given tetromino is spawned, placed, but extends
    // into the spawn area. This is another potential game over condition which we still need to account for.
    // It may be the case that we could end the game as soon as 'set' tetromino goes into the spawn area
    // (that is, if the spawn area receives a 'taken' class). This would be a simple solution, but it would
    // preclude the player from being able to maneuver the new tetromino (that is just beginning to spawn in) around
    // the occupied portion of the spawn area and into the visible section of the grid that is not yet 'taken'.
    // Need to think more about the proper implementation. First step is probably to make sure the game over condition
    // is properly trigerring once a tetromino no longer has any room to enter the visible section of the grid,
    // and then maybe extend the spawn area further upward to allow for maneuvering. Other changes will likely
    // be needed after the extension, but I can't think quite that far ahead right now.
    function stop(){
        if(currentTetromino.some(index => cells[currentPosition + index + width].classList.contains('taken'))){
            let maxIndex = Math.max(...currentTetromino)
            console.log(maxIndex)
            console.log(currentPosition)
            if((maxIndex+currentPosition)<40){
                console.log(currentPosition)
                gameOver = true;
                clearInterval(timerId)
                alert("Game Over")
            }
            currentTetromino.forEach(index => cells[currentPosition + index].classList.add('taken'))
            random = Math.floor(Math.random()*Tetrominoes.length)
            currentTetromino = Tetrominoes[random][currentRotation]
            currentPosition = 4
            if(currentTetromino.some(index => cells[currentPosition + index].classList.contains('taken'))){
            draw()
            }
        }
        return 1
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
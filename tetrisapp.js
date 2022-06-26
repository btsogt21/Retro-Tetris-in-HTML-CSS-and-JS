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
})

// function populateDivs(){
//     var htmlElements = "";
//         for (var i = 0; i<200;i++){
//             htmlElements+='<div></div>';
//         }
//         var container = document.getElementById("container");
//         container.innerHTML = htmlElements;
// }
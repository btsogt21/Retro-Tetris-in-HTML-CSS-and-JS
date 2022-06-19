document.addEventListener('DOMContentLoaded', ()=>{
    var htmlElements = "";
        for (var i = 0; i<200;i++){
            htmlElements+='<div class = "grid"></div>';
        }
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;
})

function populateDivs(){
    var htmlElements = "";
        for (var i = 0; i<200;i++){
            htmlElements+='<div></div>';
        }
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;
}
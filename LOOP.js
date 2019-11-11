function makeredCircle(){
    //create a new element div <div></div> in the html;
    var red = document.createElement("div");
    // assign circle style to the div that we added
    red.classList.add("redcircle");
    // get the container element
    var container = document.getElementById('Container');
    // attach to the container to create div
    container.appendChild(red);
    red.addEventListener("click", makeredCircle);
    var random = Math.random();
    if (random > 0.36){
        red.style.borderRadius= "0px";
            }
}

function makeblueCircle(){
    //create a new element div <div></div> in the html;
    var blue = document.createElement("div");
    // assign circle style to the div that we added
    blue.classList.add("bluecircle");
    // get the container element
    var container = document.getElementById('Container');
    // attach to the container to create div
    container.appendChild(blue);
    blue.addEventListener("click", makeblueCircle);
        var random = Math.random();
    console.log(random);
    if (random > 0.37){
        blue.style.borderRadius= "0px";
            }

}

var button = document.getElementById("button");
button.addEventListener("click", addshapes);


function addshapes(){ //button
for(i=0; i<2; i++){
    //even: if i is divisible (%) by 2
    if(i % 2 == 0){
        makeredCircle()
    }
    //everything else (odds)
    else{
        makeblueCircle()
        }
    }
}






//choose ID you want to change
var L = document.getElementById('rect1');
//addEventListener (how you want to change it ex: by clicking, by hovering etc)
L.addEventListener("click", ChangeLColor);
//activate function
    function ChangeLColor(){
//write what you want to change
    L.style.backgroundColor = "blue";
}

var L2 = document.getElementById('rect2');
L2.addEventListener("click", ChangeL1Color);
    function ChangeL1Color(){
    L2.style.backgroundColor = "blue";
}

var O = document.getElementById('positiveO');
O.addEventListener("click", ChangeOColor);
    function ChangeOColor(){
    O.style.backgroundColor = "blue";
}

var O2 = document.getElementById('positiveO2');
O2.addEventListener("click", ChangeO2Color);
    function ChangeO2Color(){
    O2.style.backgroundColor = "blue";
}

var P = document.getElementById('Pstem');
P.addEventListener("click", ChangePColor);
    function ChangePColor(){
    P.style.backgroundColor = "blue";
}

var P2 = document.getElementById('Pcurvepositive');
P2.addEventListener("click", ChangeP2Color);
    function ChangeP2Color(){
    P2.style.backgroundColor = "blue";
}

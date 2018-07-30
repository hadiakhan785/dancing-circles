function initialize() {
    const bodyEl = document.querySelector("body");
    for(let i=0; i<= Math.floor(Math.random() * 12); i++) {
        bodyEl.innerHTML += `<div id="div-${i}"></div>`;
        setInterval(() => {changeCircleSize(i)},1000);
    }
}


function changeCircleSize(i) {
    let x = 1;
    let circle = document.querySelector(`#div-${i}`);
    let positionValue = parseInt(Math.random()*500);
    let size = parseInt(Math.random()*300);
    let red = parseInt(Math.random()* 256);
    let green = parseInt(Math.random()* 256);
    let blue = parseInt(Math.random()* 256);

    circle.style.height = size + "px";
    circle.style.width = size + "px";
    circle.style.color = "rgb(" + red + ", " + green + ", " + blue + ")" ;
    circle.style["border-color"] = "rgb(" + red + ", " + green + ", " + blue + ")";
    circle.style.border = "3px solid rgb(" + red + ", " + green + ", " + blue + ")";
    circle.style["font-size"] = size / 50 +"em";
    circle.style["margin-top"] = `${Math.floor(Math.random() * 50)}vh`;
    circle.style["margin-left"] = `${Math.floor(Math.random() * 50)}vw`;
    circle.innerHTML = parseInt(Math.random()*300);
    circle.style.position = `absolute`;
    circle.style["z-index"] = Math.floor(Math.random()* 6);

}
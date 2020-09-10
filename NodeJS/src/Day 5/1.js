function helloWorld() {

    console.log("I am Named funcction");
}


let helloAgain = function () {
    console.log("I am anonymous function");
}

let helloArrow = function () {
    console.log("I am Arroww function");
}

setInterval(() => {
    console.log("I am interval", new Date())
}, 2500);





helloWorld();
helloAgain();
helloArrow();
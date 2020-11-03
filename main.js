// window.addEventListener("load", startTime)

// const date = new Date()
// console.log(date.toDateString())
// console.log(date.getFullYear())


// function startTime() {
//     var currentTime = new Date();
//     document.getElementById('time').innerHTML = currentTime.toDateString();
//     console.log('lol')
// }


window.onload = main;

function main() {
    setInterval(upDateClock, 1000);
    
}

function upDateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeHolder = document.getElementById('time');

    timeHolder.innerText = hours + ':' + minutes + ':' + seconds;
}
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
    const timeHolder = document.getElementById('time');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
        if (hours < 10) {
            hours = '0' + hours;
        }
    
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
    
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds;
}

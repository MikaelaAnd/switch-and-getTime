const date = new Date()
console.log(date.toDateString())
console.log(date.getFullYear())

window.addEventListener("load", startTime)

function startTime() {
    var currentTime = new Date();
    document.getElementById('time').innerHTML = currentTime.toDateString();
    console.log('lol')
}
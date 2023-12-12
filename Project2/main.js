let circle = document.querySelector("#circle");
let circleIcon = document.querySelector("#circle i")
let seconds = 0;
let minutes = 0;
let hours = 0;
let secText= document.querySelector("#sec-text")
let minText = document.querySelector("#min-text")
let hoursText = document.querySelector("#hour-text")
circle.onclick = function() 
/* flipping icon from play to pause and vice versa*/ {
    if (circleIcon.classList.contains("fa-play")) {
        circleIcon.classList.replace("fa-play", "fa-pause")
        setInterval(function() {
            /* Returning seconds to 0 if it get to 59 */
            if (seconds > 5) {
                seconds = 0
                minutes++;
                if (minutes > 1){
                    minutes = 0;
                    hours++;
                }
               
            }
            //pushing time to html
            secText.innerHTML =`${seconds < 10 ? `0${seconds}` : seconds}`
            minText.innerHTML =`${minutes < 10 ? `0${minutes}` : minutes}`
            hoursText.innerHTML =`${hours < 10 ? `0${hours}` : hours}`

            seconds ++;
        }, 1000)
    } else {
        circleIcon.classList.replace("fa-pause", "fa-play")
        clearInterval(intervalId)
        /*starting timer */

        
    } 
}
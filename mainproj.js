let circle = document.querySelector("#circle");
let circleIcon = document.querySelector("#circle i");
let timerIcon = document.querySelector("header i");
let seconds = 0;
let minutes = 0;
let hours = 0;
let secText= document.querySelector("#sec-text")
let minText = document.querySelector("min-text")
let hoursText = document.querySelector("hours-text")
let intervalid
let rotateintervalId
let rotate = 0;
let resetCon = document.querySelector("#reset")
let resetIcon = document.querySelector("fa-stop")
circle.onclick = function() 
/* flipping icon from play to pause and vice versa*/ {
    if (circleIcon.classList.contains("fa-play")) {
        circleIcon.classList.replace("fa-play", "fa-pause")
        setInterval(function(){
            /* Returning seconds to 0 if it get to 59 */
            if (seconds > 59) {
                seconds = 0
                minutes++;
                if (minutes > 59)
                minutes = 0;
                hours++;
            }
            //pushing time to html
            secText.innerHTML =`${seconds < 10? `0$
        {seconds}` : seconds}`

            seconds ++;
        }, 1000)
     
        // adding rotation to timer
        /*TimerIcon classified */
        rotateintervalId = setInterval(() => {
        //Rotating btimer
            Rotate += 20;
            timerIcon.style.transform = `translate(-50%, 0) rotate(${rotate}deg)`
        }, 100)
        
    } else {

        circleIcon.classList.replace("fa-pause", "fa-play")
        clearInterval(intervalid)
        clearInterval(rotateIntervalId)
        // REMOVING rotation from timer
        // timerIcon.classList.remove("rotate");
    }
}

// stoping timer 
stopIcon.onclick = function() {
    seconds = 1;
    minutes = 0;
    hours = 0;
    rotate = 0;
    // Resetting rotate
    timerIcon.style.transition = "none"
    timerIcon.style.transform = 'translate(-50%, 0) rotating(${rotate} deg)'
    resetCon.style.transform = "translatex(-100%)";
    circle.style.borderRadius = '50%'
    // pushing time to html
    secText.innerHTML = "00"
    minText.innerHTML = "00"
    hoursText.innerHTML = "00"
    circleIcon.classList.replace("fa-pause", "fa.play")
    clearInterval(intervalid)
    clearInterval(rotateIntervalId)

    //secText.innerHTML = seconds < 10 ? `0${seconds}` : seconds
    //minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
    //hoursText.innerHTML = `${hours < 10 ? `0${hours}`: hours}`
}
var timerEl = document.querySelector('#time-container')
// var mainEl = document.getElementById('')
var timeLeft = 90; 
var timeInterval = setInterval(function() {
    timeLeft--;
    console.log(timeLeft);
    timerEl.textContent= timeLeft
    },1000);
    // function timeStopInterval() 
    // clearInterval(timeInterval)    
    
    const userchoice = document.addEventListener("click", e => 
    {
            const target = e.target;
        
            if (target.matches("#right-choice")) {
                target.style.backgroundColor = "green";
                console.log(userchoice-3);
                window.alert("Correct!!!")
                
            } else if (target.matches("#wrong-choice")) { 
                document.getElementById("wrong-choice").textContent;
                document.getElementById("wrongchoiceprompt").innerHTML = "Wrong Answer!!!";
                timeLeft = timeLeft - 10;
                window.alert("Incorrect!!!");
            }

        });

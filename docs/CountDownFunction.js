'use strict'

    function resetDemo(date) {

        document.getElementById("date").innerHTML = "";
        //console.log('llega');
    } 
    resetDemo("date");

    let button = document.getElementById("setEndDate")

    button.addEventListener("click", function(e) {

    //console.log("button clicked");
    
    document.getElementById('setEndDate').disabled = true;
        
    let endDate = document.getElementById("date").value;
    
    let countDownDate = new Date(endDate).getTime();
    
    let x = setInterval(function() {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("demo").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXTINGUISHED";
        }

    },1000);

});




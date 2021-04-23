//start() for the start button
function start() {
    //Disables start button after clicked
    document.getElementById("startButton").disabled = true;
    //Enables start button after stop button is clicked
    document.getElementById("stopButton").disabled = false;

}
//stop() for the stop button
function stop() {
    //Disables stop button after clicked
    document.getElementById("stopButton").disabled = true;
    //Enables stop button after start button is clicked
    document.getElementById("startButton").disabled = false;
}

//to play a specific sound
function playStation(){
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

//to play any sound
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }

    this.stop = function(){
        this.sound.pause();
    }
}


//New and improved timer, more efficient with loops with the change order request
function countDownV3() {
    //Variable sets count to start at 10
    var count = 10
    //Sets the count to display the countdown for the first 6 seconds  
    for (var i = 1; i <= 11; i++) {
        if (i <= 6) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
            //On the 7th second, a warning message will display along with remaining countdown time
        } else if (i > 6 && i != 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning!! More than ½ way to launch, time left" + " " + count;
                count--;
            }, 1000 * i);
            //On the 11th second, a blastoff message will be displayed
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        }
    }
}


//New and improved timer
function countDownV2() {
    //Starting the count at 10
    var count = 10;
    //Sets the variable to begin counting down to 1
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    //Displays "Blastoff!!!" on the 11th second instead of 0.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count--;
    }, 11000);


}

//creating a countdown function to count from 10 to 0 and then blastoff
function countDown() {
    //this creates a variable that the timers will use to count down from
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
        //computers measure
    }, 1000);

    //then to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //then to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //then to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //then to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //then to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //then to 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //then to 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //then to 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //blastoff!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count = count - 1;
    }, 10000);
}



function playCraps() {
    //Creates Die 1
    var die1;
    //Creates Die 2
    var die2;
    //Creates the sum variable 
    var sum;
    //Multiplies die 1 by 6 and rounds up to the nearest whole number
    die1 = Math.ceil(Math.random() * 6);
    //Multiplies die 2 by 6 and rounds up to the nearest whole number
    die2 = Math.ceil(Math.random() * 6);
    //Adds the dice together for the sum
    sum = die1 + die2;
    //Displays results of die 1
    document.getElementById("die1Res").innerHTML = die1;
    //Displays results of die 2
    document.getElementById("die2Res").innerHTML = die2;
    //Displays sum of die 1 and die 2
    document.getElementById("sumRes").innerHTML = sum;
    //Player loses if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        //Displays "lose" notification
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!";
        //Player wins if even doubles
    } else if (die1 == die2 && die1 % 2 == 0) {
        //Displays "win" notification
        document.getElementById("crapsResults").innerHTML = "Doubles, YOU WIN!!";
        //If any other dice results, play again
    } else {
        //Displays "try again" notification
        document.getElementById("crapsResults").innerHTML = "Push. Please Try Again.";
    }
}

function runSandbox() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!!!";
        count--;
    }, 11000);


}
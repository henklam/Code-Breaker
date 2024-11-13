var clock = 7;
var digit = 1;
var match = false;
var random1 = Math.floor(Math.random()*3)+1;
var random2 = Math.floor(Math.random()*3)+1;
var random3 = Math.floor(Math.random()*3)+1;
var compNums = [random1, random2, random3];
console.log(compNums);
var nums = [];
var infoShow = false;

document.getElementById("clock").innerHTML = "Clock: " + clock;

if(localStorage.getItem("scores") == null) {
    var scores = [0,0];
    localStorage.setItem("scores", JSON.stringify(scores));
} else {
    var scores = JSON.parse(localStorage.getItem("scores"));
}

function clickOne() {
    if(digit < 4 && !infoShow) {
        document.getElementsByTagName("p")[digit].innerHTML = 1;
        nums[digit-1] = 1;
        digit++;
    }
}

function clickTwo() {
    if(digit < 4 && !infoShow) {
        document.getElementsByTagName("p")[digit].innerHTML = 2;
        nums[digit-1] = 2;
        digit++;
    }
}

function clickThree() {
    if(digit < 4 && !infoShow) {
        document.getElementsByTagName("p")[digit].innerHTML = 3;
        nums[digit-1] = 3;
        digit++;
    }
}

var over = false;
function clickOkay() {
    if(over) {
        return;
    }
    if(digit == 4 && !infoShow) {
        match = true;
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] != compNums[i]) {
                match = false;
            }
        }
        if(!match && clock != 0) {
            clock--;
            document.getElementById("clock").innerHTML = "Clock: " + clock;
            clickClear();
        }
    }
    if(match) {
        document.getElementById("msg").innerHTML = "You guessed correctly!";
        scores.push(8-clock);
        scores[1]++;
        localStorage.setItem("scores", JSON.stringify(scores));
        over = true;
    } else if(clock == 0) {
        document.getElementById("msg").innerHTML = "You ran out of time!";
        scores[0]++;
        localStorage.setItem("scores", JSON.stringify(scores));
    }
}

function clickClear() {
    if(!match && clock != 0 && !infoShow) {
        nums = [];
        for(let i = 2; i < 4; i++) {
            document.getElementsByTagName("p")[i].innerHTML = "";
        }
        digit = 1;
        document.getElementById("guess1").innerHTML = "?";
        document.getElementById("guess2").innerHTML = "?";
        document.getElementById("guess3").innerHTML = "?";
    }
}

function eraseOne() {
    if(!match && clock != 0 && digit > 1 && !infoShow) {
        digit--;
        nums.splice(nums.length-1,1);
        document.getElementsByTagName("p")[digit].innerHTML = "?";
    }
}

function info() {
    var div = document.getElementById("infoDiv");
    var backDiv = document.getElementById("backDiv");
    if(!infoShow) {
        div.classList.add("showInfo");
        backDiv.classList.add("showBackDiv");
        console.log(div);
        infoShow = true;
        let sum = 0;
        for(let i = 2; i < scores.length; i++) {
            sum+=scores[i];
        }
        let avg = 0;
        if(sum != 0) {
            avg = Math.round((sum/(scores.length-2))*100)/100;
        }
        document.getElementById("avg").innerHTML = "Average guesses: " + avg;
        document.getElementById("wins").innerHTML = "Wins: " + scores[1];
        document.getElementById("losses").innerHTML = "Losses: " + scores[0];
    } else {
        div.classList.remove("showInfo");
        backDiv.classList.remove("showBackDiv");
        infoShow = false;
    }
}

document.addEventListener("keydown", function(event) {
    if(event.key === "1") {
        event.preventDefault();
        document.getElementById("one").click();
    } else if(event.key === "2") {
        event.preventDefault();
        clickTwo();
    } else if(event.key === "3") {
        event.preventDefault();
        clickThree();
    } else if(event.key === "Enter") {
        event.preventDefault();
        clickOkay();
    } else if(event.key === "Backspace") {
        event.preventDefault();
        eraseOne();
    }
})
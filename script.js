var clock = 7;
var digit = 1;
var match = false;
var random1 = Math.floor(Math.random()*3)+1;
var random2 = Math.floor(Math.random()*3)+1;
var random3 = Math.floor(Math.random()*3)+1;
var compNums = [random1, random2, random3];
var nums = [];

document.getElementById("clock").innerHTML = "Clock: " + clock;

function clickOne() {
    if(digit < 4) {
        document.getElementsByTagName("p")[digit].innerHTML = 1;
        nums[digit-1] = 1;
        digit++;
    }
}

function clickTwo() {
    if(digit < 4) {
        document.getElementsByTagName("p")[digit].innerHTML = 2;
        nums[digit-1] = 2;
        digit++;
    }
}

function clickThree() {
    if(digit < 4) {
        document.getElementsByTagName("p")[digit].innerHTML = 3;
        nums[digit-1] = 3;
        digit++;
    }
}

function clickOkay() {
    if(digit == 4) {
        match = true;
        for(let i = 0; i < nums.length; i++) {
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
    } else if(clock == 0) {
        document.getElementById("msg").innerHTML = "You ran out of time!";
    }
}

function clickClear() {
    if(!match && clock != 0) {
        nums = [];
        for(let i = 1; i < 4; i++) {
            document.getElementsByTagName("p")[i].innerHTML = "";
        }
        digit = 1;
        document.getElementById("guess1").innerHTML = "?";
        document.getElementById("guess2").innerHTML = "?";
        document.getElementById("guess3").innerHTML = "?";
    }
}

function eraseOne() {
    if(!match && clock != 0 && digit > 1) {
        digit--;
        nums.splice(nums.length-1,1);
        document.getElementsByTagName("p")[digit].innerHTML = "?";
    }
}

document.addEventListener("keypress", function(event) {
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
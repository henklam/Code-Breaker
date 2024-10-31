var clock = 7;
var digit = 1;
var match = true;
var random1 = Math.floor(Math.random()*3)+1;
var random2 = Math.floor(Math.random()*3)+1;
var random3 = Math.floor(Math.random()*3)+1;
var compNums = [random1, random2, random3];
var nums = [];
console.log(compNums);

document.getElementById("clock").innerHTML = clock;

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
            document.getElementById("clock").innerHTML = clock;
            clickClear();
        }
    }
}

function clickClear() {
    if(!match && clock != 0) {
        nums = [];
        for(let i = 1; i < 4; i++) {
            document.getElementsByTagName("p")[i].innerHTML = "";
        }
        digit = 1;
    }
}
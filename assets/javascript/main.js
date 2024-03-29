var clickCounter = 0;
let imageSourceArray = ["./assets/images/flying-pig-grote-markt.jpg", "./assets/images/panorama-picture.jpg","./assets/images/brussels.jpg"];

function changeImageGeneral(){
document.querySelector(".left").addEventListener("click",changeImageSourceLeftClick);
document.querySelector(".right").addEventListener("click",changeImageSourceRightClick);

function changeImageSourceRightClick(){
clickCounter ++;
let headerImage = document.querySelector(".header-image");

if (clickCounter < imageSourceArray.length){
    headerImage.src = imageSourceArray[clickCounter];
} else {
    clickCounter = 0;
    headerImage.src = imageSourceArray[clickCounter];
}
}

function changeImageSourceLeftClick(){
    clickCounter --;
    let headerImage = document.querySelector(".header-image");
    if (clickCounter < 0){
        clickCounter = imageSourceArray.length - 1;
        headerImage.src = imageSourceArray[clickCounter];
    } else {
        headerImage.src = imageSourceArray[clickCounter];
    }
    }
}
changeImageGeneral();


function allTheNumbersCountingUp(){
var numberCounterPeopleComing = 0;
function makeNumberCountUpPeopleComing(){
    numberCounterPeopleComing += 10;
    if(numberCounterPeopleComing < 900){
    let peopleComing = document.querySelector(".people-coming");
    peopleComing.innerHTML = numberCounterPeopleComing;
    } else{
        clearInterval(makeNumberCountUpPeopleComing);
    }
};

var numberCountUpArtistPlaying = 0;
function makeNumberCountUpArtistPlaying(){
    numberCountUpArtistPlaying += 1;
    if(numberCountUpArtistPlaying < 8){
    let ArtistPlaying = document.querySelector(".artist-playing");
    ArtistPlaying.innerHTML = numberCountUpArtistPlaying;
    } else{
        clearInterval(makeNumberCountUpArtistPlaying);
    }
};

var numberCountUpDuration = 0;
function makeNumberCountUpDuration(){
    numberCountUpDuration += 1;
    if(numberCountUpDuration < 7){
    let duration = document.querySelector(".duration");
    duration.innerHTML = numberCountUpDuration + ' hours';
    } else{
        clearInterval(makeNumberCountUpDuration);
    }
};

var numberCountUpTemperature = 0;
function makeNumberCountUpTemperature(){
    numberCountUpTemperature += 1;
    if(numberCountUpTemperature < 19){
    let temperature = document.querySelector(".temperature");
    temperature.innerHTML = numberCountUpTemperature + ' degrees';
    } else{
        clearInterval(makeNumberCountUpTemperature);
    }
}
var makeNumberCountUpPeopleComing = setInterval(makeNumberCountUpPeopleComing, 15);
var makeNumberCountUpArtistPlaying = setInterval(makeNumberCountUpArtistPlaying, 150);
var makeNumberCountUpDuration = setInterval(makeNumberCountUpDuration, 160);
var makeNumberCountUpTemperature = setInterval(makeNumberCountUpTemperature, 100);
}

allTheNumbersCountingUp();

document.querySelector(".tab-summary").addEventListener("click", displayOnlySummary);
document.querySelector(".tab-contact").addEventListener("click", displayOnlyContact);
document.querySelector(".tab-info").addEventListener("click", displayOnlyInfo);


    var summary = document.querySelector(".summary");
    var contact = document.querySelector(".contact");
    var info = document.querySelector(".info");

    function displayOnlySummary(){
        summary.style.display = "block";
        contact.style.display = "none";
        info.style.display = "none";
    };
    displayOnlySummary();

    function displayOnlyContact(){
        summary.style.display = "none";
        contact.style.display = "block";
        info.style.display = "none";
    };

    function displayOnlyInfo(){
        summary.style.display = "none";
        contact.style.display = "none";
        info.style.display = "block";
    };


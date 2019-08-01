var clickCounter = 0;
let imageSourceArray = ["./assets/images/flying-pig-grote-markt.jpg", "./assets/images/concert-picture.jpg","./assets/images/party-picture.jpg"];



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


var buttons = document.querySelectorAll(".drum");

for (var i=0; i < buttons.length;  i++) {
    buttons[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(character){
    
    switch (character) {

        case "a":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();   
            break;

        case "s":
            var kickBass = new Audio("sounds/tom-2.mp3");
            kickBass.play();
            break;
        
        case "d":
            var snare = new Audio("sounds/tom-3.mp3");
            snare.play();
            break;

        case "f":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/kick-bass.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/snare.mp3");
            tom4.play();
            break;
        
        default:
            console.log(character);
            break;
    }
}

function buttonAnimation(character){
    var activeButton = document.querySelector("."+ character);

    activeButton.classList.toggle("pressed");
    setTimeout(function(){activeButton.classList.toggle("pressed")}, 100);
}

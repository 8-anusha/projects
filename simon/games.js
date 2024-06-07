// alert("hello");
level=0;
gamePattern=[];
userClickedPattern=[];
buttonColours=["red", "blue", "green", "yellow"];
var started = false;

$("body").on("keydown",function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true; }
} );



$("div .btn").on("click", function(){
    var userChosenColour= this.id;
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log("user pattafter:  "+ userClickedPattern);
    playAudio(userChosenColour);

    checkAnswer(( userClickedPattern.length)-1);
}  
)

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){$("."+currentColour).removeClass("pressed")},100);
}



function playAudio(name){
    var audio= new Audio("sounds/"+name+".mp3");
    console.log(audio);
    audio.play();
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){ console.log("success");
        if (userClickedPattern.length===gamePattern.length)
        {setTimeout (function(){nextSequence();},1000);}
          }

    else {console.log("wrong");
           playAudio("wrong");
           $("body").addClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
            setTimeout(function(){$("body").removeClass("game-over");},200);
            startOver();
          }

}

function nextSequence(){
    $("h1").text("LEVEL "+ level);
    level++;
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random() *4);
    randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("game patt:  "+gamePattern);
    console.log("user patt:  "+userClickedPattern);

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColour);
    
};

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

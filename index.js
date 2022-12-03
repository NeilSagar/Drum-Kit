var audio;

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick()
{
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml);
makeAnimation(buttonInnerHtml);
}

document.addEventListener("keydown",handlepress);
function handlepress(event)
{
  var pressedKey=event.key;
  makeSound(pressedKey);
  makeAnimation(pressedKey);
}
function makeAnimation(key)
{
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  },100);
}


function makeSound(musicInstrument){
  switch(musicInstrument)
  {
    case 'w': audio=new Audio("sounds/crash.mp3");
              audio.play();break;
    case 'a':audio=new Audio("sounds/kick-bass.mp3");
              audio.play();break;
    case 's':audio=new Audio("sounds/snare.mp3");
              audio.play();break;
    case 'd':audio=new Audio("sounds/tom-1.mp3");
              audio.play();break;
    case 'j':audio=new Audio("sounds/tom-2.mp3");
              audio.play();break;
    case 'k':audio=new Audio("sounds/tom-3.mp3");
              audio.play();break;
    case 'l': audio=new Audio("sounds/tom-4.mp3");
              audio.play();break;
    default:console.log(musicInstrument);
  }
}

/////// BUTTONS////////////////
const start = document.getElementById('play');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const arrowUp = document.getElementById('arrow_up');
const arrowDown = document.getElementById('arrow_down');

/////////// VARIABLES //////////////////
let minutes = document.getElementById('minutes');
let secounds = document.getElementById('secounds');
let semicolon = document.getElementById('semicolon');
let sessionLength = document.getElementById('time');
let startTimer;

sessionLength.innerText = minutes.innerText;

// ///////////// ARROW UP AND DOWN //////////////
arrowUp.addEventListener('click',()=>{
  if(minutes.innerText >= 0 && !startTimer ){
    minutes.style.visibility = 'visible';
    secounds.style.visibility = 'visible';
    semicolon.innerText = ':'
    minutes.innerText++;
    sessionLength.innerText++;
    secounds.innerText = '00';
  }
})
arrowDown.addEventListener('click', ()=>{
  if(minutes.innerText > 0 && !startTimer  ){
    minutes.innerText--;
    sessionLength.innerText--;
    secounds.innerText = '00';
  }else if(minutes.innerText == 0 && !startTimer ){
    minutes.style.visibility = 'hidden';
    secounds.style.visibility = 'hidden';
    semicolon.innerText = `time's up!`;
  }
})

/////////////////// START RESET STOP BUTTONS //////////////
start.addEventListener('click', ()=>{
  if(startTimer === undefined){
    startTimer = setInterval(timer, 1000)
  }else{
    alert('Timer is already running')
  }
})

reset.addEventListener('click', () =>{
  if(minutes.innerText == 0 && secounds.innerText == 0){
  minutes.innerText = sessionLength.innerText;
  secounds.innerText = '00';
  semicolon.textContent = ':'
  stopInterval()
  startTimer = undefined;
  }else{
  minutes.innerText = sessionLength.innerText;
  secounds.innerText = '00';
  stopInterval()
  startTimer = undefined;
  }
})

pause.addEventListener('click', ()=>{
  stopInterval();
  startTimer = undefined;
})

// start timer Function
function timer(){
  if(secounds.innerText != 0){
    secounds.innerText--;
  } if(minutes.innerText != 0 && secounds.innerText == 0){
    secounds.innerText = 59;
    minutes.innerText --;
  } if (minutes.innerText == 0 && secounds.innerText == 0){
      minutes.style.visibility ='hidden';
      secounds.style.visibility ='hidden';
      semicolon.innerText = `time's up!`;
      clearInterval(startTimer);
      startTimer = undefined;
    } 
    if (secounds.innerText < 10 ){
      secounds.innerText = `0${secounds.innerText}`;
      console.log(secounds.innerText);
    };
  };
//stop timer function
function stopInterval(){
  clearInterval(startTimer);
}

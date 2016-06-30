var workSeconds, workMin, breakMin, breakSeconds, 
    dummyWork, dummyBreak, 
    secondsPassed, minutesPassed, 
    intervalId;

function startTime(){
  
  //reading parameters
  var workTime = parseFloat($(".workSelect")[0].value);
  var breakTime = parseFloat($(".breakSelect")[0].value);
  workSeconds = 60 * workTime; 
  workMin = Math.floor(workTime); 
  breakSeconds = 60 * breakTime; 
  breakMin = Math.floor(breakTime); 

  //setting initial values  
  dummyWork = 1 ;
  dummyBreak = 0 ; 
  secondsPassed = 0 ;
  minutesPassed = 0 ; 
}
function updateTime(){
secondsPassed++;
if (secondsPassed==60){
  secondsPassed = 0 ; 
  minutesPassed++;
}

if (dummyWork==1){
  var workSecondsLeftTotal = (workSeconds - secondsPassed);
  var workSecondsLeft = workSecondsLeftTotal % 60;
  var workMinutesLeft = Math.floor((workSecondsLeftTotal - workSecondsLeft) / 60 );
  $(".workMessage").html("Write Like You're Running Out Of Time!");
  $(".screenrow").html(("0" + workMinutesLeft).slice(-2)+":"+("0" + workSecondsLeft).slice(-2));
  if ((workSecondsLeft == 0 ) && (workMinutesLeft == 0)){
    startTime();
    dummyWork = 0; 
    dummyBreak = 1;
    secondsPassed = 0 ;
  }
}
if (dummyBreak == 1){
  var breakSecondsLeftTotal = (breakSeconds - secondsPassed);
  var breakSecondsLeft = breakSecondsLeftTotal % 60;
  var breakMinutesLeft = Math.floor((breakSecondsLeftTotal - breakSecondsLeft) / 60 );
  ("0" + breakSecondsLeft).slice(-2);
  ("0" + breakMinutesLeft).slice(-2);
  $(".workMessage").html("Do You");
  $(".screenrow").html(("0" + breakMinutesLeft).slice(-2)+":"+("0" + breakSecondsLeft).slice(-2));
  if ((breakSecondsLeft == 0 ) && (breakMinutesLeft == 0)){
    startTime();
    dummyWork = 1; 
    dummyBreak = 0;
  }
}
}

$(".startButton").click(function(){
 clearInterval(intervalId);
 startTime();
 intervalId=setInterval(updateTime, 1000);
})

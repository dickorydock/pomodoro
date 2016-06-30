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

  // var workMinutesLeft = workMin - minutesPassed-1;
  // console.log(secondsPassed);
  // console.log(workSecondsLeft);
  // console.log(minutesPassed);
  // var workSecondsLeft = (60+startSeconds -  d.getSeconds())%60;
  // var workMinutesLeft = (endMinutes-d.getMinutes())%60;
// console.log("this is a test"+(parseInt($(".workSelect")[0].value)+1));
// console.log($(".workSelect"));

//individual operation buttons
$(".startButton").click(function(){
   clearInterval(intervalId);
 
   // var htmlstring = $(".screen").html();
   // htmlstring+="+";
  startTime();
  // console.log("done");
  intervalId=setInterval(updateTime, 1000);
  // $(".screen").html(htmlstring);
})

// $("#buttonminus").click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring+="-";
//   $(".screen").html(htmlstring);
// })

// $("#buttontimes").click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring+="*";
//   $(".screen").html(htmlstring);
// })

// $("#buttondivide").click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring+="/";
//   $(".screen").html(htmlstring);
// })

// $("#buttonCE").click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring=htmlstring.substr(0,htmlstring.length-1);
//   $(".screen").html(htmlstring);
// })


// $("#buttonAC").click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring=htmlstring.substr(0,htmlstring.length-1);
//   $(".screen").html("");
// })

// var equalCalc = function (){
//   var htmlstring = $(".screen").html();
//   var minusArray = htmlstring.match(/\d-/g);
//   if (minusArray != null){

//   //replace - with +- so that we can split by plus signs
//   for (i=0; i<minusArray.length;i++){
//     htmlstring = htmlstring.replace(minusArray[i], minusArray[i].substr(0,1)+"+-");
//     htmlstring = htmlstring.replace("---", "-");
//     htmlstring = htmlstring.replace("--", "");
//   }
//   }
//   addArray = htmlstring.split("+");
  
//   //setting initial 'solution'
//   var htmlNum = 0;

//   //split by * and /, then multiply and divide until you get each individual component that will be added/subtracted
//   for (var i=0; i<addArray.length;i++){
//   multArray = addArray[i].split("*");
//   multProduct = 1;

//   for (var j=0; j<multArray.length;j++){
//     var divArray = multArray[j].split("/")
//     var divQuotient = divArray[0] ; 
//     for (var k=1; k<divArray.length; k++){
//       divQuotient = divQuotient/divArray[k];
//     }
//     multProduct *= parseFloat(divQuotient);
//   }

//   htmlNum +=parseFloat(multProduct);
//   }

//   return htmlNum;

// };


// $("#buttonequal").click(function(){
//   replaceNum = equalCalc();
//   $(".screen").html(replaceNum);
//   });


// $("#buttonrecip").click(function(){
//   replaceNum = equalCalc();
//   $(".screen").html(1/replaceNum);
//   });

//adding number buttons
// function addI(i){
//   var buttonName  =  "#button"+i;
//   $(buttonName).click(function(){
//    var htmlstring = $(".screen").html();
//    htmlstring+=i;
//    });
// }

// for (i=0;i<10;i++){
//   addI(i);
//  }

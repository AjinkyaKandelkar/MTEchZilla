
let startingTime = 1 ;
const buttonReset = document.getElementById("reset");
let time = startingTime*60;
var interval;
let count =1;



const counterElement = document.getElementById("counter");



function updateTimer()
{
    
    if(time == 0 && count<2)
    {
        
        time=5*60;
        
        document.getElementById("bt").style.display="block";
        count++;
    }
    else
    {
        const min = Math.floor(time/60);
        const sec = time%60;
        
        counterElement.innerHTML =(min < 10 ? "0" : "") + min + " : " + (sec < 10 ? "0" : "") + sec;
        time--;

    }


}


function pauseTimer()
{
    clearInterval(interval);
    
}

function playTimer()
{
    interval = setInterval( updateTimer, 1000 );
    console.log(interval);
}


buttonReset.onclick = function(){
    time = startingTime*60;
    updateTimer();
}




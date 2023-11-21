
//selecting all buttons in html by class using querySelectior
let startBtn = document.querySelector('.start-btn');
let stopBtn = document.querySelector('.stop-btn');
let resetBtn = document.querySelector('.reset-btn');
//selecting all hour , minute and second same by query selector
let hour =document.querySelector('.hour');
let minute =document.querySelector('.minute');
let second =document.querySelector('.second');

//time array will contains the hour ,minute and seconds.
let time =[0 ,0 ,0];
//timerId variable will be used while using setInterval and clearInterval
let timerId= 0;

//event lister on button
startBtn.addEventListener("click",function(){

    // this if condition we have used , so that if user press start button more than 1times than it should returns and not runs agains.
    if(timerId!=0)
    {
        return;
    }
    //we are adding the disable class so that user can see the start button is now disable.
    startBtn.classList.add("disable");

    //logic for time increment 
    timerId=setInterval(()=>{
        time[2]++
        if(time[2]==60)
        {
            time[1]++;
            time[2]=0;
        }
        if(time[1]==60)
        {
            time[0]++;
            time[1]=0;
        }
        //displaying time
        displayTime();
    },1000)
})
 //stop button should stop the stopwatch after clicking so we are clearing the timeInterval and
 // also setting timerid equal to 0 so that start button behaves properly
stopBtn.addEventListener("click", function(){
    stopBtn.classList.add("disable");
    startBtn.classList.remove("disable");
    clearInterval(timerId);
    timerId=0;
    
})
//reset button will reset the stop watch.
resetBtn.addEventListener("click",function(){
    startBtn.classList.remove("disable");
    stopBtn.classList.remove("disable");
    time =[0,0,0];
    clearInterval(timerId);
    timerId=0;
    displayTime();
    
})

//it will display time, we have used padStart to append 0 to make it of length 2 and padEnd to  
//append : and make it of 4 length
function displayTime()
{
    hour.innerText=time[0].toString().padStart(2,"0").padEnd(4," :");
    minute.innerText=time[1].toString().padStart(2,"0").padEnd(4," :");
    second.innerText=time[2].toString().padStart(2,"0");
}
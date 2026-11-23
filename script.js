function updateClock(){
    const clock =document.getElementById("clock");
    if(clock)
        clock.textContent=new Data().toLocaleTimeString();
}
updateClock();
getIntervel(updateClock,1000);
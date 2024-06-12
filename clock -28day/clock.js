function getTime(){
    const time = new Date()
    console.log(time);

    const hour = time.getHours()
    console.log(hour);

    const min = time.getMinutes()
    console.log(min);

    const sec = time.getSeconds()
    console.log(sec);

    const msec = time.getMilliseconds()
    console.log(msec);

    time1.innerHTML = `${hour}:${min}:${sec}:${msec} ${hour>=12?'PM':'AM'}`
    time1.style.color = "blue"

    setTimeout(()=>{getTime()},1000)
}

getTime()

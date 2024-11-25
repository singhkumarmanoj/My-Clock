function showTime(){
    var date = new Date();
    var h = date.getHours();        //0-23
    var m = date.getMinutes();      //0-59
    var s = date.getSeconds();      //0-59
    var ms = date.getMilliseconds();
    const t = "Time";
    var session = "AM";
    if(h==0){
        h = 12
    }

    if(h>12){
        h = h-12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms<9) ? "00" + ms :ms;
    ms = (ms<99) ? "0" + ms : ms;

    var time =t + ":" + h + ":" + m + ":" + s + ":"+ ms + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime,250);

}
showTime();
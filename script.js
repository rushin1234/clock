
let box=document.getElementsByClassName('box')[0]
setInterval(() => {
    let time=new Date()
    let h=time.getHours()
    let m=time.getMinutes()
    let s=time.getSeconds()
    if(h>12) h=h-12;
    if(s<10) s="0"+s
    if(m<10) m="0"+m
    if(h<10) h="0"+h
    box.innerHTML=h + " : " + m + " : " + s
    console.log("current time is " + h + " : " + m + " : " + s)
}, 1000);


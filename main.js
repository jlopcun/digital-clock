const clock = document.getElementById('clock');

setInterval(()=>{
    clock.textContent = new Date().toLocaleTimeString();
    if(hour<=12 && !clock.textContent.includes('AM')) clock.textContent +=` AM`;
    else if(hour>12 && !clock.textContent.includes('PM')) clock.textContent +=` PM`;
    
},1000);

const hour = new Date().getHours();
console.log(hour)

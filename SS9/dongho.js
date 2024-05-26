let ul = document.getElementById("timers");
console.log("ul: ", ul);

let timers = []; 
for (let i = 0; i < 5; i++) {

  let timer = document.createElement("li"); 
  timer.className = "timer";
  timer.innerHTML = `
    <span class="time">00:00</span>
    <button onclick="startTimer(${i})">Start</button>
    <button onclick="stopTimer(${i})">Stop</button>
    <button onclick="pauseTimer(${i})">Pause</button>
    `;
  timers.push({ element: timer, interval: null, time: 0 }); 
  
  ul.appendChild(timer);
}

console.log(timers);

function startTimer(i) {

  timers[i].interval = setInterval(() => {
    timers[i].time++;
    let minutes = Math.floor(timers[i].time / 60); 
    let seconds = timers[i].time % 60;
    timers[i].element.querySelector(".time").textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}


function stopTimer(i) {
    clearinterval(timers[i].interval);
    timers[i].time=0;
    timers[i].element.querySelector("time").textContent ="00:00"
    
}

function pauseTimer(i) {
    clearInterval(timers[i].interval);
}


function startALL(){
    for(let i=0; i< timers.length; i++){
        startTimer(i)
    }
}

function sALL(top){
    for(let i=0; i< timers.length; i++){
        stopTimer(i)
    }
}
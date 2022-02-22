const clockTarget = document.getElementById("clock");
const clockAfter = document.querySelector("#clock::after");
console.dir(clockAfter);

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  let setText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes }`  : minutes } : ${seconds < 10 ? `0${seconds }`  : seconds }` ;
  clockTarget.innerText = setText;

  if (hours < 12) {
    setText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes }`  : minutes } : ${seconds < 10 ? `0${seconds }`  : seconds } AM` ;
    clockTarget.innerText = setText;
  } else {
    setText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes }`  : minutes } : ${seconds < 10 ? `0${seconds }`  : seconds } PM` ;
    clockTarget.innerText = setText;
  }
}

function init() {
  clock();
  setInterval(clock, 1000);
}

init();

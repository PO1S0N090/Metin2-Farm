const coutdownEl_meley = document.getElementById('countdown_meley')
const coutdownEl_hidra = document.getElementById('countdown_hidra')
const coutdownEl_jotun = document.getElementById('countdown_jotun')
const coutdownEl_Nemere = document.getElementById('countdown_nemere')


var countDownNemere;
var countDownHydra;
var countDownJotun;
var countDownMeley;

var sound = new Audio("ronaldo-siuuuu.mp3")





function updateCountdownMeley (){
  const startingMinutes = 1
  let time = startingMinutes * 60
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    time = 180 * 60
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // coutdownEl.innerHTML = minutes+":"+seconds
    time < 0 ? 0: time;
    // setInterval(updateCountdown, 1000)
    countDownMeley = setInterval(function() { // removed var keyword
            if (time == 0) {
              clearInterval(countDownMeley);
              coutdownEl_meley.innerHTML = "Ready";
              sound.play()
            } else {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                coutdownEl_meley.innerHTML = minutes+":"+seconds;
                if (seconds < 10) {
                  coutdownEl_meley.innerHTML = minutes+":0"+seconds;
                }
            }
            time --;
          }, 1000);

}


function updateCountdownHidra (){
  const startingMinutes = 1
  let time= startingMinutes * 60
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    time = 20 * 60
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // coutdownEl.innerHTML = minutes+":"+seconds
    time < 0 ? 0: time;
    // setInterval(updateCountdown, 1000)
    countDownHydra = setInterval(function() { // removed var keyword
            if (time == 0) {
              clearInterval(countDownHydra);
              coutdownEl_hidra.innerHTML = "Ready";
              sound.play()
            } else {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                coutdownEl_hidra.innerHTML = minutes+":"+seconds;
                if (seconds < 10) {
                  coutdownEl_hidra.innerHTML = minutes+":0"+seconds;
                }
            }
            time --;
          }, 1000);

}


function updateCountdownJotun(){
    const startingMinutes = 1
    let time= startingMinutes * 60
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    time =  120 * 60

    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // coutdownEl.innerHTML = minutes+":"+seconds
    time < 0 ? 0: time;
    // setInterval(updateCountdown, 1000)
    countDownJotun = setInterval(function() { // removed var keyword
            if (time == 0) {
              clearInterval(countDownJotun);
              coutdownEl_jotun.innerHTML = "Ready";
              sound.play()
            } else {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;
                coutdownEl_jotun.innerHTML = minutes+":"+seconds;
                if (seconds < 10) {
                  coutdownEl_jotun.innerHTML = minutes+":0"+seconds;
                }
            }
            time --;
          }, 1000);

}




function updateCountdownNemere(data){
  const startingMinutes = 1
  let time= startingMinutes * 60
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  time = 240 * 60

  // time =  1 * 60

  
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // coutdownEl.innerHTML = minutes+":"+seconds
  time < 0 ? 0: time;
  // setInterval(updateCountdown, 1000)
  countDownNemere = setInterval(function() { // removed var keyword
          if (time == 0) {
            clearInterval(countDownNemere);
            coutdownEl_Nemere.innerHTML = "Ready";
            sound.play()
          } else {
              const minutes = Math.floor(time / 60);
              let seconds = time % 60;
              coutdownEl_Nemere.innerHTML = minutes+":"+seconds;
              if (seconds < 10) {
                coutdownEl_Nemere.innerHTML = minutes+":0"+seconds;
              }
          }
          time --;
        }, 1000);

}


function stopCounter(type) {
  if (type == "nemere"){
    clearInterval(countDownNemere)
    coutdownEl_Nemere.innerHTML = "Ready";
  }

  if (type == "hydra"){
    clearInterval(countDownHydra)
    coutdownEl_hidra.innerHTML = "Ready";
  }

  if (type == "meley"){
    clearInterval(countDownMeley)
    coutdownEl_meley.innerHTML = "Ready";
  }

  if (type == "jotun"){
    clearInterval(countDownJotun)
    coutdownEl_jotun.innerHTML = "Ready";
  }
}







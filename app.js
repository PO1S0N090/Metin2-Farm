const coutdownEl_meley = document.getElementById('countdown_meley')
const coutdownEl_hidra = document.getElementById('countdown_hidra')

function updateCountdownMeley (){
  const startingMinutes = 1
  let time = startingMinutes * 60
  var countDown;
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    time = 180 * 60
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // coutdownEl.innerHTML = minutes+":"+seconds
    time < 0 ? 0: time;
    // setInterval(updateCountdown, 1000)
    countDown = setInterval(function() { // removed var keyword
            if (time == 0) {
              clearInterval(countDown);
              coutdownEl_meley.innerHTML = "Ready";
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
  var countDown;
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    time = 20 * 60
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // coutdownEl.innerHTML = minutes+":"+seconds
    time < 0 ? 0: time;
    // setInterval(updateCountdown, 1000)
    countDown = setInterval(function() { // removed var keyword
            if (time == 0) {
              clearInterval(countDown);
              coutdownEl_hidra.innerHTML = "Ready";
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



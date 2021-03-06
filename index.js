

// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockfaceDays: document.querySelector('[data-value="days"]'),
//     clockfaceHours: document.querySelector('[data-value="hours"]'),
//     clockfaceMins: document.querySelector('[data-value="mins"]'),
//     clockfaceSecs: document.querySelector('span[data-value="secs"]'),
// }



// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);
        
//         this.onTick(time);
//         console.log(deltaTime)

//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//     getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
// console.log(days)
//     return {days, hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });
// refs.startBtn.addEventListener('click', () => { timer.start.bind(timer)});
// refs.stopBtn.addEventListener('click', () => { timer.stop.bind(timer)});

// function updateClockface({days, hours, mins, secs }) {
//     refs.clockfaceDays.textContent = `${days}`;
//     refs.clockfaceHours.textContent = `${hours}`;
//     refs.clockfaceMins.textContent = `${mins}`;
//     refs.clockfaceSecs.textContent = `${secs}`;
//     console.log(refs.clockfaceSecs.textContent = `${secs}`)
    
// }


 class CountdownTimer {
   constructor({ selector, targetDate } ) {
    this.timerId = null;
    this.targetDate = targetDate;
    this.selector = selector;
     
    this.timerContainer = document.querySelector(`${this.selector}`);

    this.startBtn = this.timerContainer.previousElementSibling.previousElementSibling;
    this.stopBtn = this.timerContainer.previousElementSibling;
     
    this.sec = this.timerContainer.children[3].children[0];
    this.min = this.timerContainer.children[2].children[0];
    this.hours = this.timerContainer.children[1].children[0];
    this.days = this.timerContainer.children[0].children[0];
     
    this.action = this.action.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  action() {
    const time = this.targetDate.getTime() - Date.now();
      
    const sec = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
      
    this.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
    this.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.days.textContent = days < 10 ? `0${days}` : days;
  }

  start() {
    this.timerId = setInterval(this.action, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  init() {
    this.startBtn.addEventListener("click", this.start);
    this.stopBtn.addEventListener("click", this.stop);
  }
}

const watch = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 7, 14, 5, 40, 0, 0)
  
});
watch.init();
const watch2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date(2021, 8, 14, 5, 40, 0, 0)
  
});
watch2.init();

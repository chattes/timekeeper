import "./TimerComponent.css";
export const TimerComponent = props => {
  return {
    create_timer,
    render_timer
  };
};

const create_timer = props => {
  let clockTimer = document.createElement("span");
  clockTimer.id = "clock";
  clockTimer.className = "clock-timer";
  clockTimer.innerHTML = "00:00";
  return clockTimer;
};

const render_timer = props => {
  const { time } = props;
  const time_x = toHHMMSS(time);
  document.getElementById("clock").innerHTML = time_x;
};

var toHHMMSS = secs => {
  var sec_num = parseInt(secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map(v => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

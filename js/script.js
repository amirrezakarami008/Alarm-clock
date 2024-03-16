let Time = document.querySelector(".Time");
let SetAlarmBtn = document.querySelector("button");
let selectMenu = document.querySelectorAll("select");
let content = document.querySelector(".content");
let AlarmTime,
  AlarmState = "noset";
  console.log(AlarmTime);
  console.log(AlarmState);
const ringtone = new Audio("../file/alarm-clock-short-6402.mp3");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? (i = "0" + i) : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? (i = "0" + i) : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(ClockHandler, 1000);

function ClockHandler() {
  let myDate = new Date();
  let hou = String(myDate.getHours()).padStart(2, "0");
  let min = String(myDate.getMinutes()).padStart(2, "0");
  let sec = String(myDate.getSeconds()).padStart(2, "0");
  Time.innerHTML = `${hou} : ${min} : ${sec}`;

    if (AlarmTime == `${hou} : ${min}`) {
      ringtone.play();
      ringtone.loop = true;
    }
}

SetAlarmBtn.addEventListener("click", () => {
  AlarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`;
  if (AlarmTime.includes("Hour") || AlarmTime.includes("Minute"))
    return alert("لطفا زمان را به درستی وارد کنید");

  CheckState(AlarmState);
});

function CheckState(state) {
  if (state == "noset") {
    content.classList.add("disable");
    SetAlarmBtn.innerHTML = "clear alarm";
    AlarmState = "set";
  } else {
    content.classList.remove("disable");
    AlarmTime = "";
    SetAlarmBtn.innerHTML = "set alarm";
    AlarmState = "noset";
    // ringtone.pause();
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4"); //This will select all the h4 of .deadline-format class

let futureDate = new Date(2023, 0, 22, 8, 33, 0); //Setting the date
giveaway.textContent = `Giveaway Ends On ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}pm`;

function format(item){
  if(item<10){
    return `0${item}`;
  }
  return item
}

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  const oneDay = 24 * 60 * 60 * 1000; // 24hr * 60min * 60sec * 1000ms
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hour = Math.floor(t % oneDay / oneHour); // we did mod because we want remaining of the previos value.
  let min = Math.floor(t % oneHour / oneMin);
  let sec = Math.floor(t % oneMin / 1000);

  const values = [days, hour, min, sec];

  items.forEach(function(item,index){
    item.innerHTML = format(values[index])
  });
  if(t<0){
    clearInterval(count);
    deadline.innerHTML =`<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
const count=setInterval(getRemainingTime,1);

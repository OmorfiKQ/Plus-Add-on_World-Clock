function updateTime() {
  // tab-1 elements
  let cityOneElement = document.querySelector("#city-one");
  if (cityOneElement) {
  let cityOneDateElement = cityOneElement.querySelector(".date");
  let cityOneTimeElement = cityOneElement.querySelector(".time");
  let cityOneTime = moment().tz("Europe/Moscow");

  cityOneDateElement.innerHTML = cityOneTime.format("dddd, MMMM Do YYYY");
  cityOneTimeElement.innerHTML = cityOneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}


  // tab-2 elements

  let cityTwoElement = document.querySelector("#city-two");
   if (cityTwoElement) {
  let cityTwoDateElement = cityTwoElement.querySelector(".date");
  let cityTwoTimeElement = cityTwoElement.querySelector(".time");
  let cityTwoTime = moment().tz("Japan");

  cityTwoDateElement.innerHTML = cityTwoTime.format("dddd, MMMM Do YYYY");
  cityTwoTimeElement.innerHTML = cityTwoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}


  // tab-2 elements

  let cityThreeElement = document.querySelector("#city-three");
   if (cityThreeElement) {
  let cityThreeDateElement = cityThreeElement.querySelector(".date");
  let cityThreeTimeElement = cityThreeElement.querySelector(".time");
  let cityThreeTime = moment().tz("Japan");

  cityThreeDateElement.innerHTML = cityThreeTime.format("dddd, MMMM Do YYYY");
  cityThreeTimeElement.innerHTML = cityThreeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}
}


function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` <div class="cities">
        <div class="tabs">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
      </div>
      <a href="/"><strong>All Cities</strong></a>`;
  } 

updateTime();
setInterval(updateTime, 1000);




let citiesSelectElement = document.querySelector("#city-select");

citiesSelectElement.addEventListener("change", updateCity);

function updateTime() {
  // tab-1 elements
  let cityOneElement = document.querySelector("#city-one");
  let cityOneDateElement = cityOneElement.querySelector(".date");
  let cityOneTimeElement = cityOneElement.querySelector(".time");
  let cityOneTime = moment().tz("Europe/Moscow");

  cityOneDateElement.innerHTML = cityOneTime.format("dddd, MMMM Do YYYY");
  cityOneTimeElement.innerHTML = cityOneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );


  // tab-2 elements

  let cityTwoElement = document.querySelector("#city-two");
  let cityTwoDateElement = cityTwoElement.querySelector(".date");
  let cityTwoTimeElement = cityTwoElement.querySelector(".time");
  let cityTwoTime = moment().tz("Japan");

  cityTwoDateElement.innerHTML = cityTwoTime.format("dddd, MMMM Do YYYY");
  cityTwoTimeElement.innerHTML = cityTwoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

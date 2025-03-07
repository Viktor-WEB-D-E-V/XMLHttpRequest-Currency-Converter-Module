"use strict";
const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "appication/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = +(inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "SSomething went wrong";
    }
  });
});

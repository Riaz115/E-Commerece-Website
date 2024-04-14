// this is for the close of navbar to click any link

let navbar = document.querySelectorAll(".navbar .nav-link");
let navcolps = document.querySelector(".navbar-collapse");
navbar.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navcolps.classList.remove("show");
  });
});

// this is for the count time in days and hours and mints etc
let daytime = document.querySelector("#day");
let hourtime = document.querySelector("#hour");
let minttime = document.querySelector("#mint");
let sectime = document.querySelector("#sec");

let counttime = () => {
  let futuredate = new Date("23 march 2024");
  let currdate = new Date();
  let mydate = currdate - futuredate;

  let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
  let mints = Math.floor(mydate / 1000 / 60) % 60;
  let sec = Math.floor(mydate / 1000) % 60;

  daytime.innerHTML = days;
  hourtime.innerHTML = hours;
  minttime.innerHTML = mints;
  sectime.innerHTML = sec;
};

counttime();
setInterval(counttime, 1000);

//  this is for the scroll to top arrow

function scrolltoptop() {
  let scrollbtn = document.querySelector("#scrolltop");
  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollbtn.classList.add("scrollactive");
    } else {
      scrollbtn.classList.remove("scrollactive");
    }
  };
}

scrolltoptop();

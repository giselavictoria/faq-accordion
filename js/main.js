let arrowDown1 = document.getElementById("arrowDown1");
let answer1 = document.getElementById("answer1");
let title1 = document.getElementById("title1");

let arrowDown2 = document.getElementById("arrowDown2");
let answer2 = document.getElementById("answer2");
let title2 = document.getElementById("title2");

let arrowDown3 = document.getElementById("arrowDown3");
let answer3 = document.getElementById("answer3");
let title3 = document.getElementById("title3");

let arrowDown4 = document.getElementById("arrowDown4");
let answer4 = document.getElementById("answer4");
let title4 = document.getElementById("title4");

let arrowDown5 = document.getElementById("arrowDown5");
let answer5 = document.getElementById("answer5");
let title5 = document.getElementById("title5");

let active1 = true;
let active2 = true;
let active3 = true;
let active4 = true;
let active5 = true;

arrowDown1.addEventListener("click", function () {
  if (active1) {
    answer1.style.display = "block";
    arrowDown1.style.transform = "rotate(180deg)";
    title1.style.fontWeight = "700";
    active1 = false;
    close2();
    close3();
    close4();
    close5();
  } else {
    close1();
  }
});

arrowDown2.addEventListener("click", function () {
  if (active2) {
    answer2.style.display = "block";
    arrowDown2.style.transform = "rotate(180deg)";
    title2.style.fontWeight = "700";
    active2 = false;
    close1();
    close3();
    close4();
    close5();
  } else {
    close2();
  }
});

arrowDown3.addEventListener("click", function () {
  if (active3) {
    answer3.style.display = "block";
    arrowDown3.style.transform = "rotate(180deg)";
    title3.style.fontWeight = "700";
    active3 = false;
    close1();
    close2();
    close4();
    close5();
  } else {
    close3();
  }
});

arrowDown4.addEventListener("click", function () {
  if (active4) {
    answer4.style.display = "block";
    arrowDown4.style.transform = "rotate(180deg)";
    title4.style.fontWeight = "700";
    active4 = false;
    close1();
    close2();
    close3();
    close5();
  } else {
    close4();
  }
});

arrowDown5.addEventListener("click", function () {
  if (active5) {
    answer5.style.display = "block";
    arrowDown5.style.transform = "rotate(180deg)";
    title5.style.fontWeight = "700";
    active5 = false;
    close1();
    close2();
    close3();
    close4();
  } else {
    close5();
  }
});

function close1() {
  answer1.style.display = "none";
  arrowDown1.style.transform = "rotate(0deg)";
  title1.style.fontWeight = "400";
  active1 = true;
}

function close2() {
  answer2.style.display = "none";
  arrowDown2.style.transform = "rotate(0deg)";
  title2.style.fontWeight = "400";
  active2 = true;
}

function close3() {
  answer3.style.display = "none";
  arrowDown3.style.transform = "rotate(0deg)";
  title3.style.fontWeight = "400";
  active3 = true;
}

function close4() {
  answer4.style.display = "none";
  arrowDown4.style.transform = "rotate(0deg)";
  title4.style.fontWeight = "400";
  active4 = true;
}

function close5() {
  answer5.style.display = "none";
  arrowDown5.style.transform = "rotate(0deg)";
  title5.style.fontWeight = "400";
  active5 = true;
}

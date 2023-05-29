const header = document.getElementById("header");
const navBar = document.getElementById("navBar");

const bars = document.querySelectorAll(".menuBar");

const imgSidebar = document.getElementById("containerImg");
const menuNav = document.getElementById("menu");
const videoContainer = document.getElementById("video");

const sidebar = document.getElementById("navBarRight");

var isOpen = false;

window.addEventListener("scroll", function () {
  if(videoContainer != null){
  if (
    window.pageYOffset + (window.innerHeight * 1) / 5 >
    videoContainer.offsetTop
  )
    setBarColor((invert = false));
  else setBarColor((invert = true));
  }
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("fixed");
    navBar.classList.add("full");
  } else {
    header.classList.remove("fixed");
    navBar.classList.remove("full");
  }
});

menuNav.addEventListener("click", function () {
  if (!isOpen) {
    sidebar.classList.add("openSidebar");

    bars.forEach((element) => {
      element.classList.add("openMenu");
    });

    setTimeout(function () {
      imgSidebar.classList.remove("hideContent");
    }, 500);

    isOpen = true;
  } else {
    sidebar.classList.remove("openSidebar");

    bars.forEach((element) => {
      element.classList.remove("openMenu");
    });

    imgSidebar.classList.add("hideContent");

    isOpen = false;
  }
});

function setBarColor(invert = false) {
  if (!invert) {
    document.body.style.setProperty("--bg-color-nav", "#eaeaea");
    document.body.style.setProperty("--text-nav-color", "#000000");
    document.body.style.setProperty("--logo-color", "0");
  } else {
    document.body.style.setProperty("--bg-color-nav", "#222b34");
    document.body.style.setProperty("--text-nav-color", "#eaeaea");
    document.body.style.setProperty("--logo-color", "1");
  }
}

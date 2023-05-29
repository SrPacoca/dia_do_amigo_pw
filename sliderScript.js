const video = document.getElementById("videoContent");
const videos = document.querySelectorAll("#videoContent video");

const rightArrow = document.getElementById("rightArrowButton");
const leftArrow = document.getElementById("leftArrowButton");

const firstElement = videos[0];
const lastElement = videos[videos.length - 1];

let idx = 0;
let maxItems = videos.length - 1;

rightArrow.addEventListener("click", function () {
  idx += 1;

  if (idx > maxItems) {
    idx = 0;
  }
  console.log(idx);
  alignItems();
});

leftArrow.addEventListener("click", function () {
  idx -= 1;
  if (idx < 0) {
    idx = maxItems;
  }
  console.log(idx);
  alignItems();
});


function alignItems()
{
  videos[idx].scrollIntoView({
    inline: "center",
    block: "start",
    behavior: "smooth"
  });

  console.log("alinhando");
}

window.addEventListener("resize", function()
{
  if (
    window.pageYOffset + (window.innerHeight * 1) / 5 >
    videoContainer.offsetTop
  )
  alignItems();
});




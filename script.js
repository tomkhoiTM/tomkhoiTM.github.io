// Collapsible event
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Title animation remains the same
let titleCtn = document.getElementById("page-title-ctn");
let title = document.getElementById("page-title");
let titleAlt = document.getElementById("page-title-alt");
titleCtn.addEventListener("mouseover", () => {
    title.style.opacity = 0;
    setTimeout(function() {
        title.style.display = "none";
        titleAlt.style.display = "block";
        setTimeout(function() {
            titleAlt.style.opacity = 1;
        }, 15)
    }, 200)
})
titleCtn.addEventListener("mouseleave", () => {
    titleAlt.style.opacity = 0;
    setTimeout(function() {
        titleAlt.style.display = "none";
        title.style.display = "block";
        setTimeout(function() {
            title.style.opacity = 1;
        }, 15)
    }, 200)
})
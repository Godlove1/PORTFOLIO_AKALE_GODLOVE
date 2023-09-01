
//loading/spinner animation/splash screen
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000,
  })
  .add({
    targets: ".ml5 .line",
    duration: 900,
    easing: "easeOutExpo",
    translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 900,
    offset: "-=600",
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 900,
    offset: "-=300",
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 900,
    offset: "-=600",
  })
  .add({
    targets: ".ml5",
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000,
  });

	//remove animatio after 6s
let stopanime = document.getElementById("loader");
setTimeout(() => {
	stopanime.style.display = "none";
}, 5000);

//animate text on idex page
var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
	

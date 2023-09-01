let closeMenu = document.getElementById("close");
let menuWindow = document.getElementById("menu");
let openmenu = document.querySelectorAll(".bar");


closeMenu.onclick = function () {
	menuWindow.style.display = "none";
}


openmenu.forEach(bar => {
	bar.addEventListener("click", () => {
	menuWindow.style.display = "block";
})
})
	
	
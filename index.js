let scroller = document.querySelector(".scroller");
let height =
	document.documentElement.scrollHeight -
	document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
	let scrollTop = document.documentElement.scrollTop;
	let progressWidth = (scrollTop / height) * 100;
	console.log(progressWidth);
	scroller.style.width = `${progressWidth}%`;
});

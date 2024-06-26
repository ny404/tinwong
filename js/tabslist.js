const leftArrow = document.querySelector(".tabs-container .left-arrow svg");
const rightArrow = document.querySelector(".tabs-container .right-arrow svg");
const leftArrowContainer = document.querySelector(".tabs-container .left-arrow");
const rightArrowContainer = document.querySelector(".tabs-container .right-arrow");
const tabsList = document.querySelector(".tabs-container ul");

const manageIcons = () => {
	if (tabsList.scrollLeft >= 20) {
		leftArrowContainer.classList.add("is-active");
	} else {
		leftArrowContainer.classList.remove("is-active");
	}

	let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
	//console.log("Scroll Width: ", tabsList.scrollWidth);
	//console.log("Client Width: ", tabsList.clientWidth);

	if (tabsList.scrollLeft >= maxScrollValue) {
		rightArrowContainer.classList.remove("is-active");
	} else {
		rightArrowContainer.classList.add("is-active");
	}
};

leftArrow.addEventListener("click", () => {
	tabsList.scrollLeft -= 200;
	manageIcons();
});

rightArrow.addEventListener("click", () => {
	tabsList.scrollLeft += 200;
	manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);
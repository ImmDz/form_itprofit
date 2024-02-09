import IMask from "imask";
import "../sass/style.scss";
import "./api";
import "./validation";

IMask(document.getElementById("phone"), {
	mask: "+{375} (00) 000-00-00",
});

const body = document.body;
const dialog = document.querySelector("dialog");
const wrapper = document.querySelector(".formWrapper");
const dialogContent = document.querySelector(".modal");
const modalOpenButton = document.querySelector(".openModal");
const modalCloseButton = document.querySelector(".closeModal");

const toggleModal = () => {
	wrapper.classList.toggle("covered");
	body.classList.toggle("scrollLock");
	dialogContent.classList.toggle("active");
};

modalOpenButton.addEventListener("click", () => {
	dialog.show();
	toggleModal();
});

modalCloseButton.addEventListener("click", () => {
	toggleModal();
	setTimeout(() => {
		dialog.close();
	}, 200);
});

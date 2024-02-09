import IMask from "imask";

const formInputs = document.querySelectorAll(".formInput, .textareaForm");
const errorMessages = document.querySelectorAll(".errorMessage");
const regexEmail =
	/^(?=.{8,30}$)(?!.*\.{2})(?![-.])[\w.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)?\.[a-zA-Z]{2,6}$/i;

const requiredMessage = "Это обязательное поле";
const incorrectMessage = "Некорректный адрес почты";

const updateErrorState = (input, index, errorMessage, isError) => {
	errorMessages[index].textContent = isError ? errorMessage : "";
	formInputs[index].classList.toggle("error", isError);
	input.classList.toggle("required", isError);
};

const validation = () => {
	let requiredErrors = 0;
	let incorrectErrors = 0;
	formInputs.forEach((item, index) => {
		if (item.value.trim() === "") {
			updateErrorState(item, index, requiredMessage, true);
			requiredErrors++;
		} else if (item.getAttribute("id") === "email" && !regexEmail.test(item.value)) {
			updateErrorState(item, index, incorrectMessage, true);
			incorrectErrors++;
		} else {
			updateErrorState(item, index, "", false);
		}
	});
	return { requiredErrors, incorrectErrors };
};

export default validation;

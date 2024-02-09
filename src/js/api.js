import validation from "./validation";

const baseUrl = "http://localhost:9090";
const form = document.querySelector(".form");
const status = document.querySelector(".status");

const getSuccess = message => {
	status.classList.remove("loading");
	status.innerHTML = message;
	status.classList.remove("error");
	status.classList.add("success");
};

const getError = message => {
	status.classList.remove("loading");
	status.innerHTML = message;
	status.classList.remove("success");
	status.classList.add("error");
};

form.addEventListener("submit", e => {
	e.preventDefault();
	const formData = new FormData(form);
	const requestData = {
		name: formData.get("name"),
		email: formData.get("email"),
		phone: formData.get("phone"),
		message: formData.get("message"),
	};

	const errors = validation();
	if (!errors.requiredErrors && !errors.incorrectErrors) {
		status.innerHTML = "";
		status.classList.add("loading");
		status.classList.remove("success");
		status.classList.remove("error");
		fetch(`${baseUrl}/api/registration`, {
			method: "POST",
			body: JSON.stringify(requestData),
		})
			.then(res => res.json())
			.then(data => {
				if (data.status === "success") {
					getSuccess(data.message);
				} else {
					getError(data.message);
				}
			})
			.catch(error => {
				getError(error);
			});
	}
});

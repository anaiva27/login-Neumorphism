const toggle = document.getElementById("formToggle");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");

// toggle.addEventListener("change", () => {
//   loginForm.classList.toggle("active");
//   registerForm.classList.toggle("active");
// });

document.querySelectorAll("form").forEach((form) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		toast.style.display = "block";
		setTimeout(() => (toast.style.display = "none"), 2000);
	});
});

themeToggle.addEventListener("change", () => {
	if (document.body.getAttribute("data-theme") === "dark") {
		document.body.removeAttribute("data-theme");
	} else {
		document.body.setAttribute("data-theme", "dark");
	}
});

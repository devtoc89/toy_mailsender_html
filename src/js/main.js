const formatItemKeys = ["name", "camp", "summary"];

const origin =
	location.origin.indexOf("localhost") > 0 ? "http://localhost:3000" : "";

function debounce(func, timeout = 250) {
	let timer;
	let isRun;
	return (...args) => {
		if (!isRun) {
			isRun = true;
			func.apply(this, args);
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			isRun = false;
		}, timeout);
	};
}

async function submitForm(body) {
	const res = await fetch(`${origin}/review`, {
		method: "post",
		body,
		headers: { "Content-Type": "application/json" },
	});

	if (res.ok) {
		const data = await res.json();
		if (data.code === "SUCCESS") {
			alert("success");
			return;
		}
	}
	alert("fail");
	return;
}

const handleOnSubmitButtonClick = debounce(() => {
	const elForm = document.querySelector("#form");
	const elBtn = elForm.querySelector("#submitBtn");
	const p = submitForm(
		JSON.stringify(
			formatItemKeys.reduce((acc, cur) => {
				acc[cur] = elForm[cur].value;
				return acc;
			}, {}),
		),
	);
	elBtn.disabled = true;
	p.finally(() => {
		elBtn.disabled = false;
	});
});

function regEvent() {
	const elSubmitBtn = document.querySelector("#form > #submitBtn");
	elSubmitBtn.addEventListener("click", handleOnSubmitButtonClick);
}

(function init() {
	regEvent();
})();

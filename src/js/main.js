const formatItemKeys = [
	{ key: "name", label: "이름" },
	{ key: "camp", label: "캠프" },
	{ key: "summary", label: "내용" },
];

const API_BASE = "/api/v1";

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
	const res = await fetch(`${API_BASE}/review`, {
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
	const errorLabel = [];
	const body = formatItemKeys.reduce((acc, cur) => {
		const nextval = elForm[cur.key].value;
		if (!nextval) errorLabel.push(cur.label);
		acc[cur.key] = nextval;
		return acc;
	}, {});

	if (errorLabel.length > 0) {
		alert(`${errorLabel}(을/를) 꼭 입력해 주세요.`);
		return;
	}

	const p = submitForm(JSON.stringify(body));
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

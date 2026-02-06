
const form = document.querySelector("form");
const popup = document.getElementById("popupOverlay");
const yesBtn = document.getElementById("popupYes");
const noBtn = document.getElementById("popupNo");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
});

yesBtn.onclick = function () {
    popup.style.display = "none";
    form.submit();
};

noBtn.onclick = function () {
    popup.style.display = "none";
};

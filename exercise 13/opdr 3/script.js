const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
        alert("Button Clicked!!");
    });
};

const toggleColor = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function () {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();
const background = document.getElementById("container");
const bgChangeButton = document.getElementById("change-bg");

const backgroundChanger = () => {
    const hexCode = "0123456789abcdef";
    hexCodeContainer = "#";
    for (let i = 0; i < 6; i++) {
        const randomHexCode =
            hexCode[Math.floor(Math.random() * hexCode.length)];
        hexCodeContainer += randomHexCode;
    }

    background.style.backgroundColor = hexCodeContainer;
};

document.body.addEventListener("keypress", (e) => {
    if (e.key == " ") {
        backgroundChanger();
    }
});

const background = document.getElementById("grid-container");
const box = document.querySelectorAll(".box");
const boxFont = document.querySelectorAll(".box-font");
const spacebarNote = document.getElementById("spacebar-note");
const bgChangeButton = document.getElementById("change-bg");

// Function that will generate and change the background color
const backgroundChanger = () => {
    const hexCode = "0123456789ABCDEF";
    hexCodeContainer = [];
    for (let i = 0; i < 9; i++) {
        hexCodeCompleted = "#";
        for (let j = 0; j < 6; j++) {
            const randomHexCode =
                hexCode[Math.floor(Math.random() * hexCode.length)];
            hexCodeCompleted += randomHexCode;
        }
        hexCodeContainer.push(hexCodeCompleted);
    }

    // Loop the box and set the textcontent to its hex code

    const changeTextContent = (box, i) => {
        box.style.backgroundColor = hexCodeContainer[i];
        boxFont[i].textContent = hexCodeContainer[i];
    };
    box.forEach((box, i) => {
        changeTextContent(box, i);
    });

    let isClickable = true;

    for (let k = 0; k < box.length; k++) {
        box[k].addEventListener("click", () => {
            const range = document.createRange();
            const selection = window.getSelection();
            const currentText = boxFont[k].textContent.slice(
                0,
                boxFont[k].textContent.length
            );
            console.log(currentText);
            if (!isClickable) {
                // If not clickable, return early and do nothing
                return;
            }
            // Select the text inside the div
            range.selectNodeContents(boxFont[k]);
            selection.removeAllRanges();
            selection.addRange(range);

            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Deselect the text
            selection.removeAllRanges();
            isClickable = false;
            // Provide feedback to the user (you can use alert, console.log, or other UI)
            console.log("Text copied to clipboard: " + boxFont[k].textContent);
            boxFont[k].textContent = "Copied to clipboard";
            setTimeout(() => {
                boxFont[k].textContent = currentText;
                isClickable = true;
                console.log(currentText);
            }, 1000);
        });
    }
};

document.body.addEventListener("keypress", (e) => {
    if (e.key == " ") {
        backgroundChanger();
        for (let l = 0; l < box.length; l++) {
            box[l].style.cursor = "pointer";
        }
    }
});

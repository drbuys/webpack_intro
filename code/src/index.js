// import "./index.css";
import createButton from "./button";
import colorElement from "./colorElement";
// import imgUrl from "./icon.jpeg";

// *** CODE SPLITTING
// const getColorElement = () => import("./colorElement");

// *** LAZY LOADING ***
// let setButtonColor;
// if (process.env.NODE_ENV === "development") {
//   setButtonColor = colorName => import(/* webpackMode: 'lazy-once' */ `./button-colors/${colorName}`);
// } else {
//   setButtonColor = colorName => import(`./button-colors/${colorName}`);
// }

// *** IMAGE ***
// console.log(imgUrl);
// const img = document.createElement("img");
// img.src = imgUrl;

const div = document.createElement("div");
div.innerText = "Hello World";
div.style.color = "red";

const button = createButton("HEY FIRST BUTTON YO!");

// *** LAZY LOADING ***
// const button1 = createButton("CHANGE THIS THEME");
// const buttonColorInput = document.createElement("input");

button.addEventListener("click", e => {
    colorElement(div, "cyan");
});

// *** CODE SPLITTING
// button.addEventListener("click", e => {
//   getColorElement().then(m => {
//     let colorElement = m.default;
//     colorElement(div, "cyan");
//   });
// });

// *** CODE SPLITTING CSS
// button.addEventListener("click", e => {
//   import("./divColor.css");
// });

// *** LAZY LOADING ***
// button1.addEventListener("click", e => {
//   const colorVal = buttonColorInput.value;
//   setButtonColor(colorVal).then(({ color }) => {
//     debugger;
//     button1.style.color = color;
//   });
// });

document.body.appendChild(button);
document.body.appendChild(div);
document.body.appendChild(img);
document.body.appendChild(button1);
document.body.appendChild(buttonColorInput);

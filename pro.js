// Box elementni olish
const box = document.getElementById("box");
const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

// mouseover -> sichqoncha ustiga borganda
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Mouse Over!";
});

// mouseout -> sichqoncha ketganda
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Hover or Click";
});

// click -> bosganda
box.addEventListener("click", () => {
    alert("Box clicked!");
});

// dblclick -> ikki marta bosganda
box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "lightgreen";
    box.textContent = "Double Clicked!";
});

// keydown -> klaviaturada tugma bosganda
inputField.addEventListener("keydown", (event) => {
    output.textContent = `Key Down: ${event.key}`;
});

// keyup -> tugmani qo‘yib yuborganda
inputField.addEventListener("keyup", (event) => {
    output.textContent = `Key Up: ${event.key}`;
});

// input -> input maydoniga yozganda
inputField.addEventListener("input", (event) => {
    output.textContent = `Input: ${event.target.value}`;
});

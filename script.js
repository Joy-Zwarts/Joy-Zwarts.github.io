const button = document.querySelector("#button");

const div = document.querySelector("#list");

function clickFunc() {
    button.innerText = "Je hebt geklikt";
}

button.addEventListener("click", clickFunc);

const fruit = [
    {
        name: "Appel",
        prijs: 3,
    },
    {
        name: "Banaan",
        prijs: 1,
    },
    {
        name: "Sinaasappel",
        prijs: 2,
    },
];

const ul = document.createElement("ul");

fruit.forEach(fruitElement => {
    const li = document.createElement("li");
    li.textContent = fruitElement.name;
    ul.appendChild(li);
});

div.appendChild(ul);


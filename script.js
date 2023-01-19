const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const list = document.querySelector(".list");



function getUrl(inputvalue) {
    list.innerHTML = "";
    fetch(`http://www.omdbapi.com/?s=${inputvalue}&apikey=${OMDB_KEY}`) 
        .then(response => response.json())
        .then(data => {
            renderMovies(data.Search)
        })
}

function renderMovies(arr) {
    arr.forEach((element => {
        const item = document.createElement("li");
        const text = document.createElement("h3");
        const img = document.createElement("img");
        item.classList.add("item", "mb-3", "text-center", "text-bg-dark");
        img.classList.add("img", "mb-3");
        img.src = element.Poster;
        text.textContent = element.Title;
        item.append(img, text);
        list.appendChild(item);
    }))
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let elInputValue = elInput.value;
 
    getUrl(elInputValue, )
})
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input").value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h3>${inpWord}</h3>
                <button class="audio-btn" onclick="playSound()">
                    <i class="fa-solid fa-volume">&#xf028;</i>
                </button>
            </div>
            <div class="pos-pro">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[1].text}</p>
            </div>
            <p class="meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>`;
        sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`);
        console.log(sound);  
    })
    .catch(() => {
        result.innerHTML = `<p class="error">Your word doesn't seem to exist :')</p>`;
    });
});

function playSound() {
    sound.play();
}
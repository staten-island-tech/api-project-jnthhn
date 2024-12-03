import "./style.css";

const URL = "https://genshin.jmp.blue/characters";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    data.forEach((character) => {
      getCharacterDetails(character);
    });
  } catch (error) {
    console.log(error);
  }
}
async function getCharacterDetails(characterName) {
  try {
    const response = await fetch(
      `https://genshin.jmp.blue/characters/${characterName}`
    );
    const characterData = await response.json();
    console.log(characterData); // Logs the detailed character data
    addCharacterCard(characterData);
    // Now, add the character data to the page
  } catch (error) {
    console.log(error);
  }
}
function addCharacterCard(characterData) {
  const cardHTML = `
      <h4>${characterData.name}</h4>
      <p>${characterData.title}</p>
      <p>Vision: ${characterData.vision}</p>
      <p>Weapon: ${characterData.weapon}</p>
    </div>
  `;

  // Assuming you have a container with class `container` in your HTML
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", cardHTML);
}
getData(URL);

import "../CSS/style.css";
import { DOMSelectors } from "./dom";
const characterURL = "https://genshin.jmp.blue/characters";
const bossURL = "https://genshin.jmp.blue/boss/weekly-boss";

function deleteCards() {
  DOMSelectors.container.innerHTML = "";
}
DOMSelectors.bossButton.addEventListener("click", function () {
  deleteCards();
  getBossData(bossURL);
});
DOMSelectors.characterButton.addEventListener("click", function () {
  deleteCards();
  getCharacterData(characterURL);
});

async function getCharacterData(characterURL) {
  try {
    const response = await fetch(characterURL);
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
    console.log(characterData);
    addCharacterCard(characterData);
  } catch (error) {
    console.log(error);
  }
}
function addCharacterCard(characterData) {
  const description =
    characterData.description ||
    `No description available for ${characterData.name}`;
  const cardHTML = `
  <div class="group bg-white card hover:scale-105 shadow-lg transition-all duration-300 transform rounded-lg p-4 text-center relative">
  <div class=" rounded-lg absolute inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
    <span class="text-white text-xl">${characterData.title}</span>
  </div>
  <img src="https://genshin.jmp.blue/characters/${characterData.id.toLowerCase()}/icon-big" alt="${
    characterData.name
  }" class="w-full h-48 object-cover rounded-t-lg mb-4">
  <h4 class="text-xl font-semibold text-indigo-600">${characterData.name}</h4>
  <p class="text-gray-700 mt-2">${description || "No description available"}</p>
</div>
`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

async function getBossData(bossURL) {
  try {
    const response = await fetch(bossURL);
    const data = await response.json();
    console.log(data);
    data.forEach((boss) => {
      getBossDetails(boss);
    });
  } catch (error) {
    console.log(error);
  }
}
async function getBossDetails(bossName) {
  try {
    const response = await fetch(
      `https://genshin.jmp.blue/boss/weekly-boss/${bossName}`
    );
    const bossData = await response.json();
    console.log(bossData);
    addBossCard(bossData);
  } catch (error) {
    console.log(error);
  }
}
function addBossCard(bossData) {
  const description =
    bossData.description || `No description available for ${bossData.name}`;
  const cardHTML = `
  <div class="group bg-white card hover:scale-105 shadow-lg transition-all duration-300 transform rounded-lg p-4 text-center relative">
  <img src="https://genshin.jmp.blue/boss/weekly-boss/${bossData.id.toLowerCase()}/icon" alt="${
    bossData.name
  }" class="w-full h-48 object-cover rounded-t-lg mb-4">
  <h4 class="text-xl font-semibold text-indigo-600">${bossData.name}</h4>
  <p class="text-gray-700 mt-2">${description || "No description available"}</p>
</div>
`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

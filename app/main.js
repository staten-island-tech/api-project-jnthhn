import "./style.css";

const URL = "https://genshin.jmp.blue/characters";
async function getData(URL) {
  //fetch returns a promise
  try {
    const response = await fetch(URL);
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
    }
  } catch (error) {
    console.log(error);
    alert("balls");
  }
}
getData(URL);

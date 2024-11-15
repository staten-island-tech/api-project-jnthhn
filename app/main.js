import "./style.css";

async function getData() {
  //fetch returns a promise
  try {
    const response = await fetch("https://api.humorapi.com/jokes/random");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("balls");
  }
}
getData();

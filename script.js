const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const img = document.querySelector('img')

function clickAlert() {
  alert('I was clicked!');
}

img.addEventListener('click', clickAlert);
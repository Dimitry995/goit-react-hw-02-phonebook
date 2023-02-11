const buttonAddName = document.getElementById("button4");
let item = document.querySelector('.list');
let input = document.getElementById('submit');
let submmit = document.getElementById('input');
buttonAddName.addEventListener('click', AddZ);
//const buttonAddNumber = document.getElementById("button5");
//buttonAddNumber.addEventListener('click', AddR);
function AddZ() {
	let randomFontColor = getRandomHexColor();
	let makeItem2 = document.createElement("h6");
	makeItem2.textContent = String(input.value);
	makeItem2.style.color = randomFontColor;
	item.append(makeItem2);
	let makeItem = document.createElement("li");
	makeItem.classList.add("item");
	makeItem.textContent = Number(submmit.value);
	makeItem.style.color = randomFontColor;
	item.append(makeItem);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let del = document.getElementById("button6");
del.addEventListener('click', reLoad);
function reLoad() {
	document.location.reload();
}

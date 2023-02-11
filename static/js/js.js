let good = document.getElementById("1");
let neutral = document.getElementById("2");
let bad = document.getElementById("3");
let total = document.getElementById("4");
let positive = document.getElementById("5");
const item = document.querySelector('.list');
let input = document.getElementById('submit');
let submmit = document.getElementById('input');
const gButton = document.getElementById("button1");
gButton.addEventListener('click', AddG);
function AddG() {
	good.textContent = (Number(good.value ++));
	total.textContent = (Number(good.value) + Number(neutral.value) + Number(bad.value));
	alert(typeof total)
		let x = Number(good.value);
	let y =  toNumber(total.value);
	let z = Math.round((y / x) * 100);
	positive.textContent = z;	
};
const nButton = document.getElementById("button2");
nButton.addEventListener('click', AddN);
function AddN() {
	neutral.textContent = (Number(neutral.value ++));
	total.textContent = (Number(good.value) + Number(neutral.value) + Number(bad.value));
		let x = Number(neutral.value);
	let y = Number(total.value);
		let z = y / x;
	positive.textContent = z;
} ;
const bButton = document.getElementById("button3");
bButton.addEventListener('click', AddB);
function AddB() {
	bad.textContent = (Number(bad.value ++));
	total.textContent = (Number(good.value) + Number(neutral.value) + Number(bad.value));
		let x = Number(bad.value);
	let y = Number(total.value);
		let z = y / x;
	positive.textContent = z;
};
const buttonAddName = document.getElementById("button4");
buttonAddName.addEventListener('click', AddZ);
//const buttonAddNumber = document.getElementById("button5");
//buttonAddNumber.addEventListener('click', AddR);
function AddZ() {
	let targetList = document.querySelector(".list");
	let makeItem = document.createElement("li");
	makeItem.classList.add("item");
	makeItem.textContent = String(input.value);
		item.append(makeItem);
	makeItem = document.createElement("li");
	makeItem.classList.add("item");
	makeItem.textContent = Number(submmit.value);
	item.append(makeItem);
}
//function AddR(event) 
	//makeItem = document.createElement("li");
	//makeItem.classList.add("item");

	//item.append(makeItem);
//}
const buttonNumber = document.getElementById("button5");
const buttonDelete = document.getElementById("button6");
const mes = document.querySelector('.message');
let del = document.getElementById("button6").click = function () {
	location.reload();
}
//buttonGood.addEventListener('click', AddG);
//buttonNetral.addEventListener('click', AddN);
//buttonBad.addEventListener('click', AddB);
//buttonName.addEventListener('click', AddNR);
//sage();
//function sage() {
	//window.reload;
	//mes.textContent = ('No Total and Positive Procent');
	
//}

function AddR() {
	const makeItem = document.createElement("li");
	makeItem.classList.add("item");
	
	item.append(makeItem);
}
//localStorage.setItem('test', 3);
//alert(localStorage.getItem('test'));
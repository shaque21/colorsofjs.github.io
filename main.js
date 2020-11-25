const colors = [
'red',
'yellow',
'green',
'blue',
'violet',
'indigo',
'black'
];

const container = document.querySelector('section');
const h2 = document.querySelector('h2');
const selectedColor = document.querySelector('#selectedColor');

for(let color of colors){
	//create a div into container section
	const box = document.createElement('div');
	//add box class into the color section or box
	box.classList.add('box');

	container.appendChild(box);

	box.style.backgroundColor = color;

	box.addEventListener('click',function(){
		//select the h2 tag to change the text
		h2.innerText = "You have selected : ";
		//take the color name
		selectedColor.innerText = box.style.backgroundColor;
		//background color of the selected color name
		selectedColor.style.backgroundColor = box.style.backgroundColor;
	})

}

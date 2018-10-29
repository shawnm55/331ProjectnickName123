console.log("hi");

let paragraphs = document.getElementsByTagName('p');
for (i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style['background-color'] = '#FF00FF';
}
// Write your code here!
const main = document.getElementsByTagName('main')[0];
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.textContent = "Chelah is the champion"

//Dom modifying elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, this is a new div!';
newDiv.style.color = 'blue';
newDiv.className = 'new-div';
root.appendChild(newDiv);
const newList = document.createElement('ul');

for (let i = 1; i <= 3; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${i}`;
    newList.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', () => {
    // Now it's safe to access the DOM elements
    const mainElement = document.getElementById('main');

    if (mainElement) {
        // Perform operations on the main element
        mainElement.textContent = 'Main element is present!';
    } else {
        console.error('The main#main element is not found in the DOM.');
    }
});

const newHeader = document.createElement('h1');
newHeader.textContent = 'Hello, this is a new header!';
// Setting the text content with your name
newHeader.textContent = 'YOUR-NAME is the champion';
// Setting the id of the <h1> to 'victory'
newHeader.id = 'victory';
const root = document.getElementById('root');
root.appendChild(newHeader);
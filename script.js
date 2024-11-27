const listContainer = document.getElementById('infi-list');

const initialItems = 10;
const itemsToAdd = 2;

function addListItems(count) {
    for (let i = 1; i <= count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List Item ${listContainer.children.length + 1}`;
        listContainer.appendChild(listItem);
    }
}

addListItems(initialItems);

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addListItems(itemsToAdd);
    }
});


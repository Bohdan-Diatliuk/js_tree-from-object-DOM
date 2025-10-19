'use strict';
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector('#tree');
function createTree(element, data) {
    if (!Object.keys(data).length) return;
    const ul = document.createElement('ul');
    for(const key in data){
        const li = document.createElement('li');
        li.textContent = key;
        createTree(li, data[key]);
        ul.appendChild(li);
    }
    element.appendChild(ul);
}
createTree(tree, food);

//# sourceMappingURL=js_tree-from-object-DOM.f75de5e1.js.map

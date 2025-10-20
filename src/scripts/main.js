'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (
    !(element instanceof Element) ||
    typeof data !== 'object' ||
    data === null ||
    Array.isArray(data)
  ) {
    return;
  }

  const keys = Object.keys(data);

  // if (keys.length === 0) {
  //   return;
  // }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);

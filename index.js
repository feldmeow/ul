'use strict';

const ulList = document.querySelector('ul');

const ask = () => {
  const str = prompt('Введите строку');
  if (str != null) {
    return str.trim();
  }
};

const addChild = (elem, text) => {
  elem.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
};

const delChild = (elem) => {
  if (elem.lastChild) elem.lastChild.remove();
};

const clearChild = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

const start = (ul) => {
  let str = ask();
  if (str === 'exit') {
    return;
  }
  if (str === 'clear') {
    clearChild(ul);
  } else if (str === 'del') {
    delChild(ul);
  } else if (str) {
    addChild(ul, str);
  }
  start(ul);
};

start(ulList);

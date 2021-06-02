'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');
const home = document.querySelector('.home');

const closeMenu = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openMenu = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
home.addEventListener('click', openMenu);

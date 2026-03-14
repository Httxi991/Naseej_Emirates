const screens = {
  splash: document.getElementById('screen-splash'),
  signup: document.getElementById('screen-signup'),
  otp: document.getElementById('screen-otp'),
  app: document.getElementById('screen-app'),
  chat: document.getElementById('screen-chat')
};

const jumpButtons = document.querySelectorAll('.jump-btn');
const nextButtons = document.querySelectorAll('[data-next]');
const navButtons = document.querySelectorAll('.nav-item');
const appPages = document.querySelectorAll('.app-page');
const sheetBackdrops = document.querySelectorAll('.sheet-backdrop');

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('active'));
  if (screens[name]) screens[name].classList.add('active');

  jumpButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.jump === name || (name === 'chat' && btn.dataset.jump === 'app'));
  });
}

function setAppPage(name) {
  appPages.forEach((page) => page.classList.toggle('active', page.dataset.page === name));
  navButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.pageTarget === name));
}

nextButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = btn.dataset.next;
    showScreen(next);
  });
});

jumpButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.jump;
    showScreen(target);
    if (target === 'app') setAppPage('home');
  });
});

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    showScreen('app');
    setAppPage(btn.dataset.pageTarget);
  });
});

document.getElementById('open-chat').addEventListener('click', () => showScreen('chat'));
document.getElementById('open-settings').addEventListener('click', () => openSheet('settings-sheet'));
document.getElementById('open-rewards').addEventListener('click', () => openSheet('rewards-sheet'));

document.querySelectorAll('.sheet-close').forEach((btn) => {
  btn.addEventListener('click', () => closeSheet(btn.dataset.close));
});

sheetBackdrops.forEach((backdrop) => {
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) backdrop.classList.remove('open');
  });
});

function openSheet(id) {
  document.getElementById(id).classList.add('open');
}

function closeSheet(id) {
  document.getElementById(id).classList.remove('open');
}

const choiceGroups = document.querySelectorAll('.choice-row');
choiceGroups.forEach((group) => {
  const buttons = group.querySelectorAll('.choice-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
    });
  });
});

setAppPage('home');
showScreen('splash');

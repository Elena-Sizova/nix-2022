function showNotification(options) {
  let elem = document.body.querySelector('.notification');
  elem.style.position = 'fixed';
  elem.textContent = options.html;
  elem.style.top = options.top + 'px';
  elem.style.right = options.right + 'px';
  elem.style.background = 'red';
  elem.style.border = '1px solid black';
  elem.style.color = 'yellow';

  elem.classList.add(options.className);
  setTimeout(() => elem.style.display = 'none', 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome"
});


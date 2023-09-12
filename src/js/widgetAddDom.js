import popovers from './popovers.js';

export default function addPopover() {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', (event) => {
    const popover = document.querySelector('.error');
    if (!popover) {
      popovers(event);
      btn.classList.add('toggle');
    } else {
      popover.remove();
      btn.classList.remove('toggle');
    }
  });
}

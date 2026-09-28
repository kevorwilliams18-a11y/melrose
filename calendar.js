(() => {
  const now = new Date();
  let selected = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let view = new Date(selected.getFullYear(), selected.getMonth(), 1);
  const days = document.querySelector('#days');
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const fullDate = date => date.toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  function render(direction = 0) {
    document.querySelector('#month').textContent = view.toLocaleDateString('en', { month: 'long', year: 'numeric' });
    document.querySelector('#selected-date').textContent = fullDate(selected);
    days.replaceChildren();
    for (let blank = 0; blank < view.getDay(); blank++) {
      const spacer = document.createElement('span');
      spacer.setAttribute('aria-hidden', 'true'); days.append(spacer);
    }
    const count = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= count; day++) {
      const date = new Date(view.getFullYear(), view.getMonth(), day);
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'day'; button.textContent = day;
      button.setAttribute('aria-label', fullDate(date));
      button.setAttribute('aria-pressed', String(sameDay(date, selected)));
      if (sameDay(date, now)) { button.classList.add('today'); button.setAttribute('aria-current', 'date'); }
      button.addEventListener('click', () => { selected = date; render(); days.querySelector('[aria-pressed="true"]').focus(); });
      days.append(button);
    }
    if (direction && !matchMedia('(prefers-reduced-motion: reduce)').matches && days.animate) {
      days.getAnimations().forEach(animation => animation.cancel());
      days.animate([{ opacity: .25, transform: `translateX(${direction * 18}px)` }, { opacity: 1, transform: 'translateX(0)' }], { duration: 260, easing: 'ease-out' });
    }
  }
  function move(amount) { view = new Date(view.getFullYear(), view.getMonth() + amount, 1); selected = new Date(view); render(amount); }
  document.querySelector('#previous').addEventListener('click', () => move(-1));
  document.querySelector('#next').addEventListener('click', () => move(1));
  document.querySelector('#today').addEventListener('click', () => { selected = new Date(now.getFullYear(), now.getMonth(), now.getDate()); view = new Date(now.getFullYear(), now.getMonth(), 1); render(1); });
  render();
})();

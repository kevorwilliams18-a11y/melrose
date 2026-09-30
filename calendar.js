(() => {
  const events = [
  {
    "start": "2026-08-24",
    "end": "2026-08-24",
    "title": "Watchmen Meeting"
  },
  {
    "start": "2026-08-24",
    "end": "2026-08-24",
    "title": "Cook Meeting / Compliance Health Training"
  },
  {
    "start": "2026-08-25",
    "end": "2026-08-25",
    "title": "Classroom Preparation"
  },
  {
    "start": "2026-08-26",
    "end": "2026-08-26",
    "title": "Classroom Preparation"
  },
  {
    "start": "2026-08-27",
    "end": "2026-08-27",
    "title": "Senior Staff Meeting — Action Plans / SIP"
  },
  {
    "start": "2026-08-28",
    "end": "2026-08-28",
    "title": "Academic Staff Meeting"
  },
  {
    "start": "2026-08-28",
    "end": "2026-08-28",
    "title": "Book Collection Day"
  },
  {
    "start": "2026-09-01",
    "end": "2026-09-01",
    "title": "New Staff and New Role Orientation"
  },
  {
    "start": "2026-09-02",
    "end": "2026-09-02",
    "title": "Class Signage Day"
  },
  {
    "start": "2026-09-03",
    "end": "2026-09-03",
    "title": "SIP / Action Planning"
  },
  {
    "start": "2026-09-07",
    "end": "2026-09-07",
    "title": "Official Reopening of School"
  },
  {
    "start": "2026-09-10",
    "end": "2026-09-10",
    "title": "Diagnostic Testing"
  },
  {
    "start": "2026-09-30",
    "end": "2026-09-30",
    "title": "Submission of Mark Records, Attendance and Action Plans"
  },
  {
    "start": "2026-10-01",
    "end": "2026-10-08",
    "title": "Football Rally"
  },
  {
    "start": "2026-10-14",
    "end": "2026-10-14",
    "title": "Heritage Day Celebration"
  },
  {
    "start": "2026-10-15",
    "end": "2026-10-19",
    "title": "Midterm Break & National Heroes Day — School closed"
  },
  {
    "start": "2026-10-19",
    "end": "2026-10-19",
    "title": "National Heroes Day"
  },
  {
    "start": "2026-10-20",
    "end": "2026-10-20",
    "title": "School Reopens"
  },
  {
    "start": "2026-10-27",
    "end": "2026-10-27",
    "title": "Math Marathon Day"
  },
  {
    "start": "2026-10-28",
    "end": "2026-10-30",
    "title": "End of Month Test"
  },
  {
    "start": "2026-11-01",
    "end": "2026-11-01",
    "title": "Church Sunday Service — Power of Faith Ministry"
  },
  {
    "start": "2026-11-20",
    "end": "2026-11-20",
    "title": "Math Marathon Day"
  },
  {
    "start": "2026-11-27",
    "end": "2026-11-27",
    "title": "STEM Club Farmers Market"
  },
  {
    "start": "2026-11-23",
    "end": "2026-11-27",
    "title": "End of Month Test"
  },
  {
    "start": "2026-12-01",
    "end": "2026-12-01",
    "title": "Grades 3, 4, 5 and 6 Mock Exams"
  },
  {
    "start": "2026-12-08",
    "end": "2026-12-08",
    "title": "IIP Reviews — Maths, Language Arts and Ability"
  },
  {
    "start": "2026-12-09",
    "end": "2026-12-09",
    "title": "Parent Consultations"
  },
  {
    "start": "2026-12-09",
    "end": "2026-12-09",
    "title": "CIT Meeting"
  },
  {
    "start": "2026-12-14",
    "end": "2026-12-16",
    "title": "End of Term Exams"
  },
  {
    "start": "2026-12-17",
    "end": "2026-12-17",
    "title": "Carol Service"
  },
  {
    "start": "2026-12-22",
    "end": "2026-12-22",
    "title": "School Closes — Christmas Holiday"
  },
  {
    "start": "2027-01-04",
    "end": "2027-01-04",
    "title": "School Resumes"
  },
  {
    "start": "2027-01-05",
    "end": "2027-01-05",
    "title": "Netball Rally"
  },
  {
    "start": "2027-01-20",
    "end": "2027-01-20",
    "title": "Maths Marathon"
  },
  {
    "start": "2027-01-21",
    "end": "2027-01-21",
    "title": "Maths Club Display"
  },
  {
    "start": "2027-01-27",
    "end": "2027-01-29",
    "title": "End of Month Test — Math, Language Arts & Ability"
  },
  {
    "start": "2027-01-29",
    "end": "2027-01-29",
    "title": "Six-A-Side Football Rally"
  },
  {
    "start": "2027-02-10",
    "end": "2027-02-12",
    "title": "School Closes — Ash Wednesday Holiday"
  },
  {
    "start": "2027-02-15",
    "end": "2027-02-15",
    "title": "School Reopens"
  },
  {
    "start": "2027-02-15",
    "end": "2027-02-15",
    "title": "Red & White Day"
  },
  {
    "start": "2027-02-19",
    "end": "2027-02-19",
    "title": "Jamaica Day"
  },
  {
    "start": "2027-02-24",
    "end": "2027-02-26",
    "title": "End of Month Test"
  }
];
  const dateKey = date => [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
  const onDate = date => events.filter(event => event.start <= dateKey(date) && event.end >= dateKey(date));
  const now = new Date();
  let selected = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let view = new Date(selected.getFullYear(), selected.getMonth(), 1);
  const days = document.querySelector('#days');
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const fullDate = date => date.toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  function render(direction = 0) {
    document.querySelector('#month').textContent = view.toLocaleDateString('en', { month: 'long', year: 'numeric' });
    document.querySelector('#selected-date').textContent = fullDate(selected);
    let detail = document.querySelector('#event-details');
    if (!detail) {
      const aside = document.querySelector('.day-details');
      aside.querySelector('.empty-icon')?.remove();
      aside.querySelector('h3')?.remove();
      [...aside.children].find(el => el.tagName === 'P' && !el.className)?.remove();
      detail = document.createElement('div'); detail.id = 'event-details';
      document.querySelector('#selected-date').after(detail);
    }
    detail.replaceChildren();
    const matches = onDate(selected);
    if (!matches.length) { const p = document.createElement('p'); p.textContent = 'No events listed for this date.'; detail.append(p); }
    for (const event of matches) {
      const article = document.createElement('article');
      const title = document.createElement('h3'); title.textContent = event.title; article.append(title);
      const note = document.createElement('p'); note.textContent = event.start === event.end ? 'Time not specified.' : event.start + ' to ' + event.end + ' · Time not specified.'; article.append(note); detail.append(article);
    }
    let agenda = document.querySelector('#month-events');
    if (!agenda) { agenda = document.createElement('section'); agenda.id = 'month-events'; document.querySelector('.calendar-layout').after(agenda); }
    agenda.replaceChildren();
    const heading = document.createElement('h2'); heading.textContent = 'Events this month'; agenda.append(heading);
    const start = dateKey(view), end = dateKey(new Date(view.getFullYear(),view.getMonth()+1,0));
    const monthly = events.filter(event => event.start <= end && event.end >= start).sort((a,b)=>a.start.localeCompare(b.start));
    for (const event of monthly) { const p = document.createElement('p'); p.textContent = (event.start === event.end ? event.start : event.start + ' – ' + event.end) + ' · ' + event.title; agenda.append(p); }
    if (!monthly.length) { const p = document.createElement('p'); p.textContent = 'No events listed for this month.'; agenda.append(p); }
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
      const countForDay = onDate(date).length;
      if (countForDay) { button.style.borderBottom = '4px solid #ffd429'; button.title = onDate(date).map(event => event.title).join('; '); }
      button.setAttribute('aria-label', fullDate(date) + (countForDay ? ', ' + countForDay + ' events' : ''));
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

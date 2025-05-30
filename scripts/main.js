//Create a variable named toggleBtn that selects the button with the id themeToggle
const toggleBtn = document.getElementById('themeToggle');
//Create a variable named savedTheme that retrieves the theme from localStorage
let savedTheme = localStorage.getItem('theme');

// If savedTheme is 'dark', add the 'dark-mode' class to the body and change the button text to '☀️ Light'
if (savedTheme && savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.innerText = '☀️ Light';
}

//This function toggles the dark mode on and off when the button is clicked
toggleBtn.addEventListener('click', function () {
  const isDark = document.body.classList.toggle('dark-mode');

  if (isDark) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.innerText = '☀️ Light';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.innerText = '🌙 Dark';
  }
});


const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(function(card) {
  const iconElement = card.querySelector('.faq-icon');
  const questionEl = card.querySelector('.faq-question');
  const answerEl = card.querySelector('.faq-answer'); // not used, left for possible later use

  function toggleFaq() {
    card.classList.contains('active') ? card.classList.remove('active') : card.classList.add('active');
  }

  if (iconElement) iconElement.addEventListener('click', toggleFaq);
  if (questionEl) questionEl.addEventListener('click', toggleFaq);
});


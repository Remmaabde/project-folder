const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ Light';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  let theme = 'light';
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggle.textContent = '☀️ Light';
  } else {
    themeToggle.textContent = '🌙 Dark';
  }

  localStorage.setItem('theme', theme);
});


document.querySelectorAll('.faq-card').forEach((card) => {
  const icon = card.querySelector('.faq-icon');
  const questionText = card.querySelector('.faq-question'); 
  const answer = card.querySelector('.faq-answer');

  icon.addEventListener('click', toggleAnswer);
  questionText.addEventListener('click', toggleAnswer);

  function toggleAnswer() {
    card.classList.toggle('active');
  }
});




const quotes = [
  { text: "The quick brown fox jumps over the lazy dog.", category: "Classic" },
  { text: "Practice makes perfect in everything you do.", category: "Motivation" },
  { text: "Typing fast and accurately is a valuable skill in today's digital world.", category: "Technology" },
  { text: "Consistent effort and dedication lead to remarkable improvement over time.", category: "Success" },
  { text: "Stay focused, keep typing with care, and watch your speed improve.", category: "Focus" },
  { text: "In the middle of difficulty lies opportunity waiting to be discovered.", category: "Philosophy" },
  { text: "The journey of a thousand miles begins with a single step forward.", category: "Journey" },
  { text: "Excellence is not a skill, it's an attitude that defines our approach.", category: "Excellence" }
];

const quoteDisplay = document.getElementById('quoteDisplay');
const quoteInput = document.getElementById('quoteInput');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');
const progressFill = document.getElementById('progressFill');
const quoteCategory = document.getElementById('quoteCategory');

let startTime;
let currentQuote = '';
let currentQuoteObj = {};
let timerInterval;
let testStarted = false;

function renderNewQuote() {
  currentQuoteObj = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = currentQuoteObj.text;
  quoteCategory.textContent = currentQuoteObj.category;

  quoteDisplay.innerHTML = '';
  currentQuote.split('').forEach((char, index) => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    charSpan.dataset.index = index;
    quoteDisplay.appendChild(charSpan);
  });

  resetTest();
  addFloatingParticles();
}

function resetTest() {
  quoteInput.value = '';
  testStarted = false;
  clearInterval(timerInterval);
  wpmDisplay.textContent = '0';
  accuracyDisplay.textContent = '100';
  timerDisplay.textContent = '0';
  progressFill.style.width = '0%';

  quoteDisplay.querySelectorAll('span').forEach(span => {
    span.classList.remove('correct', 'incorrect', 'current');
  });

  if (quoteDisplay.firstChild) {
    quoteDisplay.firstChild.classList.add('current');
  }
}

function startTimer() {
  if (!testStarted) {
    startTime = new Date();
    testStarted = true;
    timerInterval = setInterval(updateTimer, 100);
  }
}

function updateTimer() {
  const elapsedTime = (new Date() - startTime) / 1000;
  timerDisplay.textContent = Math.floor(elapsedTime);
}

function addFloatingParticles() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 3000);
    }, i * 600);
  }
}

quoteInput.addEventListener('input', () => {
  startTimer();

  const arrayQuote = quoteDisplay.querySelectorAll('span');
  const arrayValue = quoteInput.value.split('');
  let correct = 0;

  arrayQuote.forEach((charSpan, index) => {
    const char = arrayValue[index];
    charSpan.classList.remove('correct', 'incorrect', 'current');

    if (char == null) {
      if (index === arrayValue.length) {
        charSpan.classList.add('current');
      }
    } else if (char === charSpan.innerText) {
      charSpan.classList.add('correct');
      correct++;
    } else {
      charSpan.classList.add('incorrect');
    }
  });

  const progress = (arrayValue.length / currentQuote.length) * 100;
  progressFill.style.width = Math.min(progress, 100) + '%';

  if (testStarted) {
    const elapsedTime = (new Date() - startTime) / 1000 / 60;
    const wordsTyped = quoteInput.value.trim().split(/\s+/).filter(word => word.length > 0).length;
    const wpm = Math.round(wordsTyped / elapsedTime);
    wpmDisplay.textContent = isNaN(wpm) || wpm === Infinity ? 0 : wpm;
  }

  const accuracy = arrayValue.length > 0 ? Math.round((correct / arrayValue.length) * 100) : 100;
  accuracyDisplay.textContent = accuracy;

  if (arrayValue.length === currentQuote.length && correct === currentQuote.length) {
    clearInterval(timerInterval);
    setTimeout(() => {
      alert('🎉 Congratulations! Test completed successfully!');
    }, 100);
  }
});

document.querySelector('.typing-area').addEventListener('click', () => {
  quoteInput.focus();
});

quoteInput.addEventListener('blur', () => {
  setTimeout(() => quoteInput.focus(), 0);
});

renderNewQuote();
quoteInput.focus();
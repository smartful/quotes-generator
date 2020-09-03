const quotesLength = quotes.length;

/* Get elements from HTML code */
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

/* Functions */
function chooseIndex(arrayLength) {
  return Math.floor(Math.random()*arrayLength);
}

async function getQuote() {
  const quote = quotes[chooseIndex(quotesLength)];
  if (quote.quoteAuthor === '') {
    quoteAuthor.innerText = 'Unknown';
  } else {
    quoteAuthor.innerText = quote.quoteAuthor;
  }

  // Reduce font size for long quotes
  if (quote.quoteText.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.innerText = quote.quoteText;
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
  window.open(twitterUrl, '_blank');
}

/* Event listeners */
newQuoteButton.addEventListener('click', getQuote);
twitterButton.addEventListener('click', tweetQuote);

/* On load */
getQuote();

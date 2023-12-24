// ==UserScript==
// @name     Remove Medium member-only stories
// @version  1
// @grant    none
// @include  https://medium.com/*
// ==/UserScript==

function run() {
  document.querySelectorAll('article').forEach(article => {
    if (article.innerText.includes('Member-only')) {
      article.parentNode.removeChild(article);
    }
  });
}

setInterval(run, 500);

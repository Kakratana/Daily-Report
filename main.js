if (navigator.share) {
  const article = document.querySelector("article");
  article.insertAdjacentHTML(
    "beforeend",
    `
    <button onclick="window.doSharing(this)">Share</button>
  `
  );
}

window.doSharing = (el) => {
  navigator.share({
    
    text: el.parentNode.querySelector("p").innerText,
    
  });
};

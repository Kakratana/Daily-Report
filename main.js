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
    title: el.parentNode.querySelector("h1").innerText,
    text: el.parentNode.querySelector("p").innerText,
    url: "https://codepen.io/chriscoyier/pen/KKzjQWO"
  });
};

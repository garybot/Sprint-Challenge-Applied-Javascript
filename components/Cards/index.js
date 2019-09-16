
const cards = document.querySelector('.cards-container');

function createCard(article, topic) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageDiv);
  imageDiv.appendChild(image);
  author.appendChild(name);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageDiv.classList.add("img-container");

  headline.textContent = article.headline
  name.textContent = `By ${article.authorName}`;
  image.src = article.authorPhoto;
  card.setAttribute("data-topic", topic);

  return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articleObj = response.data.articles
    for (key in articleObj) {
      for (article in articleObj[key]) {
        cards.appendChild(createCard(articleObj[key][article], key));
      }
    }
  })
  .then(() => {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener("click", event => {
        document.querySelectorAll(".card").forEach(card => {
          if (card.dataset.topic.substring(0, 3) === tab.dataset.topic.substring(0, 3)) {
            card.style.display = "inline-block";
          } else {
            card.style.display = "none";
          }
        })
      })
    })
  });

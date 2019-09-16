
const topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.topics.forEach(topic => {
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = topic;
      topics.appendChild(tab);
    })
  });

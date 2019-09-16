/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
    const carousel = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const images = [];
    for (var i = 0; i < 4; i++) {
        images.push(document.createElement("img"));
    }

    carousel.appendChild(left);
    images.forEach(image => carousel.appendChild(image));
    carousel.appendChild(right);

    carousel.classList.add("carousel");
    left.classList.add("left-button");
    right.classList.add("right-button");

    left.textContent = " < ";
    right.textContent = " > ";
    images[0].src = "./assets/carousel/mountains.jpeg";
    images[1].src = "./assets/carousel/computer.jpeg";
    images[2].src = "./assets/carousel/trees.jpeg";
    images[3].src = "./assets/carousel/turntable.jpeg";

    let current = 0;
    images[current].style.display = "inline-block";

    left.addEventListener("click", event => {
        images[current].style.display = "none";
        current > 0 ? current-- : current = images.length - 1;
        images[current].style.display = "inline-block";
    })
    right.addEventListener("click", event => {
        images[current].style.display = "none";
        current < images.length - 1 ? current++ : current = 0;
        images[current].style.display = "inline-block";
    })

    return carousel;
}

console.log(Carousel());
document.querySelector(".carousel-container").appendChild(Carousel());
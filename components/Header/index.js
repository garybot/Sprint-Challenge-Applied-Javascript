
function Header() {
  const header = document.createElement('div');
  const date = document.createElement('span');
  const heading = document.createElement('h1');
  const temp = document.createElement('span');

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);

  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  date.textContent = "SMARCH 28, 2019";
  heading.textContent = "Lambda Times";
  temp.textContent = "98°";

  return header;
}

document.getElementsByClassName('header-container')[0].appendChild(Header());

const opentBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sideNav = document.getElementById("side-nav");

opentBtn.addEventListener("click", () => {
  sideNav.style.width = "100%";
});
closeBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
});

const dataObj = [
  {
    id: 1,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
  {
    id: 2,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
  {
    id: 3,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
  {
    id: 4,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
  {
    id: 5,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
  {
    id: 6,
    name: "Yochai Benkler",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    desc: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
    image: "./images/speaker-1.png",
  },
];

let loadMoreBtn = document.getElementById("load-more-btn");
let speakerCards = document.getElementById("speaker-cards");
let out = "";

let initialItem = 2;
let loadItem = 2;
let screenSize = window.innerWidth;
function loadOnFirst() {
  for (let i = 0; i < dataObj.length; i++) {
    let element = dataObj[i];
    if (screenSize < 768 && i < loadItem) {
      out += `
      <div class="speaker-card">
        <img src="./images/speaker-1.png" alt="icon">
        <div class="speaker-card-content">
            <h4>${element.name}</h4>
            <p>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
            <hr>
            <small>Benkler studies commons-based peer production, and published his seminal book, The Wealth of
                Networks in 2006</small>
        </div>
      </div>
      `;
    } else if (screenSize >= 768) {
      out += `
      <div class="speaker-card">
        <img src="./images/speaker-1.png" alt="icon">
        <div class="speaker-card-content">
            <h4>${element.name}</h4>
            <p>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
            <hr>
            <small>Benkler studies commons-based peer production, and published his seminal book, The Wealth of
                Networks in 2006</small>
        </div>
      </div>
      `;
    }
  }
  let div = document.createElement("div");
  div.classList.add("speaker-grid");
  speakerCards.insertBefore(div, loadMoreBtn);
  div.innerHTML = out;

  loadMoreBtn.addEventListener("click", () => {
    for (let i = 0; i < dataObj.length-2; i++) {
      const element = dataObj[i];
      out += `
      <div class="speaker-card">
        <img src="./images/speaker-1.png" alt="icon">
        <div class="speaker-card-content">
            <h4>${element.name}</h4>
            <p>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
            <hr>
            <small>Benkler studies commons-based peer production, and published his seminal book, The Wealth of
                Networks in 2006</small>
        </div>
      </div>
      `;
    }
    // let div = document.createElement("div");
    // div.classList.add("speaker-grid");
    // speakerCards.insertBefore(div, loadMoreBtn);
    div.innerHTML = out;
    loadMoreBtn.style.display = 'none'
  });
}




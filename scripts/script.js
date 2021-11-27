const carouObj = [
  {
    item: "yellow speed boat",
    image: "/assets/imgs/cards/512amQ1Xf1S._AC_SR160,160_.jpg",
    description:
      "2 in 1 RC Boat for Kids, 2.4G Crocodile Remote Control Boat for Pools and Lakes Pon...",
    rating: "45",
    price: "$29.99",
  },
  {
    item: "croc in water",
    image: "/assets/imgs/cards/61CLwn58oML._AC_SR160,160_.jpg",
    description:
      "Remote Control Alligator Head Boat - Large Decoy and Floating Crocodile Head for Ad...",
    rating: "314",
    price: "$49.99",
  },
  {
    item: "ocean croc",
    image: "/assets/imgs/cards/51OlLx0M+yL._AC_SR160,160_.jpg",
    description:
      "Talosmile Remote Control Boat Crocodile Shape High Simulation Crocodile RC Boat for...",
    rating: "10",
    price: "$34.99",
  },
  {
    item: "gator float",
    image: "/assets/imgs/cards/41AyJYdoQ7L._AC_SR160,160_.jpg",
    description:
      "Alligator Pool Float Prank Stuff (13 x 6 x 3 Inches) - Decor for Goose, Predator ...",
    rating: "620",
    price: "$14.99",
  },
  {
    item: "speed boat",
    image: "/assets/imgs/cards/51+OCp4GPAS._AC_SR160,160_.jpg",
    description:
      "Altair AA102 RED RC Boat for Pools or Lakes [Ultra Fast Pro Caliber] Free Priority ...",
    rating: "356",
    price: "$79.99",
  },
];

carouObj.forEach((el) => {
  let cardDiv = document.querySelector(".carousel-container");

  cardDiv.innerHTML =
    cardDiv.innerHTML +
    `


<div class="card">
          <div class="card-img">
            <img
              src="${el.image}"
              alt=""
            />
          </div>

          <div class="card-text">
            <p>
              ${el.description}
            </p>
          </div>

          <div class="stars-reviews">
            <div class="card-stars"></div>
            <div class="card-reviews">${el.rating}</div>
          </div>

          <div class="price-prime">
            <div class="card-price">${el.price}</div>
            <div class="prime"></div>
          </div>
        </div>

`;
});

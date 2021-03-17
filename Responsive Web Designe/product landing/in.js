
function addCoffeeDiv(parentId, place, title, imgUrl, description, price) {
  const newDiv = document.createElement("div");
  newDiv.className = "type";
  const imgDiv = document.createElement("div");
  imgDiv.className = "coffee-img";
  imgDiv.style.backgroundImage = `url(${imgUrl})`;
  newDiv.appendChild(imgDiv);
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerHTML = title;
  newDiv.appendChild(titleDiv);
  const descriptionDiv = document.createElement("div");
  descriptionDiv.innerHTML = description;
  descriptionDiv.className = "description";
  newDiv.appendChild(descriptionDiv);
  const priceDiv = document.createElement("div");
  priceDiv.className = "price";
  priceDiv.innerHTML = price;
  newDiv.appendChild(priceDiv);
  const parent = document.getElementById(parentId);
  parent.insertAdjacentElement(place, newDiv);
}
fetch("./backup.json")
  .then((response) => response.json()).catch(err => console.log(err))
  .then((res) => {
    for (let i = 0; i < res.coffees.length; ++i)
      addCoffeeDiv(
        "coffees",
        "beforeend",
        res.coffees[i].name,
        res.coffees[i].imgUrl,
        res.coffees[i].description,
        res.coffees[i].price
      );
  });

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let locationElement = document.querySelector("#weather-location");
  locationElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

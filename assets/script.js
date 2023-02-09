const form = document.getElementById("form");
const searchBar = document.getElementById("searchBar");
const submitButton = document.getElementById("serachBtn");
const ul = document.getElementById("ul");
let recentSearches;

// Add Searches to Local Storage 
if (localStorage.recentSearches && localStorage.recentSearches != "") {
  recentSearches = JSON.parse(localStorage.recentSearches);
} else {
  recentSearches = [];
}

// Create List items for city
const makeListItem = (text, parent) => {
  let listItem = document.createElement("button");
  listItem.textContent = text;
  listItem.className = "list-button";
  parent.appendChild(listItem);
};

recentSearches.forEach(element => {
  makeListItem(element, ul);
});

form.addEventListener("submit", event => {
    recentSearches.push(searchBar.value);
    makeListItem(searchBar.value, ul);
    localStorage.recentSearches = JSON.stringify(recentSearches);
    searchBar.value = "";
});

var dayWeather = document.getElementById("dayWeather");

function getAPI() {
    var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid=05f659f8e8ffcfeb0da4266b234ce89b"
    
    fetch(requestURL)
    .then(function (response) {
        for (var i = 0; i < data.length; i++) {
            var cityName = searchBar.value
            var temperature = response.main.temp;
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;

            $("#name").text(cityName + " ");
            $("#temp").text("Current Temperature: " + temperature + " (F)")
            $("#humid").text("Current Humidity: " + humidity + " (%)")
            $("#wind").text("Current Wind Speed: " + windSpeed + " (mph)")
        }
    });
};

var fiveDay = document.getElementById("day");
function getAPI() {
    var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid=05f659f8e8ffcfeb0da4266b234ce89b"

    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function () {
        for (var i = 0; i < 5; i++) {
            var forecastList = document.createElement("li");
            var temperature = response.main.temp;
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
            forecastList.appendChild(temperature, humidity, windSpeed);
            forecastList.append(fiveDay)
        }
    });
}

submitButton.addEventListener("click", getAPI);
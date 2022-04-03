const API_URL = 'https://api.weatherapi.com/v1/current.json?key=4db60e619ca54c53807102620220104&q=';
const main = document.getElementById("main");
const form = document.getElementById('form');
const search = document.getElementById('search');

getCity("London");

async function getCity(cityname) {
    const url = `${API_URL}${cityname}`;
    const response = await fetch(url);
    const city = await response.json();
    createCityCard(city);
}

function createCityCard(city) {
    const cardHTML = `
        <div class="card">
            <div class="avt">
                <img src="${city.current.condition.icon}" alt="${city.current.condition.icon}" class="avatar">
            </div>
            <div class="card-info">
                <ul class="info">
                    <li><strong>City:</strong> ${city.location.name} </li>
                    <li><strong> Region:</strong> ${city.location.region} </li>
                    <li><strong> Country:</strong> ${city.location.country} </li>
                    <li><strong> Time:</strong> ${city.location.localtime} </li>
                    <li><strong> Temperature:</strong> ${city.current.temp_c}<strong> &degC</strong> </li>
                    <li><strong> Condition:</strong> ${city.current.condition.text} </li>
                    <li><strong> Wind Speed:</strong> ${city.current.wind_mph} mph</li>
                </ul>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const cityname = search.value;
    if(cityname){
        getCity(cityname);
        search.value = '';
    }
})

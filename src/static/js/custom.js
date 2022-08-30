

const countriesContainer = document.querySelector(".js-countries");
const inputSearch = document.querySelector("#inputSearch");



const urlToFetch = 'https://restcountries.com/v3.1/all';                                        
const getCountries = async () => {
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const countries = await response.json();
      
      console.log(countries);
      displayCountries(countries)
    }

  } catch (error) {
    console.log(error);
  }
};
getCountries();



function displayCountries(countries) {
  countriesContainer.innerHTML = '';
  
  countries.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.classList.add('card');

    countryEl.innerHTML = `
    <div>
      <img src="${country.flags.png}" alt=""/>
    </div>
    <div class="countries-info">
    <h3>${country.name.common}</h3>
    <p>

    <strong>Population:</strong> ${country.population}
    </p>
    <p>

    <strong>Region:</strong> ${country.region}
    </p>
    <p>

    <strong>Capital:</strong> ${country.capital}
    </p>
    </div>
    
    `;

    countriesContainer.appendChild(countryEl)
  });
}



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
    countryEl.innerHTML = `
    <div>
      <img src="${country.flags.png}" alt=""/>
    </div>
    <div class="countries-info">
    <h3>${country.name.common}</h3>
    <p>

    Population: ${country.population}
    </p>
    <p>

    Region: ${country.region}
    </p>
    <p>

    Capital: ${country.capital}
    </p>
    </div>
    
    `;

    countriesContainer.appendChild(countryEl)
  });
}

const countriesContainer = document.querySelector(".js-countries");
const inputSearch = document.querySelector("#search");
const regionFilters = document.querySelector('select');
let allCountries;

const urlToFetch = 'https://restcountries.com/v3.1/all';
const getCountries = async () => {
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const countries = await response.json();
      console.log(countries);
      allCountries = countries.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      filterData()

    }

  } catch (error) {
    console.log(error);
  }
};
getCountries();



function displayCountries(countries) {
  countriesContainer.innerHTML = '';
  countries.forEach(country => {
    const countryEl = document.createElement('a');
    countryEl.href = `/detail?${country.cca3}`;
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
    <strong>Capital:</strong> ${country.capital ?? "none"}
    </p>
    </div>
    
    `;

    countriesContainer.appendChild(countryEl)
  });
};

function filterData() {
  let filteredCountries = allCountries.filter(country => {
    return regionFilters.value === country.region || regionFilters.value === 'All'
  }).filter(country => {
    return inputSearch.value === '' || country.name.common.toLowerCase().includes(inputSearch.value.toLowerCase())
  })
  displayCountries(filteredCountries);
};


regionFilters.addEventListener('input', () => {
  filterData()

});

inputSearch.addEventListener('input', () => {
  filterData()

});

const detail = document.getElementById('detail');


async function getCountry() {
	const res = await fetch('https://restcountries.com/v3.1/alpha/de');
	const country = await res.json();

	showCountryDetails(country[0]);
}

getCountry()



function showCountryDetails(country) {
	const detailBody = detail.querySelector('.detail-body');
	const detailImg = detail.querySelector('img');
    console.log(country)
	detailImg.src = country.flags.png;

	detailBody.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>
            <strong>Native Name:</strong>
            ${country.nativeName}
        </p>
        <p>
            <strong>Population:</strong>
            ${country.population}
        </p>
        <p>
            <strong>Region:</strong>
            ${country.region}
        </p>
        <p>
            <strong>Sub Region:</strong>
            ${country.subregion}
        </p>
        <p>
            <strong>Capital:</strong>
            ${country.capital}
        </p>
        <p>
            <strong>Top Level Domain:</strong>
            ${country.topLevelDomain}
        </p>
        <p>
            <strong>Currencies:</strong>
            ${country.currencies}
        </p>
        <p>
            <strong>Languages:</strong>
            ${country.languages[0]}
        </p>
    `;
    
}

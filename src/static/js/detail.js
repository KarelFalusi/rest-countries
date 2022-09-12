const detail = document.getElementById('detail');


async function getCountry() {
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${document.location.search.slice(1)}`);
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
            ${country.name.nativeName ? Object.values(country.name.nativeName).map(n => n.common).join(", ") : "none"}
        </p>
        <p>
            <strong>Population:</strong>
            ${country.population.toLocaleString()}
        </p>
        <p>
            <strong>Region:</strong>
            ${country.region}
        </p>
        <p>
            <strong>Sub Region:</strong>
            ${country.subregion ?? "none"}
        </p>
        <p>
            <strong>Capital:</strong>
            ${country.capital ?? "none"}
        </p>
        <p>
            <strong>Top Level Domain:</strong>
            ${country.tld ? country.tld.join(", ") : "none"}
        </p>
        <p>
            <strong>Currencies:</strong>
            ${country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "none"}
        </p>
        <p>
            <strong>Languages:</strong>
            ${country.languages ? Object.values(country.languages).join(", ") : "none"}
        </p>
        <p>
            <strong>Border Countries:</strong>
            ${country.borders ? country.borders.map(c => `
            <a href="/detail?${c}"
            class="border-country">${c}</a>
            `).join("") : "none"}
        </p>
    `;
    
}
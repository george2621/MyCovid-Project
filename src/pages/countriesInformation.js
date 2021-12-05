import { countriesTable, countrySelectedTable } from '../view/countriesInformation.html.js'
import { getData } from './globalInformation.js'



export async function fetchCountryByName(countryName) {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`)
    const jsonResponse = await response.json();
    return jsonResponse;

}


export async function getCountryByName() {
    const searchCountry = document.querySelector('.country-search');
    const country = toCapitalCase(searchCountry.value);
    const data = await getData();
    const countries = Object.keys(data)
    if (countries.includes(country)) {
        const countrySelectedData = await fetchCountryByName(country);
        return countrySelectedTable(countrySelectedData);
    } if (country === '') {
        const countriesData = await fetchCountryByName(country);
        return countriesTable(countriesData);
    } else {
        return 'This country not found'
    }
}


export async function countriesInformation() {
    const searchCountryButton = document.querySelector('.search-button');
    searchCountryButton.addEventListener('click', async () => {
        const countryTable = await getCountryByName();
        document.getElementById('main-corona').innerHTML = "";
        document.getElementById('main-corona').appendChild(countryTable);
    });

}

const toCapitalCase = (country) => {
    return country.toLowerCase().charAt(0).toUpperCase() + (country.slice(1).toLowerCase())
}
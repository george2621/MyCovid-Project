import { countriesTable, countrySelectedTable, thisCountryNotFound } from '../view/countriesInformation.html.js'
import { getData } from './globalInformation.js'



export async function fetchCountryByName(countryName) {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`)
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        throw new Error('HTTP ERROR: ' + response.status);
    }
}

export async function fetchVaccinatedCountry(countryName) {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${countryName}`)
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        throw new Error('HTTP ERROR: ' + response.status);
    }

}



export async function getCountryByName() {
    try {
        const searchCountry = document.querySelector('.country-search');
        const country = toCapitalCase(searchCountry.value);
        const data = await getData();
        const countries = Object.keys(data)
        if (countries.includes(country)) {
            const countrySelectedData = await fetchCountryByName(country);
            const countrySelectedVaccineData = await fetchVaccinatedCountry(country)
            return countrySelectedTable(countrySelectedData, countrySelectedVaccineData);
        }
        if (country === '') {
            const countriesData = await fetchCountryByName(country);
            const countrySelectedVaccineData = await fetchVaccinatedCountry(country)
            console.log(countrySelectedVaccineData);

            return countriesTable(countriesData, countrySelectedVaccineData);
        } else {
            return thisCountryNotFound();
        }
    } catch (error) {
        console.log(error.message)
    }
}

export async function countriesInformation() {
    const searchCountryButton = document.querySelector('.search-button');
    const searchCountry = document.querySelector('.country-search');
    searchCountry.addEventListener('keyup', async () => {
        const countryTable = await getCountryByName();
        document.getElementById('main-corona').innerHTML = "";
        document.getElementById('main-corona').appendChild(countryTable);
    });
    searchCountryButton.addEventListener('click', async () => {
        const countryTable = await getCountryByName();
        document.getElementById('main-corona').innerHTML = "";
        document.getElementById('main-corona').appendChild(countryTable);
    });
}

const toCapitalCase = (country) => {
    return country.toLowerCase().charAt(0).toUpperCase() + (country.slice(1).toLowerCase())
}
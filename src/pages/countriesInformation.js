import { countriesTable, countrySelectedTable, thisCountryNotFound, loading } from '../view/countriesInformation.html.js'
import { getData } from './globalInformation.js'
import { INPUT_COUNTRY, SEARCH_BUTTON, MAIN_CORONA } from '../constants.js'


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
        const searchCountry = document.getElementById(INPUT_COUNTRY);
        const country = toCapitalCase(searchCountry.value);
        const data = await getData();
        const countries = Object.keys(data)
        if (countries.includes(country)) {
            if (country.includes(' ')) {
                const longCountryName = country.replace(' ', '%20');
                const countrySelectedData = await fetchCountryByName(longCountryName);
                const countrySelectedVaccineData = await fetchVaccinatedCountry(longCountryName)
                return countrySelectedTable(countrySelectedData, countrySelectedVaccineData);

            } else {
                const countrySelectedData = await fetchCountryByName(country);
                const countrySelectedVaccineData = await fetchVaccinatedCountry(country)
                return countrySelectedTable(countrySelectedData, countrySelectedVaccineData);
            }
        }
        if (country === '') {
            const countriesData = await fetchCountryByName(country);
            const countrySelectedVaccineData = await fetchVaccinatedCountry(country)
            return countriesTable(countriesData, countrySelectedVaccineData);
        } else {
            return thisCountryNotFound();
        }
    } catch (error) {
        console.log(error.message)
    }
}

export async function countriesInformation() {
    const searchCountryButton = document.getElementById(SEARCH_BUTTON);
    const searchCountry = document.getElementById(INPUT_COUNTRY);
    searchCountry.addEventListener('keyup', async () => {
        document.getElementById(MAIN_CORONA).innerHTML = "";
        document.getElementById(MAIN_CORONA).appendChild(loading());
        const countryTable = await getCountryByName();
        document.getElementById(MAIN_CORONA).innerHTML = "";
        document.getElementById(MAIN_CORONA).appendChild(countryTable);
    });
    searchCountryButton.addEventListener('click', async () => {
        document.getElementById(MAIN_CORONA).innerHTML = "";
        document.getElementById(MAIN_CORONA).appendChild(loading());
        const countryTable = await getCountryByName();
        document.getElementById(MAIN_CORONA).innerHTML = "";
        document.getElementById(MAIN_CORONA).appendChild(countryTable);

    });
}

const toCapitalCase = (country) => {
    const countryStructure = country.split(' ');
    if (countryStructure.length === 1) {
        return countryStructure[0].toLowerCase().charAt(0).toUpperCase() + (countryStructure[0].slice(1).toLowerCase())
    } else if (countryStructure.length === 2) {
        const countryOfTwoWord = `${countryStructure[0].toLowerCase().charAt(0).toUpperCase() + (countryStructure[0].slice(1).toLowerCase())} ${countryStructure[1].toLowerCase().charAt(0).toUpperCase() + (countryStructure[1].slice(1).toLowerCase())}`
        return countryOfTwoWord;
    } else {
        const countryOfThreeWord = `${countryStructure[0].toLowerCase().charAt(0).toUpperCase() + (countryStructure[0].slice(1).toLowerCase())} ${countryStructure[1].toLowerCase()} ${countryStructure[2].toLowerCase().charAt(0).toUpperCase() + (countryStructure[2].slice(1).toLowerCase())}`
        return countryOfThreeWord;
    }
}
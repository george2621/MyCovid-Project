import { globalPage, createNavbar, createFooter } from '../view/globalInformation.html.js'
import { MAIN_CORONA, MAIN_FOOTER, MAIN_NAVBAR } from '../constants.js'
import { loading } from '../view/countriesInformation.html.js'


export async function getData() {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases')
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        throw new Error('HTTP ERROR: ' + response.status);
    }
}


export async function globalInformation() {
    try {
        const data = await getData();
        const countries = Object.keys(data)
        const worldPopulation = data.Global.All.population.toLocaleString('en-US');
        const totalConfirmedCases = data.Global.All.confirmed.toLocaleString('en-US');
        const totalDeathCases = data.Global.All.deaths.toLocaleString('en-US');
        const effectedCountries = countries.length;

        return globalPage(worldPopulation, totalConfirmedCases, totalDeathCases, effectedCountries);
    } catch (error) {
        console.log(error.message)
    }

}

export async function getGlobalsInfo() {
    document.getElementById(MAIN_NAVBAR).innerHTML = createNavbar();
    document.getElementById(MAIN_FOOTER).innerHTML = createFooter();
    document.getElementById(MAIN_CORONA).appendChild(loading());
    const global = await globalInformation();
    const moveToGlobalPage = document.querySelector('.home');
    moveToGlobalPage.addEventListener('click', () => {
        document.getElementById(MAIN_CORONA).innerHTML = "";
        document.getElementById(MAIN_CORONA).appendChild(loading());
        document.getElementById(MAIN_CORONA).innerHTML = global;
    })
    document.getElementById(MAIN_CORONA).innerHTML = global;

}






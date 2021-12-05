import { globalPage } from '../view/globalInformation.html.js'


export async function getData() {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases')
    const jsonResponse = await response.json();
    return jsonResponse;
}


export async function globalInformation() {
    const data = await getData();
    const worldPopulation = data.Global.All.population;
    const totalConfirmedCases = data.Global.All.confirmed;
    const totalDeathCases = data.Global.All.deaths;
    return globalPage(worldPopulation, totalConfirmedCases, totalDeathCases);
}




export async function getGlobalsInfo() {
    const global = await globalInformation();
    const moveToGlobalPage = document.querySelector('.home');


    moveToGlobalPage.addEventListener('click', () => {
        document.getElementById('main-corona').innerHTML = global;
    })

    document.getElementById('main-corona').innerHTML = global;

}







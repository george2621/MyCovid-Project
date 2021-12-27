import { getData } from './globalInformation.js'
import { continentPage } from '../view/continentInformation.html.js'
import { loading } from '../view/countriesInformation.html.js'
import { MOVE_TO_CONTINENTS_PAGE } from '../constants.js'


export async function continentInformation() {
    let countries;
    let globalConfirmed;
    let data;
    try {
        data = await getData();
        countries = Object.keys(data)
        globalConfirmed = data.Global.All.confirmed;

    } catch (error) {
        console.log(error.message)
    }
    const europe = countries.filter(country => data[country].All.continent == 'Europe');
    const asia = countries.filter(country => data[country].All.continent == 'Asia');
    const africa = countries.filter(country => data[country].All.continent == 'Africa');
    const southAmerica = countries.filter(country => data[country].All.continent == 'South America');
    const northAmerica = countries.filter(country => data[country].All.continent == 'North America');
    const oceania = countries.filter(country => data[country].All.continent == 'Oceania');

    const confirmedInEurope = europe.reduce((total, cur) => total + data[cur].All.confirmed, 0)
    const confirmedInAsia = asia.reduce((total, cur) => total + data[cur].All.confirmed, 0)
    const confirmedInAfrica = africa.reduce((total, cur) => total + data[cur].All.confirmed, 0)
    const confirmedInSouthAmerica = southAmerica.reduce((total, cur) => total + data[cur].All.confirmed, 0)
    const confirmedInNorthAmerica = northAmerica.reduce((total, cur) => total + data[cur].All.confirmed, 0)
    const confirmedInOceania = oceania.reduce((total, cur) => total + data[cur].All.confirmed, 0)

    const europeOfWorld = ((confirmedInEurope / globalConfirmed) * 100).toFixed(2);
    const asiaOfWorld = ((confirmedInAsia / globalConfirmed) * 100).toFixed(2);
    const africaOfWorld = ((confirmedInAfrica / globalConfirmed) * 100).toFixed(2);
    const southAmericaOfWorld = ((confirmedInSouthAmerica / globalConfirmed) * 100).toFixed(2);
    const northAmericaOfWorld = ((confirmedInNorthAmerica / globalConfirmed) * 100).toFixed(2);
    const oceaniaOfWorld = ((confirmedInOceania / globalConfirmed) * 100).toFixed(2);

    return continentPage(confirmedInEurope, confirmedInAsia, confirmedInAfrica,
        confirmedInSouthAmerica, confirmedInNorthAmerica, confirmedInOceania,
        europeOfWorld, asiaOfWorld, africaOfWorld, southAmericaOfWorld, northAmericaOfWorld, oceaniaOfWorld);

}


export async function getContinentsInfo() {
    const moveToContinentPage = document.getElementById(MOVE_TO_CONTINENTS_PAGE);
    moveToContinentPage.addEventListener('click', async () => {
        document.getElementById('main-corona').innerHTML = "";
        document.getElementById('main-corona').appendChild(loading());
        const continent = await continentInformation();
        document.getElementById('main-corona').innerHTML = continent;
    })

}

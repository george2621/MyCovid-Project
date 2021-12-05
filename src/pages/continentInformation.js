import { getData } from './globalInformation.js'
import { continentPage } from '../view/continentInformation.html.js'


export async function continentInformation() {
    const data = await getData();
    const countries = Object.keys(data)

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

    return continentPage(confirmedInEurope, confirmedInAsia, confirmedInAfrica, confirmedInSouthAmerica, confirmedInNorthAmerica, confirmedInOceania);
}


export async function getContinentsInfo() {
    const continent = await continentInformation();
    const button = document.querySelector('.continent-page');
    const moveToContinentPage = document.querySelector('.continent-cases');


    moveToContinentPage.addEventListener('click', () => {
        document.getElementById('main-corona').innerHTML = continent;
    })
    button.addEventListener('click', () => {
        document.getElementById('main-corona').innerHTML = continent;
    })
}

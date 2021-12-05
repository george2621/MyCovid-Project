import { getGlobalsInfo } from '../pages/globalInformation.js';
import { getContinentsInfo } from '../pages/continentInformation.js';
import { countriesInformation } from '../pages/countriesInformation.js';





function main() {

    getGlobalsInfo()
    getContinentsInfo();
    countriesInformation();

}

window.addEventListener('load', main);


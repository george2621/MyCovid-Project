import { startPage } from '../view/information.html.js'


export const start = () => {
    const mainPage = startPage();
    document.getElementById('main-corona').innerHTML = mainPage;
}
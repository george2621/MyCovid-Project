export function continentPage(confirmedInEurope, confirmedInAsia, confirmedInAfrica,
  confirmedInSouthAmerica, confirmedInNorthAmerica, confirmedInOceania,
  europeOfWorld, asiaOfWorld, africaOfWorld, southAmericaOfWorld, northAmericaOfWorld, oceaniaOfWorld) {
  return `
      <div class='container'>
        <div class="continent-div">
          <div class ='row'>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
                <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/Europe.png">
              </div>
              <h1>Europe Confirmed </h1>
              <p>${confirmedInEurope.toLocaleString('en-US')}</p>
              <span>${europeOfWorld}% of world total case</span>
            </div>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
              <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/Asia.png">
              </div>
              <h1>Asia Confirmed  </h1>
              <p>${confirmedInAsia.toLocaleString('en-US')}</p>
              <span>${asiaOfWorld}% of world total case</span>
            </div>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
                <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/Africa.png">
              </div>
              <h1>Africa Confirmed </h1>
              <p>${confirmedInAfrica.toLocaleString('en-US')}</p>
              <span>${africaOfWorld}% of world total case</span>
            </div>
          </div>  
          <div class ='row'>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
                <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/South-america.png"> 
              </div>  
              <h1>South America Confirmed </h1>
              <p>${confirmedInSouthAmerica.toLocaleString('en-US')}</p>
              <span>${southAmericaOfWorld}% of world total case</span>
            </div>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
                <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/North-america.png">
              </div>
              <h1>North America Confirmed  </h1>
              <p>${confirmedInNorthAmerica.toLocaleString('en-US')}</p>
              <span>${northAmericaOfWorld}% of world total case</span>
            </div>
            <div class='col continent-info text-center'>
              <div class="text-center my-4">
                <img class="continent" src="https://george2621.github.io/MyCovid-Project/public/continentsImg/Australia.png">
              </div>  
              <h1>Oceania Confirmed </h1>
              <p>${confirmedInOceania.toLocaleString('en-US')}</p>
              <span>${oceaniaOfWorld}% of world total case</span>
            </div>
          </div>  
        </div>
      </div>
       `
}
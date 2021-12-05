

export const globalPage = (worldPopulation, totalConfirmedCases, totalDeathCases, effectedCountries) => {
  return `
    <div class='container'>
      <div class ='first-section'>
        <div>
          <img  class='earth' src='../public/Gif/ezgif.com-gif-maker.gif'/>
        </div>
        <div class="global-div">
          <div class="header-div text-center ">
          <h1 class="global">GLOBAL</h1>
          <p class="affected-countries">Affected Countries : ${effectedCountries}<p>
          </div>
          <div class="population">
          <div class="header-and-icon">
          <h2>World Population</h2> 
          <img src="../public/img/population.png">
          </div>
          <p>${worldPopulation}</p>
          </div>
          <div class="confirmed">
          <div class="header-and-icon">
          <h2>Total Cases</h2>
          <img src="../public/img/global.png">
          </div>
          <p>${totalConfirmedCases}</p>
          </div>
          <div class="deaths">
          <div class="header-and-icon">
          <h2>Deaths</h2>
          <img src="../public/img/death.png">
          </div>
          <p>${totalDeathCases}</p>
          </div>
          <div class="vaccinated">
          <div class="header-and-icon">
          <h2>Vaccinated</h2><img src="../public/img/vaccin.png">
          </div>
          <p>${totalDeathCases}</p>
          </div>
          
        </div>
      </div>
    </div>
     `
}


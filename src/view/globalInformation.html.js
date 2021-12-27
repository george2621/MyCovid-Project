

export const globalPage = (worldPopulation, totalConfirmedCases, totalDeathCases, effectedCountries) => {
  return `
    <div class='container'>
      <div class ='first-section row'>
        <div class="col-md-12  col-lg-6">
          <img class='earth' src='public/Gif/earth.gif'/>
        </div>
        <div class="col-md-12  col-lg-6">
          <div class="header-div text-center ">
            <h1 class="global">GLOBAL</h1>
            <p class="affected-countries">Affected Countries : ${effectedCountries}<p>
          </div>
          <div class="population">
            <div class="header-and-icon">
              <h2>World Population</h2> 
              <img src="public/img/population.png">
            </div>
            <p>${worldPopulation}</p>
          </div>
          <div class="confirmed">
            <div class="header-and-icon">
              <h2>Total Cases</h2>
              <img src="public/img/global.png">
            </div>
            <p>${totalConfirmedCases}</p>
          </div>
          <div class="deaths">
            <div class="header-and-icon">
              <h2>Deaths</h2>
              <img src="public/img/deaths.png">
            </div>
            <p>${totalDeathCases}</p>
          </div>
          <div class="vaccinated">
            <div class="header-and-icon">
              <h2>Vaccinated</h2>
              <img src="public/img/vaccine.png">
            </div>
            <p>${totalDeathCases}</p>
          </div>
        </div>
      </div>
    </div>
     `
}

export const createNavbar = () => {
  return `<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
  <a class="my-covid" href="#"><img src="public/img/icons8-Pastel Glyph-Coronavirus.png">MyCovid</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white mx-3 home" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a id="continent-button" class="nav-link text-white continent-cases" href="#">Continents Cases</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input id="input-country" class="country-search" type="search" placeholder="Search By Country" aria-label="Search">
      <button id="search-button" class="px-3 my-2 my-sm-0 mx-2 search-button" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`

}

export const createFooter = () => {
  return `
  <footer class="main-footer">
     <div class="container">
      <div class="row">
          <div class="col-md-8 my-3">
            <p>Copyright &copy; 2021. All Rights Reserved</p>
          </div>
          <div class="social text-end col-md-4 my-3">
            <a class="m-3" href="https://www.facebook.com/george.roumieh"><i class=" fab fa-facebook fa-2x"></i></a>
            <a class="m-3" href="https://www.instagram.com/george_roumieh/"><i class=" fab fa-instagram fa-2x"></i></a>
            <a class="m-3" href="https://www.linkedin.com/in/george-roumieh-6606901bb/"><i class=" fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
    </div>
  </footer>`
}








export const globalPage = (worldPopulation, totalConfirmedCases, totalDeathCases) => {
  return `
    <div class='container'>
      <div class ='first-section'>
        <div>
          <img  class='earth' src='../public/Gif/db1oiuj-3dd55ff6-89be-4d60-830f-494b026904b5.gif'/>
        </div>
        <div>
          <h1>World Population :</h1>
          <p class="world-population">${worldPopulation}</p>
          <h1>Total Cases :</h1>
          <p class="total-cases">${totalConfirmedCases}</p>
          <h1>Death Cases :</h1>
          <p class="death-cases">${totalDeathCases}</p>
          <a class="btn btn-dark btn-block continent-page">continents cases</a>
        </div>
      </div>
    </div>
     `
}

// export const mainNavbar = () => {
//   return `<nav class="navbar navbar-expand-lg navbar-light">
//   <div class="container">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
//       aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//         <a class="nav-item nav-link" href="#">Features</a>
//         <a class="nav-item nav-link" href="#"></a>
//       </div>
//     </div>
//   </div>
// </nav>`
// }
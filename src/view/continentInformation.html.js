



export function continentPage(confirmedInEurope, confirmedInAsia, confirmedInAfrica, confirmedInSouthAmerica, confirmedInNorthAmerica, confirmedInOceania) {
    return `
      <div class='container'>
        <div class ='second-section'>
          <h1>Europe confirmed : ${confirmedInEurope}</h1>
          <h1>Asia confirmed : ${confirmedInAsia}</h1>
          <h1>Africa confirmed : ${confirmedInAfrica}</h1>
          <h1>South America confirmed : ${confirmedInSouthAmerica}</h1>
          <h1>North America confirmed : ${confirmedInNorthAmerica}</h1>
          <h1>Oceania confirmed : ${confirmedInOceania}</h1>
        </div>
      </div>
       `
}
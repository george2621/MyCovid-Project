
export const countriesTable = (countriesData, countrySelectedVaccineData) => {

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('container');

    const table = document.createElement('table');
    table.classList.add('countries-table');

    const tableHeader = document.createElement('tr');
    tableHeader.classList.add('table-header')

    const countryName = document.createElement('th');
    countryName.textContent = 'Country'
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population'
    const capitalCityHeader = document.createElement('th');
    capitalCityHeader.textContent = 'Capital-City'
    const confirmedHeader = document.createElement('th');
    confirmedHeader.textContent = 'Confirmed-Cases'
    const deathsHeader = document.createElement('th');
    deathsHeader.textContent = 'Deaths'
    const lifeExpectancyHeader = document.createElement('th');
    lifeExpectancyHeader.textContent = 'Life-Expectancy '
    const updateHeader = document.createElement('th');
    updateHeader.textContent = 'Updated'

    tableHeader.appendChild(countryName);
    tableHeader.appendChild(populationHeader);
    tableHeader.appendChild(capitalCityHeader);
    tableHeader.appendChild(confirmedHeader);
    tableHeader.appendChild(deathsHeader);
    tableHeader.appendChild(lifeExpectancyHeader);
    tableHeader.appendChild(updateHeader);

    table.appendChild(tableHeader);

    const tableBody = document.createElement('tbody');

    const countries = Object.keys(countriesData);
    countries.forEach(country => {
        const tableRow = document.createElement('tr');
        const countryName = document.createElement('td');
        countryName.textContent = countriesData[country].All.country;
        const population = document.createElement('td');
        population.textContent = countriesData[country].All.population;
        const capitalCity = document.createElement('td');
        capitalCity.textContent = countriesData[country].All.capital_city;
        const confirmed = document.createElement('td');
        confirmed.textContent = countriesData[country].All.confirmed;
        const deaths = document.createElement('td');
        deaths.textContent = countriesData[country].All.deaths;
        const lifeExpectancy = document.createElement('td');
        lifeExpectancy.textContent = countriesData[country].All.life_expectancy;
        const updated = document.createElement('td');
        updated.textContent = countriesData[country].All.updated;

        tableRow.appendChild(countryName);
        tableRow.appendChild(population);
        tableRow.appendChild(capitalCity);
        tableRow.appendChild(confirmed);
        tableRow.appendChild(deaths);
        tableRow.appendChild(lifeExpectancy);
        tableRow.appendChild(updated);

        tableBody.appendChild(tableRow)
        table.appendChild(tableBody);
    })

    tableDiv.appendChild(table);
    return tableDiv;
}


export const countrySelectedTable = (countrySelectedData, countrySelectedVaccineData) => {

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('container');

    const table = document.createElement('table');
    table.classList.add('countries-table');

    const tableHeader = document.createElement('tr');
    tableHeader.classList.add('table-header')

    const countryNameHeader = document.createElement('th');
    countryNameHeader.textContent = 'Country'
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population'
    const capitalCityHeader = document.createElement('th');
    capitalCityHeader.textContent = 'Capital-City'
    const confirmedHeader = document.createElement('th');
    confirmedHeader.textContent = 'Confirmed-Cases'
    const deathsHeader = document.createElement('th');
    deathsHeader.textContent = 'Deaths'
    const lifeExpectancyHeader = document.createElement('th');
    lifeExpectancyHeader.textContent = 'Life-Expectancy '
    const vaccinatedHeader = document.createElement('th');
    vaccinatedHeader.textContent = 'Vaccinated'
    const partiallyVaccinatedHeader = document.createElement('th');
    partiallyVaccinatedHeader.textContent = 'Partially-Vaccinated'


    tableHeader.appendChild(countryNameHeader);
    tableHeader.appendChild(populationHeader);
    tableHeader.appendChild(capitalCityHeader);
    tableHeader.appendChild(confirmedHeader);
    tableHeader.appendChild(deathsHeader);
    tableHeader.appendChild(lifeExpectancyHeader);
    tableHeader.appendChild(vaccinatedHeader);
    tableHeader.appendChild(partiallyVaccinatedHeader);


    table.appendChild(tableHeader);

    const tableBody = document.createElement('tbody');

    const tableRow = document.createElement('tr');
    const countryName = document.createElement('td');
    countryName.textContent = countrySelectedData.All.country;
    const population = document.createElement('td');
    population.textContent = countrySelectedData.All.population.toLocaleString('en-US');
    const capitalCity = document.createElement('td');
    capitalCity.textContent = countrySelectedData.All.capital_city;
    const confirmed = document.createElement('td');
    confirmed.textContent = countrySelectedData.All.confirmed.toLocaleString('en-US');
    const deaths = document.createElement('td');
    deaths.textContent = countrySelectedData.All.deaths.toLocaleString('en-US');
    const lifeExpectancy = document.createElement('td');
    lifeExpectancy.textContent = countrySelectedData.All.life_expectancy;
    const vaccinated = document.createElement('td');
    vaccinated.textContent = countrySelectedVaccineData.All.people_vaccinated.toLocaleString('en-US');
    const partiallyVaccinated = document.createElement('td');
    partiallyVaccinated.textContent = countrySelectedVaccineData.All.people_partially_vaccinated.toLocaleString('en-US');


    tableRow.appendChild(countryName);
    tableRow.appendChild(population);
    tableRow.appendChild(capitalCity);
    tableRow.appendChild(confirmed);
    tableRow.appendChild(deaths)
    tableRow.appendChild(lifeExpectancy);
    tableRow.appendChild(vaccinated);
    tableRow.appendChild(partiallyVaccinated);


    tableBody.appendChild(tableRow)
    table.appendChild(tableBody);

    tableDiv.appendChild(table);
    return tableDiv;
}


export const thisCountryNotFound = (error) => {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.classList.add('container');
    notFoundDiv.classList.add('text-center');
    const notFoundError = document.createElement('p');
    notFoundError.textContent = 'This country not found'
    notFoundError.style.fontWeight = 'bold';
    notFoundDiv.appendChild(notFoundError);

    return notFoundDiv;
}

export const countriesTable = (countriesData) => {

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('container');

    const table = document.createElement('table');
    table.classList.add('countries-table');

    const tableHeader = document.createElement('tr');

    const countryName = document.createElement('th');
    countryName.textContent = 'Country'
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population'
    const capitalCityHeader = document.createElement('th');
    capitalCityHeader.textContent = 'Capital-City'
    const confirmedHeader = document.createElement('th');
    confirmedHeader.textContent = 'Confirmed-Cases'
    const lifeExpectancyHeader = document.createElement('th');
    lifeExpectancyHeader.textContent = 'Life-Expectancy '
    const updatedHeader = document.createElement('th');
    updatedHeader.textContent = 'Updated'

    tableHeader.appendChild(countryName);
    tableHeader.appendChild(populationHeader);
    tableHeader.appendChild(capitalCityHeader);
    tableHeader.appendChild(confirmedHeader);
    tableHeader.appendChild(lifeExpectancyHeader);
    tableHeader.appendChild(updatedHeader);

    table.appendChild(tableHeader);

    const countries = Object.keys(countriesData)
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
        const lifeExpectancy = document.createElement('td');
        lifeExpectancy.textContent = countriesData[country].All.life_expectancy;
        const updated = document.createElement('td');
        updated.textContent = countriesData[country].All.updated;

        tableRow.appendChild(countryName);
        tableRow.appendChild(population);
        tableRow.appendChild(capitalCity);
        tableRow.appendChild(confirmed);
        tableRow.appendChild(lifeExpectancy);
        tableRow.appendChild(updated);

        table.appendChild(tableRow);
    })

    tableDiv.appendChild(table);
    return tableDiv;
}


export const countrySelectedTable = (countrySelectedData) => {

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('container');

    const table = document.createElement('table');
    table.classList.add('countries-table');

    const tableHeader = document.createElement('tr');

    const countryNameHeader = document.createElement('th');
    countryNameHeader.textContent = 'Country'
    const populationHeader = document.createElement('th');
    populationHeader.textContent = 'Population'
    const capitalCityHeader = document.createElement('th');
    capitalCityHeader.textContent = 'Capital-City'
    const confirmedHeader = document.createElement('th');
    confirmedHeader.textContent = 'Confirmed-Cases'
    const lifeExpectancyHeader = document.createElement('th');
    lifeExpectancyHeader.textContent = 'Life-Expectancy '
    const updatedHeader = document.createElement('th');
    updatedHeader.textContent = 'Updated'

    tableHeader.appendChild(countryNameHeader);
    tableHeader.appendChild(populationHeader);
    tableHeader.appendChild(capitalCityHeader);
    tableHeader.appendChild(confirmedHeader);
    tableHeader.appendChild(lifeExpectancyHeader);
    tableHeader.appendChild(updatedHeader);

    table.appendChild(tableHeader);

    const tableRow = document.createElement('tr');
    const countryName = document.createElement('td');
    countryName.textContent = countrySelectedData.All.country;
    const population = document.createElement('td');
    population.textContent = countrySelectedData.All.population;
    const capitalCity = document.createElement('td');
    capitalCity.textContent = countrySelectedData.All.capital_city;
    const confirmed = document.createElement('td');
    confirmed.textContent = countrySelectedData.All.confirmed;
    const lifeExpectancy = document.createElement('td');
    lifeExpectancy.textContent = countrySelectedData.All.life_expectancy;
    const updated = document.createElement('td');
    updated.textContent = countrySelectedData.All.updated;

    tableRow.appendChild(countryName);
    tableRow.appendChild(population);
    tableRow.appendChild(capitalCity);
    tableRow.appendChild(confirmed);
    tableRow.appendChild(lifeExpectancy);
    tableRow.appendChild(updated);

    table.appendChild(tableRow);

    tableDiv.appendChild(table);
    return tableDiv;
}
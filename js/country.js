const loadCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all").then((res) =>
    res.json().then((data) => call(data))
  );
};

loadCountry();

const container = document.getElementById("container");
const call = (c) => {
  console.log(c);

  c.forEach((country) => {
    const countryDiv = document.createElement("div");

    countryDiv.classList.add("country-s");
    const name = document.createElement("h2");
    const capital = document.createElement("p");
    name.innerText = `Name: ${country.name}

  Capital: ${country.capital}

  Alpha Code: ${country.alpha2Code}

  Calling Code: ${country.callingCodes} 
  `;
    container.appendChild(countryDiv);
    countryDiv.appendChild(name);
    countryDiv.appendChild(capital);
  });
};

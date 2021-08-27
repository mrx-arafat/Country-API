const loadCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all").then((res) =>
    res.json().then((data) => call(data))
  );
};

loadCountry();

const container = document.getElementById("container");
const call = (c) => {
  // console.log(c);

  c.forEach((country) => {
    const countryDiv = document.createElement("div");

    countryDiv.classList.add("country-s");

    countryDiv.innerHTML = ` <h2>Name: ${country.name}</h2>

  <h3>Capital: ${country.capital}<br><br>

  Alpha Code: ${country.alpha2Code}<br><br>
  Calling Code: ${country.callingCodes} 

  </h3>
  <button onclick="targetedCountry('${country.name}')
  ">Click To See Flag</button>
  `;
    container.appendChild(countryDiv);
  });
};

///targeted Country

const targetedCountry = (cName) => {
  const url = `https://restcountries.eu/rest/v2/name/${cName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(url);
};

// now display targeted country info

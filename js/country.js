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

    countryDiv.innerHTML = ` <h2>${country.name}</h2>

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
  // I have modified api url last dynamically
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data[0]));
  //these informations are in 0 index, 0:{name:"Bangladesh",...}
  console.log(url);
};

// now display targeted country info

const display = (country) => {
  console.log("displaying targeted country in console log:", country);

  const countryFlagDiv = document.getElementById("flag");

  countryFlagDiv.innerHTML = `<img width="400px" src="${country.flag}" >
  <h3>${country.name}</h3>`;
};

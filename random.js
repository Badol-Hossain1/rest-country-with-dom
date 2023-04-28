const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (data) => {
  const gender = document.getElementById("gender");
  const name = document.getElementById("name");
  gender.innerText = data.results[0].gender;
  name.innerText = data.results[0].name.first;
  console.log(data.results[0]);
};

const countrys = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountrys(data));
};

const displayCountrys = (datas) => {
  const country = document.getElementById("country");

  datas.forEach((element) => {
    console.log(
      "🚀 ~ file: random.js:25 ~ displayCountrys ~ element:",
      element,
    );
    const li = document.createElement("div");
    li.classList.add("contrys");
    li.innerHTML = `
    <h3> name: ${element.continents} </h3>
    <p> ${element.capital ? element.capital[0]:"no capital"} </p>
    <button onclick="showDetails('${element.cca2}')">details </button>
    `;
    country.appendChild(li);
  });
};

const showDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const details = `https://restcountries.com/v3.1/alpha/${code}`
    console.log('data is comming ',code);
}
countrys();

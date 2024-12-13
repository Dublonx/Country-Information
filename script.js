// Country Information
function getCountry() {
  const searchCountry = document.querySelector("#search").value.trim();
  
  // if
  if (searchCountry === "") {
    Swal.fire({
      text: "Please enter a country first before continue!",
      icon: "error",
      confirmButtonText: "Okay",
      confirmButtonColor: "red"
    });
    return;
  } else {
    // timeout 1 seconds
    setTimeout(() => {
      document.querySelector("#search").value = "";
    }, 1000);
  }
  
  // api
  fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
    .then(response => response.json())
    .then(data => {
      const country = data[0];
      
      document.getElementById('countryName').innerText = `Name: ${country.name.common}`;
      document.getElementById('countryImage').src = country.flags.png;
      document.getElementById('countryImage').style.display = "block";
      document.getElementById('countryCapital').innerText = `Capital: ${country.capital[0]}`;
      document.getElementById('countryPopulation').innerText = `Population: ${country.population}`;
    })
    .catch (error => {
      Swal.fire({
        text: "Country not found or an error occurred.",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "red"
      });
    });
}
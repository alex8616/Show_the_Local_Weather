if (navigator.geolocation) {  
    navigator.geolocation.getCurrentPosition(showPosition) 
  } 
  
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#city").innerText = data["name"];
      document.querySelector("#weather").innerText = data["weather"][0]["main"] + " (" + data["weather"][0]["description"] + ")";
      //document.querySelector("#icon").setAttribute("src", data["weather"][0]["./animated/day.svg"]);
    
      let iconoAnimado = document.querySelector("#icon")
      switch (data.weather[0].main) {
        case 'Thunderstorm':
            iconoAnimado.src='animated/thunder.svg'
            console.log('TORMENTA');
            break;
          case 'Drizzle':
            iconoAnimado.src='animated/rainy-2.svg'
            console.log('LLOVIZNA');
            break;
          case 'Rain':
            iconoAnimado.src='animated/rainy-7.svg'
            console.log('LLUVIA');
            break;
          case 'Snow':
            iconoAnimado.src='animated/snowy-6.svg'
              console.log('NIEVE');
            break;                        
          case 'Clear':
              iconoAnimado.src='animated/day.svg'
              console.log('LIMPIO');
            break;
          case 'Atmosphere':
            iconoAnimado.src='animated/weather.svg'
              console.log('ATMOSFERA');
              break;  
          case 'Clouds':
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('NUBES');
              break;  
          default:
            iconoAnimado.src='animated/cloudy-day-1.svg'
            console.log('por defecto');
        }

      document.querySelector("#temp").innerHTML = `${data["main"]["temp"]}<sup>°</sup>C`;
      document.querySelector("#switch").innerText = "Grados";
      document.querySelector("#timezone").innerText = data["timezone"];
      document.querySelector("#station").innerText = data["stations"];
    })
  }
  
  function switchTemp() {
    var temp = document.querySelector("#temp").innerText;
    if (temp.indexOf("°C") !== -1) {
      temp = temp.split("°C")[0]
      temp = parseInt(temp)
      temp = temp * 1.8 + 32;
      document.querySelector("#temp").innerHTML = `${temp}°F`;
      document.querySelector("#switch").innerText = "Celsius"
    } else {
      temp = temp.split("°F")[0]
      temp = parseInt(temp)
      temp = (temp - 32) / 1.8;  
      document.querySelector("#temp").innerHTML = `${temp}°C`;
      document.querySelector("#switch").innerText = "Fahrenheit"
    }
  }

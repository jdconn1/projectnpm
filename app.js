const response = axios.get('https://api.openweathermap.org/data/2.5/weather?zip=65810,us&appid=8e47cfc7f4287114d0777fc5960a103b&units=imperial')
response.then((response) => {
    console.log(response);
    let parentDiv = document.querySelector('.container');
    let currentTemp = response.data.main.temp;
    let header = document.createElement('h1');
    header.innerHTML = currentTemp + " Farenheit";
    parentDiv.appendChild(header);
    
})
let button = document.querySelector('.submit-button');
let inputText = document.querySelector('.input-text');

let name1 = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputText.value +'&appid=4ba25636789b6b28444373c86fc56a51')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];


        name1.innerHTML = 'City: ' + nameValue;
        temp.innerHTML = 'Temprature:   ' + parseInt(Number(tempValue) - Number(273.15)) + '°';
        desc.innerHTML = 'Desc: ' + descValue;
    })
.catch(err => alert("wrong city name"))
})

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=4ba25636789b6b28444373c86fc56a51
/*
    Huidig weer widget
    
    Tip: Verander de longitude en latitude in de api_url naar jouw woonplaats!
    51.9411015,5.050922
*/
const api_url = "https://api.open-meteo.com/v1/forecast?latitude=51.9411015&longitude=5.050922&current_weather=true"

window.onload = function () {
    getBitcoin();
    getData();
};

async function getBitcoin() {
    await fetch("https://api.coinlore.net/api/ticker/?id=90").then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        document.getElementById('bitcoin').innerText = response[0]['price_usd'];
    }).catch();
}

async function getData() {
    await fetch(api_url).then(response => {
        return response.json();
    }).then(response => {
        console.log(response);

        let temperature = response['current_weather']['temperature'];
        let windspeed = response['current_weather']['windspeed'];
        let winddirection = response['current_weather']['winddirection'];
        let time = response['current_weather']['time'];

        document.getElementById('temperature').innerText = temperature;
        document.getElementById('wind').innerText = windspeed;
        document.getElementById('navigation').innerText = winddirection;
        document.getElementById('time').innerText = String(time).substr(time.length - 5);
    })
        .catch()
}

function All (event) {

    

    let formText = document.getElementById('zip').value;
    let inputDate = document.getElementById('date').value
    let shir = 0;
    let dolg = 0;
    console.log(formText)

//get cord

console.log(" Form Submitted ")
fetch('http://localhost:8081/getCord', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({url: formText})
})
.then(res => res.json())
.then(function(res) {
    shir = `${res.lat}`;
    dolg = `${res.lng}`;
})

    //get weather

.then(function(){if (Client.checkWeek(inputDate) === true) {
    console.log(" Form Submitted ")
    fetch('http://localhost:8081/getWeather', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url1: shir,
            url2: dolg,
            input: inputDate
        })
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('shir').innerHTML = `Temperature: ${res.lat}`;
    })
} 
else { 
    console.log(" Form Submitted ")
fetch('http://localhost:8081/getWeatherForecast', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        url1: shir,
        url2: dolg,
        input: inputDate
    })
})
.then(res => res.json())
.then(function(res) {
    document.getElementById('shir').innerHTML = `Max temperature: ${res.lat}`;})
}})

    //get ImG

        formText = formText.replace(/\s+/g,'')
        console.log(formText)
    
        console.log(" Form Submitted ")
        fetch('http://localhost:8081/getImage', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('IMG').src = `${res.lat}`;
        })

        //differencetime
        
        let start = new Date (document.getElementById('date').value)
        let end = new Date (document.getElementById('dateend').value)
        let timeDiff = Math.abs(end.getTime() - start.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 360 * 10 * 24))
        document.getElementById('grad').innerHTML = `Duration of the train ${diffDays} days`



    }

    export { All }






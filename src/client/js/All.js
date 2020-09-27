function All (event) {
    event.preventDefault()
    //get Cord

    let formText = document.getElementById('zip').value;
    console.log(formText)

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
             document.getElementById('shir').innerHTML = `${res.lat}`;
             document.getElementById('dolg').innerHTML = `${res.lng}`;
    })

    //get weather
        let inputDate = document.getElementById('date').value
        let shir = document.getElementById('shir').innerHTML;
        let dolg = document.getElementById('dolg').innerHTML;
        if (Client.checkWeek(inputDate) === true) {
        console.log(" Form Submitted ")
        fetch('http://localhost:8081/getWeather', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url1: shir,
                url2: dolg
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
            url2: dolg
        })
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('shir').innerHTML = `Max temperature: ${res.lat}`;})
    }

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
    }

    export { All }






function getCord (event) {
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
}
export { getCord }
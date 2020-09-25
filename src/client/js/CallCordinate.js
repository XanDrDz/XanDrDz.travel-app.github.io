function getCord (event) {
    event.preventDefault()
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
        document.getElementById('shir').innerHTML = `Shirina: ${res.lat}`;
        document.getElementById('dolg').innerHTML = `Dolgota: ${res.lng}`;
    })
}
export { getCord }
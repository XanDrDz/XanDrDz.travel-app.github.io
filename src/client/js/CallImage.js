function getImage (event) {
    event.preventDefault()
    let formText = document.getElementById('zip').value;
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
export { getImage }
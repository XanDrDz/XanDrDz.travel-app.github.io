function checkWeek(inputDate) {
    console.log(" Running less week ", inputDate);
    const userInput = new Date(document.getElementById('date').value).toISOString().slice(0, 10);
    const currentDate = new Date().toISOString().slice(0, 10);
    let plusWeek = currentDate + 7;

    if(userInput > currentDate ) {
        return false
    } 
    else {
        return true
    }
}
export { checkWeek }
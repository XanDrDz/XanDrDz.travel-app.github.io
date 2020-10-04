function checkWeek(inputDate) {
    console.log(" Running less week ", inputDate);
    const userInput = new Date(document.getElementById('date').value);
    const newData = new Date();
    let plusWeek = newData.setDate(newData.getDate());

    if(userInput > plusWeek ) {
        return false
    } 
    else {
        return true
    }
}
export { checkWeek }
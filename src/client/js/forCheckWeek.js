function checkWeek(inputDate) {
    console.log(" Running less week ", inputDate);
    let userInput = document.getElementById('date').value
    var newDate = new Date();
    var date1 = new Date();
    let plusWeek = newDate.setDate(date1.getDate() + 7);

    if(userInput > plusWeek ) {
        return false
    } 
    else {
        return true
    }
}
export { checkWeek }
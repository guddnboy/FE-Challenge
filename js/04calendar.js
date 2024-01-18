const date = new Date();

var currentYear = date.getFullYear();
var currentMonth = date.getMonth() + 1;

displayDate();

function displayDate(){
    document.getElementById('currentDate').innerText = currentYear + "년"+ currentMonth + "월";    
}

function nextMonth(){
    if (currentMonth == 12){
        currentYear += 1;
        currentMonth = 1;
    }
    else {
        currentMonth += 1;
    }
    displayDate();
}

function prevMonth(){
    if (currentMonth == 1){
        currentYear -= 1;
        currentMonth = 12;
    } 
    else {
        currentMonth -= 1;
    }

    displayDate();
}

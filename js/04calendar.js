const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;

displayDate();

const prevLast = new Date(currentYear, currentMonth - 1,0);
const thisLast = new Date(currentYear, currentMonth, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6){
    for (let i = 0; i < PLDay + 1; i++){
        prevDates.unshift(PLDate - 1);
    }
}

for (let i =1; i < 7 - TLDay; i++) {
    nextDates.push(i);
}

const dates = prevDates.concat(thisDates,nextDates);

dates.forEach((date,i) => {
    dates[i] = `<div class="date">${date}</div>`;
});

document.querySelector('.dates').innerHTML = dates.join('');


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

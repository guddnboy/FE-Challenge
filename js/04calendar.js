let date = new Date();

var renderCalendar = () =>{

    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;

    var prevLast = new Date(currentYear, currentMonth - 1,0);
    var thisLast = new Date(currentYear, currentMonth, 0);

    var PLDate = prevLast.getDate();
    var PLDay = prevLast.getDay();

    var TLDate = thisLast.getDate();
    var TLDay = thisLast.getDay();

    var prevDates = [];
    var thisDates = [...Array(TLDate + 1).keys()].slice(1);
    var nextDates = [];

    if (PLDay !== 6){
        for (let i = 0; i < PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i =1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    var dates = prevDates.concat(thisDates,nextDates);

    // Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                        ? 'this'
                        : 'other';

        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })

    document.querySelector('#currentDate').innerText = `${currentYear}년 ${currentMonth}월`;
    document.querySelector('.dates').innerHTML = dates.join('');

}

renderCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
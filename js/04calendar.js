let date = new Date();
let memoes = {};

var renderCalendar = () => {
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;

    var prevLast = new Date(currentYear, currentMonth - 1, 0);
    var thisLast = new Date(currentYear, currentMonth, 0);

    var PLDate = prevLast.getDate();
    var PLDay = prevLast.getDay();

    var TLDate = thisLast.getDate();
    var TLDay = thisLast.getDay();

    var prevDates = [];
    var thisDates = [...Array(TLDate + 1).keys()].slice(1);
    var nextDates = [];

    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    var dates = prevDates.concat(thisDates, nextDates);

    // Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((day, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other';

        const fullDate = `${currentYear}-${currentMonth}-${day}`;
        const memoIcon = condition === 'this' && memoes[fullDate] ? '<span class="memo-icon">&#9997;</span>' : '';
    
    const iconClass = condition === 'this' ? 'memoIcon' : '';

    dates[i] = `<div class="date ${iconClass}" onclick="showMemo('${fullDate}')">${memoIcon}<span class="${condition}">${day}</span></div>`;
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

function addMemo(selectedDate) {
    var memo = prompt(`메모를 입력하세요 (${selectedDate})`);

    if (memo !== null) {
        memoes[selectedDate] = memo;
        alert(`메모가 추가되었습니다: ${memo}`);
        renderCalendar();
    } else {
        alert(`메모가 추가되지 않았습니다.`);
    }
}

function showMemo(selectedDate) {
    var memo = memoes[selectedDate] || '메모가 없습니다.';
    var updatedMemo = prompt(`메모를 수정하세요 (${selectedDate})`, memo);

    if (updatedMemo !== null) {
        memoes[selectedDate] = updatedMemo;
        alert(`메모가 수정되었습니다: ${updatedMemo}`);
        renderCalendar();
    } else {
        alert(`메모가 수정되지 않았습니다.`);
    }
}

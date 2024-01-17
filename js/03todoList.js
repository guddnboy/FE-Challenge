var contentList = [];
var todolist = document.querySelector('#todolist');
var addBtn = document.querySelector('#add');
var priorityBtns = document.querySelectorAll('.priorityBtn');

function addfunc() {
    var content = document.querySelector('#inputContent').value;
    var priority;

    // 선택된 우선순위 찾기
    for (let i = 0; i < priorityBtns.length; i++) {
        if (priorityBtns[i].checked) {
            priority = priorityBtns[i].value;
            break;
        }
    }

    // 빈 문자열이나 공백만 입력된 경우 추가하지 않음
    if (content.trim() !== '') {
        contentList.push({
            content: content,
            priority: priority
        });

        // 배열의 모든 항목을 우선순위와 함께 정렬
        contentList.sort(function (a, b) {
            var priorityOrder = {
                '낮음': 1,
                '중간': 2,
                '높음': 3,
                '매우높음': 4
            };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

        // 배열의 모든 항목을 todolist에 표시
        todolist.innerHTML = '';
        for (let i = 0; i < contentList.length; i++) {
            todolist.innerHTML += `<p>${contentList[i].content} ${contentList[i].priority}</p>`;
        }
    }
}

addBtn.addEventListener('click', addfunc);

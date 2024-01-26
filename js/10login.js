const loginBtn = document.querySelector('.logBtn');


loginBtn.addEventListener('click',check);



function check(){
    event.preventDefault();
    const userId = document.querySelector('.user-id').value;
    const userPw = document.querySelector('.user-pw').value;

    if (userId === 'user' && userPw==='password'){
        alert('로그인에 성공했습니다.');
        location.reload();
    }
    else{
        alert('ID 혹은 PASSWORD를 확인해 주세요.');
    }

}
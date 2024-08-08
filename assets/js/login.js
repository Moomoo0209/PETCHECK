const onRegister = () => {
    let userIdInput = document.querySelector('#userid');
    let passwordInput = document.querySelector('#password');

    let check = true;

    // 아이디 입력 여부
    let userIdErrMsg = document.querySelector('#userid-err-msg');
    if (userIdInput.value === '') {
        userIdErrMsg.textContent = '* 아이디를 입력해 주세요.';
        check = false;
    } else {
        userIdErrMsg.style.display = 'none';
    }

    // 비밀번호 입력 여부
    let passwordErrMsg = document.querySelector('#password-err-msg');
    if (passwordInput.value === '') {
        passwordErrMsg.textContent = '* 비밀번호를 입력해 주세요.';
        check = false;
    } else {
        passwordErrMsg.style.display = 'none';
    }

    // 로그인 성공
    if (check) {
        alert('PETCHCK 방문을 환영합니다!');
        location.href= "indexLog.html";
    } else {
        alert('필수 입력란을 모두 입력해주세요!');
    }
};

setInterval(() => {
    let userIdInput = document.querySelector('#userid');
    let passwordInput = document.querySelector('#password');

    let check = true;

    // ID 입력 여부
    let userIdErrMsg = document.querySelector('#userid-err-msg');
    if (userIdInput.value === '') {
        userIdErrMsg.textContent = '* 아이디를 입력해 주세요.';
        check = false;
    } else {
        userIdErrMsg.textContent = '';
    };

    // 비밀번호 입력 여부
    let passwordErrMsg = document.querySelector('#password-err-msg');
    if (passwordInput.value === '') {
        passwordErrMsg.textContent = '* 비밀번호를 입력해 주세요.';
        check = false;
    } else {
        passwordErrMsg.textContent = '';
    }

}, 1000);
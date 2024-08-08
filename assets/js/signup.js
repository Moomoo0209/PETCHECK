const onRegister = () => {
    let userIdInput = document.querySelector('#userid');
    let passwordInput = document.querySelector('#password');
    let passwordCheckInput = document.querySelector('#password-check');

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

    // 비밀번호 확인 입력 여부
    let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
    if (passwordCheckInput.value === '') {
        passwordCheckErrMsg.textContent = '* 비밀번호를 입력해 주세요.'
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    } else if (passwordCheckInput.value !== passwordInput.value) {
        passwordCheckErrMsg.textContent = '* 비밀번호에 입력된 값과 다릅니다.';
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    } else {
        passwordCheckErrMsg.style.display = 'none';
    }

    // 회원가입 성공
    if (check) {
        alert('PETCHCK 가입을 축하합니다!');
        location.href = "login.html";
    } else {
        alert('필수 입력란을 모두 입력해주세요!');
    }

}

setInterval(() => {
    let userIdInput = document.querySelector('#userid');
    let passwordInput = document.querySelector('#password');
    let passwordCheckInput = document.querySelector('#password-check');

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

    // 비밀번호 확인 입력 여부
    let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
    if (passwordCheckInput.value === '') {
        passwordCheckErrMsg.textContent = '* 비밀번호를 입력해 주세요.'
        check = false;
    } else if (passwordCheckInput.value !== passwordInput.value) {
        passwordCheckErrMsg.textContent = '* 비밀번호에 입력된 값과 다릅니다.';
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    } else {
        passwordCheckErrMsg.style.display = 'none';
    }
}, 1000);



const idCheck = () => {
    let userIdInput = document.querySelector('#userid');

    let check = true;

    // 아이디 입력 여부
    let userIdErrMsg = document.querySelector('#userid-err-msg');
    if (userIdInput.value === '') {
        alert('아이디를 입력해 주세요.');
        check = false;
    } else {
        alert('사용 가능한 아이디 입니다.');
    };
};

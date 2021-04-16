

const validInputsForm = (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if (!firstName.value.trim()) {
        setClassInput(firstName, 'First Name cannot be empty');
    } else if (!/^[a-zA-z]{2,10}$/.test(firstName.value.trim())) {
        setClassInput(firstName, 'First Name need to have more than 2 and less than 10 letters');
    } else {
        setClassInput(firstName, '', 'success');
    }

    if (!lastName.value.trim()) {
        setClassInput(lastName, 'Last Name cannot be empty');
    } else if (!/^[a-zA-z]{2,10}$/.test(lastName.value.trim())) {
        setClassInput(lastName, 'Last Name need to have more than 2 and less than 10 letters');
    } else {
        setClassInput(lastName, '', 'success');
    }


    if (!email.value.trim()) {
        setClassInput(email, 'Look like this is not an email');
    } else if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value.trim())) {
        setClassInput(email, 'Look like');
    } else {
        setClassInput(email, '', 'success');
    }

    if (!password.value.trim()) {
        setClassInput(password, 'Password cannot be empty');
    } else if (!/^[a-z0-9_-]{6,18}$/.test(password.value.trim())) {
        setClassInput(password, 'Password cannot');
    } else {
        setClassInput(password, '', 'success');
    }
}

const setClassInput = (input, message = 'error', classInput = 'error') => {

    if (!input.classList.contains(classInput)) {
        input.classList.remove(...input.classList);
        input.classList.add(classInput);
        input.parentElement.querySelector('small').textContent = message;
    }
}

const form = document.querySelector('#createAccountForm');
form.addEventListener('submit', validInputsForm);
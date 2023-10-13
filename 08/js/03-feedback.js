import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(handleFormInput, 500));
form.addEventListener('submit', handleSubmit);

loadFormData();

function handleFormInput() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedFormData = localStorage.getItem('feedback-form-state');

    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function clearFormData() {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
}

function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    console.log(formData);

    clearFormData();
}

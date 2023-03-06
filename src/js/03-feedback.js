// Import 

import throttle from 'lodash.throttle';
import resetStorage from './common';

// Data

refs = {
    key: 'feedback-form-state',
    a: { "email": "", "message": "" },
    time2: 500,
    form: document.querySelector('form.feedback-form'),
    formEmail: document.querySelector('input[name="email"]'),
    formMessage: document.querySelector('textarea[name="message"]')
};

// Functions

function onInput(event) {

    // console.log("Run onInput()");

    let feedbackFormState = JSON.parse(localStorage.getItem(refs.key));

    // console.log("feedbackFormState: ");
    // console.log(feedbackFormState);

    if (event.target.name === "email") {
        feedbackFormState.email = event.target.value;
        // console.log("In email");
        // console.log(feedbackFormState);
    }

    if (event.target.name === "message") {
        feedbackFormState.message = event.target.value;
        // console.log("In message");
        // console.log(feedbackFormState);
    }

    localStorage.setItem(refs.key, JSON.stringify(feedbackFormState));
    // console.log("In storage:");
    // console.log(localStorage.getItem(key));
}

function onSubmit(event) {
    event.preventDefault();
    // console.log("Run onSubmit()");

    if (refs.formEmail.value === "" || refs.formMessage.value === "") {
        alert("Error");
        return 0;
    }

    const feedbackFormState = localStorage.getItem(refs.key);
    console.log(`Submit: ${feedbackFormState}`);

    refs.formEmail.value = "";
    refs.formMessage.value = "";

    localStorage.setItem(refs.key, JSON.stringify(refs.a));

    return 1;
}

function resetForm(key) {
    refs.formEmail.value = JSON.parse(localStorage.getItem(key)).email;
    refs.formMessage.value = JSON.parse(localStorage.getItem(key)).message;
}

// Main

if (!localStorage.getItem(refs.key)) resetStorage(refs.key, refs.a);
else resetForm(refs.key);

refs.form.addEventListener('input', throttle(onInput, refs.time2));
refs.form.addEventListener('submit', onSubmit);


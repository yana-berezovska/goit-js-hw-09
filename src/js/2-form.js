const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const savedForm = localStorage.getItem(localStorageKey);
if (savedForm !== null) {
  const parsedForm = JSON.parse(savedForm);
  form.elements.message.value = parsedForm.message ?? '';
  form.elements.email.value = parsedForm.email ?? '';
  formData.email = parsedForm.email;
  formData.message = parsedForm.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', evnt => {
  evnt.preventDefault();
  const elements = evnt.target.elements;

  if (elements.email.value === '' || elements.message.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});

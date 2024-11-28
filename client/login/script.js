const form = document.querySelector('form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit-button');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!firstName) {
    alert('First name is required.');
    return;
  }
  if (firstName.length <= 1) {
    alert('First name must have more than 1 character.');
    return;
  }

  if (!lastName) {
    alert('Last name is required.');
    return;
  }

  if (!email) {
    alert('Email is required.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!username) {
    alert('Username is required.');
    return;
  }

  if (username.length < 4) {
    alert('Username must be at least 4 characters long.');
    return;
  }

  if (!password) {
    alert('Password is required.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const data = {
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword,
  };

  submitButton.disabled = true; // Disable during submission
  submitButton.textContent = 'Registering...'; // Button text

  try {
    const response = await fetch('http://localhost:3000/api/post/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Successfully registered!');
      submitButton.textContent = 'Registered'; // Success
      submitButton.disabled = false;
    } else {
      alert(result.message || 'Registration failed. Please try again.');
      submitButton.textContent = 'Register'; // Revert
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
    submitButton.textContent = 'Register'; // Revert
  }
});

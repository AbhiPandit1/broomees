document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sign-up-form');
  const submitButton = document.getElementById('submit-button');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
      alert('Please fill in both username and password.');
      return;
    }

    submitButton.disabled = true; // Disable during submission
    submitButton.textContent = 'Registering...'; // Button text

    try {
      const response = await fetch('http://localhost:3000/api/login/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Successfully registered!');
        submitButton.textContent = 'Registered'; // Success
        submitButton.disabled = false;
      } else {
        alert('Registration failed. Please try again.');
        submitButton.textContent = 'Register'; // Revert
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      submitButton.textContent = 'Register'; // Revert
    }
  });
});

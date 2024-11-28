import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const api = 'https://assignment-jyep.onrender.com/api/post/user';

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    setIsSubmitting(true); // Disable button during submission

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Successfully registered!');
        setIsSubmitting(false); // Reset after successful submission
      } else {
        alert(result.message || 'Registration failed. Please try again.');
        setIsSubmitting(false); // Reset after failure
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setIsSubmitting(false); // Reset after error
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="left-section">
          <img
            src="https://res.cloudinary.com/dzy51cqxa/image/upload/v1732786604/mountains_lpli7d.jpg"
            className="img-container"
            alt="mountain"
          />

          <div className="black-box">
            <div className="h-container">
              <h1>Altitude Air</h1>
              <div className="underline">gggg</div>
            </div>
            <p>
              We promise to ensure that your well-being is taken care of while
              traveling with us. Boasting top-in-class fleet inventory and a
              5-star approval for our in-flight experience. You know you're
              getting the best from altitude with no attitude.
            </p>
          </div>
        </div>

        <div className="right-section">
          <div className="button-signin">
            <Link to="/signin">
              <button className="sign-button">Sign In</button>
            </Link>
          </div>
          <h1>Explore and experience</h1>
          <p>Get into your most comfortable journey yet. All the way up.</p>
          <form onSubmit={handleSubmit}>
            <div className="name-input">
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="n-input"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                id="last-name"
                name="last-name"
                className="n-input"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              id="username"
              name="username"
              className="input"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="get-started-button"
              id="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Get Started'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

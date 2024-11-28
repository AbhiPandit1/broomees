import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Get Started');

  const api = 'https://assignment-jyep.onrender.com/api/login/user';

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation
    if (!username || !password) {
      alert('Please fill in both username and password.');
      return;
    }

    setIsSubmitting(true);
    setButtonText('Registering...');

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Successfully logged in!');
        setButtonText('Logged In');
      } else {
        alert('Login failed. Please try again.');
        setButtonText('Get Started');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setButtonText('Get Started');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="left-section">
          <img
            src="https://res.cloudinary.com/dzy51cqxa/image/upload/v1732786604/mountains_lpli7d.jpg"
            className="img-container"
            alt="Scenic view"
          />
          <div className="black-box">
            <div className="h-container">
              <h1>Altitude Air</h1>
              <div className="underline">gggg</div>
            </div>
            <p>
              We promise to ensure that your well-being is taken care of while
              traveling with us. Boasting top-in-class fleet inventory and a 5
              star approval for our in-flight experience. You know you're
              getting the best from altitude with no attitude.
            </p>
          </div>
        </div>

        <div className="right-section">
          <div className="button-signin">
            <Link to="/login">
              <button className="sign-button">Log In</button>
            </Link>
          </div>

          <h1 id="form-title">Explore and experience</h1>
          <p>Get into your most comfortable journey yet. All the way up.</p>

          {/* Sign In Form */}
          <form
            id="sign-up-form"
            className="form-container"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="get-started-button"
              id="submit-button"
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

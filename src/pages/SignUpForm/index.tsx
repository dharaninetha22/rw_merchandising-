import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import CustomInput from '../../components/Inputs/CustomInput';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate
import { blog_logo } from '../../assets';

interface SignUpFormProps {
  onClose: () => void;
}

const SignUpForm: React.FC <SignUpFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();  // Initialize the navigate hook

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  // Validate form fields
  const validateForm = (): boolean => {
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    // Simulate sign-up API call (replace with actual sign-up logic)
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com') {
        // Simulate successful sign-up
        alert('Sign Up Successful!');
        navigate('/home');  // Redirect to dashboard on successful signup
      } else {
        // Simulate failed sign-up
        setError('An error occurred. Please try again.');
      }
    }, 1000);
  };

  return (
    <Container maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full height of the viewport
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: 3,
          // border: '1px solid #ccc',
          // borderRadius: 3,
          // boxShadow: 3, 
        }}
      >
           <img
          src={blog_logo} // Replace with Myntra's logo or any image URL
          alt="Logo"
          style={{ marginBottom: '20px',height:'80px' }}
        />
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#0F63A5', mb: 2 }}>
          Create Your Account
        </Typography>

        {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CustomInput
            placeholder="Full Name"
            fullWidth
            name="name"
            value={name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <CustomInput
            placeholder="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <CustomInput
            placeholder="Password"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <CustomInput
            placeholder="Confirm Password"
            type="password"
            fullWidth
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>

        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;

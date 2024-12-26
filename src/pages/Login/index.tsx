import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert, Link } from '@mui/material';
import { shirt, blog_logo } from "../../assets"; // Replace with your actual path to the logo
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Inputs/CustomInput';


interface LoginProps {
  onClose: () => void;
}
const MyntraLoginForm: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change with event typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validate form fields
  const validateForm = (): boolean => {
    if (!email || !password) {
      setError('All fields are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  // Handle form submission with event typing
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    // Simulate login API call (replace with actual login logic)
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password123') {
        // Simulate successful login
        alert('Login Successful!');
      } else {
        // Simulate failed login
        setError('Invalid credentials. Please try again.');
      }
    }, 2000);
  };

  return (
    <Container
      maxWidth="xs"
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
          // backgroundColor: 'white', 
          // boxShadow: 3, 
        }}
      >
        {/* Image on top, similar to Myntra's design */}
        <img
          src={blog_logo} // Replace with Myntra's logo or any image URL
          alt="Logo"
          style={{ marginBottom: '20px', width: '120px' }}
        />

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#0F63A5',
            mb: 2,
            fontSize: '1.5rem',
          }}
        >
          Login to Your Account
        </Typography>

        {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CustomInput
            placeholder="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleChange}
            required
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                backgroundColor: '#f7f7f7', // Light background for the input fields
                borderRadius: 2,
              },
            }}
            size="small"
            type="email"
          />
          <CustomInput
            placeholder="Password"
            type="password"
            fullWidth
            name="password"
            value={password}
            onChange={handleChange}
            required
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                backgroundColor: '#f7f7f7', 
                borderRadius: 2,
              },
            }}
            size="small"
          />
            <Typography  variant="body2" 
            onClick={()=>navigate('/forgotpassword')}
                sx={{ color: '#0F63A5', fontSize: '0.875rem' ,display:'flex',justifyContent:'flex-end',cursor:'pointer'}}>
                 Forgot Password?
            </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: '#0F63A5',
              '&:hover': {
                backgroundColor: '#084C75', // Darker hover effect
              },
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>

          <Typography variant="caption" color="textSecondary" sx={{ fontSize: '0.875rem' ,}}>
            Don't have an account? <Link href="/signup" sx={{ color: '#0F63A5' }}>Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MyntraLoginForm;

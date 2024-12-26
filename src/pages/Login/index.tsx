import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert, Link, Modal, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Inputs/CustomInput';
import ForgotPassword from '../ForgotPassword'; // Correct path to your ForgotPassword component
import { Close as CloseIcon } from '@mui/icons-material';
import SignUpForm from '../SignUpForm';

interface LoginProps {
  onClose: () => void;
}

const MyntraLoginForm: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false); // Forgot Password Modal State
  const [openSignUp, setOpenSignUp] = useState(false); // Sign Up Modal State
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password123') {
        alert('Login Successful!');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 2000);
  };

  const handleOpenForgotPassword = () => {
    setOpenForgotPassword(true); // Open Forgot Password Modal
  };

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false); // Close Forgot Password Modal
  };

  const handleOpenSignUp = () => {
    setOpenSignUp(true); // Open Sign Up Modal
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false); // Close Sign Up Modal
  };

  return (
    <>
      {/* Login Form */}
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
                  backgroundColor: '#f7f7f7',
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
            <Typography
              variant="body2"
              onClick={handleOpenForgotPassword}
              sx={{
                color: '#0F63A5',
                fontSize: '0.875rem',
                display: 'flex',
                justifyContent: 'flex-end',
                cursor: 'pointer',
              }}
            >
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
                  backgroundColor: '#084C75',
                },
              }}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
            <Typography variant="caption" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
              Don't have an account?{' '}
              <Link
                onClick={handleOpenSignUp}
                sx={{ color: '#0F63A5', cursor: 'pointer' }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Forgot Password Modal */}
      <Modal
        open={openForgotPassword}
        onClose={handleCloseForgotPassword}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the modal
            width: 400, // Modal size
            height: 400,
            backgroundColor: '#fff',
            borderRadius: 2,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
          }}
        >
          <IconButton
            onClick={handleCloseForgotPassword}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#0F63A5',
            }}
          >
            <CloseIcon />
          </IconButton>
          <ForgotPassword onClose={handleCloseForgotPassword} />
        </Box>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        open={openSignUp}
        onClose={handleCloseSignUp}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the modal
            width: 400, // Modal size
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 2,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
          }}
        >
          <IconButton
            onClick={handleCloseSignUp}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#0F63A5',
            }}
          >
            <CloseIcon />
          </IconButton>
          <SignUpForm onClose={handleCloseSignUp} />
        </Box>
      </Modal>
    </>
  );
};

export default MyntraLoginForm;

import React, { useState } from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../components/Inputs/CustomInput';
import { blog_logo } from '../../assets';

interface ForgotPasswordProps {
  onClose: () => void;
}

const ForgotPasswordForm: React.FC <ForgotPasswordProps> = ({ onClose })=> {
  const [activeStep, setActiveStep] = useState(0); // Tracks the active step
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // For navigation

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  // Handle OTP change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value);

  // Handle new password change
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);

  // Handle confirm password change
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  // Show toast notifications
  const showError = (message: string) => toast.error(message);
  const showSuccess = (message: string) => toast.success(message);

  // Handle form submission based on the active step
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (activeStep === 0) {
      if (!email) {
        showError('Email is required');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        showError('Please enter a valid email address');
        return;
      }

      setLoading(true);
      // Simulate email sent (replace with actual API call)
      setTimeout(() => {
        setLoading(false);
        showSuccess('A verification code has been sent to your email.');
        setActiveStep(1); // Move to OTP verification step
      }, 2000);
    } else if (activeStep === 1) {
      if (!otp) {
        showError('OTP is required');
        return;
      }

      setLoading(true);
      // Simulate OTP verification (replace with actual API call)
      setTimeout(() => {
        setLoading(false);
        if (otp === '1234') {
          showSuccess('OTP verified successfully!');
          setActiveStep(2); // Move to create new password step
        } else {
          showError('Invalid OTP. Please try again.');
        }
      }, 2000);
    } else if (activeStep === 2) {
      if (!newPassword) {
        showError('Password is required');
        return;
      }
      if (newPassword.length < 6) {
        showError('Password must be at least 6 characters');
        return;
      }
      if (newPassword !== confirmPassword) {
        showError('Passwords do not match');
        return;
      }

      setLoading(true);
      // Simulate password reset (replace with actual API call)
      setTimeout(() => {
        setLoading(false);
        showSuccess('Your password has been reset successfully.');
        // Navigate to the dashboard
        navigate('/home'); // Replace with the correct route for your dashboard
      }, 2000);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <ToastContainer position="top-center" autoClose={3000} />
      <Box
        sx={{
          width: '100%',
          padding: 3,
          // backgroundColor: 'white',
          // borderRadius: 2,
          // boxShadow: 3,
        }}
      >
        <img
          src={blog_logo} // Replace with Myntra's logo or any image URL
          alt="Logo"
          style={{ marginBottom: '20px',height:'80px' }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: '#0F63A5', mb: 2 }}
        >
          Forgot Password
        </Typography>
        

        <Box sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <>
                <CustomInput
                  placeholder="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  required
                  sx={{ mb: 2 }}
                  size="small"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  disabled={loading}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </Button>
              </>
            )}
            {activeStep === 1 && (
              <>
                <CustomInput
                  placeholder="Enter OTP"
                  type="text"
                  fullWidth
                  value={otp}
                  onChange={handleOtpChange}
                  required
                  sx={{ mb: 2 }}
                  size="small"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  disabled={loading}
                >
                  {loading ? 'Verifying OTP...' : 'Verify OTP'}
                </Button>
              </>
            )}
            {activeStep === 2 && (
              <>
                <CustomInput
                  placeholder="New Password"
                  type="password"
                  fullWidth
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                  sx={{ mb: 2 }}
                  size="small"
                />
                <CustomInput
                  placeholder="Confirm Password"
                  type="password"
                  fullWidth
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  sx={{ mb: 2 }}
                  size="small"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  disabled={loading}
                >
                  {loading ? 'Resetting Password...' : 'Reset Password'}
                </Button>
              </>
            )}
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPasswordForm;

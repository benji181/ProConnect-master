import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail 
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResetMessage('');
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setResetMessage('');
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    setResetMessage('');
    if (!email) {
      setError('Please enter your email address to reset your password.');
      return;
    }
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setResetMessage('Password reset email sent! Please check your inbox . also check your spam mails');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Log In to ProConnect
          </Typography>

          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          {resetMessage && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{resetMessage}</Alert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              label="Email"
              type="email"
              required
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <TextField
              label="Password"
              type="password"
              required
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              Log In
            </Button>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={handleGoogleSignIn}
            disabled={loading}
            sx={{ mt: 2 }}
          >
            Sign In with Google
          </Button>

          <Button
            fullWidth
            variant="text"
            onClick={handlePasswordReset}
            disabled={loading}
            sx={{ mt: 1 }}
          >
            Forgot Password?
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <RouterLink to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Sign Up
            </RouterLink>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Login;

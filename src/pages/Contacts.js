import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ success: false, message: 'Please enter a valid email address.' });
      return;
    }

    const SERVICE_ID = 'service_e819alg';
    const TEMPLATE_ID = 'template_zmb0s3r';
    const USER_ID = 'qr248R8th-zCfwpb7';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <>
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography mb={3}>Connect with us and we'll respond as soon as possible.</Typography>

      {status.message && (
        <Alert severity={status.success ? 'success' : 'error'} sx={{ mb: 2 }}>
          {status.message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Send Message
        </Button>
      </Box>
    </Container>
    <Footer/>
  </>
  );
};

export default ContactPage;

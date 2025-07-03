import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Footer from '../components/Footer';

const NotFound = () => (
  <Container>
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Box>
    <Footer/>
  </Container>
);

export default NotFound;

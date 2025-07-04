import React from 'react';
import { Box, Container, Grid, Link, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      mt: 10,
      backgroundColor: 'grey.800', 
      color: 'white', 
      py: isMobile ? 3 : 4, 
      width: '100%', 
    }}>
      <Container maxWidth="md">
        <Grid container spacing={isMobile ? 2 : 4} justifyContent="space-between">
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <Link component={RouterLink} to="/Jobs" underline="hover" display="block" mb={0.5} color="inherit">
              Jobs
            </Link>
            <Link component={RouterLink} to="/companies" underline="hover" display="block" mb={0.5} color="inherit">
              Companies
            </Link>
            <Link component={RouterLink} to="/salaries" underline="hover" display="block" mb={0.5} color="inherit">
              Salaries
            </Link>
            <Link component={RouterLink} to="/for-employers" underline="hover" display="block" mb={0.5} color="inherit">
              For Employers
            </Link>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Sign In
            </Typography>
            <Typography variant="body2" color="grey.400">
              Your work people are here
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
          <Link component={RouterLink} to="/AboutUs" underline="hover" display="block" mb={0.5} color="inherit">
             About Us / Press
          </Link>
            <Link component={RouterLink} to="/awards" underline="hover" display="block" mb={0.5} color="inherit">
              Awards
            </Link>
            <Link component={RouterLink} to="/blog" underline="hover" display="block" mb={0.5} color="inherit">
              Blog
            </Link>
            <Link component={RouterLink} to="/research" underline="hover" display="block" mb={0.5} color="inherit">
              Research
            </Link>
            <Link component={RouterLink} to="/Contactus" underline="hover" display="block" mb={0.5} color="inherit">
              Contact Us
            </Link>
          </Grid>

          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Link component={RouterLink} to="/help" underline="hover" display="block" mb={0.5} color="inherit">
              Help
            </Link>
            <Link component={RouterLink} to="/guidelines" underline="hover" display="block" mb={0.5} color="inherit">
              Guidelines
            </Link>
            <Link component={RouterLink} to="/terms" underline="hover" display="block" mb={0.5} color="inherit">
              Terms of Use
            </Link>
            <Link component={RouterLink} to="/privacy" underline="hover" display="block" mb={0.5} color="inherit">
              Privacy & Ad Choices
            </Link>
            <Link component={RouterLink} to="/cookie-consent" underline="hover" display="block" mb={0.5} color="inherit">
              Cookie Consent Tool
            </Link>
            <Link component={RouterLink} to="/security" underline="hover" display="block" mb={0.5} color="inherit">
              Security
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: isMobile ? 2 : 4, backgroundColor: 'grey.600' }} />

        <Typography variant="body2" color="grey.400" align="center">
          &copy; 2025 ProConnect. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

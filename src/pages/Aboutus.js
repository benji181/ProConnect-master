import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/login');
  };

  // Common styles for body text
  const bodyTextStyles = {
    fontSize: '2.0rem',   // Bigger font size
    fontWeight: 500,       // Medium weight for readability
    lineHeight: 1.8,       // More line spacing
    letterSpacing: '0.02em',
    color: '#333',         // Darker text for contrast
  };

  // Common styles for headings
  const headingStyles = {
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    color: '#111',
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontSize: '1.3rem', fontWeight: 600 }}>
          About Us / Press
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ ...headingStyles, fontSize: '3rem' }}>
          Making worklife better
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          So, what is ProConnect? We’re a thriving community for workplace conversations, driven by a simple mission to make worklife better, together.
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          But the way we do it? That’s not so simple.
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          Every day, we’re inspired to build a healthier, more transparent work community for all. Through the products we make and the communities we create, we’re breaking down barriers that lead to discrimination, pay gaps and toxic work environments. Together, we’re fostering a world where people have the support and resources they need to make the most of their worklife.
        </Typography>

        <Divider sx={{ my: 8 }} />

        {/* What we do */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem' }}>
          What we do
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          Wherever you are on your career journey, ProConnect makes it easier for workers and companies to find the perfect match.
        </Typography>

        <Grid container spacing={6} sx={{ mb: 8 }}>
          {/* Job seekers */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ ...headingStyles, fontSize: '1.8rem' }}>
              For job seekers
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              We simplify your search, so you can apply for jobs with confidence. Filter millions of jobs and ratings, talk to professionals, and get smart on salary—then apply with ease.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleJoinClick}
              sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Join ProConnect
            </Button>
          </Grid>

          {/* Employees */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ ...headingStyles, fontSize: '1.8rem' }}>
              For employees
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              We amplify your voice, so you can enhance your workplace experience. Leave reviews, search and post salaries, and join candid conversations about life at work.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleJoinClick}
              sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Join ProConnect
            </Button>
          </Grid>

          {/* Employers */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ ...headingStyles, fontSize: '1.8rem' }}>
              For employers
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              We give you a place to shape and share your story, so you can find and keep the best talent. Post jobs, respond to reviews, and gain insights to shape your messaging.
            </Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              onClick={handleJoinClick}
              sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Create Company Profile
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Future built on family */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem' }}>
          A future built on family
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          The ProConnect community includes our family of companies. Driven by shared goals, we’re redefining how the working world comes together and closing the gap between employers and employees. With each new experience we deliver, we’re creating more and better ways to get people and companies talking—and listening.
        </Typography>

        {/* ProConnect by the numbers */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem', mt: 6 }}>
          ProConnect by the numbers
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          Since 2007, ProConnect has been a proud champion of transparency in the workplace. Today, our mission guides us in serving a global community of millions.
        </Typography>

        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" fontWeight="bold" color="primary" sx={{ fontSize: '3rem' }}>
              63M+
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '1.25rem' }}>
              unique monthly visitors
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" fontWeight="bold" color="primary" sx={{ fontSize: '3rem' }}>
              212M+
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '1.25rem' }}>
              reviews, salaries & insights
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" fontWeight="bold" color="primary" sx={{ fontSize: '3rem' }}>
              2.5M
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '1.25rem' }}>
              employer profiles
            </Typography>
          </Grid>
        </Grid>

        {/* A world of difference */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem' }}>
          A world of difference
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          Our growing community stretches across 20 countries, where companies and talent can tap into ProConnect’s market-specific insights to find the right fit.
        </Typography>

        {/* Leadership */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem', mt: 6 }}>
          Look who’s boss
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          We like to think we have the best team in the business. And the folks at the top? We think they’re pretty incredible too. It takes strength, tenacity, and a healthy bold streak to run a company as dynamic as ProConnect. Fortunately, we’ve found just the folks for the job.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 6, fontSize: '1.25rem', fontWeight: 'bold' }}>
          Meet our leaders
        </Button>

        {/* Careers */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem' }}>
          Work at ProConnect
        </Typography>
        <Typography variant="body1" paragraph sx={bodyTextStyles}>
          We’re always looking for good people. Innovative people. Folks with grit who embrace transparency, and believe a job should love you back. If you want to get in on a 100% remote company that’s transforming the workplace and redefining what community can do, we should talk!
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mb: 6, fontSize: '1.25rem', fontWeight: 'bold' }}>
          Explore careers at ProConnect
        </Button>

        {/* News you can use */}
        <Typography variant="h3" gutterBottom sx={{ ...headingStyles, fontSize: '2.5rem' }}>
          News you can use
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.8rem' }}>
              From the newsroom
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              Check out our latest press releases and media appearances, or search our archive.
            </Typography>
            <Button variant="text" color="primary" sx={{ fontSize: '1.1rem' }}>
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.8rem' }}>
              From the blog
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              Whether you’re interviewing, asking for a raise, or making a big career move, our blog has the tips and tricks you need to shine.
            </Typography>
            <Button variant="text" color="primary" sx={{ fontSize: '1.1rem' }}>
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.8rem' }}>
              From our research
            </Typography>
            <Typography variant="body1" paragraph sx={bodyTextStyles}>
              Get the latest insights on today’s labor market from ProConnect’s leading economists and data scientists.
            </Typography>
            <Button variant="text" color="primary" sx={{ fontSize: '1.1rem' }}>
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, TextField, Button, Container, useMediaQuery, useTheme 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';  
import Footer from '../components/Footer'

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSearch = () => {
    if (!user) {
      // Redirect unauthenticated users to login
      navigate('/login');
      return;
    }

    const params = new URLSearchParams();
    if (jobTitle.trim()) params.append('title', jobTitle.trim());
    if (location.trim()) params.append('location', location.trim());

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container 
        maxWidth="md" 
        sx={{ 
          textAlign: 'center', 
          marginTop: isMobile ? 4 : 8, 
          marginBottom: isMobile ? 4 : 8, 
          flexGrow: 1,
          px: isMobile ? 2 : 3 
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"} gutterBottom>
          Find Your Dream Job and Build Skills with ProConnect
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"} color="text.secondary" gutterBottom>
          Connecting Nigerian youth with local employers and affordable skill training.
        </Typography>

        <Box sx={{ 
          mt: 4, 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center', 
          gap: 2 
        }}>
          <TextField 
            label="Job title, skills, or company" 
            variant="outlined" 
            sx={{ flex: 1 }} 
            size={isMobile ? "small" : "medium"}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <TextField 
            label="Location" 
            variant="outlined" 
            sx={{ width: isMobile ? '100%' : 200 }} 
            size={isMobile ? "small" : "medium"}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button 
            variant="contained" 
            color="success" 
            size={isMobile ? "medium" : "large"}
            fullWidth={isMobile}
            onClick={handleSearch}
          >
            Search Jobs
          </Button>
        </Box>

        <Box sx={{ mt: isMobile ? 6 : 10, textAlign: isMobile ? 'center' : 'left' }}>
          <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
            Your work people are here
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Get ahead with ProConnect. We're serving up trusted insights and anonymous conversation, so you'll have the goods you need to succeed.
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            size={isMobile ? "medium" : "large"}
            fullWidth={isMobile}
            onClick={() => {
              if (!user) {
                navigate('/login');
              } else {
                navigate('/jobs');
              }
            }}
          >
            Join your work community
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Box} from '@mui/material';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Courses from './pages/Courses';
import ResumeBuilder from './pages/ResumeBuilder';
import InterviewTips from './pages/InterviewTips';
import Login from './pages/Login';
import Signup from './pages/signup';
import Profile from './pages/Profile';
import NavigationBar from './components/NavigationBar'; // Import the new component
import AboutUs from './pages/Aboutus';
import NotFound from './pages/NotFound';
import JobDetails from './components/JobDetails';
import Contactus from './pages/Contacts';

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Use the new navigation bar */}

      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/interview-tips" element={<InterviewTips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contactus" element={<Contactus />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

        </Routes>
      </Box>
    </Router>
  );
}

export default App;

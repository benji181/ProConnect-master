import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';  // Import Footer

const mockJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Nigeria', location: 'Lagos' },
  { id: 2, title: 'Data Analyst', company: 'DataCorp', location: 'Abuja' },
  { id: 3, title: 'UI/UX Designer', company: 'Creative Minds', location: 'Port Harcourt' },
];

const Jobs = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const titleQuery = params.get('title')?.toLowerCase() || '';
    const locationQuery = params.get('location')?.toLowerCase() || '';

    const filteredJobs = mockJobs.filter(job => {
      const matchesTitle = job.title.toLowerCase().includes(titleQuery) || job.company.toLowerCase().includes(titleQuery);
      const matchesLocation = job.location.toLowerCase().includes(locationQuery);
      return matchesTitle && matchesLocation;
    });

    setJobs(filteredJobs);
  }, [location.search]);

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Job Listings</Typography>
        {jobs.length === 0 ? (
          <Typography>No jobs found matching your criteria.</Typography>
        ) : (
          jobs.map(job => <JobCard key={job.id} job={job} />)
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Jobs;

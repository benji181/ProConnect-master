import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Button, Card, CardContent, Dialog,
  DialogTitle, DialogContent, DialogActions, Link, Box
} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigate = useNavigate();
  const locationHook = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(locationHook.search);
  const titleFilter = queryParams.get('title')?.toLowerCase() || '';
  const locationFilter = queryParams.get('location')?.toLowerCase() || '';

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const jobsRef = collection(db, 'jobs');
        const snapshot = await getDocs(jobsRef);
        let jobsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Filter jobs based on title and location query params
        if (titleFilter || locationFilter) {
          jobsList = jobsList.filter(job => {
            const titleMatch = titleFilter
              ? (job.title?.toLowerCase().includes(titleFilter) ||
                 job.skills?.toLowerCase().includes(titleFilter) ||
                 job.company?.toLowerCase().includes(titleFilter))
              : true;

            const locationMatch = locationFilter
              ? job.location?.toLowerCase().includes(locationFilter)
              : true;

            return titleMatch && locationMatch;
          });
        }

        setJobs(jobsList);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      setLoading(false);
    };

    fetchJobs();
  }, [titleFilter, locationFilter]);

  const handleSeeMore = (job) => {
    navigate(`/jobs/${job.id}`);
  };

  const handleClose = () => setSelectedJob(null);

  const handleApply = (job) => {
    if (job.applicationMethod === 'email') {
      window.location.href = `mailto:${job.applicationContact}`;
    } else if (job.applicationMethod === 'website') {
      window.open(job.applicationContact, '_blank');
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Job Listings</Typography>

        {loading ? (
          <Typography>Loading jobs... Please be patient.</Typography>
        ) : jobs.length === 0 ? (
          <Typography>No jobs match your search criteria.</Typography>
        ) : (
          jobs.map(job => (
            <Card key={job.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h4" fontWeight="bold">{job.title}</Typography>
                <Typography fontWeight="bold">{job.company} — {job.location}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {job.employmentType} | Sector: {job.sector}
                </Typography>
                <Box mt={1}>
                  <Button variant="outlined" onClick={() => handleSeeMore(job)} sx={{ mr: 1 }}>
                    See More
                  </Button>
                  <Button variant="contained" onClick={() => handleApply(job)}>
                    Apply
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Container>

      {selectedJob && (
        <Dialog open={Boolean(selectedJob)} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>{selectedJob.title} at {selectedJob.company}</DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{selectedJob.description}</Typography>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
              Employment Type: {selectedJob.employmentType}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
              Sector: {selectedJob.sector}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Qualifications & Experience:</strong><br />
              {selectedJob.qualifications}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Preferred Skills:</strong><br />
              {selectedJob.preferredSkills}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
              Application Method: {selectedJob.applicationMethod === 'email' ? 'Send email to' : 'Apply on website'}
            </Typography>
            {selectedJob.applicationMethod === 'email' ? (
              <Link href={`mailto:${selectedJob.applicationContact}`} underline="hover">
                {selectedJob.applicationContact}
              </Link>
            ) : (
              <Link href={selectedJob.applicationContact} target="_blank" rel="noopener noreferrer" underline="hover">
                {selectedJob.applicationContact}
              </Link>
            )}
            <Typography variant="caption" sx={{ display: 'block', mt: 3 }}>
              Posted on: {selectedJob.postedDate} | Application closes: {selectedJob.applicationClosingDate}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      <Footer />
    </>
  );
};

export default Jobs;

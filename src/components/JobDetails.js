import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Button, Link, Box
} from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        const jobRef = doc(db, 'jobs', id);
        const jobSnap = await getDoc(jobRef);
        if (jobSnap.exists()) {
          setJob(jobSnap.data());
        } else {
          setJob(null);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
        setJob(null);
      }
      setLoading(false);
    };

    fetchJob();
  }, [id]);

  const handleApply = () => {
    if (!job) return;
    if (job.applicationMethod === 'email') {
      window.location.href = `mailto:${job.applicationContact}`;
    } else if (job.applicationMethod === 'website') {
      window.open(job.applicationContact, '_blank');
    }
  };

  if (loading) return <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>Loading job details...</Typography>;
  if (!job) return <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>Job not found.</Typography>;

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Button component={RouterLink} to="/jobs" sx={{ mb: 3, fontSize: '1.1rem' }}>
          &larr; Back to Job Listings
        </Button>

        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ lineHeight: 1.2 }}>
          {job.title}
        </Typography>

        <Typography variant="h5" fontWeight="medium" gutterBottom sx={{ mb: 1 }}>
          {job.company} — {job.location}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: '1.1rem', mb: 4 }}>
          {job.employmentType} | Sector: {job.sector}
        </Typography>

        <Box sx={{ whiteSpace: 'pre-line', mb: 5 }}>
          <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
            {job.description}
          </Typography>
        </Box>

        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
          Qualifications & Experience
        </Typography>

        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.15rem', lineHeight: 1.7, mb: 5 }}>
          {job.qualifications || 'N/A'}
        </Typography>

        {job.preferredSkills && (
          <>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
              Preferred Skills
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.15rem', lineHeight: 1.7, mb: 5 }}>
              {job.preferredSkills}
            </Typography>
          </>
        )}
         
         <Typography variant="body1" color="text.primary" sx={{ mt: 1 ,mb :2, fontSize: '1.50rem', fontWeight :'bold'
         }}>
           Salary: {job.salary || 'Competitive Salary'}
         </Typography>


        <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.1rem', mb: 2 }}>
          Application Method: {job.applicationMethod === 'email' ? 'Send email to' : 'Apply on website'}
        </Typography>


        {job.applicationMethod === 'email' ? (
          <Link
            href={`mailto:${job.applicationContact}`}
            underline="hover"
            variant="body1"
            sx={{ mb: 4, display: 'block', fontSize: '1.15rem' }}
          >
            {job.applicationContact}
          </Link>
        ) : (
          <Link
            href={job.applicationContact}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            variant="body1"
            sx={{ mb: 4, display: 'block', fontSize: '1.15rem' }}
          >
            {job.applicationContact}
          </Link>
        )}

        <Button variant="contained" color="primary" size="large" onClick={handleApply} sx={{ fontSize: '1.2rem', py: 1.5 }}>
          Apply Now
        </Button>

        <Typography variant="caption" display="block" sx={{ mt: 6, fontSize: '1rem', color: 'text.secondary' }}>
          Posted on: {job.postedDate} | Application closes: {job.applicationClosingDate}
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default JobDetails;

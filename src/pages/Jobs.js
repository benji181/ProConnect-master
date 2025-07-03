import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';

const Jobs = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for add/edit dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({ title: '', company: '', location: '' });

  // Fetch jobs from Firestore and filter based on query params
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams(location.search);
        const titleQuery = params.get('title')?.toLowerCase() || '';
        const locationQuery = params.get('location')?.toLowerCase() || '';

        const jobsRef = collection(db, 'jobs');
        const snapshot = await getDocs(jobsRef);
        let jobsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (titleQuery || locationQuery) {
          jobsList = jobsList.filter(job => {
            const matchesTitle =
              job.title.toLowerCase().includes(titleQuery) ||
              job.company.toLowerCase().includes(titleQuery);
            const matchesLocation = job.location.toLowerCase().includes(locationQuery);
            return matchesTitle && matchesLocation;
          });
        }

        setJobs(jobsList);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      setLoading(false);
    };

    fetchJobs();
  }, [location.search]);

  // Open dialog for adding a new job
  const handleAddClick = () => {
    setEditingJob(null);
    setFormData({ title: '', company: '', location: '' });
    setDialogOpen(true);
  };

  // Open dialog for editing an existing job
  const handleEditClick = (job) => {
    setEditingJob(job);
    setFormData({ title: job.title, company: job.company, location: job.location });
    setDialogOpen(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add or update job in Firestore
  const handleSave = async () => {
    try {
      if (editingJob) {
        // Update existing job
        const jobRef = doc(db, 'jobs', editingJob.id);
        await updateDoc(jobRef, formData);
      } else {
        // Add new job
        await addDoc(collection(db, 'jobs'), formData);
      }
      setDialogOpen(false);
      // Refresh job list
      const snapshot = await getDocs(collection(db, 'jobs'));
      setJobs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  // Delete job from Firestore
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      await deleteDoc(doc(db, 'jobs', id));
      setJobs(prev => prev.filter(job => job.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">Job Listings</Typography>
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            Add Job
          </Button>
        </Box>

        {loading ? (
          <Typography>Loading jobs...</Typography>
        ) : jobs.length === 0 ? (
          <Typography>No jobs found matching your criteria.</Typography>
        ) : (
          jobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onEdit={() => handleEditClick(job)}
              onDelete={() => handleDelete(job.id)}
            />
          ))
        )}
      </Container>

      {/* Add/Edit Job Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingJob ? 'Edit Job' : 'Add Job'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Job Title"
            name="title"
            fullWidth
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            label="Company"
            name="company"
            fullWidth
            value={formData.company}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            label="Location"
            name="location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default Jobs;

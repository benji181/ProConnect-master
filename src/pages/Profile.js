import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase'; // You need to initialize Firebase Storage too

const Profile = () => {
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email] = useState(user?.email || '');
  const [cvFile, setCvFile] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
    setUploadError('');
    setUploadSuccess('');
  };

  const handleUpload = async () => {
    if (!cvFile) {
      setUploadError('Please select a file to upload.');
      return;
    }
    try {
      const cvRef = ref(storage, `cvs/${user.uid}/${cvFile.name}`);
      await uploadBytes(cvRef, cvFile);
      const url = await getDownloadURL(cvRef);
      setUploadSuccess('CV uploaded successfully!');
      // You can save this URL to Firestore or user profile if needed
      console.log('CV URL:', url);
    } catch (error) {
      setUploadError(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      <Typography variant="body1" gutterBottom>Email: {email}</Typography>
      <TextField
        label="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        fullWidth
        margin="normal"
      />
      {/* You can add a button to update display name in Firebase if you want */}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Upload your CV</Typography>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleUpload}>Upload CV</Button>
        {uploadError && <Alert severity="error" sx={{ mt: 2 }}>{uploadError}</Alert>}
        {uploadSuccess && <Alert severity="success" sx={{ mt: 2 }}>{uploadSuccess}</Alert>}
      </Box>
    </Container>
  );
};

export default Profile;

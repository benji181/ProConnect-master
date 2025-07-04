import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Avatar,
  CircularProgress,
  Link
} from '@mui/material';
import { auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase'; // Ensure you have initialized storage and firestore if needed
import { updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Footer from '../components/Footer'

const Profile = () => {
  const user = auth.currentUser;

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email] = useState(user?.email || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  
  const [cvFile, setCvFile] = useState(null);
  const [cvUrl, setCvUrl] = useState('');
  
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState('');
  const [updating, setUpdating] = useState(false);

  // Load existing CV URL from Firestore (optional)
  useEffect(() => {
    const fetchCvUrl = async () => {
      try {
        const docRef = doc(db, 'userProfiles', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCvUrl(docSnap.data().cvUrl || '');
        }
      } catch (error) {
        console.error('Error fetching CV URL:', error);
      }
    };
    fetchCvUrl();
  }, [user.uid]);

  // Handle CV file selection
  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
    setUploadError('');
    setUploadSuccess('');
  };

  // Upload CV to Firebase Storage and save URL to Firestore
  const handleUpload = async () => {
    if (!cvFile) {
      setUploadError('Please select a file to upload.');
      return;
    }
    setLoading(true);
    setUploadError('');
    setUploadSuccess('');
    try {
      const cvRef = ref(storage, `cvs/${user.uid}/${cvFile.name}`);
      await uploadBytes(cvRef, cvFile);
      const url = await getDownloadURL(cvRef);
      setCvUrl(url);
      setUploadSuccess('CV uploaded successfully!');

      // Save CV URL to Firestore user profile document
      await setDoc(doc(db, 'userProfiles', user.uid), { cvUrl: url }, { merge: true });
    } catch (error) {
      setUploadError(error.message);
    }
    setLoading(false);
  };

  // Update display name in Firebase Auth
  const handleUpdateProfile = async () => {
    if (!displayName.trim()) {
      setUpdateError('Display name cannot be empty.');
      return;
    }
    setUpdating(true);
    setUpdateError('');
    setUpdateSuccess('');
    try {
      await updateProfile(user, { displayName });
      setUpdateSuccess('Profile updated successfully!');
    } catch (error) {
      setUpdateError(error.message);
    }
    setUpdating(false);
  };

  // Handle profile photo upload and update
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setUploadError('');
    setUploadSuccess('');
    try {
      const photoRef = ref(storage, `profilePhotos/${user.uid}/${file.name}`);
      await uploadBytes(photoRef, file);
      const url = await getDownloadURL(photoRef);
      await updateProfile(user, { photoURL: url });
      setPhotoURL(url);
      setUploadSuccess('Profile photo updated successfully!');
    } catch (error) {
      setUploadError(error.message);
    }
    setLoading(false);
  };

  return (
     <>
    <Container maxWidth="sm" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        <Avatar
          src={photoURL}
          alt={displayName || email}
          sx={{ width: 80, height: 80 }}
        />
        <Button variant="outlined" component="label" disabled={loading}>
          Change Photo
          <input hidden accept="image/*" type="file" onChange={handlePhotoChange} />
        </Button>
      </Box>

      <Typography variant="body1" gutterBottom>Email: {email}</Typography>

      <TextField
        label="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        onClick={handleUpdateProfile}
        disabled={updating}
        sx={{ mt: 1 }}
      >
        {updating ? 'Updating...' : 'Update Profile'}
      </Button>

      {updateError && <Alert severity="error" sx={{ mt: 2 }}>{updateError}</Alert>}
      {updateSuccess && <Alert severity="success" sx={{ mt: 2 }}>{updateSuccess}</Alert>}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom>Upload your CV</Typography>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Upload CV'}
        </Button>

        {uploadError && <Alert severity="error" sx={{ mt: 2 }}>{uploadError}</Alert>}
        {uploadSuccess && <Alert severity="success" sx={{ mt: 2 }}>{uploadSuccess}</Alert>}

        {cvUrl && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1">Current CV:</Typography>
            <Link href={cvUrl} target="_blank" rel="noopener noreferrer" underline="hover">
              View / Download CV
            </Link>
          </Box>
        )}
      </Box>
    </Container>
    <Footer/>
   </>
  );
};

export default Profile;

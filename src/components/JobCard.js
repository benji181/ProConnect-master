import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{job.title}</Typography>
            <Typography color="text.secondary">{job.company} - {job.location}</Typography>
          </div>
          <Button variant="contained" color="primary">Apply</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobCard;

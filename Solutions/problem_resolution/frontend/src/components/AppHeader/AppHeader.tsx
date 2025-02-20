import React from 'react';
import { Typography } from '@mui/material';

const AppHeader: React.FC = () => {
  return (
    <Typography 
      variant="h4" 
      gutterBottom 
      sx={{ 
        textAlign: 'center',
        fontWeight: 600,
        color: 'primary.main',
        mb: 4
      }}
    >
      Array Count
    </Typography>
  );
};

export default AppHeader;
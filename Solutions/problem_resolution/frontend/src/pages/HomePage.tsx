import React, { useState } from 'react';
import { 
  Paper, 
  Button, 
  Typography, 
  Box, 
  Fade, 
  Container, 
  Tooltip, 
  IconButton 
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddIcon from '@mui/icons-material/Add';
import NumberInput from '../components/NumberInput/NumberInput';
import AppHeader from '../components/AppHeader/AppHeader';
import { calculateSum } from '../api/api';

const HomePage: React.FC = () => {
  const [numbers, setNumbers] = useState<string[]>(['']);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddNumber = (index: number) => {
    const newNumbers = [...numbers];
    newNumbers.splice(index + 1, 0, '');
    setNumbers(newNumbers);
  };

  const handleRemoveNumber = (index: number) => {
    if (index === 0) return;
    const newNumbers = numbers.filter((_, i) => i !== index);
    setNumbers(newNumbers);
  };

  const handleNumberChange = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError('');

      // Filter out empty strings, but keep as strings (no conversion)
      const validNumbers = numbers.filter(n => n.trim() !== '');
      
      if (validNumbers.length === 0) {
        setError('Please enter at least one number');
        return;
      }

      // Call API with the raw string array
      const response = await calculateSum(validNumbers);
      setScore(response.score);
    } catch (err) {
      setError('An error occurred while processing your request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper 
        elevation={3}
        sx={{ 
          p: 4,
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
          borderRadius: '16px'
        }}
      >
        <AppHeader />
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              py: 6,
              px: 6,
              bgcolor: 'rgba(0,0,0,0.02)',
              borderRadius: '12px',
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { bgcolor: 'rgba(0,0,0,0.05)' },
              '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.2)', borderRadius: '4px' },
            }}
          >
            {numbers.map((number, index) => (
              <Fade in={true} key={index}>
                <Box>
                  <NumberInput
                    value={number}
                    index={index}
                    isFirst={index === 0}
                    onChange={handleNumberChange}
                    onAdd={handleAddNumber}
                    onRemove={handleRemoveNumber}
                  />
                </Box>
              </Fade>
            ))}
            <Tooltip title="Add number">
              <IconButton 
                onClick={() => handleAddNumber(numbers.length - 1)} 
                size="small" 
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  ml: 1,
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={isLoading}
            startIcon={<CalculateIcon />}
            sx={{ px: 4, py: 1, borderRadius: '8px', textTransform: 'none', fontSize: '1.1rem' }}
          >
            {isLoading ? 'Calculating...' : 'Calculate Score'}
          </Button>
          {error && (
            <Typography 
              color="error" 
              sx={{ bgcolor: 'error.light', color: 'error.contrastText', p: 1, borderRadius: '4px', opacity: 0.9 }}
            >
              {error}
            </Typography>
          )}
          {score !== null && (
            <Fade in={true}>
              <Paper 
                elevation={2}
                sx={{ p: 2, bgcolor: 'primary.light', color: 'primary.contrastText', borderRadius: '8px' }}
              >
                <Typography variant="h5">
                  Score: {score}
                </Typography>
              </Paper>
            </Fade>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;
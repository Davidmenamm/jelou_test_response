import React, { useState } from 'react';
import { TextField, IconButton, Tooltip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface NumberInputProps {
  value: string;
  index: number;
  isFirst: boolean;
  onChange: (index: number, value: string) => void;
  onAdd: (index: number) => void;
  onRemove: (index: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ 
  value, 
  index, 
  isFirst, 
  onChange, 
  onAdd, 
  onRemove 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <Tooltip title="Add number above">
          <IconButton 
            onClick={() => onAdd(index)} 
            size="small" 
            sx={{ 
              position: 'absolute', 
              top: -30, 
              left: '50%', 
              transform: 'translateX(-50%)',
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      <TextField
        type="number"
        value={value}
        onChange={(e: { target: { value: string; }; }) => onChange(index, e.target.value)}
        size="small"
        variant="outlined"
        sx={{
          width: '100px',
          '& input': {
            textAlign: 'center',
          },
          mx: 0.5
        }}
        InputProps={{
          sx: {
            borderRadius: '8px',
            bgcolor: 'background.paper',
          }
        }}
      />

      {isHovered && !isFirst && (
        <Tooltip title="Remove this number">
          <IconButton 
            onClick={() => onRemove(index)} 
            size="small" 
            sx={{ 
              position: 'absolute', 
              bottom: -30, 
              left: '50%', 
              transform: 'translateX(-50%)',
              bgcolor: 'error.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'error.dark',
              }
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default NumberInput;
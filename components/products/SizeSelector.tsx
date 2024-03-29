import { FC } from 'react';
import { ISizes } from '../../interfaces/products';
import { Box, Button } from '@mui/material';

interface Props{
    sizes:ISizes[];
    selectedSize:ISizes;
}

export const SizeSelector:FC<Props> = ({sizes, selectedSize}) => {
  return (
        <Box>
          {
            sizes.map(size=>(
              <Button size='small' key={size} color={selectedSize == size ? 'primary' : 'info'} 
                sx={{ml:1,
                  '&:hover': {
                   color: selectedSize == size ?  '#1E1E1E' : 'inherit'
                  },
                   }} >                
                  {size}

              </Button>
            ))}
        </Box>
        )
}

import { Typography ,Box} from '@mui/material'
import React from 'react';
import Calculator from './components/Calculator'
function App() {
  return (
    <>
      <Box
      border="3px solid #e0e0e0"
    borderRadius={3}

    sx={{
      fontFamily: "verdana,sans-serif",
      maxWidth: 400,
      mx: "auto",      // centré horizontalement
      p: 0, 
      mt: 3,
      mb:4,
      pb:2,
      bgcolor:"#e0e0e0"
    }}>
        <Typography variant="h4" align="center" gutterBottom color='red' >
        CodeAlpha Calculator
        </Typography>
        <Calculator />
      </Box>
    </>
  )
}
export default App;
    
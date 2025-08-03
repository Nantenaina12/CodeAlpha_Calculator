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
      maxWidth: 400,
      mx: "auto",      // centré horizontalement
      pl: 0 ,           // padding interne
      mt: 4,
      bgcolor:"#e0e0e0"
    }}>
        <Typography variant="h4" align="center" gutterBottom >
        CodeAlpha Calculator
        </Typography>
        <Calculator />
      </Box>
    </>
  )
}
export default App;
    
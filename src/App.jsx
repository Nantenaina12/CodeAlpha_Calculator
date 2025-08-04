import { Typography ,Box} from '@mui/material'
import React from 'react';
import Calculator from './components/Calculator'
function App() {
  return (
    <>
      <Box className='principal'
      border="3px solid #e0e0e0"
      borderRadius={3}

    sx={{
        fontFamily: "verdana, sans-serif",
        maxWidth: {

          xs: 300,   // Mobile
          sm: 400,    // Tablette et plus
        },
        mx: "auto",
        mt: 5,
        mb: 8,
        pb: {

          xs: 1,
          sm: 1
        },
        px: {

          xs: 1,
          sm: 1
        },
        backgroundColor:"#e0e0e0"
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
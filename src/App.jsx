import { Typography, Box } from '@mui/material';
import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Box
        border="3px solid #e0e0e0"
        borderRadius={3}
        sx={{
          fontFamily: "Verdana, sans-serif",
          width: "100%",           // ➕ s’adapte à la largeur de l’écran
          maxWidth: 400,           // ➕ limite max
          mx: "auto",              // ➕ centre horizontalement
          px: 2,                   // ➕ padding horizontal pour les petits écrans
          py: 3,                   // padding vertical
          mt: 5,
          mb: 4,
          bgcolor: "#e0e0e0",
          boxSizing: "border-box" // évite le débordement sur mobile
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="red"
          sx={{
            fontSize: {
              xs: 24,
              sm: 30
            }
          }}
        >
          CodeAlpha Calculator
        </Typography>

        <Calculator />
      </Box>
    </>
  );
}

export default App;

    
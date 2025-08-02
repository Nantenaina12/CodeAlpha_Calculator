import { useState } from 'react'
import { Container,Typography } from '@mui/material'
import Calculator from './components/Calculator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
        CodeAlpha Calculator
        </Typography>
        <Calculator />
      </Container>
      
    </>
  )
}

export default App

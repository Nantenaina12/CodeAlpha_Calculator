import React from 'react'
import { Button } from '@mui/material'
export default function CalcButton({label,onClick}) {
  return (
     <Button
      variant="contained"
      fullWidth
      sx={{ height: 60, fontSize: 20 }}
      onClick={() => onClick(label)}
    >
      {label}
    </Button>
    
  )
}

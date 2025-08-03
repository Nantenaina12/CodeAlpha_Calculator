import React from 'react'
import { Button } from '@mui/material'
export default function CalcButton({label,onClick}) {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
         height: 55,
        fontSize: 16,
        textTransform: "none",
        backgroundColor:
          ["C", "←"].includes(label) ? "#f44336" :
          label === "=" ? "#4caf50" :
          label.match(/[+\-*/%]/) ? "#2196f3" :
          label.match(/[√sincota]/i) ? "#9c27b0" :
          undefined,
        "&:hover": {
          backgroundColor:
            ["C", "←"].includes(label) ? "#d32f2f" :
            label === "=" ? "#388e3c" :
            undefined
        }
         }}
      onClick={() => onClick(label)}
    >
      {label}
    </Button>
    
  )
}

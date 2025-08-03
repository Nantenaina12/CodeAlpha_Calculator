import React from 'react'
import { Button } from '@mui/material'

export default function BoutonScientifique({label,onClick}) {
   return (
    <Button variant="contained" color="success"
        fullWidth
        sx={{ height: 25, fontSize: 10 }}
        onClick={() => onClick(label)}
        >
      {label}
    </Button>

    
  )
}

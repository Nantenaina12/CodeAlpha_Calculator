import React from 'react'
import { useState } from 'react'
import { Box,Grid,TextField } from '@mui/material';
import { evaluate } from 'mathjs';
import CalcButton from './CalcButton';
import BoutonScientifique from './BoutonScientifique';
export default function Calculator() {
    const buttons = [
  "7", "8", "9","DEL","AC","4",
  "5", "6", "*", "/",
  "1", "2", "3", "+",
  "-", "0", ".","%", "π ","="];
  const button=[
    "(", ")","sin", "cos", "tan", "√","log","exp","^ ","10^"

  ]
    const [input, setInput] = useState("");
     const [lastAction, setLastAction] = useState("")

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setLastAction("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {

        try {
            const sanitized = input
                .replace(/√/g, "sqrt")
                .replace(/%/g, "/100");
            const result = evaluate(sanitized);
            setLastAction(input + " =");
            setInput(result.toString());
        
        } catch {

            setInput("Error");
            setLastAction("");
        }
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <Box sx={{mx: "auto", width: 350}}>
      <TextField
        fullWidth 
        variant="outlined"
        value={input}
        sx={{ mb: 2 ,
              bgcolor:"white",
            "& input": {
                fontSize: 24,
                textAlign: "right",
                
            }}}
        inputProps={{readOnly:true}}
      />
      <Box sx={{mx: "auto", width: 400}} >
        <Grid container spacing={1}marginBottom={1}>
        {button.map((btn, i) => (
          <Grid  key={i}>
            <BoutonScientifique label={btn} onClick={handleClick} />
          </Grid>
        ))}
        </Grid>
        <Grid container spacing={1}>
        {buttons.map((btn, i) => (
          <Grid  key={i}>
            <CalcButton label={btn} onClick={handleClick} />
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>
    
  )
}

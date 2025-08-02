import React from 'react'
import { useState } from 'react'
import { Box,Grid,TextField } from '@mui/material';
import CalcButton from './CalcButton';

export default function Calculator() {
    const buttons = [
  "C", "←", "/", "*",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", "."];
    const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
      <Box>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        sx={{ mb: 2 }}
        inputProps={{ readOnly: true, style: { fontSize: 24, textAlign: "right" } }}
      />
      <Grid container spacing={1}>
        {buttons.map((btn, i) => (
          <Grid item xs={btn === "0" ? 6 : 3} key={i}>
            <CalcButton label={btn} onClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
  )
}

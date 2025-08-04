import React, { useState } from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import { evaluate } from 'mathjs';
import CalcButton from './CalcButton';
import BoutonScientifique from './BoutonScientifique';

export default function Calculator() {
  const buttons = [
    "7", "8", "9", "DEL", "AC",
    "4", "5", "6", "*", "/",
    "1", "2", "3", "+",
    "-", "0", ".", "%", "π", "="
  ];

  const button = [
    "(", ")", "sin", "cos", "tan", "√", "log", "exp", "^", "10^"
  ];

  const [input, setInput] = useState("");
  const [lastAction, setLastAction] = useState("");
  const [angleMode, setAngleMode] = useState("deg");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setLastAction("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const expression = input
           .replace(/π/g, "pi")
           .replace(/√(\d+(\.\d+)?)/g, "sqrt($1)")
           .replace(/√/g, "sqrt")
           .replace(/%/g, "/100");

        let transformedExpr = expression;

        if (angleMode === "deg") {
          transformedExpr = transformedExpr.replace(/(sin|cos|tan)\(/g, "$1(deg ");
        } else if (angleMode === "grad") {
          transformedExpr = transformedExpr.replace(/(sin|cos|tan)\(/g, "$1(grad ");

        }else if(angleMode === "rad"){
          transformedExpr = transformedExpr.replace(/(sin|cos|tan)\(/g, "$1(rad ");

        }


        const result = evaluate(transformedExpr);
        let finalResult = Math.abs(result) < 1e-10 ? 0 : result;
        setInput(finalResult.toString());
        setLastAction(input + " =");
      } catch {
        setInput("Error");
        setLastAction("");
      }
    } else if (value === "10^") {
      setInput((prev) => prev + "10^(");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <Box sx={{ mx: "auto", width: 350 }}>
      <TextField
        fullWidth
        variant="outlined"
        inputProps={{ readOnly: true }}
        value={input}
        sx={{
          mb: 2,
          backgroundColor: "black",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
            "&.Mui-focused fieldset": { border: "none" }
          },
          "& input": {
            fontFamily: "sans-serif",
            fontSize: 28,
            textAlign: "right",
            color: "white",
            padding: "10px",
            letterSpacing: 1.5
          }
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          variant={angleMode === "deg" ? "contained" : "outlined"}
          onClick={() => setAngleMode("deg")}
          sx={{ mx: 1 }}
        >
          DEG
        </Button>
        <Button
          variant={angleMode === "rad" ? "contained" : "outlined"}
          onClick={() => setAngleMode("rad")}
          sx={{ mx: 1 }}
        >
          RAD
        </Button>
        <Button
          variant={angleMode === "grad" ? "contained" : "outlined"}
          onClick={() => setAngleMode("grad")}
          sx={{ mx: 1 }}
        >
          GRAD
        </Button>
      </Box>

      <Box sx={{ mx: "auto", width: 400 }}>
        <Grid container spacing={1} marginBottom={1}>
          {button.map((btn, i) => (
            <Grid key={i} item xs={3}>
              <BoutonScientifique label={btn} onClick={handleClick} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={1}>
          {buttons.map((btn, i) => (
            <Grid key={i} item xs={btn === "0" ? 6 : 3}>
              <CalcButton label={btn} onClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

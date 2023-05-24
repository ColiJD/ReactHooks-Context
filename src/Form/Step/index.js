import React from "react";
import { TextField, Button, Box } from "@mui/material";

const Step = ({ data, step }) => {
  const { inputs, buttonText, onSubmit } = data;
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={onSubmit}>
      {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } = input;
        return (
          <TextField
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && { helperText }}
            value={value}
            onChange={(e) => onChange(e, i, step, validator)} //Lo primero que mandamos es el elemeto despues la posicion del input despues el step
          />
        );
      })}
      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;

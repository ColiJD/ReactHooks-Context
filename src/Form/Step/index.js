import React, {useContext} from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../constex";

const Step = ({ data, step, pasos }) => {
  const { inputs, buttonText, onSubmit } = data;
  const counterData = useContext(CounterContext);
  console.log(counterData)
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
      onSubmit={(e) => onSubmit(e, step, pasos)}>
      <strong>El valor del contenedor es: {counterData.count}</strong>
      {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } = input;
        return (
          <TextField
            key={i}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && { helperText }}
            value={value}
            onChange={(e) => onChange(e, i, step, validator, pasos)} //Lo primero que mandamos es el elemeto despues la posicion del input despues el step
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

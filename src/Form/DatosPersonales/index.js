import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validacion";

const DatosPersonales = ({ updateStep }) => {
  const [nombre, setNombre] = useState({ value: "", valid: null });
  const [apellidos, setApellidos] = useState({ value: "", valid: null });
  const [telefono, setTelefono] = useState({ value: "", valid: null });

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
      onSubmit={(e) => {
        e.preventDefault();
        if(nombre.valid && apellidos.valid && telefono.valid) {
          updateStep(2);

        }else {
          console.log("Error Formulario")
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required
        value={nombre.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setNombre({ value, valid });
        }}
        error={nombre.valid === false}
        helperText={
          nombre.valid === false &&
          "Ingresa almenos 2 caracteres y maximo 30"
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required
        value={apellidos.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setApellidos({ value, valid });
        }}
        error={apellidos.valid === false}
        helperText={
          apellidos.valid === false &&
          "Ingresa almenos 2 caracteres y maximo 30"
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        required
        value={telefono.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setTelefono({ value, valid });
        }}
        error={telefono.valid === false}
        helperText={
          telefono.valid === false &&
          "El rango del numero telefonico es de 8 caracteres"
        }
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;

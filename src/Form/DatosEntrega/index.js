import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarDireccion,
  validarCiudad,
  validarProvincia,
} from "./validarciones";

const DatosEntrega = ({ updateStep }) => {
  const [direccion, setDireccion] = useState({ value: "", valid: null });
  const [ciudad, setCiudad] = useState({ value: "", valid: null });
  const [provincia, setProvincia] = useState({ value: "", valid: null });

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
        if (direccion.valid && ciudad.valid && provincia.valid) {
          updateStep(3);
        } else {
          console.log("Error Formulario");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required
        value={direccion.value}
        onChange={(input) => {
          const direccion = input.target.value;
          setDireccion({
            value: direccion,
            valid: validarDireccion(direccion),
          });
        }}
        error={direccion.valid === false}
        helperText={
          direccion.valid === false &&
          "Ingresa almenos 2 caracteres y maximo 30"
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required
        value={ciudad.value}
        onChange={(input) => {
          const ciudad = input.target.value;
          setCiudad({ value: ciudad, valid: validarCiudad(ciudad) });
        }}
        error={ciudad.valid === false}
        helperText={
          ciudad.valid === false && "Ingresa almenos 2 caracteres y maximo 30"
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required
        value={provincia.value}
        onChange={(input) => {
          const provincia = input.target.value;
          setProvincia({
            value: provincia,
            valid: validarProvincia(provincia),
          });
        }}
        error={provincia.valid === false}
        helperText={
          provincia.valid === false &&
          "Ingresa almenos 2 caracteres y maximo 30"
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;

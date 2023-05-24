import React, { useState, useEffect } from "react";
import { Box, /*Switch,*/ Typography /*, stepButtonClasses*/ } from "@mui/material";
import { LogoSpace, /*MainSpace,*/ FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validadciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setpasos] = useState({});

  useEffect(() => {

  })

  const updateStep = (step) => {
    setStep(step);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1
    setStep(newStep);
  };
  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };


  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value)

  };
  const stepFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingrese un correo electronico valido",
          validator: validarEmail,
        },
        {
          label: "Contaseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText:
            "La contaseña debe contener al menos una mayuscula, numeros y un caracter especial",
          validator: validarPassword,
        },
      ],
      buttonText: "Seguiente",
      onSubmit,
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}>
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;

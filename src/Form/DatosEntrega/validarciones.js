export const validarDireccion = (dirrecion) => {
  let length = dirrecion.length;
  return length > 1 && length < 30 ? true : false;
};

export const validarCiudad = (ciudad) => {
  let length = ciudad.length;
  return length > 1 && length < 30 ? true : false;
};

export const validarProvincia = (provincia) => {
  let length = provincia.length;
  return length > 1 && length < 30 ? true : false;
};

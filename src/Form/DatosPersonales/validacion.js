export const validarNombre = (nombre) => {
  let length = nombre.length;
  return length > 1 && length < 30 ? true : false;
};

export const validarApellidos = (apellido) => {
  let length = apellido.length;
  return length > 1 && length < 30 ? true : false;
};

export const validarTelefono = (telefono) => {
  let length = telefono.length;
  return length >= 8 && length < 9 ? true : false;
};

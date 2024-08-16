// Función general para validar strings no vacíos
const validateNonEmptyString = (str: string): boolean => {
  return str.trim() !== ''
}

// Función general para validar números mayores a cero
const validatePositiveNumber = (num: number): boolean => {
  return num > 0
}

// Expresión regular para validación de email
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Función de validación de email
export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email.trim().toLowerCase())
}

// Funciones específicas de validación usando las funciones generales
export const validateNombre = validateNonEmptyString
export const validateApellido = validateNonEmptyString
export const validateColonia = validateNonEmptyString
export const validateCiudad = validateNonEmptyString
export const validateEstado = validateNonEmptyString
export const validatePais = validateNonEmptyString
export const validateCalleNum = validateNonEmptyString

// Funciones de validación numérica usando la función general

export const validateCP = validatePositiveNumber

// Función de validación de número de teléfono
export const validatePhoneNumber = (telefono: number): boolean => {
  const phoneNumberStr = telefono.toString()
  const phoneNumberRegex = /^\d{10}$/
  return phoneNumberRegex.test(phoneNumberStr)
}

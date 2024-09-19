export function validateString(value: string, name: string) {
  if (!value) {
    throw `El campo ${name} es obligatorio`;
  }
}

export function validateExpression(
  value: string,
  name: string,
  expression: RegExp,
  patron: string
) {
  if (!expression.test(value)) {
    throw `El campo ${name} no cumple con el formato esperado, \n${patron}`;
  }
}

export function validateLength(
  value: string,
  name: string,
  min: number,
  max: number
) {
  if (value.length < min || value.length > max) {
    throw `El campo ${name} debe tener entre ${min} y ${max} caracteres`;
  }
}

export function validateArray(value: string[], name: string) {
  if (value.length === 0) {
    if(name === 'dirección') {
      throw `Debe agregar al menos una ${name}`;
    }
    if(name === 'responsabilidades') {
      throw `Debe agregar al menos una ${name}`;
    }

    throw `Debe agregar al menos un ${name}`;
  }
}

export function validateExpressArray(value: string[], name: string, expression: RegExp, patron: string) {
  for (let i = 0; i < value.length; i++) {
    if (!expression.test(value[i])) {
      throw `El campo ${name} no cumple con el formato esperado, \n${patron}`;
    }
  }
}

export function validateLengthArray(value: string[], name: string, min: number, max: number) {
  for (let i = 0; i < value.length; i++) {
    if (value[i].length < min || value[i].length > max) {
      throw `El campo ${name} debe tener entre ${min} y ${max} caracteres`;
    }
  }
}

export function validateNumber(value: number, name: string) {
  if (value <= 0) {
    throw `El campo ${name} tiene que ser mayor a 0`;
  }
}
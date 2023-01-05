/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsistencia = /* GraphQL */ `
  mutation CreateAsistencia(
    $input: CreateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    createAsistencia(input: $input, condition: $condition) {
      idAsistencia
      fecha
      ubicacion
      nombre
      usuarioChecador
      trabajadorVerificado
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAsistencia = /* GraphQL */ `
  mutation UpdateAsistencia(
    $input: UpdateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    updateAsistencia(input: $input, condition: $condition) {
      idAsistencia
      fecha
      ubicacion
      nombre
      usuarioChecador
      trabajadorVerificado
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsistencia = /* GraphQL */ `
  mutation DeleteAsistencia(
    $input: DeleteAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    deleteAsistencia(input: $input, condition: $condition) {
      idAsistencia
      fecha
      ubicacion
      nombre
      usuarioChecador
      trabajadorVerificado
      id
      createdAt
      updatedAt
    }
  }
`;
export const createTrabajador = /* GraphQL */ `
  mutation CreateTrabajador(
    $input: CreateTrabajadorInput!
    $condition: ModelTrabajadorConditionInput
  ) {
    createTrabajador(input: $input, condition: $condition) {
      nombre
      fechaNac
      edad
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
      subcontrato
      perfil
      direccion
      nss
      alergias
      tipoSangre
      padeceEnfermedad
      observaciones
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTrabajador = /* GraphQL */ `
  mutation UpdateTrabajador(
    $input: UpdateTrabajadorInput!
    $condition: ModelTrabajadorConditionInput
  ) {
    updateTrabajador(input: $input, condition: $condition) {
      nombre
      fechaNac
      edad
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
      subcontrato
      perfil
      direccion
      nss
      alergias
      tipoSangre
      padeceEnfermedad
      observaciones
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrabajador = /* GraphQL */ `
  mutation DeleteTrabajador(
    $input: DeleteTrabajadorInput!
    $condition: ModelTrabajadorConditionInput
  ) {
    deleteTrabajador(input: $input, condition: $condition) {
      nombre
      fechaNac
      edad
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
      subcontrato
      perfil
      direccion
      nss
      alergias
      tipoSangre
      padeceEnfermedad
      observaciones
      id
      createdAt
      updatedAt
    }
  }
`;

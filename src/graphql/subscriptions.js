/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsistencia = /* GraphQL */ `
  subscription OnCreateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onCreateAsistencia(filter: $filter) {
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
export const onUpdateAsistencia = /* GraphQL */ `
  subscription OnUpdateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onUpdateAsistencia(filter: $filter) {
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
export const onDeleteAsistencia = /* GraphQL */ `
  subscription OnDeleteAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onDeleteAsistencia(filter: $filter) {
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
export const onCreateTrabajador = /* GraphQL */ `
  subscription OnCreateTrabajador(
    $filter: ModelSubscriptionTrabajadorFilterInput
  ) {
    onCreateTrabajador(filter: $filter) {
      nombre
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
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
export const onUpdateTrabajador = /* GraphQL */ `
  subscription OnUpdateTrabajador(
    $filter: ModelSubscriptionTrabajadorFilterInput
  ) {
    onUpdateTrabajador(filter: $filter) {
      nombre
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
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
export const onDeleteTrabajador = /* GraphQL */ `
  subscription OnDeleteTrabajador(
    $filter: ModelSubscriptionTrabajadorFilterInput
  ) {
    onDeleteTrabajador(filter: $filter) {
      nombre
      area
      UID
      email
      empresa
      trabajadorVerificado
      equipoPrestado
      ocupado
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

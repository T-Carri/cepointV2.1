/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsistencia = /* GraphQL */ `
  query GetAsistencia($id: ID!) {
    getAsistencia(id: $id) {
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
export const listAsistencias = /* GraphQL */ `
  query ListAsistencias(
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsistencias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTrabajador = /* GraphQL */ `
  query GetTrabajador($id: ID!) {
    getTrabajador(id: $id) {
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
export const listTrabajadors = /* GraphQL */ `
  query ListTrabajadors(
    $filter: ModelTrabajadorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrabajadors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;

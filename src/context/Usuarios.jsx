import React, {useContext, createContext} from 'react'

const UsuariosContext = createContext( )
export default UsuariosContext;
export const UsuariosProvider = ({children}) => {

/*   const newasistencia = await API.graphql({
      query: createasistencia,
      variables: {
          input: {
      "idAsistencia": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
      "fecha": "1970-01-01T12:30:23.999Z",
      "ubicacion": "Lorem ipsum dolor sit amet",
      "nombre": "Lorem ipsum dolor sit amet",
      "usuarioChecador": "Lorem ipsum dolor sit amet",
      "trabajadorVerificado": true
    }
      }
  });
 
  const newUsuario = await API.graphql({
    query: createTrabajador,
    variables: {
        input: {
    
  }
    }
}); */




  return (
            <UsuariosContext.Provider value={{ }}>
                {children}
             </UsuariosContext.Provider>
  )
}

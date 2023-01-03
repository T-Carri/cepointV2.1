import React, {useContext, createContext} from 'react'

const UsuariosContext = createContext( )
export default UsuariosContext;
export const UsuariosProvider = ({children}) => {



  return (
            <UsuariosContext.Provider value={{ }}>
                {children}
             </UsuariosContext.Provider>
  )
}

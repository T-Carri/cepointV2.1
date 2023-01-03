import React, {useState, createContext} from 'react'

const UifunctionsContext = createContext( )
export default UifunctionsContext; 
export const UiProvider = ({children}) => {
const [ButtonUsers, setButtonUsers]=useState(false)
const [ButtonAsistencias, setButtonAsistencias]=useState(false)



  return (
            <UifunctionsContext.Provider value={{ 
                ButtonUsers,
                setButtonUsers,
                ButtonAsistencias,
                setButtonAsistencias
             }}>
                {children}
             </UifunctionsContext.Provider>
  )
}
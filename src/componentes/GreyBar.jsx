import React, {useContext} from 'react'
import { Card,  useTheme} from '@aws-amplify/ui-react';
import { Button  } from 'react-bootstrap'
import { 
  useNavigate, 
  Outlet
} from 'react-router-dom';
import  UifunctionsContext  from '../context/UifunctionsContext';
export const GreyBar = () => {
    const { tokens } = useTheme();
    const navigate = useNavigate();
/* const {  ButtonUsers,
         setButtonUsers,
         ButtonAsistencias,
         setButtonAsistencias} = useContext(UifunctionsContext) */
        
  return (
    
    <Card
    columnStart="1"
    columnEnd="2"
     backgroundColor={tokens.colors.background.quaternary} >
    <Button variation='warning' onClick={()=>{
      navigate("users")
    }}>Usuarios</Button>
 <br/>
 <br/>
 
 <Button variation='primary'  onClick={()=>{
      navigate("asistencias")
    }}>Asistencias</Button>



  </Card>
  )
}

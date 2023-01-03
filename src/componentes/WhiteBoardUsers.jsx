import React, {useEffect, useState} from 'react'
import { Card,  useTheme,  Heading, Text} from '@aws-amplify/ui-react';
import {Amplify, API, graphqlOperation} from 'aws-amplify'
//import { createTodo } from '../graphql/mutations';
//import { listTodos } from '../graphql/queries';
import { Outlet,  useNavigate} from 'react-router-dom'
import { Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
const initialState = { name: '', description: '' }

 export const WhiteBoardUsers =  ({props}) => {
    const { tokens } = useTheme();
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const navigate = useNavigate();



  return (

    <Card
    columnStart="2"
    columnEnd="-1"
    backgroundColor={tokens.colors.background.secondary}> 

 
  
    
    <Heading level={5}>
              Control de usuarios 
            </Heading>
            <Text as="span">
            Controles para gestionar usuarios
            </Text>
      <br/>
      
    
     <Button variant='dark' onClick={()=>{
      navigate("allUsers")
     }} className="mb-2">
          Todos los usuarios
        </Button> {''}
        <Button variant='dark' onClick={()=>{
      navigate("ocupados")
     }} className="mb-2"  >
          Ocupados
        </Button> {''}
        <Button variant='dark' onClick={()=>{
      navigate("desocupados")
     }}className="mb-2"  >
          Desocupados
        </Button> {''}
        <Button variant='danger' onClick={()=>{
             navigate("inactivos") 
     }} className="mb-2" >
          inactivos
        </Button> {''}
        <Button variant='success'  onClick={()=>{
      navigate("crearUsuario")
     }} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button>    
      
       
        <div className="usuarios"  >
          <Outlet/>
        </div>
   
          
 
 

     </Card>  
  


 
  )
}
const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}





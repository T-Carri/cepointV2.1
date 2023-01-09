import React, {useEffect, useState} from 'react'
import { Card, Button,  useTheme} from '@aws-amplify/ui-react';
import {Amplify, API, graphqlOperation} from 'aws-amplify'
//import { createTodo } from '../graphql/mutations';
//import { listTodos } from '../graphql/queries';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Webcam from "react-webcam"; 
const initialState = { name: '', description: '' }

 export const Checador =  ({props}) => {
    const { tokens } = useTheme();
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
  



  return (

    <Card
    columnStart="2"
    columnEnd="-1"
    backgroundColor={tokens.colors.background.secondary}> 
 <h4>Checador</h4>

 <Webcam />
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
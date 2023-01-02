import React, {useEffect, useState} from 'react'
import { Card, Button,  useTheme} from '@aws-amplify/ui-react';
import {Amplify, API, graphqlOperation} from 'aws-amplify'
//import { createTodo } from '../graphql/mutations';
//import { listTodos } from '../graphql/queries';

//import { createasistencia } from './graphql/mutations';
//const initialState = { name: '', description: '' }

 export const WhiteBoard = ({props}) => {
    const { tokens } = useTheme();
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
  

  /*  const newasistencia = await API.graphql({
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
 */

   /*  useEffect(() => {
      fetchTodos()
    }, [])
 
    function setInput(key, value) {
      setFormState({ ...formState, [key]: value })
    }
  
    async function fetchTodos() {
      try {
        const todoData = await API.graphql(graphqlOperation(listTodos))
        const todos = todoData.data.listTodos.items
        setTodos(todos)
      } catch (err) { console.log('error fetching todos') }
    }
  
    async function addTodo() {
      try {
        if (!formState.name || !formState.description) return
        const todo = { ...formState }
        setTodos([...todos, todo])
        setFormState(initialState)
        await API.graphql(graphqlOperation(createTodo, {input: todo}))
      } catch (err) {
        console.log('error creating todo:', err)
      }
    } */
  return (
  <Card
    columnStart="2"
    columnEnd="-1"
    backgroundColor={tokens.colors.background.secondary}

  > <h1>Hello {props.username}</h1>
  {console.log(props)}
    {/*
 <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
    */}
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
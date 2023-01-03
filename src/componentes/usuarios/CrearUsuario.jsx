import React, {useState} from 'react'
import {Amplify, API, graphqlOperation} from 'aws-amplify'
import {  Autocomplete, TextField, ThemeProvider, useTheme, Heading, SelectField, Icon} from '@aws-amplify/ui-react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './CrearUsuario.css'
import { options } from './options';
const SaveIcon = () => (
  <Icon
    ariaLabel=""
    pathData="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
  />
);

const initialState = {   
  nombre: '', 
  area:'',  
  UID:'',
  email:'',  
  empresa:'', 
  trabajadorVerificado: true,
  equipoPrestado: [],
  ocupado: false,   
  perfil:'',  
  direccion:'',
  nss:'',
  alergias: [],
  tipoSangre:'',
  padeceEnfermedad: [],
  observaciones: [] }
export const CrearUsuario = () => {

  const [value, setValue] = React.useState('');
const [formState, setFormState] = useState()
const [Usuario, setUsuario]=useState([])
 //DATA TOPIC
 function createUsuario(key, value) {
  setFormState({ ...formState, [key]: value })
}


async function addUser() {
  try {
    if (!formState.nombre || !formState.perfil) return
    const user = { ...formState }
    setUsuario([...Usuario, user])
    setFormState(initialState)
    await API.graphql(graphqlOperation({/*Aqui va la funcion de mutacion en el archivo graphql*/}, {input: user}))
  } catch (err) {
    console.log('error creating todo:', err)
  }
}

  // It is your responsibility to set up onSelect
  const onSelect = (option) => {
    const { label } = option;
    setValue(label);
    console.log(value)
  };

  // It is your responsibility to set up onClear
  const onClear = () => {
    setValue('');
  };


  //UI TOPIC
  const { tokens } = useTheme();
  const theme = {
    name: 'custom-theme',
    tokens: {
      components: {
      
        heading: {
          color: { value: '{colors.brand.secondary[80]}' },
        },
        text: {
          color: { value: '{colors.brand.primary[80]}' },
        },
      },
    },
  }; 
  return (
<ThemeProvider theme={theme}>
    <Card id="CU" variation="outlined">
      <Row>
        <Col>   <Heading level={5}>
              Crea un usuario 
            </Heading> </Col>
        <Col><Button variant='dark'>Subir foto {' '}<SaveIcon/></Button></Col>

      </Row>
  
      
<br/>

<TextField
      descriptiveText="Escriba nombre completo "
      placeholder="Nombre"
      label="Nombre del trabajador"
      errorMessage="There is an error"
      onChange={event=> createUsuario('nombre', event.target.value)}
    />

<br />
    <Row>

      <Col>
     
        <TextField
      placeholder="Edad"
      defaultValue="Disabled" isDisabled={true}
      label="Edad"
      
    /></Col>
   
      <Col> 
      
      <Autocomplete
      label="Empresa"
      options={options}
      value={value}
      onChange={event=> createUsuario('empresa', event.target.value)}
      onClear={onClear}
      onSelect={onSelect}
    />
     </Col>

    </Row>
    <br />
    <Row>
      <Col>
<TextField
      descriptiveText="Numero de seguridad social"
      placeholder="Numero de seguridad social"
      label="NSS"
      errorMessage="There is an error"
    /></Col>
    <Col>
<TextField
      descriptiveText="Perfil del trabajador"
      placeholder="Perfil del trabajador"
      label="Perfil"
      errorMessage="There is an error"
    /></Col>
    </Row>
   <br />
    <Row>
      <Col>
<TextField
      descriptiveText="(Opcional, usuarios firebase)"
      placeholder="UID"
      label="UID"
      errorMessage="There is an error"
    /></Col>
    <Col>
<TextField
      descriptiveText="Direccion del trabajador"
      placeholder="Direccion del trabajador"
      label="Direccion"
      errorMessage="There is an error"
    /></Col>
    </Row>
    <br />
    <Row>
      <Col>
<TextField
      
      placeholder="Email"
      label="Email"
      errorMessage="There is an error"
    /></Col>
    <Col>
<TextField
      placeholder="Observaciones"
      label="Observaciones"
      errorMessage="There is an error"
    /></Col>
    </Row>
    <br />
      <Button variant='success'>Crear</Button>
    
    </Card>
    </ThemeProvider>
 
  )
}

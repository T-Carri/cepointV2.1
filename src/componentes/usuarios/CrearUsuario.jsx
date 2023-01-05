import React, {useState, useEffect} from 'react'
import {Amplify, API, graphqlOperation} from 'aws-amplify'
import {  Autocomplete, TextField, ThemeProvider, useTheme, Heading, SelectField, Icon} from '@aws-amplify/ui-react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './CrearUsuario.css'
import { options, optionsEmpresas } from './options';
import { createTrabajador } from '../../graphql/mutations';
import DatePicker,  { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

const SaveIcon = () => (
  <Icon
    ariaLabel=""
    pathData="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
  />
);


export const CrearUsuario = () => {
  registerLocale('es', es)

  const initialState = {   
    nombre: '', 
    fechaNac:'',
    edad:'', 
    area:'',  
    UID:'',
    email:'',  
    empresa:'', 
    trabajadorVerificado: true,
    equipoPrestado: [],
    ocupado: false,  
    subcontrato: false,  
    perfil: '',  
    direccion:'',
    nss:'',
    alergias: [],
    tipoSangre:'',
    padeceEnfermedad: [],
    observaciones: [] }

  const [startDate, setStartDate] = useState(new Date());
 
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [formState, setFormState] = useState(initialState)
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
    console.log('you get it')
    await API.graphql(graphqlOperation(createTrabajador, {input: user}))
  } catch (err) {
    console.log('error creating todo:', err)
  }  
}




  // It is your responsibility to set up onSelect
  const onSelect = (option) => {
    const { label } = option;
    setValue(label);
    createUsuario('empresa', label)
    console.log(value)
  };
    

  // It is your responsibility to set up onClear
  const onClear = () => {
    setValue('');
  };

  // It is your responsibility to set up onSelect
  const onSelect1 = (option) => {
    const { label } = option;
    setValue1(label);
    createUsuario('perfil', label)
  
       console.log(value1)
  };    

  function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    
    return edad;
   
}

useEffect(()=>{
  createUsuario('fechaNac', startDate) 
},[startDate])
  // It is your responsibility to set up onClear
  const onClear1 = () => {
    setValue1('');
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
      <label>Fecha de nacimiento del trabajador</label>
      <br />
      <br />
 <DatePicker 
      selected={startDate} 
      onChange={async(date) => {
        await setStartDate(date)
        await createUsuario('edad', calcularEdad(date))
       
         
        
      }}
      locale="es"
    
      />


     </Col>
     <Col>
     <label>Edad del trabajador </label>
     <br />
     <br />
    <strong> <h3>{calcularEdad(startDate)}</h3></strong> </Col>
      <Col> 
      <label>Empresa</label>
      <br />
      <br />
      <Autocomplete
      label="Empresa"
      options={optionsEmpresas}
      value={value}
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
      onChange={event=> createUsuario('nss', event.target.value)}
      errorMessage="There is an error"
    /></Col>
    <Col>
    <label> Perfil</label>
    <br />
    <br />
      <Autocomplete
      label="Perfil"
      options={options}
      value={value1}
     
      onClear={onClear1}
      onSelect={onSelect1}
    /></Col>
    </Row>
   <br />
    <Row>
      <Col>
<TextField
      descriptiveText="(Opcional, usuarios firebase)"
      placeholder="UID"
      label="UID"
      onChange={event=> createUsuario('UID', event.target.value)}
      errorMessage="There is an error"
    /></Col>
    <Col>
<TextField
      descriptiveText="Direccion del trabajador"
      placeholder="Direccion del trabajador"
      label="Direccion"
      onChange={event=> createUsuario('direccion', event.target.value)}
      errorMessage="There is an error"
    /></Col>
    </Row>
    <br />
    <Row>
      <Col>
<TextField
      
      placeholder="Email"
      label="Email"
      onChange={event=> createUsuario('email', event.target.value)}
      errorMessage="There is an error"
    /></Col>
    <Col>
<TextField
      placeholder="Observaciones"
      label="Observaciones"
      onChange={event=> createUsuario('ocupado', event.target.value)}
      errorMessage="There is an error"
    /></Col>
    </Row>
    <br />
      <Button variant='success' onClick={addUser}>Crear</Button>
    
    </Card>
    </ThemeProvider>
 
  )
}

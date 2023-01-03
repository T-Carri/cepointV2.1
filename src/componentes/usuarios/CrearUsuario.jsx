import React from 'react'
import {   TextField, ThemeProvider, useTheme, Heading, SelectField } from '@aws-amplify/ui-react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './CrearUsuario.css'
export const CrearUsuario = () => {
  const [value, setValue] = React.useState('');
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
     <Heading level={5}>
              Crea un usuario 
            </Heading>
      
<br/>

<TextField
      descriptiveText="Escriba nombre completo "
      placeholder="Nombre"
      label="Nombre del trabajador"
      errorMessage="There is an error"
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
      <label>Empresa</label>
      <SelectField
      label="Empresa"
      labelHidden
      placeholder="Selecciona la empresa del trabajador"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="x">X</option>
      <option value="y">Y</option>
      <option value="z">Z</option>
    </SelectField></Col>

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

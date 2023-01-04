import React, {useEffect, useState, useMemo} from 'react'
import { listTrabajadors } from '../../graphql/queries'
import {Amplify, API, graphqlOperation} from 'aws-amplify'
import {Expander, ExpanderItem, Badge,Table, TableHead, TableRow, TableCell, TableBody,  Autocomplete, TextField, ThemeProvider, useTheme, Heading, SelectField, Icon} from '@aws-amplify/ui-react';
import { Button, Card, Offcanvas } from 'react-bootstrap'
 const AllUsers = () => {

/* Aqui vas a traer a todos 
los usuarios.
recuerda: 
-Cuando los usuarios sean muchos
paginarlos, para cuidar recurso. 

-Hacer uso de useMemo, hacer serie de pruebas.
R=Use memo

Vision 
clasificaciones
[totales]: en forma de lista
[Areas]:
[Perfiles]:
*/


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
  perfil: '',  
  direccion:'',
  nss:'',
  alergias: [],
  tipoSangre:'',
  padeceEnfermedad: [],
  observaciones: [] } 
  
  const [UserSelect, setUserSelect]=useState()

  const StageData = {   
    nombre:UserSelect?UserSelect.nombre:null, 
    fechaNac:UserSelect?UserSelect.fechaNac:null,
    edad:UserSelect?UserSelect.edad:null, 
    area:UserSelect?UserSelect.area:null,  
    UID:UserSelect?UserSelect.UID:null,
    email:UserSelect?UserSelect.email:null,  
    empresa:UserSelect?UserSelect.empresa:null, 
    trabajadorVerificado: UserSelect?UserSelect.trabajadorVerificado:null,
    equipoPrestado: UserSelect?UserSelect.equipoPrestado:null, 
    ocupado: UserSelect?UserSelect.ocupado:null,   
    perfil: UserSelect?UserSelect.perfil:null,  
    direccion:UserSelect?UserSelect.direccion:null,
    nss:UserSelect?UserSelect.nss:null,
    alergias: UserSelect?UserSelect.alergias:null,
    tipoSangre:UserSelect?UserSelect.tipoSangre:null,
    padeceEnfermedad: UserSelect?UserSelect.padeceEnfermedad:null,
    observaciones: UserSelect?UserSelect.observaciones:null } 


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [Todos, setTodos]=useState([])
useEffect(()=>{
    fetchTodos()
},[])


async function fetchTodos() {
  try {
    const trabajadoresData = await API.graphql(graphqlOperation(listTrabajadors))
    const todos = trabajadoresData.data.listTrabajadors.items
    setTodos(todos)
  } catch (err) { console.log('error fetching todos') }
}
//console.log(Todos)

  return (
    <div>
      <Card>
        <Card.Body>
          <Button variant='warning'>Todos los trabajadores</Button> {''}
          <Button variant='warning'>Areas</Button>{'  '}
          <Button variant='warning'>Perfiles</Button>{'  '}
          <Button variant='warning'>Buscar Trabajador</Button>{'  '}
        <Card.Title></Card.Title>
        
<Table
  caption=""
  highlightOnHover={false}>
  <TableHead>
    <TableRow>
      <TableCell as="th">Trabajadores</TableCell>
   
    </TableRow>
  </TableHead>
  <TableBody>
  {Todos.map((e)=>(

<Expander type="single">
<ExpanderItem title={
<TableRow>
        <TableCell>{e.nombre}{'     '}   {e.perfil} {'     '}  <Badge>
        {e.empresa}
</Badge>
       </TableCell>
        
        <TableCell><Button onClick={()=>{
          setShow(true)
          setUserSelect(e)
        }} variant='info'>Actualiza</Button></TableCell>
        <Offcanvas show={show} placement={'end'} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Actualiza datos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <TextField
      descriptiveText="Escriba nombre completo "
      placeholder="Nombre"
      label="Nombre del trabajador"
      errorMessage="There is an error"
      //onChange={event=> createUsuario('nombre', event.target.value)}
    />

<label>Empresa</label>
      <br />
      <br />
      <Autocomplete
      label="Empresa"
      //options={optionsEmpresas}
      //value={value}
      //onClear={onClear}
      //onSelect={onSelect}
    />
    <TextField
      descriptiveText="Numero de seguridad social"
      placeholder="Numero de seguridad social"
      label="NSS"
      //onChange={event=> createUsuario('nss', event.target.value)}
      errorMessage="There is an error"
    />
     <Autocomplete
      label="Perfil"
      //options={options}
      //value={value1}
     
      //onClear={onClear1}
      //onSelect={onSelect1}
    />
    <TextField
      descriptiveText="(Opcional, usuarios firebase)"
      placeholder="UID"
      label="UID"
      //onChange={event=> createUsuario('UID', event.target.value)}
      errorMessage="There is an error"
    /> 
    <TextField
      descriptiveText="Direccion del trabajador"
      placeholder="Direccion del trabajador"
      label="Direccion"
      //onChange={event=> createUsuario('direccion', event.target.value)}
      errorMessage="There is an error"
    />
        </Offcanvas.Body>
      </Offcanvas>
      </TableRow>} value={e.nombre }>

</ExpanderItem>

</Expander>
       

       
  ))}
  
 
  </TableBody>
</Table>
  
        </Card.Body>
      </Card>
    </div>
  )
}

export default React.memo(AllUsers)

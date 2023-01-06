import React, {useEffect, useState, useMemo} from 'react'
import { listTrabajadors } from '../../graphql/queries'
import {Amplify, API, graphqlOperation, Storage} from 'aws-amplify'
import {Expander, ExpanderItem, Badge,Table, TableHead, TableRow, TableCell, TableBody,  Autocomplete, TextField, ThemeProvider, useTheme, Heading, SelectField, Icon} from '@aws-amplify/ui-react';
import { Button, Card, Offcanvas } from 'react-bootstrap'
const SaveIcon = () => (
  <Icon
    ariaLabel=""
    pathData="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
  />
); 
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
  ocupado:false,
  subcontrato:false,   
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
    subcontrato: UserSelect?UserSelect.subcontrato:null,   
    perfil: UserSelect?UserSelect.perfil:null,  
    direccion:UserSelect?UserSelect.direccion:null,
    nss:UserSelect?UserSelect.nss:null,
    alergias: UserSelect?UserSelect.alergias:null,
    tipoSangre:UserSelect?UserSelect.tipoSangre:null,
    padeceEnfermedad: UserSelect?UserSelect.padeceEnfermedad:null,
    observaciones: UserSelect?UserSelect.observaciones:null } 



    async function onChange(e) {
      const file = e.target.files[0];
      try {
        await Storage.put(file.name, file, {
          contentType: "image/png", // contentType is optional
        });
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }


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
    <br />
    <br />
    <input type="file" onChange={onChange} />;
<Button variant='dark'  >Subir foto {' '}<SaveIcon/></Button>
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

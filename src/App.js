
//import './App.css';
import { ThemeProvider,withAuthenticator, Grid, Card,  Authenticator, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';


import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { NavbarCepoint } from './perfil/NavbarCepoint';
import { GreyBar } from './componentes/GreyBar';
import { WhiteBoard } from './componentes/WhiteBoard';
import { Button } from 'react-bootstrap';
//import Login from './Login';

import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom'
import { WhiteBoardUsers } from './componentes/WhiteBoardUsers';
import { WhiteBoardAsistencias } from './componentes/WhiteBoardAsistencias';
import { AllUsers } from './componentes/usuarios/AllUsers';
import {Ocupados} from './componentes/usuarios/Ocupados';
import {Desocupados} from  './componentes/usuarios/Desocupados';
import {Inactivos} from  './componentes/usuarios/Inactivos';
import { CrearUsuario} from  './componentes/usuarios/CrearUsuario';
Amplify.configure(awsExports);
function App() {
  const { tokens } = useTheme();
  const theme = {
    name: 'custom-theme',
    tokens: {
      components: {
    
        card: {
          backgroundColor: { value: '#FFC300' },
          outlined: {
            borderColor: { value: '{colors.black}' },
          },
        },
        text: {
          color: { value: '{colors.brand.primary[80]}' },
        },
      },
    },
  };

 



  return (
   
   <Authenticator  /* formFields={formFields} components={components} */>
    {({ signOut, user }) => (

      


  <main>
  
  

  <ThemeProvider theme={theme}>

  <Grid
  columnGap="1rem" /* rowGap="0.5rem" */ templateColumns="1fr 1fr 1fr 1fr 1fr 1fr" templateRows="1fr 10fr " >
   
  <NavbarCepoint props={signOut}/>
 
  <GreyBar/>
  <>
 
      <Routes>
      <Route path="/" element={<WhiteBoard props={user}/>} /> 
      <Route path="users" element={<WhiteBoardUsers/>} >
         <Route />
         <Route path="allUsers" element={<AllUsers/>}/> 
         <Route path="ocupados" element={<Ocupados/>}/> 
         <Route path="desocupados" element={<Desocupados/>}/> 
         <Route path="inactivos" element={<Inactivos/>} />
         <Route path="crearUsuario" element={<CrearUsuario/>} />
        </Route> 
      <Route path="asistencias" element={<WhiteBoardAsistencias/>}/> 
      </Routes>
  
  </>
 <Outlet/>
<Button onClick={signOut}>SALIR</Button>
</Grid>
</ThemeProvider>


</main>



      
    )}
  </Authenticator>
 

  );
}

export default withAuthenticator(App);

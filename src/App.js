
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

//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
   
   <Authenticator  /* formFields={formFields} components={components} */>
    {({ signOut, user }) => (

<main>
  
  

  <ThemeProvider theme={theme}>

  <Grid
  columnGap="1rem"
 // rowGap="0.5rem"
  templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
  templateRows="1fr 10fr "
>
  <NavbarCepoint props={signOut}/>

  <GreyBar/>

 <WhiteBoard props={user}/>
<Button onClick={signOut}>SALIR</Button>
</Grid>
</ThemeProvider>


</main>

      
    )}
  </Authenticator>
 

  );
}

export default withAuthenticator(App);

import 'bootstrap/dist/css/bootstrap.min.css';
import  { useEffect, useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap';
//import Noteslist from './components/notesList'
import Homescreen from './components/homescreen';


function App() {
  
  const noteslist = [{
    "status":"todo",
    "title":"todo",
  },{
    "status":"doing",
    "title":"doing",
  },{
    "status":"done",
    "title":"done",
  }] ;

  return (
    <Container>  
        <Homescreen 
          
        ></Homescreen>
      
    </Container>
  );
}

export default App

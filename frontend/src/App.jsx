import 'bootstrap/dist/css/bootstrap.min.css';
import  { useEffect, useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap';
import Noteslist from './components/notesList'


function App() {
  
  const noteslist = [{
    "id":1,
    "title":"todo",
  },{
    "id":2,
    "title":"doing",
  },{
    "id":3,
    "title":"done",
  }] ;

  return (
    <Container>  
      {noteslist.map((item)=>(
          <Noteslist key={item.index} id={item.id} title={item.title}></Noteslist> 
      ))}
    </Container>
  );
}

export default App

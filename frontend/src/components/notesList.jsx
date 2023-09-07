/*import { Card } from "react-bootstrap"
import  { useEffect, useState } from 'react'
import axios from 'axios'
//import Note from "./Note";
import Todo from "./todo";
import Doing from "./doing";
import Done from "./done";
import * as NotesApi from '../network/notes_api'

function NotesList(props) {

    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    useEffect(()=>{
        async function loadtodo(){
          try {
            const notes = await NotesApi.fetchnotes();
            setTodo(notes);
          } catch (error) {
            console.log(error);
          }
        }
        async function loaddoing(){
          axios.get("http://localhost:5003/api/notes/2")
            .then(notes => setDoing(notes.data))
            .catch(err => console.log(err))
        }
        async function loaddone(){
          axios.get("http://localhost:5003/api/notes/3")
            .then(notes => setDone(notes.data))
            .catch(err => console.log(err))
        }
        loadtodo();
        loaddoing();
        loaddone();
      },[])

    return(
    <Card>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Body>
            {todo.filter((notematch) => {
              return notematch.category==props.id;
            }).map((todo)=>(
              <Todo 
                title={todo.title} 
                text={todo.text} 
                key={todo._id}  >
              </Todo>
            ))}
           {doing.filter((notematch) => {
              return notematch.category==props.id;
            }).map((note)=>(
              <Doing 
                title={note.title} 
                text={note.text} 
                key={note._id}  >
              </Doing>
            ))}
            {done.filter((notematch) => {
              return notematch.category==props.id;
            }).map((note)=>(
              <Done 
                title={note.title} 
                text={note.text} 
                key={note._id}  >
              </Done>
            ))}
        </Card.Body>
    </Card>
    );
    
}

export default NotesList;*/
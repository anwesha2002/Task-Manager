import { Card, Row , Col, Button} from "react-bootstrap";
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from "./Note";
import { useState } from "react";
import axios from "axios";



const Board = ({notes, title, onplusclick,oneditclick }) => {

    const[note, setNotes] = useState([]);
    
    const onDeletenoteclick = async (id , note) =>{
        try {
            await axios.delete("http://localhost:5003/api/notes/"+id , {note })
             //.then(response=>{console.log(response.data);})
            setNotes(note.filter(existingnotes=>existingnotes.id !== id));
           // .then(note=>setNotes(note.filter(existingnotes=>existingnotes.id !== id)))
            
        } catch (error) {
            console.log(error);
        }
    }

    /*const oneditclick = async (id, note) =>{
        axios.put("http://localhost:5003/api/notes/"+id , {
            title : note.title,
            text : note.text,
            id : note.id
        })
    }*/


     return(
        <Card>
            <Card.Title className="mb-3">
                <Row>
                    <Col> {title}</Col>
                    <Col><Button onClick={onplusclick}><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon></Button></Col>
                </Row> 
            </Card.Title>
            <Card.Body>
                {notes.map(note=><Note oneditnoteclick={()=>{oneditclick(note._id, note)}} onDeletenoteclick={()=>{onDeletenoteclick(note._id, note)}} key={note._id} text={note.text} title={note.title}></Note>)}
            </Card.Body>
            
        </Card> 
        
        
    )
}

export default Board;
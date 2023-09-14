import { Card, Row , Col, Button} from "react-bootstrap";
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from "./Note";
import { useState } from "react";
import axios from "axios";


const Board = ({notes, title, ondelete,  onplusclick,oneditclick }) => {


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
                {notes.map(note=><Note oneditnoteclick={oneditclick} onDeletenoteclick={ondelete} key={note._id} note={note}></Note>)}
            </Card.Body>
            
        </Card> 
        
        
    )
}

export default Board;
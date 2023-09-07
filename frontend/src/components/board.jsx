import { Card, Row , Col, Button} from "react-bootstrap";
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from "./Note";
import { useState } from "react";


const Board = ({notes, title, onplusclick}) => {
    
     return(
        <Card>
            <Card.Title className="mb-3">
                <Row>
                    <Col> {title}</Col>
                    <Col><Button onClick={onplusclick}><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon></Button></Col>
                </Row> 
            </Card.Title>
            <Card.Body>
                {notes.map(note=><Note key={note._id} text={note.text} title={note.title}></Note>)}
            </Card.Body>
            
        </Card> 
        
        
    )
}

export default Board;
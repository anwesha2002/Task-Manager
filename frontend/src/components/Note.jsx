import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/note.module.css";
import {  Button, Card } from 'react-bootstrap';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Note( props ){
    return(
        <Card className={style.noteCard}>
            <Card.Body>
                <Card.Header>
                    <Button><FontAwesomeIcon onClick={()=>props.onDeletenoteclick(props.note)} icon={faTrashCan}></FontAwesomeIcon></Button>
                    <Button><FontAwesomeIcon onClick={()=>props.oneditnoteclick(props.note)}  icon={faPenToSquare}></FontAwesomeIcon></Button>
                </Card.Header>
                <Card.Title>
                    {props.note.title}
                </Card.Title>
                <Card.Text className={style.cardText}>
                    {props.note.text}
                </Card.Text>
            </Card.Body>
        </Card>
      
        
    );
}

export default Note;
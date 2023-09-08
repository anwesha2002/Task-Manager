import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/note.module.css";
import {  Button, Card } from 'react-bootstrap';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Note( props ){
    return(
        <Card className={style.noteCard}>
            <Card.Body>
                <Card.Header>
                    <Button><FontAwesomeIcon onClick={props.onDeletenoteclick} icon={faTrashCan}></FontAwesomeIcon></Button>
                    <Button><FontAwesomeIcon onClick={props.oneditnoteclick}  icon={faPenToSquare}></FontAwesomeIcon></Button>
                </Card.Header>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text className={style.cardText}>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
      
        
    );
}

export default Note;
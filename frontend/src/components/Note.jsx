import style from "../style/note.module.css";
import {  Card } from 'react-bootstrap';

function Note( props ){
    return(
        <Card className={style.noteCard}>
            <Card.Body>
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
import { Col, Row } from "react-bootstrap";
import Board from "./board";
//import axios from "axios";
import api from "../network/notes_api";
import { useEffect, useState } from "react";
import Addnotedialoge from "./addnotedialoge";

function Homepagebody(){

    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);

    const [shownotedialoge, setshownotedialoge] = useState(null);
    const[deletenote, setDetelenote] = useState(null);
    const [editnote, seteditnote] = useState(null);
    useEffect(() => {
        async function loadnote(){
            try {
                const task = (await api.get("/notes/")).data
                setTodo(task.todolist);
                setDoing(task.doinglist);
                setDone(task.donelist);
                console.log(JSON.stringify(task));
            } catch ({error}) {
                console.log(error);
            }
        }
        loadnote();
    },[])

    function onAddnew(status){
        setshownotedialoge(status);
    }

    function onDelete(note){
        setDetelenote(note);
    }

    function editNote( note){
        seteditnote(note);
    }

    function onNoteSave(note, status){
        console.log(JSON.stringify(note));
        if(status=="todo") setTodo([note,...todo]);
        else if(status=="doing") setDoing([note, ...doing]);
        else setDone([note, ...done]);
    }

    function onnoteedit(note){
        if(note.status=="todo")  setTodo(todo.map(existingnote => existingnote._id === note._id ? note : existingnote));
        
    }

    return(
        <div>
            <Row xs={1} md={2} xl={3} className="g-4">
                <Col><Board notes={todo} ondelete={onDelete} oneditclick={(note)=>editNote(note)} onplusclick={()=>onAddnew("todo")} title="Todo Task"></Board></Col>
                <Col><Board notes={doing} onplusclick={()=>onAddnew("doing")} title="Doing Task"></Board></Col>
                <Col><Board notes={done} onplusclick={()=>onAddnew("done")} title="Done Task"></Board></Col>
            </Row>
            {  
               shownotedialoge &&
               <Addnotedialoge
                    status = {shownotedialoge}
                    onDissmiss={()=>setshownotedialoge(null)}
                    onnotesaved={(note)=>{
                      onNoteSave(note, shownotedialoge),
                     setshownotedialoge(null)
                    }}
               ></Addnotedialoge>
            }
            {
                editnote && 
               <Addnotedialoge
                status={editnote.status}
                noteedit = {editnote}
                onDissmiss={()=>seteditnote(null)}
                onnotesaved={(updatednote)=>{
                    onnoteedit(updatednote),
                    seteditnote(null)
                }}
               ></Addnotedialoge>
           }
           
        </div>
    );
}

export default Homepagebody;
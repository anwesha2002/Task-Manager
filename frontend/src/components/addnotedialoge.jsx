import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import api from '../network/notes_api'



const Addnotedialoge = ( { noteedit, onDissmiss, onnotesaved , status}  ) => {
    console.log(JSON.stringify(noteedit))
    const { register, handleSubmit, formState: {errors,isSubmitting} } = useForm({
       defaultValues : {
           ...(noteedit && {title : noteedit.title}),
           ...(noteedit && {text : noteedit.text})
        }
    });
    
    async function onSubmit({ text, title} ){
        try {
            
            let taskresponse;
            if(noteedit){
                taskresponse = (await api.patch("/notes/"+noteedit._id, {
                    title,
                    text,
                    status
                })).data;
            }else{
              taskresponse = (await api.post("/notes", {
                title,
                text,
                status
            })).data;
        }
            
            console.log(JSON.stringify(taskresponse));
            onnotesaved(taskresponse);
        } catch ({error}) {
            console.log(error);
        }
    }

    return(
        <Modal show onHide={onDissmiss}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="addnoteform" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Title"
                        {...register("title")}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                        <Form.Control as="textarea" 
                        rows={5} 
                        placeholder="Text"
                        {...register("text")}
                        >
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <Button type="submit" form="addnoteform" disabled={isSubmitting}>Save</Button>    
            </Modal.Footer>
        </Modal>
    )

}

export default Addnotedialoge;
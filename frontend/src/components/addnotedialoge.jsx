import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form'


const Addnotedialoge = ( { onDissmiss, onnotesaved , status}  ) => {
    const { register, handleSubmit, formState: {errors,isSubmitting} } = useForm();
    

    async function onSubmit({text, title} ){
        try {
            console.log(title);
            console.log(text);
            console.log(status);

            const taskresponse = (await axios.post("http://localhost:5003/api/notes", {
                title,
                text,
                status
            })).data;
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
import React from 'react'
import {Button, Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const CommentForm = ({commentEditStatus, commentToEdit, onAdd, onUpdate}) => {
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');
    const [id, setId] = useState('');

    useEffect(
        () => {
            if (commentEditStatus) {fillForm(commentToEdit);}
        }, 
        [commentEditStatus, commentToEdit]
    );

    const onSubmit = (e) => {
        e.preventDefault();

        if(commentEditStatus) {
            onUpdate({id, content, user});
        } else {
            onAdd({user, content})
        }
        blankForm();
    }

    const fillForm = (commentToEdit) => {
        setContent(commentToEdit.content);
        setUser(commentToEdit.user);
        setId(commentToEdit.id);
    };

    const blankForm = () => {
        setContent('');
        setUser('');
    }

    return (
        <Form onSubmit={onSubmit} >
            <Form.Group className="mb-3" id="comment.user">
                <Form.Label>User</Form.Label>
                <Form.Control 
                    type="input" 
                    value={user} 
                    onChange={(e) => setUser(e.target.value)} 
                    required />
            </Form.Group>
            <Form.Group className="mb-3" id="comment.content">
                <Form.Label>Comment</Form.Label>
                <Form.Control 
                    as="textarea" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required />
            </Form.Group>
            <Form.Group className="text-end">
                {commentEditStatus 
                    ? <Button variant="warning" type="submit">Update Comment</Button>
                    : <Button variant="primary" type="submit">Add Comment</Button>
                }
            </Form.Group>
        </Form>
    )
};

export default CommentForm;
import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';

const Comment = ({comment, onDelete, onEdit}) => {
    return (
        <Card className="border border-primary m-2">
            <Card.Header>
                <h6>{comment.user}</h6>
            </Card.Header>
            <Card.Body>
                <p>{comment.content}</p>
            </Card.Body>
            <Card.Footer>
                <ButtonGroup className="p-1">
                    <Button 
                        variant="danger" 
                        className="m-1" 
                        type="button" 
                        onClick={() => onDelete(comment)}>
                        Delete
                    </Button>
                    <Button 
                        variant="warning" 
                        className="m-1" 
                        type="button" 
                        onClick={() => onEdit(comment)}>
                        Edit
                    </Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
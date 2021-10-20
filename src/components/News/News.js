import React from 'react';
import {Button, Card } from 'react-bootstrap';


const News = (props) => {
    const {title,description,urlToImage} = props.article;
    return (
        <div>
            <Card className="text-center d-flex-center">
                <Card.Header>News For Today</Card.Header>
                <Card.Img style={{width:'300px'}} variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default News;
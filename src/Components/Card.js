import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { card, image } from '../styles';

const Example = (props) => {
    console.log(props);
  return (
    <Card className={`${card}  m-10 p-3`}>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" className={`${image}`} />
        <CardBody>
            <CardTitle>{props.element.name}</CardTitle>
            <Button>Add to Cart</Button>
        </CardBody>
    </Card>
  );
};

export default Example;
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { card, image } from '../styles';
// import ProductImage from './Productimage';

const Example = (props) => {
    // const pic_id = props.element.relationships.main_image.data.id;
    // console.log(pic_id);
  return (
    <Card className={`${card}  m-10 p-3`}>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" className={`${image}`} />
        <CardBody>
            <CardTitle>{props.element.name}</CardTitle>
            <Button onClick={()=>props.addToCart(props.element.id, 0)}>Add to Cart</Button>
        </CardBody>
    </Card>
  );
};

export default Example;
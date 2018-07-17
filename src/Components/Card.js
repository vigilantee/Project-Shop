import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { card, image } from '../styles';
// import ProductImage from './Productimage';

const Example = (props) => {
    // const pic_id = props.element.relationships.main_image.data.id;
    // console.log(pic_id);
    console.log(props.element)
  return (
    <Card className={`${card}  m-10 p-3`}>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" className={`${image}`} />
        <CardBody>
            <CardTitle>{props.element.name}</CardTitle>
            <form onsubmit="myFunction()">
            <input type="text" pattern="[0-9]*" onChange={()=>props.updatecount}></input>
            <Button onClick={()=>props.addToCart(props.element.id, 1)}>Add to Cart</Button>
            <Button onClick={()=>props.removeFromCart(props.element.id, 1)}>Remove From Cart</Button>
            </form>
        </CardBody>
    </Card>
  );
};

export default Example;
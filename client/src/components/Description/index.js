import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const FoodImg = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Food Images</CardTitle>
          <CardText>This is where I will put the images.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const Description = (props) => {
  return(
    <div>
      <div>
        <p>Description for restaurant</p>
        <p>Insert number for catering here</p>
      </div>
    </div>
  )
}

export { FoodImg, Description };
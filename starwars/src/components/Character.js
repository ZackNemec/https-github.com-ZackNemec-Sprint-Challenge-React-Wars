// Write your Character component here
import React from "react";
import { Card, CardTitle, CardText, Container, Col, Row } from "reactstrap";

function Character(props) {
  return (
    <Container>
      <Row>
        {props.peopleArray.map((item) => {
          return (
            <Col xs="6" sm="4" md="3" lg="2">
              <Card key={item.height}>
                <CardTitle>{item.name}</CardTitle>
                <CardText>height: {item.height}</CardText>
                <CardText>Mass: {item.mass}</CardText>
                <CardText>Hair Color:{item.hair_color}</CardText>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Character;

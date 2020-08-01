// Write your Character component here
import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Col,
  Row,
} from "reactstrap";

function Characters(props) {
  return (
    <Container>
      <Row>
        {props.characterArray.map((e) => {
          return (
            <Col xs="6" sm="4" md="3" lg="2">
              <Card key={e.created}>
                <CardImg src={e.image}></CardImg>
                <CardTitle>{e.name}</CardTitle>
                <CardText>Gender: {e.gender}</CardText>
                <CardText>Status: {e.status}</CardText>
                <CardText>Species: {e.species}</CardText>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Characters;

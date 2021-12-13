import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { useGetCategoryByIdQuery } from "../services/productsApi";

export default function CategoryCard(props) {
  let { id } = useParams(); // get parameter of url
  const { data, isLoading, error } = useGetCategoryByIdQuery(id);

  if (isLoading) {
    return <p> Loading..</p>;
  }

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button as={Link} to={`/categories/${props.id}`} variant="primary">
          View Category
        </Button>
        Our category ID is : {id}
        Data returned from the server is: {JSON.stringify(data)}
      </Card.Body>
    </Card>
  );
}

import React from "react";
import { Card } from "react-bootstrap";

import SwipeableList from "@shared/SwipeableList";
import CardPlaceHolders from "@shared/CardPlaceHolders";
import Product from "@models/product";
/*
 *
 * @param {*} { categories, isLoading }
 * @return {*}
 */
function OffersProducts({
  offerProducts: { products = [] } = {},
  isLoading,
}: any) {
  return (
    <SwipeableList isLoading={isLoading}>
      <CardPlaceHolders classes="d-flex  flex-column flex-md-row">
        {products.map((product: Product) => {
          return (
            <Card
              style={{ minWidth: "18rem" }}
              key={product.name}
              className="m-md-3 my-3"
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/160/88/name.png"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardPlaceHolders>
    </SwipeableList>
  );
}

export default OffersProducts;

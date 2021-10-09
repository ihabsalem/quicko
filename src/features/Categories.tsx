import { Card } from "react-bootstrap";

import { Category } from "@models/store-home";

import SwipeableList from "@shared/SwipeableList";
import CardPlaceHolders from "@shared/CardPlaceHolders";
/**
 *
 *
 * @param {*} { categories, isLoading }
 * @return {*}
 */
function Categories({ categories, isLoading }: any) {
  return (
    <SwipeableList isLoading={isLoading}>
      <CardPlaceHolders classes="d-flex  flex-column flex-md-row">
        {categories.map((category: Category) => (
          <Card style={{ minWidth: "18rem" }} key={category.id} className="m-md-3 my-3">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/160/88/name.png"
            />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardPlaceHolders>
    </SwipeableList>
  );
}

export default Categories;

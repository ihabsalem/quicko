import React from "react";
import { Card } from "react-bootstrap";
import { StoreList, Store } from "@models/stores";
import CardPlaceHolders from "@shared/CardPlaceHolders";
/**
 *
 *
 * @param {*} { categories, isLoading }
 * @return {*}
 */
function StoresList({ storesList = [], isLoading }: any) {
  return (
    <div className={"w-100 " + (isLoading ? "" : "d-flex flex-column")}>
      <CardPlaceHolders
        classes={isLoading ? "d-flex flex-row px-md-3" : ""}
        isLoading={isLoading}
      >
        {storesList.map((storeList: StoreList) => (
          <div className="d-flex flex-column" key={storeList.name}>
            <h2 className=" mb-3"> {storeList.name}</h2>

            <div className="d-flex flex-column flex-md-row">
              {storeList.stores.map((store: Store) => (
                <div key={store.name}>
                  <Card
                    style={{ minWidth: "18rem", width: "18rem" }}
                    key={store.name}
                    className="m-md-3 my-3"
                  >
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/160/88/name.png"
                    />
                    <Card.Body>
                      <Card.Title>{store.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardPlaceHolders>
    </div>
  );
}

export default StoresList;

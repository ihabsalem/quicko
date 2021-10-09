import { Card } from "react-bootstrap";
import { BannerLogo } from "@models/store-home";
import CardPlaceHolders from "@shared/CardPlaceHolders";

/**
 * Render list of featurd products
 *
 * @param {*} { bannerLogos }
 * @return {*}
 */
function BannerLogos({ bannerLogos, isLoading }: any) {
  return (
    <CardPlaceHolders classes="d-flex" isLoading={isLoading}>
      <div className="d-flex flex-column flex-md-row">
        {bannerLogos.map((bannerLogo: BannerLogo) => (
          <Card
            style={{ minWidth: "18rem", width: "18rem" }}
            className="mx-md-3 my-3"
            key={bannerLogo.link}
          >
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/160/88/name.png"
            />
            <Card.Body>
              <Card.Title>{bannerLogo.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </CardPlaceHolders>
  );
}

export default BannerLogos;

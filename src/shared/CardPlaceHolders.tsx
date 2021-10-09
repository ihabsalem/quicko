import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";

/**
 * Render list of featurd products
 *
 * @param {*} { bannerLogos }
 * @return {*}
 */
function CardPlaceHolders({ isLoading, classes, children }: any) {
  return (
    <div className={classes}>
      {/* mimic loading state */}
      {[1, 2, 3, 4, 5].map((index) => (
        <ReactPlaceholder
          type="rect"
          ready={!isLoading}
          showLoadingAnimation
          className="px-5"
          key={index}
          style={{ width: "20%", height: "352px" }}
        >
          {index === 1 ? children : null}
        </ReactPlaceholder>
      ))}
    </div>
  );
}

export default CardPlaceHolders;

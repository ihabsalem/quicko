import React from "react";
import "react-placeholder/lib/reactPlaceholder.css";
/**
 * Add a Unified place for left/right swiping for long lists
 *
 * @param {*} { isLoading, children }
 * @return {*}
 */
function SwipeableList({ isLoading, children }: any) {
  return (
    <div
      className="{ isLoading ? '' : 'd-flex flex-wrap'}"
      style={{ overflowX: "auto" }}
    >
      {React.cloneElement(children, { isLoading })}
    </div>
  );
}

export default SwipeableList;

import React from "react";
import ContentLoader from "react-content-loader";

export const LoadingThisDayInfo = () => {
  return (
    <ContentLoader
      speed={2.5}
      width={750}
      height={300}
      viewBox="0 0 750 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="750" height="300" />
    </ContentLoader>
  );
};

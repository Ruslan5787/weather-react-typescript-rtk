import React from "react";
import ContentLoader from "react-content-loader";

export const LoadingThisDay = () => {
  return (
    <ContentLoader
      style={{ marginRight: 20 }}
      speed={2.5}
      width={400}
      height={300}
      viewBox="0 0 400 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="-1" rx="15" ry="15" width="400" height="300" />
    </ContentLoader>
  );
};

import React from "react";
import ContentLoader from "react-content-loader";

export const LoadingCard = () => {
  return (
    <ContentLoader
      speed={2.5}
      width={150}
      height={200}
      viewBox="0 0 150 200"
      backgroundColor="#f5f5f5"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="150" height="200" />
    </ContentLoader>
  );
};

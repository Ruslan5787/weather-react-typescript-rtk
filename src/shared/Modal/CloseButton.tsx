import React, { FC } from "react";

import { GlobalSvgSelector } from "../../images/GlobalSvgSelector";

interface CloseButtonProps {
  changeActiveFlagModal: () => void;
}

export const CloseButton: FC<CloseButtonProps> = (props) => {
  const { changeActiveFlagModal } = props;

  return (
    <button onClick={changeActiveFlagModal}>
      <GlobalSvgSelector id="close" />
    </button>
  );
};

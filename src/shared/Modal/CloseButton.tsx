import React, { FC } from "react";

import styles from "./Modal.module.scss";
import { GlobalSvgSelector } from "../../images/GlobalSvgSelector";

interface CloseButtonProps {
  changeActiveFlagModal: () => void;
}

export const CloseButton: FC<CloseButtonProps> = (props) => {
  const { changeActiveFlagModal } = props;

  return (
    <button className={styles.btn_close} onClick={changeActiveFlagModal}>
      <GlobalSvgSelector id="close" />
    </button>
  );
};

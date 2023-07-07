import * as React from "react";
import Modal from "@mui/material/Modal";
import * as S from "./style";
import {
  CloseBtn,
  HeaderTitle,
  ModalBoxHeader,
} from "components/CartModal/style";
import { CloseIcon } from "assets/images/svgIcons";
import FavoriteListItem from "./FavoriteListItem";

export default function BasicModal({ likeModal, handleLike, data }) {
  return (
    <Modal
      open={likeModal}
      onClose={handleLike}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.FavoriteBox>
        <ModalBoxHeader>
          <HeaderTitle>Like</HeaderTitle>
          <CloseBtn onClick={() => handleLike()}>
            <CloseIcon />
          </CloseBtn>
        </ModalBoxHeader>
        <S.FavoriteModalBody>
          {data.length &&
            data.map((el) => <FavoriteListItem key={el.id} favorite={el} />)}
        </S.FavoriteModalBody>
      </S.FavoriteBox>
    </Modal>
  );
}

import * as React from "react";
import Modal from "@mui/material/Modal";
import * as S from "./style.js"

export default function CatalogModal({ open, handleCatalog, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <S.CatalogWarpper>
          <S.CatalogBox>

          </S.CatalogBox>
        </S.CatalogWarpper>
      </Modal>
    </div>
  );
}

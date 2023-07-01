import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Colors, Flex } from "utils/index";
import { CloseIcon } from "assets/images/svgIcons";
import ProductListItems from "./ProductListItems";
import { adaptiveValue } from "utils/variable";

export default function CartModal({ cartModal, handleModal, data }) {
    console.log(data);
    return (
        <div>
            <Modal
                open={cartModal}
                onClose={handleModal}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <ModalBox>
                    <ModalBoxHeader>
                        <HeaderTitle>Корзина</HeaderTitle>
                        <CloseBtn onClick={handleModal}>
                            <CloseIcon />
                        </CloseBtn>
                    </ModalBoxHeader>
                    <ModalBoxBody>
                        <ProductList>
                            {data.map((el) => (
                                <ProductListItems key={el.id} product={el} />
                            ))}
                        </ProductList>
                    </ModalBoxBody>
                </ModalBox>
            </Modal>
        </div>
    );
}

const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${adaptiveValue("max-width", 816, 343)}
    width: 100%;
    height: 500px;
    overflow-y: auto;
    background-color: #fff;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const ModalBoxHeader = styled.div`
    ${Flex.spaceBetween}
    border-bottom: 1px solid ${Colors.borderColor};
    padding: 16px 40px;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1001;
    background-color: ${Colors.light};
`;

const HeaderTitle = styled.h2`
    color: ${Colors.dark};
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
`;

const ModalBoxBody = styled.div`
     padding: 16px 40px;
    height: 430px;
    display: ${({ isEmpty }) => (isEmpty ? "flex" : "block")};
    align-items: ${({ isEmpty }) => isEmpty && "center"};
    justify-content: ${({ isEmpty }) => isEmpty && "center"};
    position: static;
    z-index: -1002;
`;

const ProductList = styled.ul`
    ${Flex.spaceBetween}; 
    flex-direction: column;
    width: 100%;
    column-gap: 30px;
    row-gap: 30px;
`;

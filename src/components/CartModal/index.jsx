import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Colors, Flex } from "utils/index";
import { CloseIcon } from "assets/images/svgIcons";
import ProductListItems from "./ProductListItems";

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
    max-width: 836px;
    width: 100%;
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
`;

const HeaderTitle = styled.h2`
    color: ${Colors.dark};
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
`;

const ModalBoxBody = styled.div`
    padding: 16px 40px;
`;

const ProductList = styled.ul`
    ${Flex.spaceBetween};
    flex-direction: column;
    width: 100%;
    column-gap: 30px;
`;

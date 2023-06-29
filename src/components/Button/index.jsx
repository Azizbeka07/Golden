import React from "react";
import styled from "styled-components";
import { Colors } from "utils";
import { adaptiveValue } from "utils/variable";

const ButtonWrapper = styled.button`
    padding: 12px 37px;
    background-color: ${Colors.primaryColor};
    font-weight: 500;
    font-size: 16px;
    ${adaptiveValue("line-height", 26, 19)}
    color: ${Colors.light};
    border: none;
    cursor: pointer;
    border: 1px solid ${Colors.primaryColor};
    transition: 0.4s;

    &:hover {
        background-color: transparent;
        color: ${Colors.primaryColor};
    }
`;
const Button = ({ text }) => {
    return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;

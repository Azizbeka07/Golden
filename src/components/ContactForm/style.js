import styled from "styled-components";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const ContactFormWrapper = styled.section`
    width: 100%;
    background-color: ${Colors.secondaryColor};
    ${adaptiveValue("padding-block", 60, 32)}
`;
const FormContent = styled.div`
    max-width: 748px;
    ${Flex.center};
    flex-direction: column;
    ${adaptiveValue("row-gap", 24, 10)}
    text-align: center;
    margin: 0 auto;
`;

const FormContentText = styled.p`
    font-size: 16px;
    line-height: 26px;
    color: ${Colors.gray};
    max-width: 518px;
    width: 100%;
    text-align: center;
`;

const ContactForm = styled.form`
    width: 100%;
    ${Flex.spaceBetween}
    column-gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 24px;
    }
`;

const FormInput = styled.input`
    padding: 12px 16px;
    background: rgba(22, 28, 36, 0.04);
    font-size: 16px;
    line-height: 26px;
    color: ${Colors.gray};
    border: none;

    &:focus {
        outline: 1px solid ${Colors.primaryColor};
    }

    &.error {
        outline: 1px solid red;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FormRows = styled.div`
    position: relative;
    width: 100%;
    text-align: left;
`;

const SubmitBtn = styled.button`
    padding-block: 12px;
    padding-inline: 70px;
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

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export {
    ContactFormWrapper,
    FormContent,
    FormContentText,
    ContactForm,
    FormInput,
    SubmitBtn,
    FormRows,
};

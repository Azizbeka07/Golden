import { adaptiveValue } from "utils/variable";
import styled from "styled-components";
import { Colors } from "utils";

const ListItems = styled.li`
    width: 100%;
    background-color: ${Colors.light};
    overflow: hidden;
    max-height: 342px;
`;

const ListItemImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

const ListItemText = styled.p`
    font-weight: 400;
    ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 24)}
    text-align: center;
    color: ${Colors.dark};
    max-width: 288px;
    width: 100%;
`;

export { ListItems, ListItemImage, ListItemText };

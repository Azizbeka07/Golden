import styled from "styled-components";
import { Box } from "@mui/system";
import { Colors } from "utils";
import { adaptiveValue } from "utils/variable";

const CatalogWarpper = styled(Box)`
  position: relative;
  
`;

const CatalogBox = styled.div`
    ${adaptiveValue("width", 790, 343)}
    height: 444px;
    padding: 32px; 
    background: ${Colors.light};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
`;

export { CatalogWarpper, CatalogBox };

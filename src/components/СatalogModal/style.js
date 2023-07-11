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
  box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.10);
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, 26.5%);
`;

const Tabsimage = styled.img`
  max-width: 300px;
  width: 100%;
`;

export { CatalogWarpper, CatalogBox,Tabsimage };

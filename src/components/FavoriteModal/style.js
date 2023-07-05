import styled from "styled-components";
import { Box } from "@mui/system";
import { Colors } from "utils";

const FavoriteBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 836px;
  height: 500px;
  transform: translate(-50%, -50%);
  background-color: ${Colors.light};
  box-shadow: 24px;
`;

const FavoriteModalBody = styled.div`
  padding: 16px 40px;
`;

export { FavoriteBox, FavoriteModalBody };

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
   padding: 20px;
  width: 300px;
`;

export const ClientLink = styled(Link)`
  color: blue;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Title = styled.div`
  color: black;
  font-size: 50px;
  font-weight: normal;
  padding: 50px;
`;

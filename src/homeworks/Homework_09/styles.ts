import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Text = styled.p`
  font-size: 30px;
  color: black;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const ContainerJokes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 100%;
  height: 70px;
  background-color: rgb(84, 84, 247);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  font-family: "Lato", sans-serif;


  /* & const Button :hover
   background-color: rgb(86, 86, 236);
  box-shadow: 0px 0px 8px gray; */
`;

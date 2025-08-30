/* .button_component { */
  /* display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: o;
    height: 70px;
    width: 470px;
    background-color: blue;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
     */

     /* .button_component {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  background-color: #1f27f5;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
} */
import styled from "@emotion/styled";
export const ButtonComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 100%;
  height: 50px;
  background-color: rgb(84, 84, 247);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: "Lato", sans-serif;
  
  
 &:hover{
   background-color: rgb(86, 86, 236);
  box-shadow: 0px 0px 8px gray;
  }
`






// interface ButtonComponentProps {
//   $isRed: boolean;
// }

// const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
//   if (disabled) {
//     return "#acacacff";
//   } else {
//     if (isRed) {
//       return "#ff6868ff";
//     } else {
//       return "#1f27f5";
//     }
//   }
// };

// const generateButtonColorOnHover = (
//   isRed: boolean,
//   disabled: boolean | undefined
// ) => {
//   if (disabled) {
//     return "#acacacff";
//   } else {
//     if (isRed) {
//       return "#fc3333ff";
//     } else {
//       return "rgb(97, 102, 255)";
//     }
//   }
// };

// export const ButtonComponent = styled.button<ButtonComponentProps>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: none;
//   border: none;
//   padding: 0;
//   height: 70px;
//   width: 100%;
//   background-color: ${({ $isRed, disabled }) =>
//     generateButtonColor($isRed, disabled)};
//   color: #ffffff;
//   font-size: 20px;
//   font-weight: bold;
//   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

//   &:hover {
//     background-color: ${({ $isRed, disabled }) =>
//       generateButtonColorOnHover($isRed, disabled)};
//   }
// `;

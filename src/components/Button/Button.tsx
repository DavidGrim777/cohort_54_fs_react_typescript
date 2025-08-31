// import "./styles.css";

// import { type ButtonProps } from "./types";

// function Button({
//   type = "button",
//   name,
//   onClick = () => {},
//   children,
// }: ButtonProps) {
//   return (
//     <button className="button_component" onClick={onClick} type={type}>
//       {/* {name}                   //Показаны оба send + icon */}
//       {name}
//       {/* {children ? "" : name}   //Показан icon */}

//       {/* Улосвный рендеринг */}

//       {/* {children && name}          //если children true = send + icon / если children false = icon */}
//       {/* {!children && name} */}
//       {children}
//     </button>
//   );
// }

// export default Button;

import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  type = "button",
  name,
  onClick = () => {},
  children,
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      onClick={onClick}
      type={type}
    >
      {/* Улосвный рендеринг */}
      {!children && name}
      {children}
    </ButtonComponent>
  );
}

export default Button;

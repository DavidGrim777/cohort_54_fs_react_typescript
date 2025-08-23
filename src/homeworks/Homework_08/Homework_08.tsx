import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { PageWrapper, ElementControl } from "./styles";

function Homework_08() {
  return (
    <PageWrapper>
      <ElementControl>
        <Button name="Simple Button" />
      </ElementControl>
      <ElementControl>
        <Button isRed name="Delete Button" />
      </ElementControl>
      <ElementControl>
        <Button disabled name="Disabled Button" />
      </ElementControl>
      <ElementControl>
        <Input
          id="simple_input"
          name="simple"
          placeholder="Simple input element"
          label="Simple Input" value={""}        />
      </ElementControl>
      <ElementControl>
        <Input
          id="error_input"
          name="error"
          placeholder="Error input element"
          label="Error Input"
          error="Some Error" value={""}        />
      </ElementControl>
      <ElementControl>
        <Input
          id="disabled_input"
          name="disabled"
          placeholder="Disabled input element"
          label="Disabled Input"
          disabled value={""}        />
      </ElementControl>
    </PageWrapper>
  );
}

export default Homework_08;

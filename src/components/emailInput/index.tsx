import { AiOutlineMail } from "react-icons/ai";
import InputContainer from "./style";

const EmailInput = () => {
  return (
    <InputContainer>
      <input type="email" placeholder="Email" />
      <button type="button">
        <AiOutlineMail />
      </button>
    </InputContainer>
  );
};
export default EmailInput;

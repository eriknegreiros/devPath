import { AiOutlineMail } from "react-icons/ai";
import InputContainer from "./style";

const EmailInput = ({ register }) => {
  return (
    <InputContainer>
      <input type="email" placeholder="Email" {...register(`email`)} />
      <button type="button">
        <AiOutlineMail />
      </button>
    </InputContainer>
  );
};
export default EmailInput;
